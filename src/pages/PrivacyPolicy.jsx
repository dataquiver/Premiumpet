import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const BASE = 'https://www.premiumpet.in'

export default function PrivacyPolicy() {
  return (
    <main>
      <Helmet>
        <title>Privacy Policy | Premium Pet Boarding Bangalore</title>
        <meta name="description" content="Privacy Policy for Premium Pet Boarding. Learn how we protect your data and pet information." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${BASE}/privacy`} />
      </Helmet>

      <section className="page-hero">
        <div className="container">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li aria-current="page">Privacy Policy</li>
            </ol>
          </nav>
          <h1>Privacy Policy</h1>
          <p className="lead">Your privacy and the security of your pet's information is important to us.</p>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '800px', padding: '48px 24px' }}>
        <h2>Information We Collect</h2>
        <p>When you use Premium Pet Boarding services, we collect the following information:</p>
        <ul>
          <li>Your name, phone number, and email address</li>
          <li>Your pet's name, breed, age, and medical history</li>
          <li>Dietary restrictions and special care instructions</li>
          <li>Emergency contact information</li>
        </ul>

        <h2 style={{ marginTop: '40px' }}>How We Use Your Information</h2>
        <p>We use the information you provide to:</p>
        <ul>
          <li>Provide boarding, daycare, grooming, and other pet care services</li>
          <li>Communicate with you about your pet's care</li>
          <li>Send updates and photos during your pet's stay</li>
          <li>Respond to inquiries and provide customer support</li>
        </ul>

        <h2 style={{ marginTop: '40px' }}>Data Security</h2>
        <p>We implement appropriate security measures to protect your personal and pet information from unauthorized access, alteration, or disclosure. However, no method of transmission over the Internet is completely secure.</p>

        <h2 style={{ marginTop: '40px' }}>Sharing Your Information</h2>
        <p>We do not share your personal information with third parties except as necessary to provide services (e.g., with veterinarians in case of emergency) or when required by law.</p>

        <h2 style={{ marginTop: '40px' }}>Contact Us</h2>
        <p>If you have questions about our privacy practices, please contact us at:</p>
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
