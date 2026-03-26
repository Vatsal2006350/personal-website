import '../assets/css/Footer.css'

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer-inner">
                <span className="footer-copy">
                    &copy; {new Date().getFullYear()} Vatsal Shah
                </span>
                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/vatsal-shah-a7a0b1255/" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="https://github.com/Vatsal2006350" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="mailto:svatsal@umich.edu">Email</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
