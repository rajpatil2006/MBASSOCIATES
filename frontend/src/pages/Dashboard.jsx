import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = ({ userRole, setUserRole }) => {
  const navigate = useNavigate();

  // Security check: If no role is set, kick them back to login
  useEffect(() => {
    if (!userRole) {
      navigate('/login');
    }
  }, [userRole, navigate]);

  const handleLogout = () => {
    setUserRole(null);
    navigate('/login');
  };

  if (!userRole) return null;

  return (
    <div className="dashboard-layout">
      {/* Dashboard Sidebar / Header */}
      <div className="dashboard-header">
        <div className="dashboard-title">
          <h2>MB Associates Portal</h2>
          <span className="role-badge">{userRole} View</span>
        </div>
        <button onClick={handleLogout} className="logout-btn">Log Out</button>
      </div>

      <div className="dashboard-content">
        
        {/* ==========================================
            1. ADMINISTRATOR VIEW (Full Access)
            ========================================== */}
        {userRole === 'Administrator' && (
          <div className="role-section fade-in">
            <h3>Company Overview</h3>
            <div className="card-grid">
              <div className="dash-card finance">
                <h4>📊 Financial Summary</h4>
                <h2>₹4.2 Cr</h2>
                <p>Total Revenue (Q1)</p>
                <button className="action-link">View Full Report →</button>
              </div>
              <div className="dash-card">
                <h4>🏗 Active Projects</h4>
                <h2>4 Sites</h2>
                <p>Baner, Hinjewadi, Nigdi</p>
                <button className="action-link">Manage Sites →</button>
              </div>
              <div className="dash-card">
                <h4>👥 Personnel</h4>
                <h2>142</h2>
                <p>Active Staff & Laborers</p>
                <button className="action-link">User Management →</button>
              </div>
            </div>
          </div>
        )}

        {/* ==========================================
            2. PROJECT MANAGER VIEW (Site Focus)
            ========================================== */}
        {userRole === 'ProjectManager' && (
          <div className="role-section fade-in">
            <h3>Site Management: Serene Villas (Baner)</h3>
            <div className="card-grid">
              <div className="dash-card alert">
                <h4>⚠️ Pending Approvals</h4>
                <p>3 Labor Timesheets need approval.</p>
                <button className="action-btn">Review Timesheets</button>
              </div>
              <div className="dash-card">
                <h4>🧱 Material Inventory</h4>
                <p>Cement: 40 Bags left (Low)</p>
                <button className="action-btn">Order Materials</button>
              </div>
              <div className="dash-card">
                <h4>📅 Schedule</h4>
                <p>Next Milestone: Foundation Curing</p>
                <button className="action-link">Update Gantt Chart →</button>
              </div>
            </div>
          </div>
        )}

        {/* ==========================================
            3. WORKER VIEW (Simplified, Mobile-Friendly)
            ========================================== */}
        {userRole === 'Worker' && (
          <div className="role-section fade-in">
            <h3>My Daily Portal</h3>
            <div className="card-grid worker-grid">
              <div className="dash-card task-card">
                <h4>📝 Today's Tasks</h4>
                <ul>
                  <li><input type="checkbox"/> Complete Sector 4 Brickwork</li>
                  <li><input type="checkbox"/> Clean mixing station</li>
                </ul>
              </div>
              <div className="dash-card">
                <h4>⏱ Log Hours</h4>
                <p>Current Shift: 08:00 AM - 05:00 PM</p>
                <button className="action-btn success">Submit Timesheet</button>
              </div>
              <div className="dash-card">
                <h4>📸 Site Update</h4>
                <p>Upload daily progress photo to supervisor.</p>
                <button className="action-btn">Upload Photo</button>
              </div>
            </div>
          </div>
        )}

        {/* ==========================================
            4. CLIENT VIEW (Transparent, Read-Only)
            ========================================== */}
        {userRole === 'Client' && (
          <div className="role-section fade-in">
            <h3>Project Status: Your Baner Property</h3>
            <div className="card-grid">
              <div className="dash-card progress-card">
                <h4>📈 Overall Progress</h4>
                <div className="progress-bar-bg"><div className="progress-bar-fill" style={{width: '65%'}}></div></div>
                <p>65% Completed</p>
              </div>
              <div className="dash-card">
                <h4>📷 Latest Photos</h4>
                <p>Foundation layout completed on Oct 12th.</p>
                <button className="action-link">View Photo Gallery →</button>
              </div>
              <div className="dash-card finance">
                <h4>💳 Payment Status</h4>
                <p>Next installment due: Nov 1st</p>
                <button className="action-btn">View Invoices</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Dashboard;