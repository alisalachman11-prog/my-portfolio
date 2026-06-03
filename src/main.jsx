import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CaseStudy from './pages/CaseStudy.jsx'
import { initAnalytics, capturePageview } from './lib/analytics.js'
import './styles/tokens.css'
import './styles/global.css'

initAnalytics()

// Fires a pageview on every route change (SPA navigation doesn't reload).
function RouteAnalytics() {
  const { pathname } = useLocation()
  useEffect(() => {
    capturePageview(pathname)
  }, [pathname])
  return null
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <RouteAnalytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
