import React, {useState} from 'react'

const faqs = [
  {q:'Are vaccinations required?', a:'Yes — all pets must be up-to-date on core vaccinations before boarding.'},
  {q:'What do you feed?', a:'Owners can bring their pet’s regular food. We provide measured feeding per instructions.'},
  {q:'How do you handle emergencies?', a:'We have an emergency protocol and local vet partnerships for immediate care.'},
  {q:'Can I see daily updates?', a:'Yes — we provide daily photos and messages via email or text.'}
]

export default function FAQ(){
  const [open, setOpen] = useState(null)
  return (
    <section id="faq" className="faq container">
      <h2>Frequently Asked Questions</h2>
      <div className="accordion">
        {faqs.map((f,i)=> (
          <div className={`accordion-item ${open===i? 'open':''}`} key={i}>
            <button className="accordion-toggle" onClick={()=>setOpen(open===i?null:i)} aria-expanded={open===i}>
              <span>{f.q}</span>
              <span className="chev">{open===i? '−' : '+'}</span>
            </button>
            <div className="accordion-content" aria-hidden={open!==i}>
              <p>{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
