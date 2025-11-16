import Image from 'next/image'

export default function ChefSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop"
              alt="Chef"
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-heading font-bold text-takumi-black mb-6">
              Meet Our Chef
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Our head chef brings over 15 years of experience in authentic 
                Asian cuisine, having trained in renowned kitchens across Japan, 
                Thailand, and China. With a deep respect for traditional techniques 
                and a passion for innovation, our chef ensures every dish tells 
                a story of culinary excellence.
              </p>
              <p>
                From delicate sushi preparation to the art of wok cooking, every 
                technique is executed with precision and care. We believe that 
                great food comes from great ingredients, which is why we source 
                only the freshest produce and highest quality proteins.
              </p>
              <p className="text-takumi-red font-medium">
                "Cooking is not just about feeding people—it's about creating 
                memories and sharing culture through every bite."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

