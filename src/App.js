import { useState, useEffect } from 'react';
import NavBar from './components/NavBar.js';
import Banner from './components/Banner.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';
import Skills from './components/Skills.js';
import Experience from './components/Experience.js';
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
      default: return (
        <>
          <Banner />
          <section className="body">
            <div className="box">
              <div className="reveal"><Projects onCaseStudy={openPage} /></div>
              <div className="reveal"><Skills /></div>
              <div className="reveal"><Experience onCaseStudy={openPage} /></div>
              <div className="reveal"><Entrepreneurship /></div>
            </div>
          </section>
          <div className="reveal"><Contact /></div>
          <Footer />
          <ScrollToTop />
        </>
      )
    }
  }

  return (
    <div className="App">
      <NavBar onNavigate={openPage} />
      {renderPage()}
      <Analytics />
    </div>
  );
}

export default App;
