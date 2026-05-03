import React from 'react'
import Hero from '../components/Hero'
import Trust from '../components/Trust'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Pricing from '../components/Pricing'
import CTAForm from '../components/CTAForm'
import FAQ from '../components/FAQ'
import BlogList from '../components/BlogList'
import Gallery from '../components/Gallery'

export default function Home(){
  return (
    <main>
      <Hero />
      <Trust />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <Pricing />
      <section className="container">
        <h2>Ready to book?</h2>
        <p>Fast booking and a friendly team—book a visit or request a quote today.</p>
      </section>
      <CTAForm id="booking" />
      <FAQ />
      <BlogList />
    </main>
  )
}
