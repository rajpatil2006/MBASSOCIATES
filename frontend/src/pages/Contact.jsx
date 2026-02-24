import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }, 2000);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Connect With Us</h1>
      </section>

      <div className="contact-wrapper">
        {/* Left Info Panel */}
        <div className="contact-info-panel">
          <div className="info-header">
            <h2>Let's Talk</h2>
            <p>Reach out to discuss your dream project or any engineering inquiries.</p>
          </div>

          <div className="info-body">
            <div className="contact-detail">
              <div className="detail-icon">📍</div>
              <div>
                <strong>Location</strong>
                <p>Nigdi-Pradhikaran, Pune, MH 411044</p>
              </div>
            </div>
            <div className="contact-detail">
              <div className="detail-icon">📞</div>
              <div>
                <strong>Call Us</strong>
                <p>+91 98220 00000</p>
              </div>
            </div>
            <div className="contact-detail">
              <div className="detail-icon">✉️</div>
              <div>
                <strong>Email</strong>
                <p>contact@mbassociates.com</p>
              </div>
            </div>
          </div>

          <div className="info-footer">
            <p>Follow our progress on social media.</p>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="contact-form-panel">
          <form onSubmit={handleSubmit} className="form-grid">
            <div className="form-field">
              <label>Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
            </div>
            <div className="form-field">
              <label>Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required />
            </div>
            <div className="form-field full-width">
              <label>Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" required />
            </div>
            <div className="form-field full-width">
              <label>Enquiry Type</label>
              <select name="subject" value={formData.subject} onChange={handleChange} required>
                <option value="">Select a service</option>
                <option value="Residential">Residential Construction</option>
                <option value="Commercial">Commercial Project</option>
                <option value="Civil">Civil Engineering Consultancy</option>
                <option value="Renovation">Renovation</option>
              </select>
            </div>
            <div className="form-field full-width">
              <label>Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="How can we help you?" required></textarea>
            </div>
            <button type="submit" className="submit-btn full-width">
              {isSubmitting ? 'Sending...' : success ? '✓ Message Sent' : 'Request a Callback'}
            </button>
          </form>
        </div>
      </div>

      {/* Real Google Map Feature */}
      <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.273200155097!2d73.7590805751949!3d18.651728782467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e76c6fa207%3A0x1bf5b9200626294b!2sPCCOE%20-%20Pimpri%20Chinchwad%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>



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
                <li><Link to="/Project">Projects</Link></li>
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

export default Contact;