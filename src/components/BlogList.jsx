import React from 'react'
import { Link } from 'react-router-dom'

const posts = [
  {
    title: 'How to Prepare Your Dog for Boarding in Bangalore',
    slug: 'how-to-prepare-your-dog-for-boarding',
    date: 'April 10, 2025',
    category: 'Dog Boarding',
    excerpt: 'First time boarding your dog? Here\'s everything you need to do in the days before drop-off to make the transition stress-free for your pet.'
  },
  {
    title: 'Complete Dog Grooming Guide for Bangalore Pet Owners',
    slug: 'dog-grooming-guide-bangalore',
    date: 'March 22, 2025',
    category: 'Grooming',
    excerpt: 'From coat brushing to professional grooming frequency — a complete guide to keeping your dog clean, healthy, and well-groomed in Bangalore\'s climate.'
  },
  {
    title: 'Dog Daycare Benefits: Why Social Dogs Thrive in Group Settings',
    slug: 'dog-daycare-benefits',
    date: 'March 5, 2025',
    category: 'Dog Daycare',
    excerpt: 'Discover how regular dog daycare improves behaviour, fitness, and mental stimulation. Learn what to look for in a quality daycare facility.'
  },
  {
    title: 'Finding the Best Dog Walking Service in South Bangalore',
    slug: 'best-dog-walking-service',
    date: 'February 18, 2025',
    category: 'Dog Walking',
    excerpt: 'Busy schedule? A professional dog walker keeps your pet active and healthy. Here\'s how to find a trusted walker in Bangalore.'
  }
]

export default function BlogList(){
  return (
    <section id="blog" className="blog container">
      <h2>Resources & Blog</h2>
      <p className="muted">Helpful articles to prepare your pet and keep them healthy.</p>
      <div className="blog-posts-grid">
        {posts.map((p) => (
          <article key={p.slug} className="blog-post-card">
            <Link to={`/blog/${p.slug}`}>
              <h3 className="bpc-title">{p.title}</h3>
              <p className="bpc-excerpt muted">{p.excerpt}</p>
              <div className="bpc-meta">
                <span className="bpc-category">{p.category}</span>
                <span className="bpc-date">{p.date}</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
