import React from 'react'

export default function WhyChooseUs(){
  const points = [
    'Experienced, trained caregivers',
    'Secure, clean facility with CCTV',
    'Personalized feeding and medication plans',
    '24/7 on-site staff and emergency protocols',
    'Daily activity updates and photos'
  ]
  return (
    <section className="why container">
      <h2>Why Choose Us</h2>
      <p className="muted">We focus on safety, comfort, and clear communication.</p>
      <ul className="why-list">
        {points.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </section>
  )
}
