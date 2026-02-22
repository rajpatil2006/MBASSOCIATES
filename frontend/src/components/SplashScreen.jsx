import { useEffect, useState } from 'react'
import './SplashScreen.css'

export default function SplashScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 3500); // Display splash for 3.5 seconds (allows full animation sequence: logo 0-1s, brand 0.8-1.6s, progress 1.2-3.4s)

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <div className="logo-container">
          {/* Logo/Brand Icon */}
          <div className="logo">
            <span className="logo-text">MB</span>
          </div>
          <h1 className="brand-name">MBASSOCIATES</h1>
        </div>

        {/* Animated Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar"></div>
        </div>

        <p className="loading-text">Loading...</p>
      </div>
    </div>
  );
}
