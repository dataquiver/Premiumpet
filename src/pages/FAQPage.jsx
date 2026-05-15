import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import CTAForm from '../components/CTAForm'

const BASE = 'https://www.premiumpet.in'

const faqs = [
  // Boarding
  {
    category: 'Dog Boarding',
    q: 'Is dog boarding safe for my pet in Bangalore?',
    a: 'Yes. At Premium Pet Boarding in Uttarahalli, Bangalore, we maintain 24/7 on-site staff, CCTV-monitored premises, individual feeding plans, and vet-on-call partnerships. Dogs are grouped by size and temperament to ensure safe interactions. All boarding dogs must have up-to-date vaccinations verified at check-in.'
  },
  {
    category: 'Dog Boarding',
    q: 'What does dog boarding in Bangalore cost?',
    a: 'Standard dog boarding starts at ₹650 per night. Premium private suite boarding is ₹850 per night. Both options include 24/7 supervision, personalised feeding, and daily WhatsApp updates.'
  },
  {
    category: 'Dog Boarding',
    q: 'What vaccinations are required for dog boarding?',
    a: 'All boarding dogs must be up-to-date on core vaccinations: Distemper, Parvovirus, Hepatitis (DHPPi combo), Rabies, and Kennel Cough (Bordetella). Please bring your vaccination record on the day of check-in.'
  },
  {
    category: 'Dog Boarding',
    q: 'Can I bring my dog\'s own food and bedding?',
    a: 'Absolutely. We encourage bringing your dog\'s regular food to maintain their diet and avoid digestive upset. You are welcome to bring a familiar blanket or toy to help your dog feel at home.'
  },
  {
    category: 'Dog Boarding',
    q: 'Will I receive updates about my dog while I am away?',
    a: 'Yes. We send daily photo and video updates via WhatsApp so you can see exactly how your pet is doing. You can also message us anytime for a status check.'
  },
  {
    category: 'Dog Boarding',
    q: 'How do you handle medical emergencies during boarding?',
    a: 'We have established partnerships with local veterinarians in Bangalore for immediate medical care. In the event of any health concern, we contact you immediately and transport your pet to our partner clinic without delay.'
  },
  // Daycare
  {
    category: 'Daycare',
    q: 'Is dog daycare suitable for all dogs?',
    a: 'Dog daycare is suitable for most social, vaccinated dogs. We conduct a brief temperament assessment for first-time daycare dogs to ensure they are comfortable in a group setting. Very anxious, reactive, or dog-aggressive dogs may be better suited to one-on-one pet sitting.'
  },
  {
    category: 'Daycare',
    q: 'What are the daycare timings at Premium Pet Boarding?',
    a: 'Daycare runs from 7:00 AM to 7:00 PM, 7 days a week. Drop-off and pick-up outside these hours may be arranged on request. Half-day slots (morning or afternoon) are also available.'
  },
  {
    category: 'Daycare',
    q: 'How much does dog daycare cost in Bangalore?',
    a: 'Full-day dog daycare costs ₹500 per day. This includes supervised play, socialisation, rest time, and a midday snack. Contact us for half-day rates and multi-day packages.'
  },
  // Grooming
  {
    category: 'Grooming',
    q: 'What grooming services are available?',
    a: 'We offer full-service grooming including bath with breed-appropriate shampoo, blow-dry, brush-out, haircut and styling, ear cleaning, nail trimming and filing, paw moisturising, and optional teeth brushing. De-shedding treatments are also available.'
  },
  {
    category: 'Grooming',
    q: 'Do you groom all breeds?',
    a: 'Yes. Our groomers are experienced with small breeds (Shih Tzu, Pomeranian, Maltese, Bichon Frisé), medium breeds (Cocker Spaniel, Beagle, Labrador), and large breeds (Golden Retriever, German Shepherd, Husky). Contact us if your breed has special grooming requirements.'
  },
  {
    category: 'Grooming',
    q: 'How long does a full grooming session take?',
    a: 'A full grooming session typically takes 2–4 hours depending on breed, coat condition, and size. We will give you an estimated time when you drop off your pet.'
  },
  // Pet Sitting & Walking
  {
    category: 'Pet Sitting & Dog Walking',
    q: 'Who are your pet sitters and are they trustworthy?',
    a: 'All our pet sitters are background-verified, trained, and experienced with dogs and cats. They undergo a vetting process including ID verification and a hands-on assessment before being assigned any client visits.'
  },
  {
    category: 'Pet Sitting & Dog Walking',
    q: 'What areas in Bangalore do you offer dog walking?',
    a: 'Our dog walkers currently serve GT Layout, Uttarahalli, Banashankari, JP Nagar, Jayanagar, BTM Layout, Kanakapura Road, Padmanabhanagar, and surrounding South Bangalore areas. Contact us to check availability in your locality.'
  },
  {
    category: 'Pet Sitting & Dog Walking',
    q: 'What happens if my dog has a health issue during a walk?',
    a: 'Our walkers are trained in basic pet first aid and carry emergency contact information. If your dog shows any signs of distress during a walk, they will immediately stop, contact you, and our team will arrange veterinary care if needed.'
  },
  // General
  {
    category: 'General',
    q: 'Where is Premium Pet Boarding located in Bangalore?',
    a: 'We are located at No. 59, Rajshekar Nilaya, Srinivas Colony, GT Layout, Uttarahalli, Bangalore – 560061, Karnataka. We serve all of South Bangalore including JP Nagar, Banashankari, Jayanagar, BTM Layout, and Kanakapura Road.'
  },
  {
    category: 'General',
    q: 'How do I book a service at Premium Pet Boarding?',
    a: 'You can book by filling out the form on our website (we will contact you via WhatsApp), calling us at +91 97385 38159, or messaging us directly on WhatsApp. Advance booking is recommended, especially during holiday seasons.'
  },
  {
    category: 'General',
    q: 'Do you also board cats?',
    a: 'Yes. We provide cat boarding and in-home cat sitting. Our cat boarding area is separate from the dog area to ensure a calm, stress-free environment for cats. Please contact us to check current cat boarding availability.'
  }
]

