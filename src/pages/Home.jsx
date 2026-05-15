import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Trust from '../components/Trust'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Pricing from '../components/Pricing'
import CTAForm from '../components/CTAForm'
import FAQ from '../components/FAQ'
import BlogList from '../components/BlogList'
import Gallery from '../components/Gallery'

const BASE = 'https://www.premiumpet.in'

const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${BASE}/#website`,
      url: BASE,
      name: 'Premium Pet Boarding',
      description: 'Professional dog boarding, daycare, grooming, pet sitting and dog walking in Bangalore.',
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${BASE}/blog?q={search_term_string}` },
        'query-input': 'required name=search_term_string'
      }
    },
    {
      '@type': 'LocalBusiness',
      '@id': BASE,
      name: 'Premium Pet Boarding',
      url: BASE,
      telephone: '+919738538159',
      email: 'hello@premiumpet.in',
      description: 'Premium Pet Boarding — safe, loving, professional dog boarding, daycare, grooming, pet sitting and dog walking in Bangalore. Located in GT Layout, Uttarahalli, serving all of South Bangalore.',
      image: `${BASE}/og-image.jpg`,
      logo: `${BASE}/favicon.ico`,
      priceRange: '₹₹',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, UPI, Bank Transfer',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'No. 59, Rajshekar Nilaya, Srinivas Colony, GT Layout',
        addressLocality: 'Uttarahalli',
        addressRegion: 'Karnataka',
        postalCode: '560061',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '12.8890',
        longitude: '77.5523'
      },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '07:00', closes: '20:00' }
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '80',
        bestRating: '5'
      },
      review: [
        { '@type': 'Review', author: { '@type': 'Person', name: 'Sarah P.' }, reviewRating: { '@type': 'Rating', ratingValue: '5' }, reviewBody: 'They treated Luna like family — daily photos and updates put me at ease.' },
        { '@type': 'Review', author: { '@type': 'Person', name: 'Mark R.' }, reviewRating: { '@type': 'Rating', ratingValue: '5' }, reviewBody: 'Excellent staff and clean facility. Highly recommend for dog boarding in Bangalore.' }
      ],
      areaServed: [
        { '@type': 'City', name: 'Bangalore' },
        { '@type': 'Neighborhood', name: 'Uttarahalli' },
        { '@type': 'Neighborhood', name: 'GT Layout' },
        { '@type': 'Neighborhood', name: 'Banashankari' },
        { '@type': 'Neighborhood', name: 'JP Nagar' },
        { '@type': 'Neighborhood', name: 'Jayanagar' },
        { '@type': 'Neighborhood', name: 'BTM Layout' },
        { '@type': 'Neighborhood', name: 'Kanakapura Road' }
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Pet Care Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dog Boarding Bangalore' }, price: '650', priceCurrency: 'INR' },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dog Daycare Bangalore' }, price: '500', priceCurrency: 'INR' },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pet Grooming Bangalore' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pet Sitting Bangalore' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dog Walking Bangalore' } }
        ]
      }
    }
  ]
}

export default function Home(){
  return (
    <main>
      <Helmet>
        <title>Premium Pet Boarding Bangalore — Dog Boarding ₹650/night | Daycare ₹500/day | Grooming</title>
        <meta name="description" content="Trusted dog boarding (₹650/night), daycare (₹500/day), grooming, pet sitting & dog walking in Bangalore. 24/7 supervision, daily WhatsApp updates, vet-on-call. Serving Uttarahalli, JP Nagar, Banashankari & South Bangalore." />
        <meta name="keywords" content="dog boarding Bangalore, pet boarding Bangalore, dog daycare Bangalore, pet grooming Bangalore, dog boarding Uttarahalli, dog hotel Bangalore, pet sitting Bangalore, dog walking Bangalore, best dog boarding Bangalore, dog boarding near me Bangalore" />
        <link rel="canonical" href={BASE} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Premium Pet Boarding Bangalore — Dog Boarding, Daycare & Grooming" />
        <meta property="og:description" content="Safe, professional dog boarding (₹650/night), daycare (₹500/day), grooming & pet sitting in Bangalore. 24/7 care. Google 4.9★." />
        <meta property="og:url" content={BASE} />
        <meta property="og:site_name" content="Premium Pet Boarding" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Uttarahalli, Bangalore, Karnataka" />
        <meta name="geo.position" content="12.8890;77.5523" />
        <meta name="ICBM" content="12.8890, 77.5523" />
        <script type="application/ld+json">{JSON.stringify(homeSchema)}</script>
      </Helmet>

      {/* 1. HERO - Main value prop */}
      <Hero />

      {/* 2. SERVICES OVERVIEW - Detailed service descriptions with SEO keywords */}
      <Services />

      {/* 3. WHY CHOOSE US - Differentiators */}
      <WhyChooseUs />

      {/* 4. PRICING PREVIEW - Transparent pricing section */}
      <Pricing />

      {/* 5. TRUST - Social proof after core service/value content */}
      <Trust />

      {/* 6. GALLERY - Visual proof */}
      <Gallery />

      {/* 7. SEO-RICH CONTENT SECTION - Key benefits and features */}
      <section className="container" style={{ padding: '80px 24px', backgroundColor: '#f9f9f9', borderRadius: '20px', marginBottom: '60px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '12px' }}>Premium Pet Care Services in Bangalore</h2>
        <p className="muted" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px', fontSize: '16px' }}>
          Whether you need dog boarding for a weekend trip, daycare for your busy weekdays, professional grooming, pet sitting, or daily dog walking — Premium Pet Boarding provides complete pet care solutions with 24/7 supervision, daily updates, and vet-on-call support.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          {[
            { icon: '🏠', title: 'Dog Boarding Bangalore', desc: 'Safe, comfortable overnight boarding with 24/7 supervision, daily activities, and WhatsApp photo updates. From ₹650/night.' },
            { icon: '👥', title: 'Dog Daycare in Bangalore', desc: 'Social daycare with supervised play, training, and enrichment. From ₹500/day. Perfect for working pet parents.' },
            { icon: '✂️', title: 'Pet Grooming Services', desc: 'Professional grooming for all breeds with grooming bath, nail trimming, and styling. Stress-free experience for your pet.' },
            { icon: '🚶', title: 'Dog Walking Service', desc: 'Daily dog walks, exercise routines, and outdoor enrichment. Keep your pet active and healthy in Bangalore.' },
            { icon: '👁️', title: 'Pet Sitting at Home', desc: 'In-home pet sitting for your dog\'s comfort. Daily feeding, exercise, and companionship while you\'re away.' },
            { icon: '🏥', title: 'Vet Care & Emergency Support', desc: 'On-call veterinary support, medication administration, and emergency protocols for complete peace of mind.' }
          ].map((item, i) => (
            <div key={i} style={{ background: '#fff', padding: '28px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: '36px', marginBottom: '16px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '18px', marginBottom: '12px', color: 'var(--dark-text)' }}>{item.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--gray-text)', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link className="btn btn-primary" to="/services" style={{ marginRight: '12px', marginBottom: '12px' }}>View All Services</Link>
          <Link className="btn btn-outline" to="/pricing">Check Pricing</Link>
        </div>
      </section>

      {/* 8. LOCATION & SERVICE AREAS - Geo-targeting for SEO */}
      <section className="container" style={{ padding: '60px 24px', marginBottom: '60px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '12px' }}>Serving South Bangalore & Suburbs</h2>
        <p className="muted" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
          Based in Uttarahalli (GT Layout), we conveniently serve pet owners across South Bangalore. Serving JP Nagar, Banashankari, Jayanagar, BTM Layout, Kanakapura Road, Padmanabhanagar, Hulimavu, Electronic City, and nearby areas.
        </p>
        <div className="service-area-section">
          <div className="area-tags">
            {['Uttarahalli', 'GT Layout', 'JP Nagar', 'Banashankari', 'Jayanagar', 'BTM Layout', 'Kanakapura Road', 'Padmanabhanagar', 'Hulimavu', 'Electronic City'].map(area => (
              <span key={area} style={{ background: '#fff', border: '1px solid var(--gray-border)', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', color: 'var(--gray-text)', whiteSpace: 'nowrap' }}>
                {area}
              </span>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <p style={{ fontSize: '15px', color: 'var(--gray-text)', marginBottom: '16px' }}>
            Not sure if we service your area? Contact us today.
          </p>
          <Link className="btn btn-primary" to="/contact">Get In Touch</Link>
        </div>
      </section>

      {/* 9. BOOKING FORM - Primary CTA */}
      <CTAForm id="booking" />

      {/* 10. FAQ - User intent matching */}
      <FAQ />

      {/* 11. BLOG & RESOURCES - Content marketing & SEO */}
      <BlogList />

      {/* 12. TRUST BADGES & FINAL CTA */}
      <section className="container" style={{ padding: '60px 24px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(31,107,78,0.08), rgba(212,175,55,0.08))', borderRadius: '20px', marginTop: '60px' }}>
        <h2 style={{ marginBottom: '20px' }}>Ready to Give Your Pet the Best Care?</h2>
        <p style={{ maxWidth: '640px', margin: '0 auto 32px', color: 'var(--gray-text)', fontSize: '16px' }}>
          Join 200+ happy pet parents in Bangalore who trust Premium Pet Boarding with their furry family members. Book a consultation or start a boarding plan today.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a className="btn btn-primary" href="https://wa.me/919738538159?text=Hi%20Premium%20Pet%20Boarding%2C%20I%27m%20interested%20in%20booking%20a%20consultation." target="_blank" rel="noreferrer">WhatsApp Us Now</a>
          <a className="btn btn-outline" href="tel:+919738538159">Call: +91 97385 38159</a>
        </div>
      </section>
    </main>
  )
}
