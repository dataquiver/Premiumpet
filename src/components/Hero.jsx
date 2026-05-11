import React from 'react'
import boarding3 from '../Assets/boarding3.webp'

export default function Hero(){
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>Safe, Loving, Professional Dog Boarding & Pet Care</h1>
          <p className="lead">Trusted caregivers, 24/7 attention, clean facilities, and personalized care for your pet while you're away. Serving YourCity and nearby areas.</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#booking">Book Now</a>
            <a className="btn btn-outline" href="#services">View Services</a>
          </div>
          <ul className="hero-trust">
            <li>24/7 Staff</li>
            <li>Vaccination Checked</li>
            <li>Daily Updates</li>
          </ul>
        </div>
        <div className="hero-media">
          <img src={boarding3} alt="Happy dogs having fun at boarding facility" loading="eager" decoding="async" />
        </div>
      </div>
    </section>
  )
}
