import { useState, useEffect } from 'react'
import data from '../assets/json/chunk-text.json'
import '../assets/css/Banner.css'
import resume from '../assets/resume.pdf'

const Banner = () => {
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
            <div className="banner-inner">
                <h1 className="banner-headline">
                    I enjoy building<br />
                    <em>{text}</em><span className="cursor">|</span>{' '}
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
        </section>
    )
}

export default Banner
