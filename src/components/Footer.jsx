import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer">
          <strong>Premium Pet Boarding</strong>
          <address>
            no 59, Rajshekar Nilaya<br />
            Srinivas Colony
            ,GT Layout, Uttarahalli Bangalore : 560061<br />
            <a href="tel:+919738538159">(973) 853-8159</a><br />
            <div>Developed By: DataQuiver.in</div>
            <a href="mailto:hello@yourbusiness.com">hello@yourbusiness.com</a>
          </address>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#booking">Book Now</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-note">© {new Date().getFullYear()} Premium Pet Boarding — Proudly serving YourCity.</div>
    </footer>
  )
}
