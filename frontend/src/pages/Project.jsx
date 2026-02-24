import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Project.css'
// Mock Database (This will eventually be replaced by your MongoDB fetch)
const projectsData = [
  {
    id: 1,
    title: "The Pinnacle Tower",
    category: "Commercial",
    location: "Hinjewadi",
    status: "Completed",
    area: "500,000 sq ft",
    year: "2024",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Serene Villas",
    category: "Residential",
    location: "Baner",
    status: "Ongoing",
    area: "120,000 sq ft",
    year: "2026",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Nexus Retail Hub",
    category: "Retail",
    location: "Kalyani Nagar",
    status: "Completed",
    area: "850,000 sq ft",
    year: "2023",
    image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Aura Heights",
    category: "Residential",
    location: "Nigdi",
    status: "Completed",
    area: "200,000 sq ft",
    year: "2025",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "TechPark One",
    category: "Commercial",
    location: "Baner",
    status: "Ongoing",
    area: "450,000 sq ft",
    year: "2026",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
  },
 {
    id: 6,
    title: "MB Logistics Park",
    category: "Industrial",
    location: "Hinjewadi",
    status: "Ongoing",
    area: "1.2M sq ft",
    year: "2025",
    // Replaced with a reliable industrial/warehouse construction image
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
  }
];

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter States
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeLocation, setActiveLocation] = useState('All');
  const [activeStatus, setActiveStatus] = useState('All');

  // Filter Logic
  const filteredProjects = projectsData.filter((project) => {
    const matchCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchLocation = activeLocation === 'All' || project.location === activeLocation;
    const matchStatus = activeStatus === 'All' || project.status === activeStatus;
    return matchCategory && matchLocation && matchStatus;
  });

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="projects-hero">
        <div>
          <h1>Our Portfolio</h1>
          <p>Discover our legacy of engineering excellence across Residential, Commercial, and Retail spaces.</p>
        </div>
      </section>

      {/* Advanced Filter Bar */}
      <div className="filter-container">
        {/* Category Pills */}
        <div className="category-pills">
          {['All', 'Residential', 'Commercial', 'Retail', 'Industrial'].map((cat) => (
            <button 
              key={cat} 
              className={`pill-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dropdown Filters */}
        <div className="dropdown-filters">
          <select 
            className="filter-select" 
            value={activeLocation} 
            onChange={(e) => setActiveLocation(e.target.value)}
          >
            <option value="All">All Locations</option>
            <option value="Baner">Baner</option>
            <option value="Hinjewadi">Hinjewadi</option>
            <option value="Kalyani Nagar">Kalyani Nagar</option>
            <option value="Nigdi">Nigdi</option>
          </select>

          <select 
            className="filter-select" 
            value={activeStatus} 
            onChange={(e) => setActiveStatus(e.target.value)}
          >
            <option value="All">All Statuses</option>
            <option value="Completed">Completed</option>
            <option value="Ongoing">Ongoing</option>
          </select>
        </div>
      </div>

      {/* Dynamic Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              
              <div className="card-image-wrapper">
                <div className={`status-badge ${project.status === 'Completed' ? 'status-completed' : 'status-ongoing'}`}>
                  {project.status}
                </div>
                <img src={project.image} alt={project.title} className="card-image" loading="lazy" />
                
                {/* Hover Details Overlay */}
                <div className="card-overlay">
                  <div className="overlay-stat">
                    <span>Total Area</span>
                    <strong>{project.area}</strong>
                  </div>
                  <div className="overlay-stat">
                    <span>Year</span>
                    <strong>{project.year}</strong>
                  </div>
                </div>
              </div>

              <div className="card-content">
                <span className="card-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p className="card-location">📍 {project.location}, Pune</p>
              </div>

            </div>
          ))
        ) : (
          <div className="no-results">
            <h3>No projects found</h3>
            <p>Try adjusting your filters to see more results.</p>
            <button className="pill-btn active" style={{marginTop: '15px'}} onClick={() => {
              setActiveCategory('All');
              setActiveLocation('All');
              setActiveStatus('All');
            }}>Clear Filters</button>
          </div>
        )}
      </div>

      {/* Reusable Footer Placeholder */}
      <footer className="footer" style={{marginTop: 0}}>
        <div className="section-container" style={{maxWidth: '1200px', margin: '0 auto'}}>
          <div className="footer-bottom" style={{textAlign: 'center', padding: '20px'}}>
            <p>© 2026 MB Associates. Build with Integrity.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Projects;