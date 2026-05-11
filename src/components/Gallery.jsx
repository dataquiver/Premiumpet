import React, {useState, useMemo} from 'react'

export default function Gallery(){
  const [lightbox, setLightbox] = useState(null)

  const IMAGES = useMemo(()=>{
    // Import optimized photos from src/Assets
    const modules = import.meta.glob('/src/Assets/*.webp', { eager: true })
    const imgs = Object.keys(modules).map(path => {
      const file = path.split('/').pop()
      const mod = modules[path]
      // module may be the exported value or an object with default
      const src = mod && typeof mod === 'object' && 'default' in mod ? mod.default : mod
      const alt = file.replace(/\.(webp|jpg|jpeg|png|svg)$/i, '').replace(/[-_]/g, ' ')
      return { src, alt, name: file }
    })
    // sort by filename for deterministic order
    imgs.sort((a,b)=> a.name.localeCompare(b.name))
    return imgs
  }, [])

  return (
    <section id="gallery" className="gallery container">
      <h2>Gallery</h2>
      <p className="muted">Moments from our facility — happy pets, clean spaces, and caring staff.</p>
      <div className="gallery-grid">
        {IMAGES.map((img, i) => (
          <button key={i} className="gallery-item" onClick={()=>setLightbox(i)} aria-label={`Open image ${i+1}`}>
            <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
          </button>
        ))}
      </div>

      {lightbox !== null && IMAGES[lightbox] && (
        <div className="lightbox" onClick={()=>setLightbox(null)} role="dialog" aria-modal="true">
          <img src={IMAGES[lightbox].src} alt={IMAGES[lightbox].alt} />
        </div>
      )}
    </section>
  )
}
