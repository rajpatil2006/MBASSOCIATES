import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = ({ setUserRole }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [demoRole, setDemoRole] = useState('Administrator');

  const handleLogin = (e) => {
    e.preventDefault();
    setUserRole(demoRole);
    navigate('/dashboard');
  };

  return (
    <div className="login-page-wrapper">
      
      {/* 1. The Main Content Area (Expands to push footer down) */}
      <div className="login-content">
        <div className="login-container">
          <div className="login-header">
            <h2>Portal Login</h2>
            <p>Secure access for MB Associates staff and clients.</p>
          </div>

          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                placeholder="name@mbassociates.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>

            <div className="form-group demo-group">
              <label>🛠 Demo: Login As</label>
              <select value={demoRole} onChange={(e) => setDemoRole(e.target.value)}>
                <option value="Administrator">Administrator (Owner)</option>
                <option value="ProjectManager">Project Manager (Supervisor)</option>
                <option value="Worker">Worker / Foreman</option>
                <option value="Client">Client / Property Owner</option>
              </select>
            </div>

            <button type="submit" className="login-btn">Access Dashboard</button>
          </form>
        </div>
      </div>

      {/* 2. The Footer (Sits safely at the bottom) */}
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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
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
  );
};

export default Login;