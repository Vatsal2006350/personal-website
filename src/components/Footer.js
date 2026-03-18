import '../assets/css/Footer.css'

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer-container">
                <div className="footer-card">
                    <div className="footer-top">
                        <h3 className="footer-heading">Thanks for stopping by.</h3>
                        <p className="footer-sub">
                            Always looking to connect with interesting people.
                            Feel free to reach out anytime.
                        </p>
                    </div>

                    <div className="footer-grid">
                        <div className="footer-col">
                            <span className="footer-col-title">Pages</span>
                            <a href="#home">Home</a>
                            <a href="#projects">Work</a>
                            <a href="#about">About</a>
                            <a href="#contact">Contact</a>
                        </div>

                        <div className="footer-col">
                            <span className="footer-col-title">Selected Work</span>
                            <a href="#projects">Narrative</a>
                            <a href="#projects">TwinMind</a>
                            <a href="#projects">Geoomnii</a>
                            <a href="#projects">DigiPals</a>
                        </div>

                        <div className="footer-col">
                            <span className="footer-col-title">Experience</span>
                            <a href="#experience">Education</a>
                            <a href="#experience">Work</a>
                            <a href="#skills">Skills</a>
                        </div>

                        <div className="footer-col">
                            <span className="footer-col-title">Let's Connect</span>
                            <a href="https://www.linkedin.com/in/vatsal-shah-a7a0b1255/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                            <a href="https://github.com/Vatsal2006350" target="_blank" rel="noreferrer">GitHub ↗</a>
                            <a href="mailto:vatsals@umich.edu">Email ↗</a>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <span>© {new Date().getFullYear()} Vatsal Shah</span>
                        <span>Built with care in Ann Arbor.</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
