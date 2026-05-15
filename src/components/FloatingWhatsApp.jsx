import React from 'react'
import WhatsAppLogo from '../logo/WhatsApp_icon.png.webp'

export default function FloatingWhatsApp() {
  const phoneNumber = '919738538159'
  const message = encodeURIComponent('Hi! I\'m interested in Premium Pet Boarding\'s services. Can you help me?')

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Chat with us on WhatsApp"
      title="Chat on WhatsApp"
    >
      <img src={WhatsAppLogo} alt="WhatsApp" className="floating-whatsapp-icon" />
    </a>
  )
}

