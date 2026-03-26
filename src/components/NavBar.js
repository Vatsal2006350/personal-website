import { useState, useEffect } from 'react'
import '../assets/css/NavBar.css'
import resume from '../assets/resume.pdf'

const NavBar = ({ onNavigate }) => {
    const [scrolled, setScrolled] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50)
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0
            setScrollProgress(progress)
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleScroll = (e, id) => {
        e.preventDefault()
        setMobileOpen(false)
        if (onNavigate) onNavigate('home')
        setTimeout(() => {
            const el = document.getElementById(id)
            if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 50)
    }

    const handlePage = (e, name) => {
        e.preventDefault()
        setMobileOpen(false)
        if (onNavigate) onNavigate(name)
    }

    const radius = 10
    const circumference = 2 * Math.PI * radius
    const offset = circumference * (1 - scrollProgress)

    return (
        <>
            {/* Desktop Navigation */}
            <nav className={`nav-pill${scrolled ? ' scrolled' : ''}`}>
                <div className="nav-pill-inner">
                    <div className="nav-left">
                        <div className="nav-progress-ring">
                            <svg width="28" height="28" viewBox="0 0 28 28">
                                <circle
                                    cx="14" cy="14" r={radius}
                                    fill="none"
                                    stroke="rgba(255,255,255,0.06)"
                                    strokeWidth="2"
                                />
                                <circle
                                    className="nav-progress-stroke"
                                    cx="14" cy="14" r={radius}
                                    fill="none"
                                    stroke="#ffffff"
                                    strokeWidth="2"
                                    strokeDasharray={circumference}
                                    strokeDashoffset={offset}
                                    strokeLinecap="round"
                                />
                            </svg>
                            {scrollProgress >= 0.98 && <span className="nav-progress-dot" />}
                        </div>
                        <a href="#home" className="nav-logo" onClick={(e) => handleScroll(e, 'home')}>VATSAL SHAH</a>
                    </div>
                    <div className="nav-links">
                        <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Work</a>
                        <a href="#about" onClick={(e) => handlePage(e, 'about')}>About</a>
                        <a href="#playground" onClick={(e) => handlePage(e, 'playground')}>Playground</a>
                        <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
                    </div>
                    <a href={resume} download className="nav-resume-btn">Resume</a>
                </div>
            </nav>

            {/* Mobile Bottom Navigation */}
            <nav className="nav-bottom-mobile">
                <button
                    className="nav-bottom-item active"
                    onClick={(e) => handleScroll(e, 'projects')}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
                    </svg>
                </button>
                <button
                    className="nav-bottom-item"
                    onClick={(e) => handlePage(e, 'about')}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                    </svg>
                </button>
                <button
                    className="nav-bottom-item"
                    onClick={(e) => handlePage(e, 'playground')}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                </button>
                <button
                    className="nav-bottom-item"
                    onClick={(e) => handleScroll(e, 'contact')}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                    </svg>
                </button>
            </nav>

            {/* Mobile scroll progress bar */}
            <div className="nav-mobile-progress" style={{ transform: `scaleX(${scrollProgress})` }} />

            {/* Mobile Top Toggle (fallback) */}
            <button
                className={`mob-toggle${mobileOpen ? ' open' : ''}`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
            >
                <span />
                <span />
            </button>

            {mobileOpen && (
                <div className="pill-mobile">
                    <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Work</a>
                    <a href="#about" onClick={(e) => handlePage(e, 'about')}>About</a>
                    <a href="#playground" onClick={(e) => handlePage(e, 'playground')}>Playground</a>
                    <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
                    <a href={resume} download>Resume</a>
                </div>
            )}
        </>
    )
}

export default NavBar
