import React, {useEffect, useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const LINKS = [
  {id: 'services', label: 'Services'},
  {id: 'pricing', label: 'Pricing'},
  {id: 'faq', label: 'FAQ'},
  {id: 'gallery', label: 'Gallery'},
  {id: 'blog', label: 'Resources'},
]

export default function Nav(){
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(()=>{
    function onScroll(){
      let current = ''
      for(const link of LINKS){
        const el = document.getElementById(link.id)
        if(el){
          const rect = el.getBoundingClientRect()
          if(rect.top <= 120) current = link.id
        }
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, {passive:true})
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  function scrollTo(e, id){
    e.preventDefault()
    // If gallery route, navigate to /gallery
    if(id === 'gallery'){
      setOpen(false)
      navigate('/gallery')
      return
    }
    // For other ids, perform smooth scroll
    const el = document.getElementById(id)
    if(el){
      el.scrollIntoView({behavior:'smooth', block:'start'})
      setOpen(false)
    } else {
      // If not on home page, navigate home first then scroll
      if(location.pathname !== '/'){
        navigate('/')
        setTimeout(()=>{
          const target = document.getElementById(id)
          if(target) target.scrollIntoView({behavior:'smooth', block:'start'})
        }, 350)
      }
    }
  }

  return (
    <nav className="nav container nav-sticky" aria-label="Main navigation">
      <div className="brand">Premium Pet Boarding</div>

      <button className={`hamburger ${open? 'open':''}`} aria-label="Toggle menu" onClick={()=>setOpen(!open)}>
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav-links ${open? 'open':''}`}>
        {LINKS.map(l=> (
          <li key={l.id}><a href={`#${l.id}`} onClick={(e)=>scrollTo(e,l.id)} className={active===l.id? 'active':''}>{l.label}</a></li>
        ))}
      </ul>

      <div className="nav-actions">
        <a href="#booking" className="btn btn-primary" onClick={(e)=>scrollTo(e,'booking')}>Book Now</a>
      </div>
    </nav>
  )
}
