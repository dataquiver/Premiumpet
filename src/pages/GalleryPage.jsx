import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Gallery from '../components/Gallery'

const BASE = 'https://www.premiumpet.in'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Gallery', item: `${BASE}/gallery` }
      ]
    },
    {
      '@type': 'ImageGallery',
      name: 'Premium Pet Boarding Facility Gallery — Bangalore',
      description: 'Photos from Premium Pet Boarding\'s facility in Uttarahalli, Bangalore — happy pets, clean suites, play areas, and caring staff.',
      url: `${BASE}/gallery`,
      provider: { '@type': 'LocalBusiness', name: 'Premium Pet Boarding', url: BASE }
    }
  ]
}

export default function GalleryPage(){
  return (
    <main>
      <Helmet>
        <title>Pet Boarding Facility Gallery — Photos from Premium Pet Boarding Bangalore</title>
        <meta name="description" content="See inside Premium Pet Boarding's facility in Uttarahalli, Bangalore — photos of our boarding suites, play areas, grooming station, and happy pets. Safe, clean & loving care." />
        <meta name="keywords" content="dog boarding facility photos Bangalore, pet boarding gallery Bangalore, Premium Pet Boarding gallery, dog boarding images Bangalore, pet boarding facility Uttarahalli" />
        <link rel="canonical" href={`${BASE}/gallery`} />
        <meta property="og:title" content="Pet Boarding Facility Gallery | Premium Pet Boarding Bangalore" />
        <meta property="og:description" content="Photos from our dog boarding and pet care facility in Uttarahalli, Bangalore — happy pets, clean spaces, and caring staff." />
        <meta property="og:url" content={`${BASE}/gallery`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="page-hero">
        <div className="container">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li aria-current="page">Gallery</li>
            </ol>
          </nav>
          <h1>Our Facility — Photo Gallery</h1>
          <p className="lead">
            Take a look inside <strong>Premium Pet Boarding's facility in Uttarahalli, Bangalore</strong> — clean boarding suites, enclosed play areas, and genuinely happy pets. We believe in full transparency: what you see is what your pet gets.
          </p>
        </div>
      </section>

      <section className="container" style={{ padding: '40px 24px 60px' }}>
        <Gallery />
      </section>

      <section className="service-area-section" style={{ padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h2>Want to See the Facility in Person?</h2>
          <p className="muted" style={{ maxWidth: '540px', margin: '0 auto 28px' }}>
            We welcome facility tours before booking. Visit us at GT Layout, Uttarahalli, Bangalore, or call to arrange a convenient time.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn btn-primary" to="/contact">Book a Visit</Link>
            <a className="btn btn-outline" href="tel:+919738538159">Call +91 97385 38159</a>
          </div>
        </div>
      </section>
    </main>
  )
}
