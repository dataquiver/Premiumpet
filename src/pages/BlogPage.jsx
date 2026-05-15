import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const BASE = 'https://www.premiumpet.in'

const posts = [
  {
    slug: 'how-to-prepare-your-dog-for-boarding',
    title: 'How to Prepare Your Dog for Boarding in Bangalore',
    date: '2025-04-10',
    dateDisplay: 'April 10, 2025',
    category: 'Dog Boarding',
    readTime: '5 min read',
    excerpt: 'First time boarding your dog? Here\'s everything you need to do in the days before drop-off to make the transition stress-free for your pet.',
    content: [
      {
        heading: 'Update Vaccinations at Least 2 Weeks Before',
        body: 'All boarding facilities in Bangalore require up-to-date vaccinations — typically Distemper, Parvovirus, Hepatitis (DHPPi), Rabies, and Kennel Cough (Bordetella). Ensure your vet administers or confirms these at least 14 days before boarding, as immunity needs time to develop.'
      },
      {
        heading: 'Bring Familiar Items',
        body: 'Packing your dog\'s regular food, a favourite toy, and a used blanket (with your scent) can significantly reduce anxiety during a boarding stay. Familiar smells provide comfort in a new environment.'
      },
      {
        heading: 'Stick to Their Routine',
        body: 'Share your dog\'s daily schedule with the boarding facility — feeding times, walk frequency, nap schedule, and any behavioural quirks. The more information you provide, the more consistently the staff can replicate your dog\'s home routine.'
      },
      {
        heading: 'Do a Trial Stay',
        body: 'If your dog has never been boarded before, consider a short 1-night trial stay before a longer trip. This lets both you and your dog assess comfort levels and iron out any issues in advance.'
      },
      {
        heading: 'Inform the Facility About Medications',
        body: 'If your dog is on any medication, provide clear written instructions and the medication in its original packaging. A good boarding facility will administer medication precisely as directed.'
      }
    ],
    tags: ['dog boarding', 'dog boarding Bangalore', 'boarding preparation', 'pet tips', 'dog care Bangalore']
  },
  {
    slug: 'dog-grooming-guide-bangalore',
    title: 'Complete Dog Grooming Guide for Bangalore Pet Owners',
    date: '2025-03-22',
    dateDisplay: 'March 22, 2025',
    category: 'Grooming',
    readTime: '6 min read',
    excerpt: 'From coat brushing to professional grooming frequency — a complete guide to keeping your dog clean, healthy, and well-groomed in Bangalore\'s climate.',
    content: [
      {
        heading: 'How Often Should You Groom Your Dog in Bangalore?',
        body: 'Bangalore\'s weather — particularly the humid monsoon season — makes regular grooming essential. Short-coated breeds like Labrador and Beagle benefit from a professional groom every 6–8 weeks. Long-coated breeds (Shih Tzu, Maltese, Pomeranian) should be professionally groomed every 4–6 weeks to prevent matting and tangling.'
      },
      {
        heading: 'At-Home Grooming Basics',
        body: 'Between professional sessions, brush your dog 2–3 times a week to remove loose hair, prevent matting, and distribute natural oils. Use a slicker brush for medium-to-long coats and a rubber grooming mitt for short coats. Check and clean your dog\'s ears weekly to prevent infections, which are common in humid Bangalore weather.'
      },
      {
        heading: 'Bathing Your Dog at Home',
        body: 'Bathe your dog every 3–4 weeks using a pH-balanced, dog-specific shampoo. Human shampoos disrupt a dog\'s skin pH and can cause dryness or irritation. Rinse thoroughly and dry completely — especially skin folds and between paw pads — to prevent fungal growth.'
      },
      {
        heading: 'Nail Trimming',
        body: 'Overgrown nails can cause pain, gait problems, and even joint issues over time. Trim nails every 3–4 weeks or have a professional groomer do it. If you hear your dog\'s nails clicking on the floor, they are overdue for a trim.'
      },
      {
        heading: 'Signs You Need a Professional Groomer',
        body: 'If your dog has severe matting, excessive shedding, skin issues, visible dirt build-up, or unusually long nails, it\'s time for a professional grooming session. Our groomers in Bangalore are experienced with all breeds and coat types.'
      }
    ],
    tags: ['dog grooming', 'pet grooming Bangalore', 'dog grooming guide', 'grooming tips', 'dog care Bangalore']
  },
  {
    slug: 'dog-daycare-vs-boarding-bangalore',
    title: 'Dog Daycare vs Dog Boarding: Which Is Right for Your Dog in Bangalore?',
    date: '2025-02-14',
    dateDisplay: 'February 14, 2025',
    category: 'Dog Boarding',
    readTime: '4 min read',
    excerpt: 'Not sure whether to choose daycare or boarding for your dog? Here\'s a clear comparison to help Bangalore pet owners make the right choice.',
    content: [
      {
        heading: 'What Is Dog Daycare?',
        body: 'Dog daycare is daytime supervision — typically 7 am to 7 pm — where your dog plays, socialises, and rests in a monitored facility. You drop off in the morning and pick up in the evening. Ideal for social dogs, high-energy breeds, and working pet owners who don\'t want their dog home alone all day.'
      },
      {
        heading: 'What Is Dog Boarding?',
        body: 'Dog boarding means your dog stays overnight — or for multiple nights — at the facility. It\'s the right choice when you are travelling, on a holiday, or will be away from home for more than one day.'
      },
      {
        heading: 'Choose Daycare If…',
        body: 'Your dog is social and enjoys being around other dogs. You are at work during the day and your dog is home alone for 8+ hours. Your dog has separation anxiety or is destructive when alone. You want regular enrichment and exercise for your dog during the week.'
      },
      {
        heading: 'Choose Boarding If…',
        body: 'You are travelling for work or leisure and need multi-night care. You have no one to care for your dog at home. Your dog needs 24/7 supervision due to medical conditions or anxiety. You want the peace of mind of professional overnight supervision.'
      },
      {
        heading: 'Can My Dog Do Both?',
        body: 'Absolutely. Many of our regular clients in Bangalore use daycare during the work week and boarding during trips. Dogs familiar with our facility from daycare settle into boarding much more easily and with less stress.'
      }
    ],
    tags: ['dog daycare', 'dog boarding', 'daycare vs boarding', 'dog care Bangalore', 'pet care tips Bangalore']
  },
  {
    slug: 'choosing-dog-boarding-facility-bangalore',
    title: '7 Things to Check Before Choosing a Dog Boarding Facility in Bangalore',
    date: '2025-01-08',
    dateDisplay: 'January 8, 2025',
    category: 'Dog Boarding',
    readTime: '5 min read',
    excerpt: 'Not all dog boarding facilities are equal. Before you book, use this checklist to ensure your pet is going to a safe, professional, and caring facility in Bangalore.',
    content: [
      { heading: '1. Ask About Vaccination Requirements', body: 'A reputable facility will always require proof of up-to-date vaccinations. If a boarding place doesn\'t ask for vaccine records, that\'s a red flag — unvaccinated dogs put all animals at risk.' },
      { heading: '2. Check Staff-to-Dog Ratio', body: 'Facilities with too many dogs per caregiver cannot provide adequate individual attention. Ask about the dog-to-staff ratio during both the day and overnight hours.' },
      { heading: '3. Request a Facility Tour', body: 'Any trustworthy boarding facility in Bangalore should welcome a visit before booking. Look for clean, odour-free spaces, adequate ventilation, and sufficient exercise areas.' },
      { heading: '4. Verify 24/7 Overnight Supervision', body: 'Some facilities leave dogs unattended at night. Always confirm there is on-site staff round the clock — not just cameras, but actual human presence.' },
      { heading: '5. Ask About Their Emergency Protocol', body: 'What happens if your dog falls ill at 2 am? A professional facility should have a clear, documented emergency plan and a vet-on-call partnership.' },
      { heading: '6. Check for Daily Updates', body: 'Daily photos and messages are a standard practice at quality boarding facilities. If updates are not offered, you have no visibility into how your pet is being cared for.' },
      { heading: '7. Read Google Reviews', body: 'Look for consistent, recent positive reviews from local Bangalore pet owners. Pay attention to how the facility responds to any negative feedback — it reveals a lot about their culture.' }
    ],
    tags: ['dog boarding tips', 'choosing boarding Bangalore', 'dog boarding checklist', 'safe dog boarding Bangalore', 'pet care Bangalore']
  }
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Blog & Resources', item: `${BASE}/blog` }
      ]
    },
    {
      '@type': 'Blog',
      name: 'Premium Pet Boarding Blog — Pet Care Tips & Advice for Bangalore',
      description: 'Expert pet care advice for dog owners in Bangalore — boarding tips, grooming guides, daycare advice and more from Premium Pet Boarding.',
      url: `${BASE}/blog`,
      publisher: {
        '@type': 'LocalBusiness',
        name: 'Premium Pet Boarding',
        url: BASE,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'No. 59, Rajshekar Nilaya, Srinivas Colony, GT Layout',
          addressLocality: 'Uttarahalli',
          addressRegion: 'Karnataka',
          postalCode: '560061',
          addressCountry: 'IN'
        }
      },
      blogPost: posts.map(p => ({
        '@type': 'BlogPosting',
        headline: p.title,
        description: p.excerpt,
        datePublished: p.date,
        url: `${BASE}/blog/${p.slug}`,
        keywords: p.tags.join(', '),
        publisher: { '@type': 'LocalBusiness', name: 'Premium Pet Boarding' }
      }))
    }
  ]
}