const categories = [...new Set(faqs.map(f => f.category))]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${BASE}/faq` }
      ]
    },
    {
      '@type': 'FAQPage',
      name: 'Frequently Asked Questions — Premium Pet Boarding Bangalore',
      description: 'Answers to common questions about dog boarding, daycare, grooming, pet sitting and dog walking in Bangalore at Premium Pet Boarding.',
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a }
      }))
    }
  ]
}

export default function FAQPage() {
  const [open, setOpen] = useState(null)
  const [activeTab, setActiveTab] = useState('All')

  const tabs = ['All', ...categories]
  const visible = activeTab === 'All' ? faqs : faqs.filter(f => f.category === activeTab)

  return (
    <main>
      <Helmet>
        <title>Pet Boarding FAQ — Dog Boarding, Daycare & Grooming Questions Answered | Premium Pet Bangalore</title>
        <meta name="description" content="Answers to all your questions about dog boarding, daycare, grooming, pet sitting & dog walking in Bangalore. Vaccinations required, pricing, emergency care, and more — Premium Pet Boarding, Uttarahalli." />
        <meta name="keywords" content="dog boarding FAQ Bangalore, pet boarding questions Bangalore, is dog boarding safe Bangalore, dog boarding vaccinations required, dog daycare FAQ Bangalore, pet grooming questions Bangalore, Premium Pet Boarding FAQ" />
        <link rel="canonical" href={`${BASE}/faq`} />
        <meta property="og:title" content="Pet Boarding FAQ | Premium Pet Boarding Bangalore" />
        <meta property="og:description" content="Answers to common questions about dog boarding, daycare, grooming & pet sitting in Bangalore. Trusted, transparent, and professional." />
        <meta property="og:url" content={`${BASE}/faq`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li aria-current="page">FAQ</li>
            </ol>
          </nav>
          <h1>Frequently Asked Questions</h1>
          <p className="lead">
            Everything you need to know about dog boarding, daycare, grooming, pet sitting, and dog walking at <strong>Premium Pet Boarding in Bangalore</strong>. Can't find your answer?{' '}
            <Link to="/contact">Contact us</Link> and we'll respond within the hour.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="container" style={{ padding: '40px 24px 0' }}>
        <div className="faq-tabs" role="tablist" aria-label="FAQ categories">
          {tabs.map(tab => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              className={`faq-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => { setActiveTab(tab); setOpen(null) }}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="container faq" style={{ padding: '32px 24px 60px' }}>
        <div className="accordion">
          {visible.map((f, i) => (
            <div key={i} className={`accordion-item ${open === i ? 'open' : ''}`}>
              <button
                className="accordion-toggle"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
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

      {/* Still have questions CTA */}
      <section className="service-area-section" style={{ padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h2>Still Have Questions?</h2>
          <p className="muted" style={{ maxWidth: '560px', margin: '0 auto 28px' }}>
            Our team is happy to answer any questions you have about our services, pricing, or your pet's specific needs. Reach us on WhatsApp or by phone — we usually respond within minutes.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a className="btn btn-primary" href="https://wa.me/919738538159" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
            <a className="btn btn-outline" href="tel:+919738538159">Call +91 97385 38159</a>
          </div>
        </div>
      </section>

      <CTAForm id="booking" />
    </main>
  )
}
