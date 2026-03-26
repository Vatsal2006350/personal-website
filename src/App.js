import { useState, useEffect, useMemo } from 'react';
import NavBar from './components/NavBar.js';
import Banner from './components/Banner.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';
import Projects from './components/Projects.js';
import Entrepreneurship from './components/Entrepreneurship.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import ScrollToTop from './components/ScrollToTop.js';
import TwinMindCase from './components/TwinMindCase.js';
import NarrativeCase from './components/NarrativeCase.js';
import GeoomniiCase from './components/GeoomniiCase.js';
import DigiPalsCase from './components/DigiPalsCase.js';
import AboutPage from './components/AboutPage.js';
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [page, setPage] = useState('home')

  const particles = useMemo(() =>
    Array.from({ length: 40 }, (_, i) => {
      const isBright = i % 6 === 0
      return {
        left: `${(i * 37 + 13) % 97 + 1}%`,
        top: `${(i * 53 + 7) % 93 + 3}%`,
        delay: `${(i * 1.7) % 12}s`,
        duration: `${10 + (i * 1.3) % 8}s`,
        size: isBright ? `${3 + (i % 3)}px` : `${1.5 + (i % 4) * 0.7}px`,
        opacity: isBright ? 0.3 + (i % 3) * 0.1 : 0.07 + (i % 6) * 0.04,
        glow: isBright,
      }
    })
  , [])

  const openPage = (name) => {
    window.history.pushState({ page: name }, '', `#${name}`)
    setPage(name)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const goHome = () => {
    window.history.pushState({ page: 'home' }, '', '#')
    setPage('home')
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  useEffect(() => {
    const onPop = (e) => {
      const p = e.state?.page || 'home'
      setPage(p)
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [page])

  const renderPage = () => {
    switch (page) {
      case 'twinmind': return <TwinMindCase onBack={goHome} />
      case 'narrative': return <NarrativeCase onBack={goHome} />
      case 'geoomnii': return <GeoomniiCase onBack={goHome} />
      case 'digipals': return <DigiPalsCase onBack={goHome} />
      case 'about': return <AboutPage onBack={goHome} />
      case 'playground': return (
        <>
          <section className="playground-hero">
            <div className="playground-hero-inner">
              <h1 className="playground-headline hero-text-gradient">Playground</h1>
              <p className="playground-sub">Beyond the code — ventures, events, community, and everything in between.</p>
            </div>
          </section>
          <Entrepreneurship />
          <Footer />
          <ScrollToTop />
        </>
      )
      default: return (
        <>
          <Banner onCaseStudy={openPage} />
          <div className="box">
            <div className="reveal"><Projects onCaseStudy={openPage} /></div>
          </div>
          <div className="reveal"><Contact /></div>
          <Footer />
          <ScrollToTop />
        </>
      )
    }
  }

  return (
    <div className="App">
      {/* Global ambient background — visible across all pages */}
      <div className="ambient-bg">
        {particles.map((p, i) => (
          <span
            key={i}
            className={`ambient-dot${p.glow ? ' ambient-dot--glow' : ''}`}
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
        <div className="ambient-ring" />
        <div className="ambient-ring ambient-ring--2" />
        <div className="ambient-ring ambient-ring--3" />
      </div>

      <NavBar onNavigate={openPage} />
      {renderPage()}
      <Analytics />
    </div>
  );
}

export default App;
