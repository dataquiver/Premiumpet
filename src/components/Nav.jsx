import React, {useEffect, useRef, useState} from 'react'
import { useLocation, Link } from 'react-router-dom'
import logo from '../logo/logo.webp'

const LINKS = [
  {path: '/services', label: 'Services'},
  {path: '/pricing', label: 'Pricing'},
  {path: '/gallery', label: 'Gallery'},
  {path: '/faq', label: 'FAQ'},
  {path: '/blog', label: 'Blog'},
  {path: '/about', label: 'About'},
  {path: '/contact', label: 'Contact'},
]

export default function Nav(){
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)
  const menuRef = useRef(null)
  const toggleRef = useRef(null)
  const location = useLocation()

  useEffect(()=>{
    function updateMenuTop(){
      const navEl = navRef.current
      if(!navEl) return
      const top = Math.round(navEl.offsetHeight)
      document.documentElement.style.setProperty('--mobile-menu-top', `${Math.max(0, top)}px`)
    }
    updateMenuTop()
    window.addEventListener('resize', updateMenuTop)
    return ()=> window.removeEventListener('resize', updateMenuTop)
  },[])

  useEffect(()=>{
    if(!open) return
    function onPointerDown(e){
      if(menuRef.current?.contains(e.target)) return
      if(toggleRef.current?.contains(e.target)) return
      setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return ()=> document.removeEventListener('pointerdown', onPointerDown)
  }, [open])

  useEffect(()=>{
    document.body.classList.toggle('menu-open', open)
    return ()=> document.body.classList.remove('menu-open')
  }, [open])

  useEffect(()=>{ setOpen(false) }, [location.pathname])

  useEffect(()=>{
    function onResize(){ if(window.innerWidth > 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return ()=> window.removeEventListener('resize', onResize)
  },[])

  function handleNavClick(){
    setOpen(false)
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }

  return (
    <nav ref={navRef} className="nav container nav-sticky" aria-label="Main navigation">
      <Link to="/" className="brand" aria-label="Premium Pet Boarding home">
        <img src={logo} alt="Premium Pet Boarding logo" className="brand-logo" />
      </Link>

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
          <li key={l.path}>
            <Link
              to={l.path}
              className={location.pathname === l.path ? 'active' : ''}
              onClick={handleNavClick}
            >{l.label}</Link>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <Link to="/contact" className="btn btn-primary" onClick={handleNavClick}>Book Now</Link>
      </div>
    </nav>
  )
}
