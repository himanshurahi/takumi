import MenuList from '@/components/MenuList'

export default function MenuPage() {
  return (
    <div className="pt-24 pb-16 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-takumi-beige/30 via-white to-takumi-beige/20">
      {/* Enhanced decorative background elements - more vibrant on mobile */}
      <div className="absolute top-20 right-0 w-64 h-64 md:w-64 md:h-64 bg-takumi-red/10 md:bg-takumi-red/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-0 w-48 h-48 md:w-48 md:h-48 bg-red-500/10 md:bg-red-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      {/* Mobile: Additional gradient orbs */}
      <div className="md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-takumi-red/8 to-red-500/8 rounded-full blur-3xl"></div>
      
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

