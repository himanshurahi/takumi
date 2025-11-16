import ChefSection from '@/components/ChefSection'

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="section-title">Our Story</h1>
          <p className="section-subtitle">
            Crafting authentic Asian flavors with passion and precision
          </p>
        </div>
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl font-heading font-bold text-takumi-black mb-6">
              Welcome to Takumi
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Takumi – Asian Kitchen is a celebration of authentic Asian cuisine, 
                where traditional flavors meet modern culinary artistry. Our name 
                "Takumi" means "artisan" or "master craftsman" in Japanese, and 
                that's exactly what we strive to be.
              </p>
              <p>
                Located in the heart of Sonipat, we bring you the finest selection 
                of Sushi, Fried Rice, Noodles, and Bao. Each dish is carefully 
                crafted using the freshest ingredients and time-honored techniques, 
                ensuring an authentic experience that transports you to the streets 
                of Asia.
              </p>
              <p>
                Our commitment to quality and authenticity is reflected in every 
                bite. From delicate sushi rolls to hearty noodle bowls, we invite 
                you to embark on a culinary journey that honors the rich traditions 
                of Asian cuisine.
              </p>
            </div>
          </div>
        </div>
        <ChefSection />
      </div>
    </div>
  )
}

