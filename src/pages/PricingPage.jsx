import React, { useState } from 'react'
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
        { '@type': 'ListItem', position: 2, name: 'Pricing', item: `${BASE}/pricing` }
      ]
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does dog boarding cost in Bangalore?', acceptedAnswer: { '@type': 'Answer', text: 'Dog boarding at Premium Pet Boarding in Bangalore starts at ₹650 per night for standard boarding and ₹850 per night for a premium private suite. Final pricing may vary based on breed size, special care needs, and duration of stay.' } },
        { '@type': 'Question', name: 'How much does dog daycare cost in Bangalore?', acceptedAnswer: { '@type': 'Answer', text: 'Dog daycare at Premium Pet Boarding costs ₹500 per full day. A half-day option is available — contact us for current rates.' } },
        { '@type': 'Question', name: 'Are there discounts for long-term boarding in Bangalore?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we offer discounted monthly and weekly packages for extended boarding stays. Contact us directly to discuss custom packages tailored to your needs.' } }
      ]
    },
    {
      '@type': 'PriceSpecification',
      name: 'Dog Boarding Standard — Premium Pet Boarding Bangalore',
      price: '650',
      priceCurrency: 'INR',
      eligibleQuantity: { '@type': 'QuantitativeValue', unitText: 'per night' }
    }
  ]
}

const plans = [
  {
    category: 'Dog Boarding',
    icon: '🐶',
    highlight: true,
    tiers: [
      {
        name: 'Standard Boarding',
        price: '₹650',
        unit: '/night',
        desc: 'Comfortable shared play area, nutritious meals as per your schedule, and daily activity updates.',
        features: [
          'Shared supervised play area',
          'Personalised feeding schedule',
          'Daily WhatsApp updates',
          '24/7 staff supervision',
          'Clean, sanitised kennels',
          'Vaccination check at entry'
        ]
      },
      {
        name: 'Premium Boarding',
        price: '₹850',
        unit: '/night',
        badge: 'Most Popular',
        desc: 'Private air-conditioned suite, extra dedicated play sessions, priority vet attention, and premium photo updates.',
        features: [
          'Private, air-conditioned suite',
          'Extra dedicated play sessions (3/day)',
          'Daily photo + video updates',
          '24/7 priority staff attention',
          'Premium bedding & enrichment toys',
          'Priority vet-on-call access'
        ]
      }
    ]
  },
  {
    category: 'Daycare',
    icon: '☀️',
    tiers: [
      {
        name: 'Full-Day Daycare',
        price: '₹500',
        unit: '/day',
        desc: 'Supervised all-day play, socialization, rest periods, and midday snacks from 7 am to 7 pm.',
        features: [
          '7 am – 7 pm supervised care',
          'Group play and socialisation',
          'Midday snack included',
          'Rest and nap time',
          'Temperament-assessed groups',
          'Flexible drop-off & pick-up'
        ]
      },
      {
        name: 'Half-Day Daycare',
        price: 'Contact us',
        unit: '',
        desc: 'Morning (7 am – 1 pm) or afternoon (1 pm – 7 pm) slot. Ideal for shorter schedules.',
        features: [
          'Choice of morning or afternoon slot',
          'Supervised play session',
          'Fresh water and snacks',
          'Brief activity report',
          'Suitable for puppies & seniors',
          'Subject to availability'
        ]
      }
    ]
  },
  {
    category: 'Grooming',
    icon: '✂️',
    note: '* Grooming prices vary by breed, coat type, and size. Contact us for an exact quote.',
    tiers: [
      {
        name: 'Basic Grooming',
        price: 'Contact us',
        unit: '',
        desc: 'Bath, blow-dry, brush-out, nail trimming, and ear cleaning.',
        features: [
          'Breed-appropriate bath',
          'Blow-dry and brush-out',
          'Nail trimming',
          'Ear cleaning',
          'Suitable for all sizes',
          'Appointment & walk-in'
        ]
      },
      {
        name: 'Full Grooming Package',
        price: 'Contact us',
        unit: '',
        badge: 'Recommended',
        desc: 'Everything in Basic plus haircut, breed styling, paw moisturising, and optional teeth brushing.',
        features: [
          'All Basic Grooming services',
          'Breed-specific haircut & styling',
          'Paw pad moisturising',
          'Bandana / bow finish',
          'Teeth brushing (add-on)',
          'De-shedding treatment (add-on)'
        ]
      }
    ]
  },
  {
    category: 'Pet Sitting & Dog Walking',
    icon: '🏠',
    note: '* Contact us for current rates and package pricing.',
    tiers: [
      {
        name: 'In-Home Pet Sitting',
        price: 'Contact us',
        unit: '',
        desc: 'Per-visit in-home care by a background-verified sitter. Feeding, play, medication, and photo report.',
        features: [
          'Background-verified sitters',
          'Feeding & fresh water',
          'Playtime & enrichment',
          'Medication administration',
          'Litter box cleaning (cats)',
          'Photo report every visit'
        ]
      },
      {
        name: 'Dog Walking',
        price: 'Contact us',
        unit: '',
        desc: 'GPS-tracked walks in your area — 20, 30, or 45-minute options, 7 days a week.',
        features: [
          '20 / 30 / 45-minute options',
          'GPS-tracked routes',
          'Post-walk photo report',
          '1-on-1 or small-group walks',
          'Available 7 days a week',
          'Morning, afternoon & evening slots'
        ]
      }
    ]
  }
]

