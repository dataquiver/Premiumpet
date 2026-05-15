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
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/services` }
      ]
    },
    {
      '@type': 'ItemList',
      name: 'Pet Care Services — Premium Pet Boarding Bangalore',
      description: 'Professional dog boarding, daycare, grooming, pet sitting and dog walking in Bangalore.',
      itemListElement: [
        { '@type': 'ListItem', position: 1, item: { '@type': 'Service', name: 'Dog Boarding Bangalore', description: 'Safe overnight dog boarding in Uttarahalli, Bangalore with 24/7 supervision, personalised feeding, and daily photo updates.', provider: { '@type': 'LocalBusiness', name: 'Premium Pet Boarding' }, areaServed: [{ '@type': 'City', name: 'Bangalore' }], offers: { '@type': 'Offer', price: '650', priceCurrency: 'INR', priceSpecification: { '@type': 'UnitPriceSpecification', price: '650', priceCurrency: 'INR', unitText: 'per night' } } } },
        { '@type': 'ListItem', position: 2, item: { '@type': 'Service', name: 'Dog Daycare Bangalore', description: 'Full-day supervised dog daycare in Bangalore with group play, socialisation and rest periods.', provider: { '@type': 'LocalBusiness', name: 'Premium Pet Boarding' }, areaServed: [{ '@type': 'City', name: 'Bangalore' }], offers: { '@type': 'Offer', price: '500', priceCurrency: 'INR', priceSpecification: { '@type': 'UnitPriceSpecification', price: '500', priceCurrency: 'INR', unitText: 'per day' } } } },
        { '@type': 'ListItem', position: 3, item: { '@type': 'Service', name: 'Pet Grooming Bangalore', description: 'Full-service dog grooming in Bangalore — bath, blow-dry, haircut, nail trimming, ear cleaning.', provider: { '@type': 'LocalBusiness', name: 'Premium Pet Boarding' }, areaServed: [{ '@type': 'City', name: 'Bangalore' }] } },
        { '@type': 'ListItem', position: 4, item: { '@type': 'Service', name: 'Pet Sitting Bangalore', description: 'In-home pet sitting in Bangalore by background-verified sitters. Feeding, playtime and photo updates.', provider: { '@type': 'LocalBusiness', name: 'Premium Pet Boarding' }, areaServed: [{ '@type': 'City', name: 'Bangalore' }] } },
        { '@type': 'ListItem', position: 5, item: { '@type': 'Service', name: 'Dog Walking Bangalore', description: 'Professional dog walking in Bangalore — GPS-tracked walks from 20 to 45 minutes, 7 days a week.', provider: { '@type': 'LocalBusiness', name: 'Premium Pet Boarding' }, areaServed: [{ '@type': 'City', name: 'Bangalore' }] } }
      ]
    }
  ]
}

const services = [
  {
    id: 'dog-boarding',
    icon: '🐶',
    title: 'Dog Boarding in Bangalore',
    tagline: 'Safe overnight care in Uttarahalli & GT Layout',
    price: 'Starting ₹650/night',
    desc: `Looking for safe and reliable dog boarding in Bangalore? At Premium Pet Boarding — located in GT Layout, Uttarahalli, South Bangalore — your dog is treated as family. Our climate-controlled boarding suites are cleaned and sanitised daily. Each dog receives personalised feeding per your schedule, two supervised play sessions, and WhatsApp photo/video updates every day. We maintain vet-on-call partnerships for any medical need. Ideal for weekend trips, holidays, and extended stays. Serving pet owners across Banashankari, JP Nagar, Jayanagar, Kanakapura Road, and the wider Bangalore area.`,
    features: [
      '24/7 on-site staff supervision',
      'Climate-controlled, sanitised suites',
      'Personalised feeding as per your schedule',
      'Daily WhatsApp photo & video updates',
      'Two supervised play sessions per day',
      'Vet-on-call partnership for emergencies',
      'Vaccination records verified on check-in',
      'Separate areas for large and small breeds'
    ]
  },
  {
    id: 'dog-daycare',
    icon: '☀️',
    title: 'Dog Daycare in Bangalore',
    tagline: 'Drop off, play all day, pick up happy',
    price: 'Starting ₹500/day',
    desc: `Our dog daycare in Bangalore is perfect for working professionals who don't want to leave their dogs alone at home. Operating out of Uttarahalli, we accept dogs from all areas — Banashankari, JP Nagar, Jayanagar, Kanakapura Road, BTM Layout, and beyond. Your dog enjoys structured play sessions, socialisation with other temperament-assessed dogs, rest periods, and a midday snack. We maintain a strict low dog-to-staff ratio to ensure every dog gets individual attention. Temperament assessment is required for first-time daycare dogs.`,
    features: [
      'Full-day supervised group play (7 am – 7 pm)',
      'Temperament-assessed, safe environment',
      'Low dog-to-staff ratio',
      'Midday snack and fresh water at all times',
      'Structured rest & nap time',
      'Socialization with compatible dogs',
      'Flexible drop-off and pick-up slots',
      'Half-day option available'
    ]
  },
  {
    id: 'pet-grooming',
    icon: '✂️',
    title: 'Professional Pet Grooming in Bangalore',
    tagline: 'Bath, trim, style — every breed, every size',
    price: 'Contact for pricing',
    desc: `Our professional pet grooming salon in Bangalore offers comprehensive grooming for all breeds and sizes. Services include full bath with breed-appropriate shampoo and conditioner, blow-dry and brush-out, haircut and breed-specific styling, ear cleaning, nail trimming and filing, paw moisturising, and optional teeth brushing. Our groomers are experienced with small breeds (Shih Tzu, Pomeranian, Maltese, Bichon Frisé), medium breeds (Cocker Spaniel, Beagle), and large breeds (Labrador, Golden Retriever, German Shepherd, Husky). Walk-in and appointment slots available.`,
    features: [
      'Full bath with breed-specific shampoo',
      'Blow-dry and brush-out',
      'Haircut and breed-specific styling',
      'Ear cleaning and wax removal',
      'Nail trimming and filing',
      'Paw pad moisturising treatment',
      'Teeth brushing (add-on)',
      'De-shedding treatment available'
    ]
  },
  {
    id: 'pet-sitting',
    icon: '🏠',
    title: 'In-Home Pet Sitting in Bangalore',
    tagline: 'Your pet stays home — our verified sitter comes to them',
    price: 'Contact for pricing',
    desc: `Some pets are happiest in their own home. Our in-home pet sitting service in Bangalore sends a background-verified, trained sitter to your residence. Each visit includes feeding per your instructions, fresh water, playtime and enrichment, litter box cleaning (for cats), a short walk if required, and a written photo report after every visit. Trusted by pet owners in Uttarahalli, Kanakapura Road, BTM Layout, and across South Bangalore. Ideal for anxious pets, senior pets, and cats who prefer staying home.`,
    features: [
      'Background-verified, trained sitters',
      'Feeding and fresh water per your schedule',
      'Playtime and enrichment activities',
      'Medication administration if needed',
      'Litter box cleaning for cats',
      'Short outdoor walk (if requested)',
      'Photo and written report after each visit',
      'Available for one-off or recurring visits'
    ]
  },
  {
    id: 'dog-walking',
    icon: '🦮',
    title: 'Dog Walking in Bangalore',
    tagline: 'Daily exercise & fresh air, 7 days a week',
    price: 'Contact for pricing',
    desc: `Our professional dog walkers serve GT Layout, Uttarahalli, Banashankari, JP Nagar, Jayanagar, BTM Layout, and surrounding areas in Bangalore. Choose from 20-minute potty walks, 30-minute neighbourhood walks, or 45-minute exercise sessions. Every walk includes a GPS-tracked route and a post-walk photo report sent to you via WhatsApp. Ideal for high-energy breeds (Husky, Border Collie, Labrador) or owners with busy work schedules. Available 7 days a week including public holidays.`,
    features: [
      '20, 30 and 45-minute walk options',
      'GPS-tracked routes for safety',
      'Post-walk WhatsApp photo report',
      'One-on-one or small-group walks',
      'Flexible morning, afternoon, evening slots',
      'Available 7 days a week',
      'Experienced, dog-friendly walkers',
      'Suitable for all breeds and sizes'
    ]
  }
]

