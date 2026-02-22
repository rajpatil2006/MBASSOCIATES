/* Version: 1.0.0 */
import { useState, useEffect } from 'react'
import ProjectCard from './ProjectCard.jsx'
import './ProjectsCarousel.css'

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  const projects = [
    {
      id: 1,
      name: 'Luxury Towers',
      city: 'Mumbai',
      type: 'Residential',
      emoji: '🏢',
      color1: '#D4AF37',
      color2: '#F0E68C',
    },
    {
      id: 2,
      name: 'Business Hub',
      city: 'Delhi',
      type: 'Commercial',
      emoji: '🏭',
      color1: '#4A4A4A',
      color2: '#2C2C2C',
    },
    {
      id: 3,
      name: 'Premium Flats',
      city: 'Bangalore',
      type: 'Residential',
      emoji: '🏠',
      color1: '#D4AF37',
      color2: '#B8860B',
    },
    {
      id: 4,
      name: 'City Rentals',
      city: 'Pune',
      type: 'Rental',
      emoji: '🏘️',
      color1: '#F0E68C',
      color2: '#D4AF37',
    },
    {
      id: 5,
      name: 'Office Plaza',
      city: 'Mumbai',
      type: 'Commercial',
      emoji: '🏢',
      color1: '#3C3C3C',
      color2: '#2C2C2C',
    },
    {
      id: 6,
      name: 'Garden Villas',
      city: 'Bangalore',
      type: 'Residential',
      emoji: '🌳',
      color1: '#B8860B',
      color2: '#D4AF37',
    },
  ]

  // Handle responsive design
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setItemsPerView(1)
      } else if (window.innerWidth < 768) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, projects.length - itemsPerView + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, projects.length - itemsPerView) : prev - 1
    )
  }

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <h2 className="carousel-title">Current Projects</h2>

        <div className="carousel-wrapper">
          <button className="carousel-btn prev-btn" onClick={prevSlide} aria-label="Previous">
            ←
          </button>

          <div className="carousel-viewport">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(calc(-${currentIndex * (100 / itemsPerView)}%))`,
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="carousel-item"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-btn next-btn" onClick={nextSlide} aria-label="Next">
            →
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {Array.from({
            length: Math.max(1, projects.length - itemsPerView + 1),
          }).map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}
