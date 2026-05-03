import React from 'react'

const items = [
  {title:'Dog Boarding', icon:'dog', desc:'Overnight stays in safe, comfortable suites with playtime and regular updates.'},
  {title:'Daycare', icon:'sun', desc:'Supervised daytime play, socialization, and exercise.'},
  {title:'Grooming', icon:'scissors', desc:'Full-service grooming, baths, and styling by trained groomers.'},
  {title:'Pet Sitting', icon:'home', desc:'In-home care for pets who are more comfortable at home.'},
  {title:'Dog Walking', icon:'walk', desc:'Short walks to full exercise sessions, tailored to your dog.'},
]

function Icon({name}){
  switch(name){
    case 'dog': return (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M4 11c0-1.657 1.343-3 3-3h1v6H7c-1.657 0-3-1.343-3-3z" fill="#6AA84F"/>
        <path d="M14 8h1c1.657 0 3 1.343 3 3v4h-4v-7z" fill="#F4C542"/>
        <circle cx="9" cy="7" r="1.5" fill="#fff" />
      </svg>
    )
    case 'sun': return (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="12" cy="12" r="4" fill="#F4C542" />
      </svg>
    )
    case 'scissors': return (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M4 7l8 8" stroke="#6AA84F" strokeWidth="2" strokeLinecap="round"/>
        <path d="M4 15l8-8" stroke="#6AA84F" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
    case 'home': return (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M3 11l9-7 9 7v8a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-8z" fill="#6AA84F"/>
      </svg>
    )
    case 'walk': return (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M6 20l2-6 4-4 3 3v7" stroke="#6AA84F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="18" cy="5" r="1.5" fill="#F4C542" />
      </svg>
    )
    default: return null
  }
}

export default function Services(){
  return (
    <section id="services" className="services container">
      <h2>Our Services</h2>
      <p className="muted">Comprehensive care to keep your pet happy and healthy.</p>
      <div className="services-grid">
        {items.map((s,idx)=> (
          <article key={idx} className="service-card card-anim">
            <div className="service-icon"><Icon name={s.icon} /></div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <a className="service-more" href="#booking">Book {s.title.split(' ')[0]}</a>
          </article>
        ))}
      </div>
    </section>
  )
}
