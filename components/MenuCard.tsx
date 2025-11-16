import Image from 'next/image'

interface MenuCardProps {
  name: string
  price: string
  description: string
  image: string
  category: string
}

export default function MenuCard({ name, price, description, image, category }: MenuCardProps) {
  return (
    <div className="group cursor-pointer relative">
      {/* Japanese-style card with elegant border */}
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-takumi-red/30 h-full flex flex-col">
        {/* Decorative top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-takumi-red/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
        
        {/* Image container with Japanese frame effect */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-takumi-beige/30 to-white">
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-takumi-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
          <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-takumi-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
          
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          
          {/* Category badge - Japanese style */}
          <div className="absolute top-4 right-4 z-20">
            <div className="relative">
              <div className="absolute inset-0 bg-takumi-red/20 blur-sm rounded-full"></div>
              <div className="relative bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full border border-takumi-red/30">
                <span className="text-xs font-bold text-takumi-red tracking-wider uppercase">{category}</span>
              </div>
            </div>
          </div>
          
          {/* Price badge - elegant Japanese style */}
          <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-lg shadow-xl border border-takumi-red/20">
              <span className="text-lg font-bold bg-gradient-to-r from-takumi-red to-red-600 bg-clip-text text-transparent">
                {price}
              </span>
            </div>
          </div>
        </div>
        
        {/* Content section */}
        <div className="p-6 flex-1 flex flex-col bg-white">
          {/* Title and Price */}
          <div className="mb-4">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="text-xl font-heading font-bold text-takumi-black group-hover:text-takumi-red transition-colors duration-300 flex-1">
                {name}
              </h3>
              <span className="text-2xl font-bold bg-gradient-to-r from-takumi-red to-red-600 bg-clip-text text-transparent whitespace-nowrap">
                {price}
              </span>
            </div>
            
            {/* Decorative divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-3"></div>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 group-hover:text-gray-700 transition-colors duration-300 line-clamp-3">
            {description}
          </p>
          
          {/* Japanese-style footer with decorative element */}
          <div className="mt-auto pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* Japanese star/chef icon */}
                <div className="relative">
                  <svg className="w-5 h-5 text-takumi-red" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Chef's Choice</span>
              </div>
              
              {/* Decorative arrow */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-takumi-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-takumi-red/0 to-red-500/0 group-hover:from-takumi-red/5 group-hover:to-red-500/5 transition-all duration-500 pointer-events-none -z-10"></div>
      </div>
    </div>
  )
}

