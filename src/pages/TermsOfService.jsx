import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const BASE = 'https://www.premiumpet.in'

export default function TermsOfService() {
  return (
    <main>
      <Helmet>
        <title>Terms of Service | Premium Pet Boarding Bangalore</title>
        <meta name="description" content="Terms of Service for Premium Pet Boarding. Read our policies for dog boarding, daycare, and pet care services." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${BASE}/terms`} />
      </Helmet>

      <section className="page-hero">
        <div className="container">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li aria-current="page">Terms of Service</li>
            </ol>
          </nav>
          <h1>Terms of Service</h1>
          <p className="lead">Please read these terms carefully before using our services.</p>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '800px', padding: '48px 24px' }}>
        <h2>1. Acceptance of Terms</h2>
        <p>By booking services with Premium Pet Boarding, you agree to these Terms of Service. If you do not agree, please do not use our services.</p>

        <h2 style={{ marginTop: '40px' }}>2. Pet Health & Vaccinations</h2>
        <p>We require all pets to be:</p>
        <ul>
          <li>Up-to-date with vaccinations (DHPPi, Rabies, Kennel Cough)</li>
          <li>Free from contagious diseases or parasites</li>
          <li>In good physical and mental health</li>
        </ul>
        <p>You must disclose any medical conditions, medications, or behavioral issues to Premium Pet Boarding before booking.</p>

        <h2 style={{ marginTop: '40px' }}>3. Liability & Release</h2>
        <p>While we take every precaution to ensure your pet's safety, Premium Pet Boarding is not liable for:</p>
        <ul>
          <li>Injuries or illness that occur despite proper care</li>
          <li>Natural occurrences such as illness or behavioral reactions</li>
          <li>Loss or damage to personal items brought to the facility</li>
        </ul>
        <p>By booking services, you release Premium Pet Boarding from liability for incidents beyond our reasonable control.</p>

        <h2 style={{ marginTop: '40px' }}>4. Payment Terms</h2>
        <p>Payment must be made in full before or upon pet drop-off. We accept cash, UPI, and bank transfer. Late pickups may incur additional charges.</p>

        <h2 style={{ marginTop: '40px' }}>5. Cancellations & Refunds</h2>
        <p>Cancellations made 48 hours before the scheduled service date are eligible for a full refund. Cancellations within 48 hours will forfeit 50% of the booking cost.</p>

        <h2 style={{ marginTop: '40px' }}>6. Behavioral Issues</h2>
        <p>If a pet exhibits aggression or extreme behavioral issues that pose a risk to other pets or staff, Premium Pet Boarding reserves the right to end the service and contact the owner for immediate pickup.</p>

        <h2 style={{ marginTop: '40px' }}>7. Medical Emergencies</h2>
        <p>In case of medical emergency, Premium Pet Boarding will immediately contact you. If you cannot be reached, we may seek veterinary care at your expense to ensure your pet's safety.</p>

        <h2 style={{ marginTop: '40px' }}>8. Photos & Communication</h2>
        <p>We may share photos and updates of your pet via WhatsApp during their stay. By booking, you consent to this communication method.</p>

        <h2 style={{ marginTop: '40px' }}>9. Contact Us</h2>
        <p>For questions about these terms, please contact:</p>
        <p>
          <strong>Premium Pet Boarding</strong><br />
          Phone: <a href="tel:+919738538159">+91 97385 38159</a><br />
          Email: <a href="mailto:hello@premiumpet.in">hello@premiumpet.in</a>
        </p>

        <p style={{ marginTop: '40px', fontSize: '14px', color: 'var(--gray-text)' }}>
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </section>
    </main>
  )
}