export default function ServicesPage() {
  return (
    <main>
      <Helmet>
        <title>Pet Care Services in Bangalore | Dog Boarding, Daycare, Grooming — Premium Pet Boarding</title>
        <meta name="description" content="Premium Pet Boarding offers dog boarding (₹650/night), daycare (₹500/day), grooming, pet sitting & dog walking in Bangalore — Uttarahalli, GT Layout, JP Nagar, Banashankari. 24/7 care. Book today!" />
        <meta name="keywords" content="dog boarding Bangalore, pet daycare Bangalore, pet grooming Bangalore, dog walking Bangalore, pet sitting Bangalore, dog boarding Uttarahalli, dog hotel Bangalore, overnight dog care Bangalore, pet care South Bangalore, dog boarding JP Nagar, dog boarding Banashankari" />
        <link rel="canonical" href={`${BASE}/services`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pet Care Services in Bangalore | Premium Pet Boarding" />
        <meta property="og:description" content="Dog boarding, daycare, grooming, pet sitting & dog walking in Bangalore. 24/7 supervision. Serving Uttarahalli, JP Nagar, Banashankari & all of South Bangalore." />
        <meta property="og:url" content={`${BASE}/services`} />
        <meta property="og:site_name" content="Premium Pet Boarding" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pet Care Services in Bangalore | Premium Pet Boarding" />
        <meta name="twitter:description" content="Dog boarding, daycare, grooming & more in Bangalore. Starting ₹500/day." />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li aria-current="page">Services</li>
            </ol>
          </nav>
          <h1>Pet Care Services in Bangalore</h1>
          <p className="lead">
            From safe overnight dog boarding to in-home pet sitting — Premium Pet Boarding delivers professional, loving care for your pets across Bangalore. Serving <strong>Uttarahalli, GT Layout, JP Nagar, Banashankari, Jayanagar, Kanakapura Road</strong> and all of South Bangalore.
          </p>
          <div className="hero-trust" style={{ marginTop: '20px' }}>
            <span>✅ 24/7 Supervised Care</span>
            <span>✅ Vaccination Verified</span>
            <span>✅ Daily Updates</span>
            <span>✅ Vet-On-Call</span>
          </div>
        </div>
      </section>

      {/* Service Detail Cards */}
      <section className="container" style={{ padding: '60px 24px' }}>
        <div className="services-detail-list">
          {services.map((s) => (
            <article key={s.id} id={s.id} className="service-detail-card">
              <div className="sdc-header">
                <span className="sdc-icon" aria-hidden="true">{s.icon}</span>
                <div>
                  <h2>{s.title}</h2>
                  <p className="sdc-tagline">{s.tagline}</p>
                  <span className="sdc-price">{s.price}</span>
                </div>
              </div>
              <p className="sdc-desc">{s.desc}</p>
              <ul className="sdc-features">
                {s.features.map((f, i) => (
                  <li key={i}><span aria-hidden="true">✓</span> {f}</li>
                ))}
              </ul>
              <a className="btn btn-primary" href="#booking">Book {s.title.split(' ')[0]} {s.title.split(' ')[1]}</a>
            </article>
          ))}
        </div>
      </section>

      {/* Service Area */}
      <section className="service-area-section">
        <div className="container">
          <h2>Areas We Serve in Bangalore</h2>
          <p className="muted" style={{ maxWidth: '700px', margin: '0 auto 24px' }}>
            Based in <strong>GT Layout, Uttarahalli, Bangalore 560061</strong>, we serve pet owners across South Bangalore and beyond. Pickup & drop-off available for select areas.
          </p>
          <div className="area-tags">
            {['Uttarahalli', 'GT Layout', 'Banashankari', 'JP Nagar', 'Jayanagar', 'BTM Layout', 'Kanakapura Road', 'Padmanabhanagar', 'Puttenahalli', 'Hulimavu', 'Electronic City', 'Gottigere'].map(a => (
              <span key={a} className="area-tag">{a}</span>
            ))}
          </div>
        </div>
      </section>

      <CTAForm id="booking" />
    </main>
  )
}
