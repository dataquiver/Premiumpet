import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Footer(){
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }

  const handleFooterNavigate = (to) => (event) => {
    event.preventDefault()
    const [targetPath] = to.split('#')
    const isSamePath = location.pathname === targetPath

    if(isSamePath){
      scrollToTop()
      requestAnimationFrame(scrollToTop)
      return
    }

    navigate(to)
    scrollToTop()
    requestAnimationFrame(scrollToTop)
  }

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer footer-brand-col">
          <strong className="footer-brand">Premium Pet Boarding</strong>
          <p className="footer-tagline">Bangalore's trusted pet care — dog boarding, daycare, grooming & more.</p>
          <address className="footer-contact" aria-label="Contact details">
            <p>Uttarahalli, GT Layout<br />Bangalore, Karnataka 560061</p>
            <p><a href="tel:+919738538159">(+91) 973 853 8159</a></p>
            <p><a href="mailto:hello@premiumpet.in">hello@premiumpet.in</a></p>
          </address>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            <li><Link to="/services" onClick={handleFooterNavigate('/services')}>Dog Boarding</Link></li>
            <li><Link to="/services" onClick={handleFooterNavigate('/services')}>Dog Daycare</Link></li>
            <li><Link to="/services" onClick={handleFooterNavigate('/services')}>Pet Grooming</Link></li>
            <li><Link to="/services" onClick={handleFooterNavigate('/services')}>Pet Sitting</Link></li>
            <li><Link to="/services" onClick={handleFooterNavigate('/services')}>Dog Walking</Link></li>
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/" onClick={handleFooterNavigate('/')}>Home</Link></li>
            <li><Link to="/about" onClick={handleFooterNavigate('/about')}>About Us</Link></li>
            <li><Link to="/pricing" onClick={handleFooterNavigate('/pricing')}>Pricing</Link></li>
            <li><Link to="/gallery" onClick={handleFooterNavigate('/gallery')}>Gallery</Link></li>
            <li><Link to="/faq" onClick={handleFooterNavigate('/faq')}>FAQ</Link></li>
            <li><Link to="/blog" onClick={handleFooterNavigate('/blog')}>Blog</Link></li>
            <li><Link to="/contact" onClick={handleFooterNavigate('/contact')}>Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Legal</h4>
          <ul>
            <li><Link to="/privacy" onClick={handleFooterNavigate('/privacy')}>Privacy Policy</Link></li>
            <li><Link to="/terms" onClick={handleFooterNavigate('/terms')}>Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="container footer-note">
        © {new Date().getFullYear()} Premium Pet Boarding — Proudly serving Bangalore, Karnataka.
        &nbsp;|&nbsp; <a href="https://maps.google.com/?q=Premium+Pet+Boarding+Uttarahalli+Bangalore" target="_blank" rel="noreferrer">Google Maps</a>
        <br />
        Dev by <a href="https://dataquiver.in" target="_blank" rel="noreferrer">DataQuiver</a>
      </div>
    </footer>
  )
}
