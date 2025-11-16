export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100/50 relative overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-takumi-red/10 to-transparent rounded-full blur-2xl" />
        
        <div className="relative z-10">
          <div className="mb-8">
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-takumi-red/10 to-red-500/10 rounded-full mb-4 border border-takumi-red/20">
              <span className="text-xs font-semibold gradient-text">Contact Information</span>
            </div>
            <h3 className="text-3xl font-heading font-bold text-takumi-black">
              Get in Touch
            </h3>
            <p className="text-gray-600 mt-2">Visit us or give us a call</p>
          </div>
          
          <div className="space-y-8">
            <div className="group">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-takumi-red/5 hover:to-red-500/5 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-takumi-red/20 to-red-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-takumi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-takumi-black mb-2">Address</h4>
                  <p className="text-gray-700 leading-relaxed">
                    200L, Chowk, Near Sai Market<br />
                    Model Town, Sonipat<br />
                    Haryana 131001
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-takumi-red/5 hover:to-red-500/5 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-takumi-red/20 to-red-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-takumi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-takumi-black mb-2">Phone</h4>
                  <a href="tel:09996939329" className="text-lg font-semibold text-gray-700 hover:text-takumi-red transition-colors inline-flex items-center gap-2">
                    <span>099969 39329</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-takumi-red/5 hover:to-red-500/5 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-takumi-red/20 to-red-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-takumi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-takumi-black mb-3">Opening Hours</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 rounded-lg bg-gray-50/50">
                      <span className="text-gray-600 font-medium">Monday - Friday</span>
                      <span className="text-takumi-black font-semibold">11:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded-lg bg-gray-50/50">
                      <span className="text-gray-600 font-medium">Saturday - Sunday</span>
                      <span className="text-takumi-black font-semibold">12:00 PM - 11:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Placeholder */}
      <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-takumi-red/10 to-transparent rounded-full blur-2xl" />
        <div className="relative z-10">
          <h4 className="font-bold text-xl text-takumi-black mb-6 flex items-center gap-2">
            <svg className="w-6 h-6 text-takumi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Find Us
          </h4>
          <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden border-2 border-gray-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-500 font-medium">Map placeholder</p>
                <p className="text-gray-400 text-sm mt-1">Integrate Google Maps here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

