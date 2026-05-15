import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import CTAForm from '../components/CTAForm'

const BASE = 'https://www.premiumpet.in'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'About Us', item: `${BASE}/about` }
      ]
    },
    {
      '@type': 'AboutPage',
      name: 'About Premium Pet Boarding — Bangalore\'s Trusted Pet Care Facility',
      url: `${BASE}/about`,
      description: 'Premium Pet Boarding is Bangalore\'s trusted pet care facility in Uttarahalli, GT Layout. Professional dog boarding, daycare, grooming and pet sitting with 24/7 supervision.',
      mainEntity: {
        '@type': 'LocalBusiness',
        '@id': BASE,
        name: 'Premium Pet Boarding',
        url: BASE,
        telephone: '+919738538159',
        description: 'Premium Pet Boarding provides professional dog boarding, daycare, grooming, pet sitting and dog walking in Bangalore. Located at Uttarahalli, GT Layout, we serve all of South Bangalore.',
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
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '80',
          bestRating: '5',
          worstRating: '1'
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Pet Care Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dog Boarding', description: 'Overnight dog boarding in Bangalore from ₹650/night' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dog Daycare', description: 'Full-day dog daycare in Bangalore at ₹500/day' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pet Grooming', description: 'Professional pet grooming for all breeds in Bangalore' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pet Sitting', description: 'In-home pet sitting by verified sitters in Bangalore' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dog Walking', description: 'GPS-tracked dog walking in Bangalore, 7 days a week' } }
          ]
        }
      }
    }
  ]
}

const whyPoints = [
  {
    icon: '🕐',
    title: '24/7 On-Site Staff',
    desc: 'Unlike many facilities that leave pets unattended overnight, our staff is physically present round the clock — 365 days a year. Your pet is never alone, day or night.'
  },
  {
    icon: '🏥',
    title: 'Vet-On-Call Partnership',
    desc: 'We maintain active partnerships with local veterinary clinics in Bangalore. Any medical concern — at any hour — is handled immediately with professional care.'
  },
  {
    icon: '📸',
    title: 'Daily Photo & Video Updates',
    desc: 'Every boarding dog and daycare guest receives daily WhatsApp photo and video updates. You can see exactly how your pet is doing, wherever you are in the world.'
  },
  {
    icon: '🔒',
    title: 'Safe, Secure Facility',
    desc: 'Our premises in Uttarahalli are CCTV-monitored, fully enclosed, and sanitised daily with pet-safe disinfectants. Separate zones for small and large breeds prevent unwanted interactions.'
  },
  {
    icon: '💉',
    title: 'Vaccination Verified',
    desc: 'Every dog that enters our facility has verified, up-to-date vaccinations. This protects all pets in our care and gives you confidence that your pet is in a safe, healthy environment.'
  },
  {
    icon: '🍽️',
    title: 'Personalised Care Plans',
    desc: 'We follow your pet\'s individual feeding schedule, dietary restrictions, and medication requirements precisely. There is no one-size-fits-all approach here — each pet gets individual attention.'
  },
  {
    icon: '⭐',
    title: 'Rated 4.9 on Google',
    desc: 'Our 4.9-star Google rating — built over hundreds of reviews from Bangalore pet owners — reflects our consistent commitment to quality care and transparent communication.'
  },
  {
    icon: '🤝',
    title: 'Insured & Professional',
    desc: 'We operate as a professional, insured pet care business. You can trust that your pet is covered and that we take our responsibility to your animal seriously.'
  }
]

const team = [
  { name: 'The Care Team', role: 'Professional Pet Caregivers', desc: 'Our team of trained, experienced pet caregivers are passionate animal lovers who treat every pet as their own. All staff undergo hands-on training before working with any boarding or daycare animals.' },
  { name: 'Grooming Specialists', role: 'Certified Groomers', desc: 'Our groomers are experienced with all breeds from small companions to large working dogs, using breed-appropriate techniques, tools, and products.' },
  { name: 'Pet Sitters & Walkers', role: 'Background-Verified Professionals', desc: 'Every pet sitter and dog walker is background-verified, ID-checked, and assessed before being assigned to any client home. Your pet\'s safety is our priority.' }
]

