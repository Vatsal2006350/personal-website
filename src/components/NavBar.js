import { useState, useEffect } from 'react'
import '../assets/css/NavBar.css'

const NavBar = ({ onNavigate }) => {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    const [scrollPct, setScrollPct] = useState(0)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50)
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            setScrollPct(docHeight > 0 ? Math.min(window.scrollY / docHeight, 1) : 0)
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

    return (
        <>
            <nav className={`pill-nav${scrolled ? ' scrolled' : ''}`}>
                <div className="pill-inner">
                    {/* VS icon — only shows when scrolled */}
                    <a href="#home" className="pill-vs" onClick={(e) => handleScroll(e, 'home')}>VS</a>

                    <div className="pill-links">
                        <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Work</a>
                        <a href="#about" onClick={(e) => handlePage(e, 'about')}>About</a>
                        <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
                    </div>

                    {/* Circle icon — only shows when scrolled */}
                    <div
                        className="pill-indicator"
                        style={{
                            background: `conic-gradient(rgba(255,255,255,${0.15 + scrollPct * 0.85}) ${scrollPct * 360}deg, rgba(255,255,255,0.05) ${scrollPct * 360}deg)`
                        }}
                    />
                </div>
            </nav>

            {/* Mobile toggle */}
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
                    <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
                </div>
            )}
        </>
    )
}

export default NavBar
