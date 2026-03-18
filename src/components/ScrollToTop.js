import { useState, useEffect } from 'react'
import '../assets/css/ScrollToTop.css'

/**
 * Scroll-to-top FAB - adapted from Hasque repo (Freelancer theme).
 * Visible only on mobile/tablet when user has scrolled down.
 */
const ScrollToTop = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const toggleVisible = () => {
            setVisible(window.pageYOffset > 400)
        }
        window.addEventListener('scroll', toggleVisible)
        return () => window.removeEventListener('scroll', toggleVisible)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    if (!visible) return null

    return (
        <div className="scroll-top" aria-hidden="true">
            <button type="button" className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 15l-6-6-6 6" />
                </svg>
            </button>
        </div>
    )
}

export default ScrollToTop
