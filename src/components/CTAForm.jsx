import React, {useState} from 'react'

export default function CTAForm(props){
  const [form, setForm] = useState({name:'',phone:'',email:'',pet:'',service:'Dog Boarding',notes:''})
  const [error, setError] = useState('')
  function handle(e){
    setForm({...form, [e.target.name]: e.target.value})
  }
  function submit(e){
    e.preventDefault()
    if(!form.name || !form.phone){
      setError('Please fill name and phone.')
      return
    }
    setError('')
    // Send booking details via WhatsApp (opens in new tab)
    const phoneNumber = '19738538159' // international format without +
    const message = encodeURIComponent(
      `Booking request:\nName: ${form.name}\nPhone: ${form.phone}${form.email?`\nEmail: ${form.email}`:''}\nPet: ${form.pet}\nService: ${form.service}\nNotes: ${form.notes}`
    )
    const wa = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(wa, '_blank')
  }
  return (
    <section className="cta container" id={props.id}>
      <h2>Request a Booking or Quote</h2>
      <form className="cta-form" onSubmit={submit} noValidate>
        <label>Name<input name="name" value={form.name} onChange={handle} required placeholder="Full name" /></label>
        <label>Phone<input name="phone" value={form.phone} onChange={handle} required placeholder="Phone number" /></label>
        <label>Email<input name="email" type="email" value={form.email} onChange={handle} required placeholder="you@example.com" /></label>
        <label>Pet Details<input name="pet" value={form.pet} onChange={handle} placeholder="Breed, age, special needs" /></label>
        <label>Service
          <select name="service" value={form.service} onChange={handle}>
            <option>Dog Boarding</option>
            <option>Daycare</option>
            <option>Grooming</option>
            <option>Pet Sitting</option>
            <option>Dog Walking</option>
          </select>
        </label>
        <label>Notes<textarea name="notes" value={form.notes} onChange={handle} placeholder="Any special instructions" /></label>
        {error && <div className="form-error" role="alert">{error}</div>}
        <div className="form-actions">
          <button className="btn btn-primary" type="submit">Book Now</button>
          <a className="btn btn-outline" href="tel:+19738538159">Call: (973) 853-8159</a>
        </div>
      </form>
    </section>
  )
}
