import Link from 'next/link'
import Image from 'next/image'

export default function AboutPreview() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-takumi-beige via-white to-takumi-beige relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-takumi-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-takumi-red/10 to-red-500/10 rounded-full mb-6 border border-takumi-red/20">
              <span className="text-sm font-semibold gradient-text">Our Journey</span>
            </div>
            <h2 className="section-title">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Takumi – Asian Kitchen is a celebration of authentic Asian cuisine, 
              where traditional flavors meet modern culinary artistry. Our name 
              "Takumi" means "artisan" or "master craftsman" in Japanese, and 
              that's exactly what we strive to be.
            </p>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              Located in the heart of Sonipat, we bring you the finest selection 
              of Sushi, Fried Rice, Noodles, and Bao. Each dish is carefully 
              crafted using the freshest ingredients and time-honored techniques.
            </p>
            <Link href="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
          
          <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-t from-takumi-red/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <Image
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop"
              alt="Chef preparing food"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
              <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-2xl">
                <p className="text-takumi-black font-bold">Master Chef at Work</p>
                <p className="text-gray-600 text-sm">Crafting authentic flavors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

