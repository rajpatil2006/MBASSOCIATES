/* Version: 1.0.2 */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  // Always start at the top when navigating to this page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay">
          <h1>Crafting Excellence</h1>
          <p>The visionaries behind MB Associates, building the landmarks of tomorrow.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content-section">
        <div className="about-grid">
          <div className="about-text-block">
            <h2 className="section-title">Our Vision</h2>
            <p>
              To be the most trusted and innovative real estate partner, creating 
              sustainable spaces that enhance the quality of life. At MB Associates, 
              we don't just build structures; we build legacies that stand the test of time.
            </p>
            
            <h2 className="section-title" style={{marginTop: '40px'}}>Our Mission</h2>
            <p>
              To provide top-tier construction and real estate solutions through 
              unwavering transparency, expert engineering, and a client-first approach. 
              Our mission is to exceed expectations at every square foot we develop.
            </p>
          </div>

          <div className="about-image-block">
            {/* AI Generated Style Image: High-end construction */}
 <img 
  src="https://images.unsplash.com/photo-1541888941295-1e8762df434b?q=80&w=1200&auto=format&fit=crop" 
  alt="MB Associates Construction Excellence" 
  className="about-img"
  loading="eager"
  onError={(e) => {
    e.target.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop";
  }}
/>
          </div>
        </div>
      </section>

      {/* Interactive Core Values */}
      <section className="values-section">
        <div className="section-container" style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 className="section-title text-center" style={{display: 'block', textAlign: 'center'}}>
            Our Core Values
          </h2>
          <div className="values-grid">
            <div className="value-item">
              <span className="value-icon-circle">🏗️</span>
              <h3>Unmatched Quality</h3>
              <p>We source premium materials and employ master craftsmen to ensure every brick is laid with perfection.</p>
            </div>
            
            <div className="value-item">
              <span className="value-icon-circle">🤝</span>
              <h3>Absolute Integrity</h3>
              <p>Transparent dealings and honest communication are the pillars of our relationship with every client.</p>
            </div>
            
            <div className="value-item">
              <span className="value-icon-circle">🌱</span>
              <h3>Modern Innovation</h3>
              <p>Integrating green-building technology and smart design to create future-proof environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Consistent with Home page) */}
      <footer className="footer">
        <div className="section-container" style={{maxWidth: '1200px', margin: '0 auto'}}>
          <div className="footer-content">
            <div className="footer-section">
              <h4>About MB Associates</h4>
              <p>Leading the way in premium real estate and construction solutions.</p>
            </div>
            <div className="footer-section">
              <h4>Navigation</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Get In Touch</h4>
              <p>📞 +91 XXXX XXXX XX</p>
              <p>📧 info@mbassociates.com</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 MB Associates. Engineered for Excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;