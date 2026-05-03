import React from 'react'
import Gallery from '../components/Gallery'

export default function GalleryPage(){
  return (
    <main>
      <section className="gallery-hero" style={{padding:'60px 0', background:'#f7fffaf0'}}>
        <div className="container">
          <h1>Gallery</h1>
          <p className="lead">Photos from our facility — happy pets, safe spaces, and caring staff.</p>
        </div>
      </section>
      <section className="container">
        <Gallery />
      </section>
    </main>
  )
}
