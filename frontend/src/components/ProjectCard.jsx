/* Version: 1.0.0 */
import './ProjectCard.css'

export default function ProjectCard({ project, index }) {
  return (
    <div className="carousel-project-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="project-image-container">
        <div
          className="project-image"
          style={{
            background: `linear-gradient(135deg, ${project.color1} 0%, ${project.color2} 100%)`,
          }}
        >
          <span className="project-emoji">{project.emoji}</span>
        </div>
        <div className="project-overlay">
          <button className="view-btn">View Details</button>
        </div>
      </div>

      <div className="project-info">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-city">📍 {project.city}</p>
        <div className="project-type-badge">{project.type}</div>
      </div>
    </div>
  )
}