export default function AboutPage() {
  return (
    <main>
      <Helmet>
        <title>About Premium Pet Boarding Bangalore | Trusted Pet Care in Uttarahalli</title>
        <meta name="description" content="Learn about Premium Pet Boarding — Bangalore's trusted pet care facility in Uttarahalli, GT Layout. 24/7 supervision, vet-on-call, Google 4.9★ rating. Dog boarding, daycare, grooming & more." />
        <meta name="keywords" content="Premium Pet Boarding about, trusted dog boarding Bangalore, best pet boarding Bangalore, pet care Uttarahalli, professional dog boarding South Bangalore, who is Premium Pet Boarding, pet boarding Bangalore reviews" />
        <link rel="canonical" href={`${BASE}/about`} />
        <meta property="og:title" content="About Premium Pet Boarding | Trusted Pet Care in Bangalore" />
        <meta property="og:description" content="Bangalore's trusted pet care team — 24/7 care, vet-on-call, 4.9★ Google rating. Located in Uttarahalli, GT Layout." />
        <meta property="og:url" content={`${BASE}/about`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li aria-current="page">About Us</li>
            </ol>
          </nav>
          <h1>About Premium Pet Boarding</h1>
          <p className="lead">
            We are Bangalore's trusted pet care team — a group of passionate, trained animal lovers providing professional dog boarding, daycare, grooming, pet sitting, and dog walking from our facility in <strong>Uttarahalli, GT Layout, South Bangalore</strong>.
          </p>
          <div className="hero-trust" style={{ marginTop: '20px' }}>
            <span>⭐ Google 4.9★</span>
            <span>✅ Insured & Bonded</span>
            <span>✅ 24/7 On-Site Staff</span>
            <span>✅ Vet-On-Call</span>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container" style={{ padding: '60px 24px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
          <div>
            <h2>Our Story</h2>
            <p>
              Premium Pet Boarding was founded by a team of passionate pet lovers in Bangalore who believed that pets deserve more than just a kennel to sleep in while their owners are away. We saw a clear need for a professional, transparent, and genuinely caring pet boarding service in South Bangalore — and we built exactly that.
            </p>
            <p>
              Our facility in <strong>GT Layout, Uttarahalli</strong> was designed with pets in mind: clean and well-ventilated boarding suites, safe enclosed play areas, and a calm, stress-reducing environment. Every decision — from the daily update system to our vaccination requirements — is made with your pet's wellbeing as the priority.
            </p>
            <p>
              Today, we serve hundreds of pet owners across Bangalore, including <strong>Banashankari, JP Nagar, Jayanagar, BTM Layout, Kanakapura Road</strong>, and beyond. Our 4.9-star Google rating reflects the trust that Bangalore's pet owners have placed in us.
            </p>
          </div>
          <div style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.12), rgba(31,107,78,0.08))', borderRadius: '20px', padding: '40px', textAlign: 'center' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {[
                { num: '4.9★', label: 'Google Rating' },
                { num: '500+', label: 'Happy Pets Served' },
                { num: '24/7', label: 'On-Site Supervision' },
                { num: '5+', label: 'Years in Bangalore' }
              ].map(s => (
                <div key={s.label} style={{ background: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
                  <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--primary-green)', fontFamily: 'Poppins, sans-serif' }}>{s.num}</div>
                  <div style={{ fontSize: '13px', color: 'var(--gray-text)', marginTop: '4px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="service-area-section" style={{ padding: '60px 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '12px' }}>Why Pet Owners in Bangalore Choose Us</h2>
          <p className="muted" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px' }}>
            Eight reasons Premium Pet Boarding is the first choice for dog boarding and pet care across South Bangalore.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {whyPoints.map((w, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '14px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }} aria-hidden="true">{w.icon}</div>
                <h3 style={{ fontSize: '17px', marginBottom: '8px' }}>{w.title}</h3>
                <p className="muted" style={{ fontSize: '14px', margin: 0, lineHeight: '1.7' }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container" style={{ padding: '60px 24px' }}>
        <h2>Our Team</h2>
        <p className="muted" style={{ marginBottom: '36px', maxWidth: '640px' }}>
          Every member of the Premium Pet Boarding team is selected for their love of animals, professional training, and commitment to responsible care.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {team.map((m, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '14px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>{m.name}</h3>
              <p style={{ fontSize: '13px', color: 'var(--primary-green)', fontWeight: 600, marginBottom: '12px' }}>{m.role}</p>
              <p className="muted" style={{ fontSize: '14px', margin: 0, lineHeight: '1.7' }}>{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Location */}
      <section className="service-area-section" style={{ padding: '60px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Located in the Heart of South Bangalore</h2>
          <p className="muted" style={{ maxWidth: '640px', margin: '0 auto 12px' }}>
            Our facility is conveniently located at <strong>No. 59, Rajshekar Nilaya, Srinivas Colony, GT Layout, Uttarahalli, Bangalore – 560061</strong>. Easily reachable from JP Nagar, Banashankari, Jayanagar, BTM Layout, and Kanakapura Road.
          </p>
          <p className="muted" style={{ maxWidth: '640px', margin: '0 auto 28px', fontSize: '14px' }}>
            📞 <a href="tel:+919738538159" style={{ color: 'var(--primary-green)', fontWeight: 600 }}>+91 97385 38159</a> &nbsp;|&nbsp; 💬 <a href="https://wa.me/919738538159" target="_blank" rel="noreferrer" style={{ color: 'var(--primary-green)', fontWeight: 600 }}>WhatsApp Us</a>
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn btn-primary" to="/contact">Get in Touch</Link>
            <Link className="btn btn-outline" to="/services">Our Services</Link>
          </div>
        </div>
      </section>

      <CTAForm id="booking" />
    </main>
  )
}
