import Link from 'next/link'
import MenuCard from './MenuCard'

const featuredItems = [
  {
    name: 'Dragon Roll',
    japaneseName: 'ドラゴンロール',
    price: '₹550',
    description: 'Eel, cucumber, avocado, topped with eel sauce and sesame seeds',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop',
    category: 'Sushi',
  },
  {
    name: 'Chicken Fried Rice',
    japaneseName: 'チキン炒飯',
    price: '₹280',
    description: 'Wok-tossed jasmine rice with tender chicken, vegetables, and soy sauce',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
    category: 'Fried Rice',
  },
  {
    name: 'Ramen Bowl',
    japaneseName: 'ラーメン',
    price: '₹380',
    description: 'Rich pork broth, ramen noodles, soft-boiled egg, and tender chashu',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop',
    category: 'Noodles',
  },
  {
    name: 'Pork Belly Bao',
    japaneseName: '豚バラ肉包',
    price: '₹180',
    description: 'Slow-braised pork belly in a fluffy steamed bun with hoisin sauce',
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop',
    category: 'Bao',
  },
]

export default function MenuPreview() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-white via-takumi-beige/30 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-takumi-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 bg-white/80 backdrop-blur-sm rounded-full mb-6 border border-gray-200 shadow-sm">
            <span className="text-sm font-semibold text-takumi-red">Our Specialties</span>
          </div>
          <h2 className="section-title">Featured Dishes</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A taste of our most beloved creations, crafted with passion and precision
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {featuredItems.map((item, index) => (
            <div key={item.name} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <MenuCard {...item} />
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/menu" className="btn-primary">
            <span>View Full Menu</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

