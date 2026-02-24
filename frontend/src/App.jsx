/* Version: 1.0.0 */
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './theme.css'
import './App.css'
import SplashScreen from './components/SplashScreen.jsx'
import ProgressLoader from './components/ProgressLoader.jsx'
import Header from './components/Header.jsx'
import EnquireButton from './components/EnquireButton.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Project from './pages/Project.jsx'
function AppContent() {
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    
    return () => clearTimeout(timer)
  }, [location])

  return (
    <div className="app-container">
      <ProgressLoader isLoading={isLoading} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />
           <Route path="/Project" element={<Project/>} />
      </Routes>
      <EnquireButton />
    </div>
  )
}

function App() {
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <Router>
        <AppContent />
      </Router>
    </>
  )
}

export default App
