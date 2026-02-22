import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './theme.css'
import './App.css'
import SplashScreen from './components/SplashScreen'
import ProgressLoader from './components/ProgressLoader'
import Header from './components/Header'
import EnquireButton from './components/EnquireButton'
import Home from './pages/Home'

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
