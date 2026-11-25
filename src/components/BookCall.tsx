import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Send, CheckCircle, Sparkles } from 'lucide-react'
import Button from './Button'
import Section from './Section'

interface FormData {
  fullName: string
  email: string
  companyName: string
  service: string
  budget: string
  preferredDate: string
  preferredTime: string
  timeZone: string
  projectDescription: string
  consent: boolean
}

const BookCall = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    companyName: '',
    service: '',
    budget: '',
    preferredDate: '',
    preferredTime: '',
    timeZone: '',
    projectDescription: '',
    consent: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [honeypot, setHoneypot] = useState('')

  const services = [
    'Software Development',
    'Web Development',
    'AI & Business Automation',
    'Cybersecurity & Penetration Testing',
    'Multiple Services',
    'Not Sure Yet'
  ]

  const budgets = [
    'Under $500',
    '$500–$1,000',
    '$1,000–$2,500',
    '$2,500–$5,000',
    '$5,000+',
    'Not Decided'
  ]

  const timeZones = [
    'UTC',
    'EST (Eastern Standard Time)',
    'PST (Pacific Standard Time)',
    'GMT (Greenwich Mean Time)',
    'CET (Central European Time)',
    'AEST (Australian Eastern Standard Time)',
    'GST (Gulf Standard Time)'
  ]

  const times = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM'
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const validateForm = (): boolean => {
    if (!formData.fullName.trim()) {
      console.error('Full name is required')
      return false
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      console.error('Valid email is required')
      return false
    }
    if (!formData.service) {
      console.error('Service selection is required')
      return false
    }
    if (!formData.preferredDate) {
      console.error('Preferred date is required')
      return false
    }
    if (!formData.preferredTime) {
      console.error('Preferred time is required')
      return false
    }
    if (!formData.timeZone) {
      console.error('Time zone selection is required')
      return false
    }
    if (!formData.projectDescription.trim()) {
      console.error('Project description is required')
      return false
    }
    if (!formData.consent) {
      console.error('Consent is required')
      return false
    }

    const selectedDate = new Date(formData.preferredDate)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (selectedDate < today) {
      console.error('Preferred date must be in the future')
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (honeypot) {
      console.log('Spam detected')
      return
    }

    if (!validateForm()) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Submit to Formspree
      const formBody = new URLSearchParams()
      formBody.append('name', formData.fullName)
      formBody.append('email', formData.email)
      formBody.append('company', formData.companyName || 'Not provided')
      formBody.append('service', formData.service)
      formBody.append('budget', formData.budget || 'Not specified')
      formBody.append('preferred_date', formData.preferredDate)
      formBody.append('preferred_time', formData.preferredTime)
      formBody.append('time_zone', formData.timeZone)
      formBody.append('message', formData.projectDescription)

      const response = await fetch('https://formspree.io/f/xdegpdza', {
        method: 'POST',
        body: formBody,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      const result = await response.json()

      if (result.ok) {
        setSubmitStatus('success')
        setFormData({
          fullName: '',
          email: '',
          companyName: '',
          service: '',
          budget: '',
          preferredDate: '',
          preferredTime: '',
          timeZone: '',
          projectDescription: '',
          consent: false
        })
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getMinDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  return (
    <Section id="book-call" className="bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-multicolor mb-4"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium tracking-wide">BOOK YOUR CONSULTATION</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-main mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Have a project in mind? Tell us what you're looking to build, automate, or secure. Let's discuss how we can help.
          </p>
        </motion.div>

        {submitStatus === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-multicolor-alt p-1 rounded-3xl shadow-2xl"
          >
            <div className="bg-background-card/95 backdrop-blur-sm rounded-3xl p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
              >
                <CheckCircle className="w-16 h-16 text-accent-primary mx-auto mb-6" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4">Consultation Request Received</h3>
              <p className="text-white mb-6">
                Thank you for your interest! Your consultation request has been received. Our team will contact you to confirm the meeting time.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button onClick={() => setSubmitStatus('idle')}>
                  Submit Another Request
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-multicolor p-1 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            {/* Animated background elements */}
            <motion.div
              className="absolute top-0 right-0 w-96 h-96 bg-accent-primary/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-96 h-96 bg-accent-secondary/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 2.5 }}
            />

            <form
              onSubmit={handleSubmit}
              className="bg-background-card/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl relative z-10"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <label className="block text-sm font-medium text-white mb-2">
                    Full Name <span className="text-accent-primary">*</span>
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-accent-primary/20 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-accent-primary transition-all"
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.45 }}
                >
                  <label className="block text-sm font-medium text-white mb-2">
                    Business Email <span className="text-accent-primary">*</span>
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-accent-primary/20 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-accent-primary transition-all"
                    placeholder="john@company.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <label className="block text-sm font-medium text-white mb-2">
                    Company Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-accent-primary/20 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-accent-primary transition-all"
                    placeholder="Your Company"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.55 }}
                >
                  <label className="block text-sm font-medium text-white mb-2">
                    Service Required <span className="text-accent-primary">*</span>
                  </label>
                  <motion.select
                    whileFocus={{ scale: 1.02 }}
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-accent-primary/20 rounded-lg text-black focus:outline-none focus:border-accent-primary transition-all"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </motion.select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.65 }}
                >
                  <label className="block text-sm font-medium text-white mb-2">
                    Project Budget
                  </label>
                  <motion.select
                    whileFocus={{ scale: 1.02 }}
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-accent-primary/20 rounded-lg text-black focus:outline-none focus:border-accent-primary transition-all"
                  >
                    <option value="">Select budget range</option>
                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </motion.select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <label className="block text-sm font-medium text-white mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Preferred Date <span className="text-accent-primary">*</span>
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={getMinDate()}
                    required
                    className="w-full px-4 py-3 bg-white border border-accent-primary/20 rounded-lg text-black focus:outline-none focus:border-accent-primary transition-all"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.75 }}
                >
                  <label className="block text-sm font-medium text-white mb-2">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Preferred Time <span className="text-accent-primary">*</span>
                  </label>
                  <motion.select
                    whileFocus={{ scale: 1.02 }}
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-accent-primary/20 rounded-lg text-black focus:outline-none focus:border-accent-primary transition-all"
                  >
                    <option value="">Select time</option>
                    {times.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </motion.select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="md:col-span-2"
                >
                  <label className="block text-sm font-medium text-white mb-2">
                    Time Zone <span className="text-accent-primary">*</span>
                  </label>
                  <motion.select
                    whileFocus={{ scale: 1.02 }}
                    name="timeZone"
                    value={formData.timeZone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-accent-primary/20 rounded-lg text-black focus:outline-none focus:border-accent-primary transition-all"
                  >
                    <option value="">Select time zone</option>
                    {timeZones.map((zone) => (
                      <option key={zone} value={zone}>
                        {zone}
                      </option>
                    ))}
                  </motion.select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.85 }}
                  className="md:col-span-2"
                >
                  <label className="block text-sm font-medium text-white mb-2">
                    Project Description <span className="text-accent-primary">*</span>
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-accent-primary/20 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-accent-primary transition-all resize-none"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="mb-6"
              >
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="mt-1 w-4 h-4 bg-background-secondary border-accent-primary/20 rounded focus:ring-accent-primary focus:ring-offset-background-card"
                  />
                  <span className="text-sm text-white">
                    I agree to the processing of my personal data for the purpose of scheduling a consultation. I understand that my information will be handled according to the privacy policy. <span className="text-accent-primary">*</span>
                  </span>
                </label>
              </motion.div>

              <input
                type="text"
                name="honeypot"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg backdrop-blur-sm"
                >
                  <p className="text-red-400 text-sm">
                    There was an error submitting the form. Please try again or contact us directly at contact@codefinial.tech
                  </p>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.95 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="w-full shadow-2xl shadow-accent-primary/30"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      <Send className="mr-2 w-5 h-5" />
                      Request a Free Consultation
                    </>
                  )}
                </Button>
              </motion.div>

              <p className="text-xs text-white/50 mt-4 text-center">
                Your consultation request has been received. Our team will contact you to confirm the meeting time.
              </p>
            </form>
          </motion.div>
        )}
      </motion.div>
    </Section>
  )
}

export default BookCall
