import React from 'react'

const plans = [
  {name:'Boarding - Standard', price:'$40/night', desc:'Shared playtime, comfortable resting area.'},
  {name:'Boarding - Premium', price:'$65/night', desc:'Private suite, extra play sessions, nightly photo update.'},
  {name:'Daycare', price:'$28/day', desc:'Full-day supervised play and rest.'}
]

export default function Pricing(){
  return (
    <section id="pricing" className="pricing container">
      <h2>Pricing & Packages</h2>
      <p className="muted">Transparent starting prices. Contact us for custom packages.</p>
      <div className="pricing-grid">
        {plans.map((p, i)=> (
          <div className="plan" key={i}>
            <h3>{p.name}</h3>
            <div className="price">{p.price}</div>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
      <p className="muted small">* Prices are starting rates. Final cost may vary by size, dates, and special care needs.</p>
    </section>
  )
}
