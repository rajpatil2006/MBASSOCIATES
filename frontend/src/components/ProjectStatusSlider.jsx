import { useState, useEffect } from 'react'
import resproperty7 from '../assets/images/resproperty7.jpg'
import resproperty8 from '../assets/images/resproperty8.jpg'
import resproperty9 from '../assets/images/resproperty9.jpg'
import resproperty10 from '../assets/images/resproperty10.jpg'
import resproperty11 from '../assets/images/resproperty11.jpg'
import resproperty12 from '../assets/images/resproperty12.jpg'
import './ProjectStatusSlider.css'

const projectsData = {
  completed: [
    {
      id: 1,
      title: 'Downtown Plaza',
      location: 'Mumbai',
      image: resproperty7,
      price: '₹2.3 Cr',
      units: '120 units',
    },
    {
      id: 2,
      title: 'Seaside Towers',
      location: 'Bangalore',
      image: resproperty8,
      price: '₹1.8 Cr',
      units: '95 units',
    },
    {
      id: 3,
      title: 'Heritage Hills',
      location: 'Pune',
      image: resproperty9,
      price: '₹1.2 Cr',
      units: '75 units',
    },
  ],
  ongoing: [
    {
      id: 4,
      title: 'Green Valley Homes',
      location: 'Bangalore',
      image: resproperty10,
      price: '₹2.8 Cr',
      units: '150 units',
    },
    {
      id: 5,
      title: 'Skyline Residency',
      location: 'Mumbai',
      image: resproperty11,
      price: '₹3.2 Cr',
      units: '180 units',
    },
    {
      id: 6,
      title: 'Urban Oasis',
      location: 'Delhi',
      image: resproperty12,
      price: '₹2.5 Cr',
      units: '110 units',
    },
  ],
  future: [
    {
      id: 7,
      title: 'Quantum City',
      location: 'Hyderabad',
      image: resproperty7,
      price: '₹4.5 Cr',
      units: '250 units',
    },
    {
      id: 8,
      title: 'Metro Heights',
      location: 'Bangalore',
      image: resproperty8,
      price: '₹3.8 Cr',
      units: '200 units',
    },
    {
      id: 9,
      title: 'Pinnacle Tower',
      location: 'Mumbai',
      image: resproperty9,
      price: '₹5.2 Cr',
      units: '300 units',
    },
  ],
}

export default function ProjectStatusSlider() {
  const [activeTab, setActiveTab] = useState('completed')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const projects = projectsData[activeTab]

  // Auto-slide effect (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [projects.length])

  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setIsTransitioning(true)
      setTimeout(() => {
        setActiveTab(tab)
        setCurrentIndex(0)
        setIsTransitioning(false)
      }, 300)
    }
  }

  const handleNext = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
      setIsTransitioning(false)
    }, 300)
  }

  const handlePrev = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <section className="project-status-slider">
      <div className="status-container">
        {/* Section Header */}
        <div className="slider-header">
          <h2 className="slider-title">Our Portfolio</h2>
          <p className="slider-subtitle">Explore our latest and upcoming projects</p>
        </div>

        {/* Tab Buttons */}
        <div className="status-tabs">
          {['completed', 'ongoing', 'future'].map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => handleTabChange(tab)}
            >
              <span className="tab-label">{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
              <span className="tab-indicator"></span>
            </button>
          ))}
        </div>

        {/* Projects Slider */}
        <div className="slider-wrapper">
          <div className={`projects-slider ${isTransitioning ? 'transitioning' : ''}`}>
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`slider-card ${index === currentIndex ? 'active' : ''}`}
              >
                <div className="card-image-wrapper">
                  <img src={project.image} alt={project.title} className="card-image" />
                  <div className="card-overlay"></div>
                </div>

                <div className="card-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-location">📍 {project.location}</p>

                  <div className="project-stats">
                    <div className="stat">
                      <span className="stat-label">Investment</span>
                      <span className="stat-value">{project.price}</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat">
                      <span className="stat-label">Units</span>
                      <span className="stat-value">{project.units}</span>
                    </div>
                  </div>

                  <button className="explore-btn">
                    Explore Project
                    <span className="btn-arrow">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button className="nav-arrow prev" onClick={handlePrev} aria-label="Previous">
            ‹
          </button>
          <button className="nav-arrow next" onClick={handleNext} aria-label="Next">
            ›
          </button>

          {/* Slide Indicators */}
          <div className="slide-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => {
                  setIsTransitioning(true)
                  setTimeout(() => {
                    setCurrentIndex(index)
                    setIsTransitioning(false)
                  }, 300)
                }}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Project Counter */}
        <div className="project-counter">
          <span className="counter-text">
            {currentIndex + 1} / {projects.length}
          </span>
        </div>
      </div>
    </section>
  )
}
