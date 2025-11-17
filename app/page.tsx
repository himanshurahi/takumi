import Hero from '@/components/Hero'
import MenuPreview from '@/components/MenuPreview'
import AboutPreview from '@/components/AboutPreview'
import ContactInfo from '@/components/ContactInfo'

export default function Home() {
  return (
    <>
      <Hero />
      <MenuPreview />
      <AboutPreview />
      <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-takumi-beige via-white to-takumi-beige relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-takumi-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-white/80 backdrop-blur-sm rounded-full mb-6 border border-gray-200 shadow-sm">
              <span className="text-sm font-semibold text-takumi-red">Get in Touch</span>
            </div>
            <h2 className="section-title">Contact Us</h2>
            <p className="section-subtitle">
              Visit us or reach out - we'd love to hear from you!
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  )
}

