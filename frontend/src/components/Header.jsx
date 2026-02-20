import { useState } from 'react'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    message: '',
  })

  const menuItems = ['Home', 'About', 'Projects', 'Contact']

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Enquiry submitted:', formData)
    alert('Thank you for your enquiry! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', propertyType: '', message: '' })
    setIsModalOpen(false)
  }

  return (
    <>
      <header className="header">
        <div className="header-container">
          {/* Logo Section */}
          <div className="logo-section">
            <div className="logo-circle">
              <span className="logo-text">MB</span>
            </div>
            <div className="company-info">
              <h1 className="company-name">MB ASSOCIATES</h1>
              <p className="company-subtitle">REAL ESTATE</p>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Enquire Now Button */}
          <button
            className="header-enquire-btn"
            onClick={() => setIsModalOpen(true)}
            aria-label="Open enquiry form"
          >
            <span className="btn-text">Enquire Now</span>
            <span className="btn-arrow">→</span>
          </button>

          {/* Hamburger Menu */}
          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
            >
              ✕
            </button>

            <h2 className="modal-title">Enquire About Properties</h2>
            <p className="modal-subtitle">Get in touch with us to find your perfect property</p>

            <form onSubmit={handleSubmit} className="enquiry-form">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
              />

              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                required
                className="form-input"
              >
                <option value="">Select Property Type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="rental">Rental</option>
              </select>

              <textarea
                name="message"
                placeholder="Your Message (Optional)"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="form-textarea"
              ></textarea>

              <button type="submit" className="submit-btn">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
