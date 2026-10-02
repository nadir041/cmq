import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const Home = lazy(() => import('./pages/Home'))
const GetFreeQuotes = lazy(() => import('./pages/GetFreeQuotes'))
const TermsConditions = lazy(() => import('./pages/TermsConditions'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const DoNotSellMyPersonalInformation = lazy(() => import('./pages/DoNotSellMyPersonalInformation'))
const DNCPolicy = lazy(() => import('./pages/DNCPolicy'))
const MarketingPartners = lazy(() => import('./pages/MarketingPartners'))

const LoadingFallback = () => (
  <div style={{
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--color-primary)',
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
  }}>
    Loading...
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          top: 8,
          left: 8,
          background: 'var(--color-primary)',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '4px',
          zIndex: 9999,
          textDecoration: 'none',
          fontSize: '14px',
          opacity: 0,
          pointerEvents: 'none',
        }}
        onFocus={e => { e.target.style.opacity = 1; e.target.style.pointerEvents = 'auto' }}
        onBlur={e => { e.target.style.opacity = 0; e.target.style.pointerEvents = 'none' }}
      >
        Skip to main content
      </a>

      <Header />

      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-free-quotes" element={<GetFreeQuotes />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/do-not-sell" element={<DoNotSellMyPersonalInformation />} />
          <Route path="/dnc-policy" element={<DNCPolicy />} />
          <Route path="/marketing-partners" element={<MarketingPartners />} />
        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  )
}

export default App
