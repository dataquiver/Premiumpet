import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import GalleryPage from './pages/GalleryPage'
import ServicesPage from './pages/ServicesPage'
import PricingPage from './pages/PricingPage'
import FAQPage from './pages/FAQPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

export default function App(){
  return (
    <div className="site-root">
      <Helmet>
        <html lang="en" />
        <title>Premium Pet Boarding Bangalore — Safe, Loving Dog Boarding & Pet Care</title>
        <meta name="description" content="Professional dog boarding (₹650/night), daycare (₹500/day), grooming, pet sitting & dog walking in Bangalore. 24/7 supervision. Serving Uttarahalli, JP Nagar, Banashankari & all South Bangalore." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <header>
        <Nav />
      </header>

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>

      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
