import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import GalleryPage from './pages/GalleryPage'

export default function App(){
  return (
    <div className="site-root">
      <Helmet>
        <html lang="en" />
        <title>Premium Pet Boarding — Safe, Loving Pet Care in YourCity</title>
        <meta name="description" content="Professional dog boarding, daycare, grooming, and pet sitting. Trusted caregivers, 24/7 attention, and a safe, clean facility in YourCity." />
      </Helmet>

      <header>
        <Nav />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>

      <Footer />
    </div>
  )
}
