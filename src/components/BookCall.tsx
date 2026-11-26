import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import Button from './Button'
import Section from './Section'

interface FormData {
  fullName: string
  email: string
  service: string
  message: string
}

const BookCall = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const services = [
    'Software Development',
    'Web Development',
    'AI & Business Automation',
    'Cybersecurity & Penetration Testing',
    'Assignment Writing',
    'University Projects',
    'Thesis Writing',
    'Final Year Projects'
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const formBody = new URLSearchParams()
      formBody.append('name', formData.fullName)
      formBody.append('email', formData.email)
      formBody.append('service', formData.service)
      formBody.append('message', formData.message)

      const response = await fetch('https://formspree.io/f/xdegpdza', {
        method: 'POST',
        body: formBody,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })

      if (!response.ok) throw new Error('Failed to submit form')

      const result = await response.json()
      if (result.ok) {
        setSubmitStatus('success')
        setFormData({ fullName: '', email: '', service: '', message: '' })
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

  return (
    <Section id="book-call" className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 mb-4"
            >
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-primary text-sm font-semibold tracking-wide">GET YOUR FREE QUOTE</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
              Get Your Free <span className="text-accent">Quote Today!</span>
            </h2>
            <p className="text-lg text-textSecondary mb-8">
              Have a project in mind? Tell us what you're looking to build, automate, or secure. Let's discuss how we can help.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <p className="text-textSecondary">Quick response within 24 hours</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <p className="text-textSecondary">Free consultation and project assessment</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <p className="text-textSecondary">No obligation, no pressure</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary rounded-2xl p-8 text-center"
              >
                <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Request Received</h3>
                <p className="text-white/80 mb-6">
                  Thank you for your interest! Our team will contact you shortly.
                </p>
                <Button onClick={() => setSubmitStatus('idle')} variant="primary">
                  Submit Another Request
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-offWhite rounded-2xl p-8 border border-lightGrey">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-textPrimary mb-2">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-lightGrey rounded-lg text-textPrimary placeholder-textSecondary focus:outline-none focus:border-primary transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-textPrimary mb-2">
                      Email Address <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-lightGrey rounded-lg text-textPrimary placeholder-textSecondary focus:outline-none focus:border-primary transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-textPrimary mb-2">
                      Service Required <span className="text-accent">*</span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-lightGrey rounded-lg text-textPrimary focus:outline-none focus:border-primary transition-all"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-textPrimary mb-2">
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-lightGrey rounded-lg text-textPrimary placeholder-textSecondary focus:outline-none focus:border-primary transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-600 text-sm">
                        There was an error submitting the form. Please try again.
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : (
                      <>
                        <Send className="mr-2 w-4 h-4" />
                        Submit Request
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default BookCall