function PostCard({ post }) {
  return (
    <article className="blog-post-card">
      <div className="bpc-category">{post.category}</div>
      <h2 className="bpc-title">
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>
      <p className="bpc-excerpt">{post.excerpt}</p>
      <div className="bpc-meta">
        <span>{post.dateDisplay}</span>
        <span>·</span>
        <span>{post.readTime}</span>
      </div>
      <Link className="bpc-read" to={`/blog/${post.slug}`}>Read article →</Link>
    </article>
  )
}

export default function BlogPage() {
  return (
    <main>
      <Helmet>
        <title>Pet Care Blog & Resources | Dog Boarding Tips, Grooming Guides — Premium Pet Bangalore</title>
        <meta name="description" content="Expert pet care advice for Bangalore dog owners — dog boarding tips, grooming guides, daycare vs boarding comparisons, and how to choose a safe boarding facility. From Premium Pet Boarding, Uttarahalli." />
        <meta name="keywords" content="dog boarding tips Bangalore, pet care blog Bangalore, dog grooming guide, dog daycare vs boarding, pet care advice Bangalore, dog boarding guide India, choosing dog boarding facility Bangalore" />
        <link rel="canonical" href={`${BASE}/blog`} />
        <meta property="og:title" content="Pet Care Blog & Resources | Premium Pet Boarding Bangalore" />
        <meta property="og:description" content="Dog boarding tips, grooming guides, and expert pet care advice for Bangalore pet owners." />
        <meta property="og:url" content={`${BASE}/blog`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li aria-current="page">Blog & Resources</li>
            </ol>
          </nav>
          <h1>Pet Care Blog & Resources</h1>
          <p className="lead">
            Expert advice for dog owners in Bangalore — from preparing your dog for boarding to grooming guides, written by the team at <strong>Premium Pet Boarding</strong>.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container" style={{ padding: '60px 24px' }}>
        <div className="blog-posts-grid">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Topics */}
      <section className="service-area-section" style={{ padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h2>Topics We Cover</h2>
          <p className="muted" style={{ maxWidth: '600px', margin: '0 auto 28px' }}>
            Our blog covers everything a Bangalore pet owner needs to know to give their dog or cat the best possible care.
          </p>
          <div className="area-tags">
            {['Dog Boarding Tips', 'Dog Daycare', 'Pet Grooming', 'Dog Walking', 'Pet Nutrition', 'Dog Health', 'Pet Anxiety', 'Breed Guides', 'Bangalore Pet Care', 'Puppy Care'].map(t => (
              <span key={t} className="area-tag">{t}</span>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
