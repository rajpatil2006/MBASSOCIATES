import { useState, useEffect } from 'react'
import resproperty7 from '../assets/images/resproperty7.jpg'
import resproperty8 from '../assets/images/resproperty8.jpg'
import resproperty9 from '../assets/images/resproperty9.jpg'
import resproperty10 from '../assets/images/resproperty10.jpg'
import resproperty11 from '../assets/images/resproperty11.jpg'
import resproperty12 from '../assets/images/resproperty12.jpg'
import './HeroCarousel.css'

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [nextSlide, setNextSlide] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const slides = [
    {
      id: 1,
      image: resproperty7,
      title: 'Luxury Towers',
      location: 'Mumbai, Maharashtra',
      description: 'Premium residential apartments with world-class amenities',
      price: '₹2.5 Cr - ₹5 Cr',
      type: 'Residential',
    },
    {
      id: 2,
      image: resproperty8,
      title: 'Modern Business Complex',
      location: 'Delhi, India',
      description: 'State-of-the-art commercial spaces for your business needs',
      price: '₹50 Lakhs onwards',
      type: 'Commercial',
    },
    {
      id: 3,
      image: resproperty9,
      title: 'Premium Apartment',
      location: 'Bangalore, Karnataka',
      description: 'Spacious 3BHK and 4BHK apartments with modern facilities',
      price: '₹1.8 Cr - ₹3 Cr',
      type: 'Residential',
    },
    {
      id: 4,
      image: resproperty10,
      title: 'City Rental Complex',
      location: 'Pune, Maharashtra',
      description: 'Affordable and comfortable rental properties for families',
      price: '₹30 K - ₹50 K/month',
      type: 'Rental',
    },
    {
      id: 5,
      image: resproperty11,
      title: 'Corporate Office Plaza',
      location: 'Mumbai, Maharashtra',
      description: 'Multi-storey office spaces with dedicated parking facilities',
      price: '₹75 Lakhs onwards',
      type: 'Commercial',
    },
    {
      id: 6,
      image: resproperty12,
      title: 'Luxury Garden Villas',
      location: 'Bangalore, Karnataka',
      description: 'Exclusive villa community with landscaped gardens and pools',
      price: '₹3.5 Cr - ₹7 Cr',
      type: 'Residential',
    },
  ]

  // Auto-play carousel with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setNextSlide((prev) => (prev + 1) % slides.length)
      }, 800)

      setTimeout(() => {
        setIsTransitioning(false)
      }, 1600)
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index) => {
    if (isTransitioning) return
    setIsTransitioning(true)

    setTimeout(() => {
      setCurrentSlide(index)
      setNextSlide((index + 1) % slides.length)
    }, 800)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 1600)
  }

  const slide = slides[currentSlide]

  return (
    <section className="hero-carousel">
      <div className="carousel-wrapper">
        {/* Main Slide */}
        <div className="slide-container">
          <div
            className={`slide main-slide ${isTransitioning ? 'transitioning' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay */}
            <div className="slide-overlay"></div>

            {/* Content */}
            <div className={`slide-content ${!isTransitioning ? 'visible' : ''}`}>
              <div className="content-inner">
                <span className="property-type">{slide.type}</span>
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-location">📍 {slide.location}</p>
                <p className="slide-description">{slide.description}</p>
                <div className="slide-footer">
                  <span className="slide-price">{slide.price}</span>
                  <button className="slide-btn">Explore Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicators - Only Dots (No Arrows) */}
        <div className="carousel-dots">
          {slides.map((s, index) => (
            <button
              key={s.id}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              disabled={isTransitioning}
            ></button>
          ))}
        </div>
      </div>

      {/* Info Panel */}
      <div className="info-panel">
        <div className="info-content">
          <div className="info-item">
            <span className="info-label">Featured Property</span>
            <h3 className="info-title">{slide.title}</h3>
          </div>
          <div className="info-divider"></div>
          <div className="info-item">
            <span className="info-label">Location</span>
            <p className="info-text">{slide.location}</p>
          </div>
          <div className="info-divider"></div>
          <div className="info-item">
            <span className="info-label">Price Range</span>
            <p className="info-text">{slide.price}</p>
          </div>
          <div className="info-divider"></div>
          <div className="info-item">
            <button className="info-btn">View Details</button>
          </div>
        </div>
      </div>
    </section>
  )
}

