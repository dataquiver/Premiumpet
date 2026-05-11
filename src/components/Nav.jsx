import React, {useEffect, useRef, useState} from 'react'
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
  const navRef = useRef(null)
  const menuRef = useRef(null)
  const toggleRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(()=>{
    function updateMenuTop(){
      const navEl = navRef.current
      if(!navEl) return
      const headerEl = navEl.closest('header')
      const top = headerEl ? Math.round(headerEl.getBoundingClientRect().height) : Math.round(navEl.getBoundingClientRect().height)
      document.documentElement.style.setProperty('--mobile-menu-top', `${Math.max(0, top)}px`)
    }

    updateMenuTop()
    window.addEventListener('resize', updateMenuTop)
    return ()=>{
      window.removeEventListener('resize', updateMenuTop)
    }
  },[])

  useEffect(()=>{
    if(!open) return

    function onPointerDown(e){
      const target = e.target
      if(menuRef.current?.contains(target)) return
      if(toggleRef.current?.contains(target)) return
      setOpen(false)
    }

    document.addEventListener('pointerdown', onPointerDown)
    return ()=> document.removeEventListener('pointerdown', onPointerDown)
  }, [open])

  useEffect(()=>{
    document.body.classList.toggle('menu-open', open)
    return ()=> document.body.classList.remove('menu-open')
  }, [open])

  useEffect(()=>{
    setOpen(false)
  }, [location.pathname])

  useEffect(()=>{
    function onResize(){
      if(window.innerWidth > 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return ()=> window.removeEventListener('resize', onResize)
  },[])

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
    <nav ref={navRef} className="nav container nav-sticky" aria-label="Main navigation">
      <div className="brand">Premium Pet Boarding</div>

      <button ref={toggleRef} className={`hamburger ${open? 'open':''}`} aria-label="Toggle menu" onClick={()=>setOpen(!open)}>
        <span />
        <span />
        <span />
      </button>

      <button
        className={`nav-backdrop ${open ? 'open' : ''}`}
        aria-label="Close menu"
        aria-hidden={!open}
        onClick={()=>setOpen(false)}
      />

      <ul ref={menuRef} className={`nav-links ${open? 'open':''}`}>
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
