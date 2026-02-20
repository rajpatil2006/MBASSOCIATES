import { useState } from 'react'
import './SearchFilter.css'

export default function SearchFilter({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [propertyType, setPropertyType] = useState('all')
  const [city, setCity] = useState('all')

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch({ searchTerm, propertyType, city })
  }

  return (
    <section className="search-section">
      <div className="search-container">
        <h2 className="search-title">Find Your Dream Property</h2>

        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-input-group">
            <div className="search-field">
              <input
                type="text"
                placeholder="Search by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <span className="search-icon">🔍</span>
            </div>

            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="search-select"
            >
              <option value="all">All Properties</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="rental">Rental</option>
            </select>

            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="search-select"
            >
              <option value="all">All Cities</option>
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi</option>
              <option value="bangalore">Bangalore</option>
              <option value="pune">Pune</option>
            </select>

            <button type="submit" className="search-btn">
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
