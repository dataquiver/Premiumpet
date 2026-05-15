import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'

const BASE = 'https://www.premiumpet.in'

const posts = {
  'how-to-prepare-your-dog-for-boarding': {
    title: 'How to Prepare Your Dog for Boarding in Bangalore',
    date: '2025-04-10',
    dateDisplay: 'April 10, 2025',
    category: 'Dog Boarding',
    readTime: '5 min read',
    metaDesc: 'First-time boarding your dog in Bangalore? Our step-by-step guide covers vaccinations, what to pack, how to reduce anxiety, and what to tell the boarding facility.',
    excerpt: 'First time boarding your dog? Here\'s everything you need to do in the days before drop-off to make the transition stress-free for your pet.',
    content: [
      { heading: 'Update Vaccinations at Least 2 Weeks Before', body: 'All boarding facilities in Bangalore require up-to-date vaccinations — typically Distemper, Parvovirus, Hepatitis (DHPPi), Rabies, and Kennel Cough (Bordetella). Ensure your vet administers or confirms these at least 14 days before boarding, as immunity needs time to develop. Bring your vaccination booklet or certificate on check-in day.' },
      { heading: 'Bring Familiar Items', body: 'Packing your dog\'s regular food, a favourite toy, and a used blanket or t-shirt with your scent can significantly reduce anxiety during a boarding stay. Familiar smells provide comfort and help your dog settle faster in a new environment.' },
      { heading: 'Share Your Dog\'s Routine', body: 'Share your dog\'s daily schedule with the boarding facility — feeding times, walk frequency, nap schedule, and any behavioural quirks. The more information you provide, the more consistently the staff can replicate your dog\'s home routine, reducing stress for your pet.' },
      { heading: 'Do a Trial Stay', body: 'If your dog has never been boarded before, consider a short 1-night trial stay before a longer trip. This lets both you and your dog assess comfort levels. Dogs who have completed a trial stay show significantly lower stress levels during subsequent stays.' },
      { heading: 'Inform the Facility About Medications', body: 'If your dog is on any medication, provide clear written instructions and the medication in its original packaging. Include dosage, timing, and what to do if a dose is missed. A good boarding facility will administer medication precisely as directed.' },
      { heading: 'Exercise Your Dog Before Drop-Off', body: 'A good walk or play session on the morning of boarding day helps burn off nervous energy. A tired dog settles into a new environment faster and is less likely to show anxious behaviours.' }
    ],
    tags: ['dog boarding', 'dog boarding Bangalore', 'boarding preparation', 'pet tips', 'dog care Bangalore'],
    faqSchema: [
      { q: 'What vaccinations are required for dog boarding in Bangalore?', a: 'Most Bangalore boarding facilities require DHPPi (Distemper, Hepatitis, Parvovirus, Parainfluenza), Rabies, and Kennel Cough (Bordetella) vaccinations. These should be administered at least 14 days before boarding.' },
      { q: 'Can I bring my dog\'s own food to a boarding facility?', a: 'Yes, and it is encouraged. Bringing your dog\'s regular food prevents digestive upset from a sudden diet change and helps your dog feel more at home.' }
    ]
  },
  'dog-grooming-guide-bangalore': {
    title: 'Complete Dog Grooming Guide for Bangalore Pet Owners',
    date: '2025-03-22',
    dateDisplay: 'March 22, 2025',
    category: 'Grooming',
    readTime: '6 min read',
    metaDesc: 'A complete dog grooming guide for Bangalore\'s climate — how often to groom, at-home brushing tips, bathing frequency, nail trimming, and when to visit a professional groomer.',
    excerpt: 'From coat brushing to grooming frequency — a complete guide to keeping your dog clean, healthy and well-groomed in Bangalore\'s climate.',
    content: [
      { heading: 'How Often Should You Groom Your Dog in Bangalore?', body: 'Bangalore\'s warm, humid weather — particularly the monsoon season — makes regular grooming essential to prevent skin infections and matting. Short-coated breeds (Labrador, Beagle, Doberman) benefit from a professional groom every 6–8 weeks. Long-coated breeds (Shih Tzu, Maltese, Pomeranian, Bichon Frisé) should be professionally groomed every 4–6 weeks to prevent severe matting.' },
      { heading: 'At-Home Grooming Basics', body: 'Between professional sessions, brush your dog 2–3 times a week. Use a slicker brush for medium-to-long coats and a rubber grooming mitt for short coats. Regular brushing removes loose hair, prevents matting, and distributes natural oils for a healthy coat. Also check and clean ears weekly — Bangalore\'s humidity makes dogs more prone to ear infections.' },
      { heading: 'Bathing Your Dog at Home', body: 'Bathe your dog every 3–4 weeks using a pH-balanced, dog-specific shampoo. Human shampoos disrupt a dog\'s skin pH. After bathing, rinse thoroughly and dry completely — paying special attention to skin folds, ear canals, and between paw pads, as trapped moisture in Bangalore\'s humidity can lead to fungal growth.' },
      { heading: 'Nail Trimming', body: 'Overgrown nails can cause pain, abnormal gait, and long-term joint problems. Trim your dog\'s nails every 3–4 weeks. A good indicator: if you can hear your dog\'s nails clicking on the floor, they are overdue for a trim. If you are not comfortable trimming at home, our groomers include nail trimming in every grooming session.' },
      { heading: 'Ear Cleaning', body: 'Floppy-eared breeds (Cocker Spaniel, Beagle, Labrador) are especially prone to ear infections in humid weather. Use a vet-approved ear cleaner and cotton balls — never cotton swabs — to gently clean the outer ear canal every 1–2 weeks. Signs of infection include redness, odour, excessive scratching, or head shaking.' },
      { heading: 'Signs You Need a Professional Groomer', body: 'Visit a professional groomer when you notice severe matting, excessive shedding that home brushing cannot manage, skin issues, visible dirt or debris build-up in the coat, or unusually long nails. Our professional groomers at Premium Pet Boarding in Bangalore handle all breeds and coat types with care.' }
    ],
    tags: ['dog grooming', 'pet grooming Bangalore', 'dog grooming guide', 'grooming tips', 'dog care Bangalore'],
    faqSchema: [
      { q: 'How often should I groom my dog in Bangalore?', a: 'Short-coated breeds should be professionally groomed every 6–8 weeks. Long-coated breeds need grooming every 4–6 weeks to prevent matting, especially in Bangalore\'s humid climate.' },
      { q: 'What shampoo should I use to bathe my dog at home?', a: 'Always use a pH-balanced, dog-specific shampoo. Human shampoos disrupt a dog\'s skin pH and can cause dryness, irritation, and dandruff.' }
    ]
  },
  'dog-daycare-vs-boarding-bangalore': {
    title: 'Dog Daycare vs Dog Boarding: Which Is Right for Your Dog in Bangalore?',
    date: '2025-02-14',
    dateDisplay: 'February 14, 2025',
    category: 'Dog Boarding',
    readTime: '4 min read',
    metaDesc: 'Daycare or boarding — which is right for your dog? A clear, practical comparison for Bangalore pet owners, including when to choose each option.',
    excerpt: 'Not sure whether to choose daycare or boarding for your dog? Here\'s a clear comparison to help Bangalore pet owners make the right choice.',
    content: [
      { heading: 'What Is Dog Daycare?', body: 'Dog daycare is daytime supervision — typically 7 am to 7 pm — where your dog plays, socialises, and rests in a monitored facility. You drop off in the morning and pick up in the evening. Ideal for social dogs, high-energy breeds, and working pet owners who don\'t want their dog home alone for 8–10 hours.' },
      { heading: 'What Is Dog Boarding?', body: 'Dog boarding means your dog stays overnight — or for multiple nights — at the facility, with 24/7 supervision. It\'s the right choice when you are travelling, going on a holiday, or will be away from home for more than one day.' },
      { heading: 'Choose Daycare If…', body: 'Your dog is social and enjoys being around other dogs. You work long hours and your dog is alone all day. Your dog shows signs of separation anxiety or destructive behaviour when home alone. You want regular enrichment, exercise, and socialization for your dog.' },
      { heading: 'Choose Boarding If…', body: 'You are travelling for work or leisure and need multi-night care. You have no trusted person to care for your dog at home. Your dog requires 24/7 supervision. You want the peace of mind of professional overnight care.' },
      { heading: 'Can My Dog Do Both?', body: 'Absolutely. Many of our Bangalore clients use daycare during the work week and boarding during trips and holidays. Dogs who are familiar with our facility from regular daycare settle into boarding stays far more quickly and with less anxiety.' }
    ],
    tags: ['dog daycare', 'dog boarding', 'daycare vs boarding', 'dog care Bangalore', 'pet care tips Bangalore'],
    faqSchema: [
      { q: 'What is the difference between dog daycare and dog boarding?', a: 'Dog daycare is daytime care (typically 7 am–7 pm) where you drop off and pick up the same day. Dog boarding is overnight or multi-day care where your dog stays at the facility while you are away.' },
      { q: 'Is daycare or boarding better for a dog with separation anxiety?', a: 'For dogs with separation anxiety, daycare is often a good starting point as it provides socialisation and stimulation without an overnight separation. Boarding can also work well if the dog is introduced gradually through trial stays.' }
    ]
  },
  'choosing-dog-boarding-facility-bangalore': {
    title: '7 Things to Check Before Choosing a Dog Boarding Facility in Bangalore',
    date: '2025-01-08',
    dateDisplay: 'January 8, 2025',
    category: 'Dog Boarding',
    readTime: '5 min read',
    metaDesc: 'Use this 7-point checklist to choose a safe, professional dog boarding facility in Bangalore. Vaccination requirements, staff ratios, facility tours, and more.',
    excerpt: 'Before you book, use this checklist to ensure your pet is going to a safe, professional and caring boarding facility in Bangalore.',
    content: [
      { heading: '1. Ask About Vaccination Requirements', body: 'A reputable facility will always require proof of up-to-date vaccinations before accepting any dog. If a boarding place doesn\'t ask for vaccine records, that\'s a serious red flag — unvaccinated dogs can put every animal in the facility at risk of contagious diseases like Parvovirus and Kennel Cough.' },
      { heading: '2. Check Staff-to-Dog Ratio', body: 'Facilities with too many dogs per caregiver cannot provide adequate individual attention or respond quickly to problems. Ask about the dog-to-staff ratio during daytime hours and, importantly, overnight when supervision is most critical.' },
      { heading: '3. Request a Facility Tour', body: 'Any trustworthy boarding facility in Bangalore should welcome a pre-booking visit. Look for clean, odour-free spaces, good ventilation, adequate natural light, and safe, enclosed exercise areas. If they refuse to show you around, look elsewhere.' },
      { heading: '4. Verify 24/7 Overnight Supervision', body: 'Some facilities use only CCTV overnight with no human staff on-site. Always confirm there is a physically present staff member round the clock. A dog that falls ill at 3 am needs immediate human response, not a camera recording.' },
      { heading: '5. Ask About Their Emergency Protocol', body: 'What happens if your dog has a medical emergency? A professional facility should have a documented emergency protocol, a vet-on-call partnership with a nearby clinic, and a clear process for immediately notifying you as the owner.' },
      { heading: '6. Check for Daily Updates', body: 'Daily photo or video updates via WhatsApp have become the standard at quality boarding facilities in Bangalore. If a facility doesn\'t offer any updates during your dog\'s stay, you have no visibility into the quality of care your pet is actually receiving.' },
      { heading: '7. Read Google Reviews from Bangalore Pet Owners', body: 'Look for consistent, recent, and detailed Google reviews from local Bangalore pet owners — not just star ratings. Pay attention to reviews that mention specific staff members, the facility\'s response to issues, and repeat bookings. How a facility responds to negative feedback reveals a lot about their professionalism.' }
    ],
    tags: ['dog boarding tips', 'choosing boarding Bangalore', 'dog boarding checklist', 'safe dog boarding Bangalore', 'pet care Bangalore'],
    faqSchema: [
      { q: 'What should I look for in a dog boarding facility in Bangalore?', a: 'Look for vaccination requirements, 24/7 human supervision, a clean and odour-free facility, a low dog-to-staff ratio, a clear emergency protocol, vet-on-call access, and daily photo updates for pet owners.' },
      { q: 'How do I know if a boarding facility is safe for my dog?', a: 'Visit the facility before booking, check Google reviews from local pet owners, ask about their vaccination requirements, confirm overnight staff presence, and ask about their emergency protocol and vet partnerships.' }
    ]
  },
  'dog-daycare-benefits': {
    title: 'Dog Daycare Benefits: Why Social Dogs Thrive in Group Settings',
    date: '2025-03-05',
    dateDisplay: 'March 5, 2025',
    category: 'Dog Daycare',
    readTime: '5 min read',
    metaDesc: 'Discover the mental, physical, and behavioural benefits of professional dog daycare in Bangalore. Learn how social interaction improves your dog\'s health and happiness.',
    excerpt: 'Discover how regular dog daycare improves behaviour, fitness, and mental stimulation. Learn what to look for in a quality daycare facility.',
    content: [
      { heading: 'Mental Stimulation & Enrichment', body: 'Dogs are highly social animals. Professional daycare provides constant mental stimulation through interaction with other dogs, new environments, and activities — preventing boredom that often leads to destructive behaviours like excessive chewing, digging, and furniture destruction.' },
      { heading: 'Physical Exercise & Weight Management', body: 'Daycare encourages regular physical activity through group play, supervised games, and walks. This helps maintain a healthy weight, strengthens muscles and joints, and tires your dog out — resulting in calmer, better-behaved dogs at home.' },
      { heading: 'Social Development & Confidence', body: 'Dogs that attend daycare develop better social skills and confidence around other dogs and people. They learn appropriate play behaviour, bite inhibition, and how to read canine body language — skills that prevent aggression and anxiety.' },
      { heading: 'Reduced Separation Anxiety', body: 'Dogs with separation anxiety benefit greatly from daycare. Regular, positive experiences being away from their owners in a safe, supervised environment gradually reduces anxiety and teaches them that separation is safe and temporary.' },
      { heading: 'Behavioral Improvements', body: 'Dogs attending professional daycare often show marked improvements in behaviour — reduced jumping, better listening, lower reactivity, and calmer overall demeanour. The combination of exercise, mental stimulation, and socialisation creates a balanced, well-adjusted dog.' },
      { heading: 'Peace of Mind for Pet Parents', body: 'Knowing your dog is safe, active, and happy while you work provides invaluable peace of mind. Daily updates from Premium Pet Boarding\'s daycare facility keep you connected to your dog\'s day, and your dog benefits from professional supervision and care.' }
    ],
    tags: ['dog daycare', 'dog daycare benefits', 'dog daycare Bangalore', 'dog socialisation', 'dog behaviour Bangalore'],
    faqSchema: [
      { q: 'What are the benefits of dog daycare?', a: 'Dog daycare provides mental stimulation, physical exercise, social development, reduced separation anxiety, and behavioural improvements. It keeps dogs active and healthy while giving pet parents peace of mind.' },
      { q: 'At what age can dogs start daycare?', a: 'Dogs can start daycare from around 12-16 weeks of age, after their initial vaccinations are complete. Always check specific facility requirements.' }
    ]
  },
  'best-dog-walking-service': {
    title: 'Finding the Best Dog Walking Service in South Bangalore',
    date: '2025-02-18',
    dateDisplay: 'February 18, 2025',
    category: 'Dog Walking',
    readTime: '6 min read',
    metaDesc: 'How to choose a professional dog walker in Bangalore. Key factors include qualifications, insurance, references, and daily updates. A guide for busy pet parents.',
    excerpt: 'Busy schedule? A professional dog walker keeps your pet active and healthy. Here\'s how to find a trusted walker in Bangalore.',
    content: [
      { heading: 'Why Professional Dog Walking Matters', body: 'Dogs need 30-60 minutes of exercise daily. For busy professionals in Bangalore, a reliable dog walker bridges this gap. Regular walks reduce behaviour problems, maintain healthy weight, provide mental stimulation, and keep your dog balanced and happy.' },
      { heading: 'Check Qualifications & Experience', body: 'Look for walkers or walking services with formal dog training qualifications, experience with multiple breeds and temperaments, and insurance coverage in case of accidents. Don\'t hesitate to ask for proof of any certifications they claim.' },
      { heading: 'Ask for References & Reviews', body: 'A reputable dog walker should provide references from current and past clients. Check Google reviews from other Bangalore pet parents, ask detailed questions about how they handle different situations, and trust your instincts.' },
      { heading: 'Small Group Walks vs. Solo Walks', body: 'Small group walks (4-5 dogs maximum) provide socialisation benefits and are cost-effective. Solo walks ensure one-on-one attention and are better for dogs with behavioural issues or special needs. Discuss your dog\'s personality before booking.' },
      { heading: 'Daily Updates & Communication', body: 'Modern dog walkers provide daily photo or video updates via WhatsApp. This keeps you connected and gives you confidence in the service. Premium Pet Boarding includes detailed updates showing your dog\'s route, mood, and activity level.' },
      { heading: 'Safety & Insurance', body: 'Ensure your dog walker has pet first aid training, carries ID, has a mobile phone for emergencies, and is insured. A professional service will have clear protocols for lost dogs, health emergencies, and accident reporting.' }
    ],
    tags: ['dog walking', 'dog walker Bangalore', 'dog exercise Bangalore', 'pet care services Bangalore', 'professional dog walking'],
    faqSchema: [
      { q: 'How often should my dog be walked?', a: 'Most dogs need 30-60 minutes of exercise daily. This can be split into 2-3 walks. Puppies and high-energy breeds may need more, while senior dogs need less.' },
      { q: 'What should I look for in a professional dog walker?', a: 'Look for experience with your dog\'s breed, dog training qualifications, insurance, references, and a commitment to daily updates via WhatsApp or email.' }
    ]
  }
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = posts[slug]

  if (!post) {
    return (
      <main>
        <Helmet><title>Article Not Found | Premium Pet Boarding</title></Helmet>
        <section className="page-hero"><div className="container"><h1>Article Not Found</h1><p className="lead"><Link to="/blog">← Back to Blog</Link></p></div></section>
      </main>
    )
  }

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: `${BASE}/blog/${slug}` }
        ]
      },
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.metaDesc,
        datePublished: post.date,
        url: `${BASE}/blog/${slug}`,
        keywords: post.tags.join(', '),
        articleSection: post.category,
        publisher: {
          '@type': 'LocalBusiness',
          name: 'Premium Pet Boarding',
          url: BASE,
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'No. 59, Rajshekar Nilaya, Srinivas Colony, GT Layout',
            addressLocality: 'Uttarahalli, Bangalore',
            addressRegion: 'Karnataka',
            postalCode: '560061',
            addressCountry: 'IN'
          }
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/blog/${slug}` }
      },
      ...(post.faqSchema ? [{
        '@type': 'FAQPage',
        mainEntity: post.faqSchema.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
      }] : [])
    ]
  }

  return (
    <main>
      <Helmet>
        <title>{post.title} | Premium Pet Boarding Bangalore</title>
        <meta name="description" content={post.metaDesc} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <link rel="canonical" href={`${BASE}/blog/${slug}`} />
        <meta property="og:title" content={`${post.title} | Premium Pet Boarding`} />
        <meta property="og:description" content={post.metaDesc} />
        <meta property="og:url" content={`${BASE}/blog/${slug}`} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Post Header */}
      <section className="page-hero">
        <div className="container">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li aria-current="page">{post.category}</li>
            </ol>
          </nav>
          <div className="blog-post-meta-top">
            <span className="bpc-category">{post.category}</span>
            <span className="muted" style={{ fontSize: '14px' }}>{post.dateDisplay} · {post.readTime}</span>
          </div>
          <h1 style={{ maxWidth: '800px' }}>{post.title}</h1>
          <p className="lead" style={{ maxWidth: '700px' }}>{post.excerpt}</p>
        </div>
      </section>

      {/* Post Body */}
      <section className="container blog-post-body" style={{ padding: '48px 24px 64px', maxWidth: '800px' }}>
        {post.content.map((section, i) => (
          <div key={i} style={{ marginBottom: '36px' }}>
            <h2 style={{ fontSize: '22px', marginBottom: '12px' }}>{section.heading}</h2>
            <p style={{ lineHeight: '1.85', color: 'var(--dark-text)' }}>{section.body}</p>
          </div>
        ))}

        {/* Tags */}
        <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
          <p style={{ fontWeight: 600, marginBottom: '12px', color: 'var(--dark-text)' }}>Topics:</p>
          <div className="area-tags">
            {post.tags.map(t => <span key={t} className="area-tag">{t}</span>)}
          </div>
        </div>

        {/* FAQ section */}
        {post.faqSchema && (
          <div style={{ marginTop: '48px', background: 'var(--bg-light)', borderRadius: '14px', padding: '28px' }}>
            <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>Quick Answers</h2>
            {post.faqSchema.map((f, i) => (
              <div key={i} style={{ marginBottom: '20px' }}>
                <p style={{ fontWeight: 600, color: 'var(--dark-text)', marginBottom: '6px' }}>{f.q}</p>
                <p style={{ margin: 0, lineHeight: '1.7' }}>{f.a}</p>
              </div>
            ))}
          </div>
        )}

        {/* Back + CTA */}
        <div style={{ marginTop: '48px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Link className="btn btn-outline" to="/blog">← More Articles</Link>
          <a className="btn btn-primary" href="/#booking">Book a Service</a>
        </div>
      </section>
    </main>
  )
}
