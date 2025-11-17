export default function ContactInfo() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="bg-white rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-gray-100/50 relative overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-takumi-red/10 to-transparent rounded-full blur-2xl" />
        
        <div className="relative z-10">
          <div className="mb-6 md:mb-8">
            <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-white/80 backdrop-blur-sm rounded-full mb-3 md:mb-4 border border-gray-200 shadow-sm">
              <span className="text-xs font-semibold text-takumi-red">Contact Information</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-takumi-black">
              Get in Touch
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mt-2">Visit us or give us a call</p>
          </div>
          
          <div className="space-y-6 md:space-y-8">
            <div className="group">
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-gradient-to-r hover:from-takumi-red/5 hover:to-red-500/5 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-takumi-red/20 to-red-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-takumi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-sm sm:text-base text-takumi-black mb-1 sm:mb-2">Address</h4>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    200-L, Near Sai Market Chowk,<br />
                    Model Town, Sonipat,<br />
                    Haryana 131001
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-gradient-to-r hover:from-takumi-red/5 hover:to-red-500/5 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-takumi-red/20 to-red-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-takumi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-sm sm:text-base text-takumi-black mb-1 sm:mb-2">Phone</h4>
                  <a href="tel:9996939329" className="text-base sm:text-lg font-semibold text-gray-700 hover:text-takumi-red transition-colors inline-flex items-center gap-2 break-all">
                    <span>9996939329</span>
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">Self Pickup Available</p>
                  <div className="mt-2 sm:mt-3 flex flex-wrap gap-2">
                    <a href="https://www.zomato.com" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm px-3 py-1.5 bg-gradient-to-r from-takumi-red/10 to-red-500/10 hover:from-takumi-red/20 hover:to-red-500/20 rounded-full text-takumi-red font-medium transition-all duration-300 border border-takumi-red/20">
                      Order on Zomato
                    </a>
                    <a href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm px-3 py-1.5 bg-gradient-to-r from-takumi-red/10 to-red-500/10 hover:from-takumi-red/20 hover:to-red-500/20 rounded-full text-takumi-red font-medium transition-all duration-300 border border-takumi-red/20">
                      Order on Swiggy
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-gradient-to-r hover:from-takumi-red/5 hover:to-red-500/5 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-takumi-red/20 to-red-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-takumi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-sm sm:text-base text-takumi-black mb-2 sm:mb-3">Opening Hours</h4>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 p-2 rounded-lg bg-gray-50/50">
                      <span className="text-xs sm:text-sm text-gray-600 font-medium">Monday</span>
                      <span className="text-xs sm:text-sm text-takumi-red font-semibold">Closed</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2 p-2 rounded-lg bg-gray-50/50">
                      <span className="text-xs sm:text-sm text-gray-600 font-medium">Tuesday - Sunday</span>
                      <span className="text-xs sm:text-sm text-takumi-black font-semibold">11:00 AM - 11:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Google Maps */}
      <div className="bg-white rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl border border-gray-100/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-takumi-red/10 to-transparent rounded-full blur-2xl" />
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h4 className="font-bold text-lg sm:text-xl text-takumi-black flex items-center gap-2">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-takumi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Find Us
            </h4>
            <a
              href="https://www.google.com/search?sca_esv=63c7fd65582f6674&sxsrf=AE3TifPiea_f_8liR0iQz1rYSCPzoA4yYQ:1763405257558&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EzW_c9j_3ZAQxwFTHXxfBjbQlp0ReMcrMUMG0GTislA015dnFOYE8Z5ahY24n_JXmfcgT58QYLjXDly7Wit9M5KCuWbNBCm3MXh96w3KUHd3XNXYkA%3D%3D&q=Takumi+-+Asian+kitchen+Reviews&sa=X&ved=2ahUKEwi68-K_7PmQAxWE7zgGHUgnJOYQ0bkNegQIHxAD&biw=1470&bih=758&dpr=2#lrd=0x390db1d2a7a786b7:0x1779295063f80040,3,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-takumi-red to-red-600 hover:from-takumi-red/90 hover:to-red-600/90 text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span className="hidden sm:inline">Write a Review</span>
              <span className="sm:hidden">Review</span>
            </a>
          </div>
          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.120391954244!2d77.02313037551374!3d28.98380327547476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db1d2a7a786b7%3A0x1779295063f80040!2sTakumi%20-%20Asian%20kitchen!5e0!3m2!1sen!2sin!4v1763347918937!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

