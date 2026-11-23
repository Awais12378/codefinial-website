import express from 'express'
import cors from 'cors'
import { Resend } from 'resend'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Initialize Resend if API key is provided
let resend = null
if (process.env.RESEND_API_KEY) {
  resend = new Resend(process.env.RESEND_API_KEY)
}

// Validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validate form data
const validateFormData = (data) => {
  const errors = []

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.push('Full name is required and must be at least 2 characters')
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Valid business email is required')
  }

  if (!data.service) {
    errors.push('Service selection is required')
  }

  if (!data.preferredDate) {
    errors.push('Preferred date is required')
  }

  if (!data.preferredTime) {
    errors.push('Preferred time is required')
  }

  if (!data.timeZone) {
    errors.push('Time zone selection is required')
  }

  if (!data.projectDescription || data.projectDescription.trim().length < 10) {
    errors.push('Project description is required and must be at least 10 characters')
  }

  if (!data.consent) {
    errors.push('Consent to data processing is required')
  }

  // Check if preferred date is in the future
  if (data.preferredDate) {
    const selectedDate = new Date(data.preferredDate)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (selectedDate < today) {
      errors.push('Preferred date must be in the future')
    }
  }

  return errors
}

// API endpoint for booking consultation
app.post('/api/book-consultation', async (req, res) => {
  try {
    const formData = req.body

    // Validate form data
    const validationErrors = validateFormData(formData)
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        errors: validationErrors
      })
    }

    // Check if Resend is configured
    if (!resend) {
      console.error('Resend API key not configured. Please set RESEND_API_KEY environment variable.')
      return res.status(500).json({
        success: false,
        error: 'Email service not configured. Please contact the administrator.'
      })
    }

    const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || 'contact@codefinial.com'
    const secondaryEmail = process.env.SECONDARY_NOTIFICATION_EMAIL || 'hello@codefinial.com'
    const emailFrom = process.env.EMAIL_FROM || 'hello@codefinial.com'

    if (!adminEmail) {
      console.error('ADMIN_NOTIFICATION_EMAIL not configured.')
      return res.status(500).json({
        success: false,
        error: 'Notification email not configured. Please contact the administrator.'
      })
    }

    // Send notification email to admin (both contact and hello)
    try {
      await resend.emails.send({
        from: emailFrom,
        to: [adminEmail, secondaryEmail],
        subject: `New Consultation Request - ${formData.fullName}`,
        html: `
          <h2>New Consultation Request</h2>
          <p><strong>Name:</strong> ${formData.fullName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Company:</strong> ${formData.companyName || 'Not provided'}</p>
          <p><strong>Website:</strong> ${formData.website || 'Not provided'}</p>
          <p><strong>Service Required:</strong> ${formData.service}</p>
          <p><strong>Budget:</strong> ${formData.budget || 'Not specified'}</p>
          <p><strong>Preferred Date:</strong> ${formData.preferredDate}</p>
          <p><strong>Preferred Time:</strong> ${formData.preferredTime} (${formData.timeZone})</p>
          <h3>Project Description:</h3>
          <p>${formData.projectDescription}</p>
        `
      })
    } catch (emailError) {
      console.error('Error sending admin notification email:', emailError)
      return res.status(500).json({
        success: false,
        error: 'Failed to send notification email. Please try again later.'
      })
    }

    // Send confirmation email to client
    try {
      await resend.emails.send({
        from: emailFrom,
        to: formData.email,
        subject: 'Consultation Request Received - Codefinial',
        html: `
          <h2>Thank You for Your Interest</h2>
          <p>Dear ${formData.fullName},</p>
          <p>We have received your consultation request. Our team will review your requirements and contact you shortly to confirm the meeting time.</p>
          <h3>Your Request Details:</h3>
          <p><strong>Service:</strong> ${formData.service}</p>
          <p><strong>Preferred Date:</strong> ${formData.preferredDate}</p>
          <p><strong>Preferred Time:</strong> ${formData.preferredTime} (${formData.timeZone})</p>
          <p>If you have any questions in the meantime, feel free to reply to this email.</p>
          <p>Best regards,<br>The Codefinial Team</p>
        `
      })
    } catch (emailError) {
      console.error('Error sending client confirmation email:', emailError)
      // Don't fail the request if client email fails, admin was notified
    }

    res.json({
      success: true,
      message: 'Consultation request submitted successfully'
    })
  } catch (error) {
    console.error('Error processing consultation request:', error)
    res.status(500).json({
      success: false,
      error: 'An unexpected error occurred. Please try again later.'
    })
  }
})

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    emailConfigured: !!resend,
    adminEmailConfigured: !!process.env.ADMIN_NOTIFICATION_EMAIL
  })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
  console.log(`Email service configured: ${!!resend}`)
  console.log(`Admin notification email configured: ${!!process.env.ADMIN_NOTIFICATION_EMAIL}`)
})
