import SearchFilter from '../components/SearchFilter.jsx'
import ProjectStatusSlider from '../components/ProjectStatusSlider.jsx'
import HeroCarousel from '../components/HeroCarousel.jsx'
import choose1 from '../assets/images/choose1.png'
import choose2 from '../assets/images/choose2.png'
import choose3 from '../assets/images/choose3.png'
import choose4 from '../assets/images/choose4.png'
import './Home.css'

export default function Home() {
  const handleSearch = (filters) => {
    console.log('Searching with filters:', filters)
  }

  return (
    <div className="home-container">
      <HeroCarousel />
      <SearchFilter onSearch={handleSearch} />
      <ProjectStatusSlider />

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="section-container">
          <h2 className="section-title">Why Choose MB Associates</h2>
          <div className="features-grid">
            <div className="feature-item">
              <img src={choose1} alt="Excellence" className="feature-icon" />
              <h3>Excellence</h3>
              <p>Award-winning real estate solutions with proven track record</p>
            </div>
            <div className="feature-item">
              <img src={choose2} alt="Expert Team" className="feature-icon" />
              <h3>Expert Team</h3>
              <p>Dedicated professionals with years of industry experience</p>
            </div>
            <div className="feature-item">
              <img src={choose3} alt="Best Prices" className="feature-icon" />
              <h3>Best Prices</h3>
              <p>Competitive pricing with transparent deals</p>
            </div>
            <div className="feature-item">
              <img src={choose4} alt="Quick Service" className="feature-icon" />
              <h3>Quick Service</h3>
              <p>Fast processing and quick property transfers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics">
        <div className="section-container">
          <h2 className="section-title">Our Achievements</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <p className="stat-label">Properties Sold</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">1000+</div>
              <p className="stat-label">Happy Clients</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">20+</div>
              <p className="stat-label">Years Experience</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <p className="stat-label">Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Find Your Perfect Property?</h2>
          <p>Contact us today for personalized property consultation</p>
          <button className="cta-btn">Get Started Today</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="section-container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>About Us</h4>
              <p>MB Associates - Leading real estate solutions provider</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>📞 +91 XXXX XXXX XX</p>
              <p>📧 info@mbassociates.com</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 MB Associates. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
