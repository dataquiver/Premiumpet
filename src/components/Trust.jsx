import React from 'react'
import pet1 from '../Assets/pet1.svg'
import pet2 from '../Assets/pet2.svg'

const testimonials = [
  { name: 'Sarah P.', text: 'They treated Luna like family — daily photos and updates put me at ease.' , stars:5, avatar: pet1},
  { name: 'Mark R.', text: 'Excellent staff and clean facility. Highly recommend for dog boarding.' , stars:5, avatar: pet2},
]

export default function Trust(){
  function onAvatarError(e){
    if(e.currentTarget.src !== pet1){
      e.currentTarget.src = pet1
    }
  }

  return (
    <section id="testimonials" className="trust container">
      <h2>Trusted by Pet Owners</h2>
      <p className="muted">Real reviews from local customers — verified and recent.</p>
      <div className="trust-grid">
        <div className="reviews">
          {testimonials.map((t,i)=> (
            <div key={i} className="testimonial">
              <div className="review-head">
                <img
                  src={t.avatar}
                  alt={`${t.name} avatar`}
                  className="avatar"
                  loading="lazy"
                  decoding="async"
                  onError={onAvatarError}
                />
                <div>
                  <strong>{t.name}</strong>
                  <div className="stars" aria-hidden>{'★'.repeat(t.stars)}</div>
                </div>
              </div>
              <p>{t.text}</p>
            </div>
          ))}
        </div>
        <div className="badges">
          <div className="badge">Google ★ 4.9</div>
          <div className="badge">Veterinarian checked</div>
          <div className="badge">Insured & Bonded</div>
        </div>
      </div>
    </section>
  )
}