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
        { '@type': 'ListItem', position: 2, name: 'Contact', item: `${BASE}/contact` }
      ]
    },
    {
      '@type': 'LocalBusiness',
      '@id': BASE,
      name: 'Premium Pet Boarding',
      url: BASE,
      telephone: '+919738538159',
      email: 'hello@premiumpet.in',
      image: `${BASE}/og-image.jpg`,
      description: 'Premium Pet Boarding — professional dog boarding, daycare, grooming, pet sitting and dog walking in Bangalore. Located in Uttarahalli, GT Layout.',
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
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '07:00', closes: '20:00' }
      ],
      priceRange: '₹₹',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, UPI, Bank Transfer',
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
      sameAs: ['https://www.google.com/maps/search/Premium+Pet+Boarding+Bangalore']
    },
    {
      '@type': 'ContactPage',
      name: 'Contact Premium Pet Boarding Bangalore',
      url: `${BASE}/contact`,
      description: 'Contact Premium Pet Boarding in Bangalore — phone, WhatsApp, email, and address. Located in Uttarahalli, GT Layout, South Bangalore.',
      mainEntity: { '@type': 'LocalBusiness', '@id': BASE }
    }
  ]
}

export default function ContactPage() {
  return (
    <main>
      <Helmet>
        <title>Contact Premium Pet Boarding Bangalore | Phone, WhatsApp & Address</title>
        <meta name="description" content="Contact Premium Pet Boarding in Bangalore — call or WhatsApp +91 97385 38159, visit us at GT Layout, Uttarahalli (560061), or use our booking form. Open 7 days, 7 am – 8 pm." />
        <meta name="keywords" content="Premium Pet Boarding contact, dog boarding Bangalore contact, pet boarding phone Bangalore, dog boarding Uttarahalli contact, pet care Bangalore address, dog boarding near me Bangalore" />
        <link rel="canonical" href={`${BASE}/contact`} />
        <meta property="og:title" content="Contact Premium Pet Boarding | Bangalore" />
        <meta property="og:description" content="Call, WhatsApp or visit us — Premium Pet Boarding, GT Layout, Uttarahalli, Bangalore 560061. Open 7 days." />
        <meta property="og:url" content={`${BASE}/contact`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li aria-current="page">Contact</li>
            </ol>
          </nav>
          <h1>Contact Us</h1>
          <p className="lead">
            Ready to book, have a question, or want to arrange a facility tour? We're happy to help. Reach us by phone, WhatsApp, or use the form below.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="container" style={{ padding: '60px 24px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '60px' }}>

          {/* Phone */}
          <div className="contact-card">
            <div className="contact-card-icon" aria-hidden="true">📞</div>
            <h2>Call Us</h2>
            <p className="muted">Speak directly with our team — open 7 days a week, 7 am to 8 pm.</p>
            <a className="btn btn-primary" href="tel:+919738538159">+91 97385 38159</a>
          </div>

          {/* WhatsApp */}
          <div className="contact-card">
            <div className="contact-card-icon" aria-hidden="true">💬</div>
            <h2>WhatsApp</h2>
            <p className="muted">Send us a message on WhatsApp — fastest way to book and ask questions. We reply within minutes.</p>
            <a className="btn btn-primary" href="https://wa.me/919738538159" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
          </div>

          {/* Email */}
          <div className="contact-card">
            <div className="contact-card-icon" aria-hidden="true">✉️</div>
            <h2>Email</h2>
            <p className="muted">For detailed enquiries, send us an email and we'll respond within a few hours.</p>
            <a className="btn btn-outline" href="mailto:hello@premiumpet.in">hello@premiumpet.in</a>
          </div>

          {/* Address */}
          <div className="contact-card">
            <div className="contact-card-icon" aria-hidden="true">📍</div>
            <h2>Visit Us</h2>
            <address style={{ fontStyle: 'normal', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '16px' }}>
              No. 59, Rajshekar Nilaya<br />
              Srinivas Colony, GT Layout<br />
              Uttarahalli, Bangalore – 560061<br />
              Karnataka, India
            </address>
            <a className="btn btn-outline" href="https://maps.google.com/?q=Premium+Pet+Boarding+Uttarahalli+Bangalore" target="_blank" rel="noreferrer">Get Directions</a>
          </div>
        </div>

        {/* Hours */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', maxWidth: '640px', marginBottom: '60px' }}>
          <h2 style={{ marginBottom: '20px' }}>Opening Hours</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
            <tbody>
              {[
                ['Monday – Friday', '7:00 AM – 8:00 PM'],
                ['Saturday', '7:00 AM – 8:00 PM'],
                ['Sunday', '7:00 AM – 8:00 PM'],
                ['Public Holidays', '7:00 AM – 8:00 PM']
              ].map(([day, hours]) => (
                <tr key={day} style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                  <td style={{ padding: '10px 0', fontWeight: 500, color: 'var(--dark-text)' }}>{day}</td>
                  <td style={{ padding: '10px 0', color: 'var(--primary-green)', fontWeight: 600, textAlign: 'right' }}>{hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="muted" style={{ fontSize: '13px', marginTop: '16px', marginBottom: 0 }}>
            * Boarding dogs can be dropped off and picked up during these hours. Emergency contact is available 24/7 for current boarders.
          </p>
        </div>

        {/* Service Areas */}
        <div style={{ marginBottom: '60px' }}>
          <h2>Areas We Serve in Bangalore</h2>
          <p className="muted" style={{ marginBottom: '20px' }}>We are based in <strong>Uttarahalli, GT Layout</strong> and provide pickup/drop-off and home visit services across South Bangalore.</p>
          <div className="area-tags">
            {['Uttarahalli', 'GT Layout', 'Banashankari', 'JP Nagar', 'Jayanagar', 'BTM Layout', 'Kanakapura Road', 'Padmanabhanagar', 'Puttenahalli', 'Hulimavu', 'Electronic City', 'Gottigere', 'Talaghattapura', 'Mysore Road'].map(a => (
              <span key={a} className="area-tag">{a}</span>
            ))}
          </div>
        </div>

        {/* Map embed placeholder */}
        <div style={{ borderRadius: '16px', overflow: 'hidden', height: '340px', background: '#e5e7eb', marginBottom: '60px', position: 'relative' }}>
          <iframe
            title="Premium Pet Boarding location map — Uttarahalli, Bangalore"
            src="https://maps.google.com/maps?q=Uttarahalli+GT+Layout+Bangalore+560061&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      <CTAForm id="booking" />
    </main>
  )
}
