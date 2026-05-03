import React from 'react'

const posts = [
  {title:'Preparing Your Dog for Boarding', slug:'#', excerpt:'Tips to make your dog comfortable during their stay.'},
  {title:'Grooming Basics at Home', slug:'#', excerpt:'Simple grooming routines every owner can follow.'}
]

export default function BlogList(){
  return (
    <section id="blog" className="blog container">
      <h2>Resources & Blog</h2>
      <p className="muted">Helpful articles to prepare your pet and keep them healthy.</p>
      <div className="blog-grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'1rem',marginTop:'1rem'}}>
        {posts.map((p,i)=> (
          <article key={i} className="blog-item card-anim" style={{background:'#fff',padding:'1rem',borderRadius:'12px',boxShadow:'0 10px 30px rgba(16,24,40,0.04)'}}>
            <a href={p.slug}>
              <h3>{p.title}</h3>
              <p className="muted">{p.excerpt}</p>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