const faqs = [
  { q: 'How much does dog boarding cost in Bangalore?', a: 'Standard dog boarding at Premium Pet Boarding starts at ₹650 per night. Premium private suite boarding is ₹850 per night. Pricing may vary based on dog size, special care requirements, and duration.' },
  { q: 'Are there any additional charges beyond the base price?', a: 'The base price covers accommodation, feeding, and standard care. Additional charges may apply for special medications, extra grooming during the stay, or holiday surcharges. We always inform you upfront.' },
  { q: 'Do you offer weekly or monthly boarding packages?', a: 'Yes. We offer discounted weekly and monthly rates for extended boarding stays. Contact us directly to discuss a custom package.' },
  { q: 'Is there a deposit required for booking?', a: 'We may require a small advance for holiday-period bookings to secure your slot. Walk-in and short-notice bookings are welcome subject to availability.' },
  { q: 'Do prices change during holidays like Diwali or Christmas?', a: 'Holiday-period surcharges may apply during peak seasons such as Diwali, Christmas, and New Year. We recommend booking early during these periods.' }
]

export default function PricingPage() {
  const [open, setOpen] = useState(null)

  return (
    <main>
      <Helmet>
        <title>Pet Boarding Prices in Bangalore | Transparent Pricing — Premium Pet Boarding</title>
        <meta name="description" content="Dog boarding from ₹650/night, daycare ₹500/day in Bangalore. Transparent pricing for dog boarding, daycare, grooming & pet sitting at Premium Pet Boarding — Uttarahalli, GT Layout." />
        <meta name="keywords" content="dog boarding price Bangalore, pet boarding cost Bangalore, dog daycare price Bangalore, dog boarding rates Uttarahalli, affordable pet boarding Bangalore, dog hotel price Bangalore, pet grooming price Bangalore" />
        <link rel="canonical" href={`${BASE}/pricing`} />
        <meta property="og:title" content="Pet Boarding Prices in Bangalore | Premium Pet Boarding" />
        <meta property="og:description" content="Dog boarding from ₹650/night, daycare ₹500/day. Transparent, honest pricing at Premium Pet Boarding, Bangalore." />
        <meta property="og:url" content={`${BASE}/pricing`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li aria-current="page">Pricing</li>
            </ol>
          </nav>
          <h1>Transparent Pet Care Pricing in Bangalore</h1>
          <p className="lead">
            No hidden charges. Honest, upfront pricing for dog boarding, daycare, grooming, pet sitting, and dog walking in Bangalore. Starting from <strong>₹500/day for daycare</strong> and <strong>₹650/night for boarding</strong>.
          </p>
          <p className="muted" style={{ fontSize: '14px', marginTop: '8px' }}>
            * All prices are starting rates. Final pricing may vary by breed size, special care needs, and duration. <Link to="/contact">Contact us</Link> for a custom quote.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container" style={{ padding: '60px 24px' }}>
        {plans.map((group) => (
          <div key={group.category} className="pricing-group" style={{ marginBottom: '60px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span aria-hidden="true">{group.icon}</span> {group.category}
            </h2>
            {group.note && <p className="muted" style={{ marginBottom: '24px', fontSize: '14px' }}>{group.note}</p>}
            <div className="pricing-grid">
              {group.tiers.map((tier, i) => (
                <div key={i} className={`plan ${group.highlight && tier.badge ? 'plan-featured' : ''}`}>
                  {tier.badge && <div className="plan-badge">{tier.badge}</div>}
                  <h3>{tier.name}</h3>
                  <div className="price">
                    {tier.price}<span className="price-unit">{tier.unit}</span>
                  </div>
                  <p style={{ marginBottom: '20px', fontSize: '14px', lineHeight: '1.6' }}>{tier.desc}</p>
                  <ul className="plan-features">
                    {tier.features.map((f, j) => (
                      <li key={j}><span aria-hidden="true">✓</span> {f}</li>
                    ))}
                  </ul>
                  <a className="btn btn-primary" href="#booking" style={{ marginTop: '20px', width: '100%', justifyContent: 'center' }}>Book Now</a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Value Props */}
      <section className="service-area-section" style={{ padding: '60px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Why Our Pricing Is Worth It</h2>
          <p className="muted" style={{ maxWidth: '680px', margin: '0 auto 40px' }}>
            You're not just paying for a place to keep your pet — you're paying for peace of mind, professional care, and a team that genuinely loves animals.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '24px' }}>
            {[
              { icon: '🏥', title: 'Vet-On-Call', desc: 'Emergency vet partnerships — your pet is never without medical backup.' },
              { icon: '📸', title: 'Daily Updates', desc: 'Photos and videos sent daily so you always know your pet is happy.' },
              { icon: '🔒', title: 'Insured & Bonded', desc: 'Fully insured facility with CCTV monitoring round the clock.' },
              { icon: '⭐', title: 'Google 4.9★', desc: 'Rated 4.9 on Google by real pet owners in Bangalore.' }
            ].map((v, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '14px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }} aria-hidden="true">{v.icon}</div>
                <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{v.title}</h3>
                <p className="muted" style={{ fontSize: '14px', margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="container" style={{ padding: '60px 24px' }}>
        <h2>Pricing FAQs</h2>
        <p className="muted" style={{ marginBottom: '32px' }}>Common questions about our rates and packages.</p>
        <div className="accordion">
          {faqs.map((f, i) => (
            <div key={i} className={`accordion-item ${open === i ? 'open' : ''}`}>
              <button className="accordion-toggle" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                <span>{f.q}</span>
                <span className="chev">{open === i ? '−' : '+'}</span>
              </button>
              <div className="accordion-content" aria-hidden={open !== i}>
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTAForm id="booking" />
    </main>
  )
}
