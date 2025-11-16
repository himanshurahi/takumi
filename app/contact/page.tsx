import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="section-title">Contact Us</h1>
          <p className="section-subtitle">
            We'd love to hear from you. Get in touch with us!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

