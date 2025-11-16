import MenuList from '@/components/MenuList'

export default function MenuPage() {
  return (
    <div className="pt-24 pb-16 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-takumi-beige/30 via-white to-takumi-beige/20">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-takumi-red/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-48 h-48 bg-red-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Japanese-style header */}
        <div className="text-center mb-16 relative">
          {/* Decorative top element */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-takumi-red/40 to-transparent"></div>
            <div className="w-2 h-2 bg-takumi-red/40 rounded-full mx-auto mt-2"></div>
          </div>
          
          <h1 
            className="section-title mb-4"
            style={{ fontFamily: '"Protrakt Variable", sans-serif', fontWeight: 700 }}
          >
            Our Menu
          </h1>
          
          {/* Japanese-style divider */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-takumi-red/30"></div>
            <div className="w-2 h-2 bg-takumi-red/30 rounded-full"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-takumi-red/30"></div>
          </div>
          
          <p className="section-subtitle max-w-2xl mx-auto">
            Discover our authentic Asian flavors, crafted with precision and passion
          </p>
          
          {/* Decorative bottom element */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8">
            <div className="w-2 h-2 bg-takumi-red/40 rounded-full mx-auto mb-2"></div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-takumi-red/40 to-transparent"></div>
          </div>
        </div>
        
        <MenuList />
      </div>
    </div>
  )
}

