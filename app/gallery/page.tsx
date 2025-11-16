import GalleryGrid from '@/components/GalleryGrid'

export default function GalleryPage() {
  return (
    <div className="pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="section-title">Gallery</h1>
          <p className="section-subtitle">
            A glimpse into our culinary artistry and warm ambience
          </p>
        </div>
        <GalleryGrid />
      </div>
    </div>
  )
}

