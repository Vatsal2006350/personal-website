import { useState, useEffect } from 'react'
import data from '../assets/json/chunk-text.json'
import '../assets/css/Banner.css'
import resume from '../assets/resume.pdf'
import me4 from '../assets/img/me/me4.jpg'

const Banner = ({ onCaseStudy }) => {
    const banner_text = data.banner
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["innovative", "full-stack", "AI-powered", "scalable"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(100)

    useEffect(() => {
        let ticker = setInterval(() => { tick() }, delta)
        return () => clearInterval(ticker)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let newText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        if (!isDeleting && newText === fullText) {
            setDelta(2000)
            setIsDeleting(true)
        } else if (isDeleting && newText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(100)
        } else if (isDeleting) {
            setDelta(50)
        }
        setText(newText)
    }

    return (
        <section className="banner" id="home">
            {/* Background refraction effects */}
            <div className="banner-refraction banner-refraction--left" />
            <div className="banner-refraction banner-refraction--right" />

            <div className="banner-split">
                {/* Left: Text content */}
                <div className="banner-text">
                    <h1 className="banner-headline hero-text-gradient">
                        I enjoy building{' '}
                        <span className="banner-rotating">{text}<span className="cursor">|</span></span>{' '}
                        products.
                    </h1>

                    <p className="banner-sub">{banner_text}</p>

                    <div className="banner-actions">
                        <a href="https://www.linkedin.com/in/vatsal-shah-a7a0b1255/" target="_blank" rel="noreferrer" className="btn-primary">
                            LinkedIn ↗
                        </a>
                        <a href="https://github.com/Vatsal2006350" target="_blank" rel="noreferrer" className="btn-secondary">
                            GitHub ↗
                        </a>
                        <a href={resume} download className="btn-secondary">
                            Resume ↓
                        </a>
                    </div>
                </div>

                {/* Right: Portrait photo */}
                <div className="banner-portrait">
                    <div className="banner-portrait-card">
                        <img src={me4} alt="Vatsal Shah" />
                        <div className="banner-portrait-overlay" />
                        <div className="banner-portrait-label">
                            <span className="banner-portrait-tag">Vatsal Shah</span>
                            <h3 className="banner-portrait-title">Product Manager & Engineer</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
