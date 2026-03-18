import '../assets/css/AboutPage.css'
import resume from '../assets/resume.pdf'
import me1 from '../assets/img/me/me1.jpg'
import me2 from '../assets/img/me/me2.jpg'
import me3 from '../assets/img/me/me3.jpg'
import me4 from '../assets/img/me/me4.jpg'
import logoNarrative from '../assets/narrative.jpeg'
import logoTwinmind from '../assets/twinmind logo.jpeg'
import logoGeoomnii from '../assets/geoomnii logo .jpeg'
import logoApparel from '../assets/apparel group .png'
import logoDigipals from '../assets/digipals .png'

const AboutPage = ({ onBack }) => {
    return (
        <div className="about-page">

            <div className="ap-container">

                {/* ── Top section: Bio + Photos ── */}
                <div className="ap-top">
                    <div className="ap-bio-card">
                        <div className="ap-bio-section">
                            <span className="ap-label">Today</span>
                            <p>
                                I'm a Computer Science student at the LSA Honors College at the University of Michigan.
                                I build products — from 0→1 MVPs to scaling platforms to 100K+ users. Currently building at DigiPals (YC F25).
                            </p>
                        </div>
                        <div className="ap-bio-section">
                            <span className="ap-label">Background</span>
                            <p>
                                Originally from India, I lived in Dubai before moving to Ann Arbor. I've co-founded startups,
                                led product at a $60M company, and shipped software used by hundreds of thousands of people.
                                I care about building things that matter.
                            </p>
                        </div>
                        <div className="ap-bio-section">
                            <span className="ap-label">Beyond Code</span>
                            <p>
                                In 2020, I weighed 140kg and decided to change. That fitness journey led me to
                                found Fitness Freak — an online community with 10,000+ users. I also enjoy reading,
                                Bollywood music, table tennis, and hitting the gym.
                            </p>
                        </div>
                        <a className="ap-resume-btn" href={resume} download>
                            Download Resume ↓
                        </a>
                    </div>

                    <div className="ap-photos-grid">
                        <div className="ap-photo ap-photo--tall">
                            <img src={me1} alt="Vatsal" />
                        </div>
                        <div className="ap-photo">
                            <img src={me2} alt="Vatsal" />
                        </div>
                        <div className="ap-photo">
                            <img src={me3} alt="Vatsal" />
                        </div>
                        <div className="ap-photo ap-photo--wide">
                            <img src={me4} alt="Vatsal" />
                        </div>
                    </div>
                </div>

                {/* ── Bottom section: Experience + Education ── */}
                <div className="ap-bottom">
                    <div className="ap-card">
                        <span className="ap-card-title">Experience</span>
                        <div className="ap-exp-list">
                            <div className="ap-exp-item">
                                <img className="ap-exp-logo" src={logoDigipals} alt="DigiPals" />
                                <div className="ap-exp-info">
                                    <span className="ap-exp-company">DigiPals</span>
                                    <span className="ap-exp-role">Product Engineer</span>
                                </div>
                                <span className="ap-exp-year">2025</span>
                            </div>
                            <div className="ap-exp-item">
                                <img className="ap-exp-logo" src={logoNarrative} alt="Narrative" />
                                <div className="ap-exp-info">
                                    <span className="ap-exp-company">Narrative</span>
                                    <span className="ap-exp-role">CPO & Co-Founder</span>
                                </div>
                                <span className="ap-exp-year">2024 – 25</span>
                            </div>
                            <div className="ap-exp-item">
                                <img className="ap-exp-logo" src={logoTwinmind} alt="TwinMind" />
                                <div className="ap-exp-info">
                                    <span className="ap-exp-company">TwinMind</span>
                                    <span className="ap-exp-role">First Founding Member</span>
                                </div>
                                <span className="ap-exp-year">2024 – 25</span>
                            </div>
                            <div className="ap-exp-item">
                                <img className="ap-exp-logo" src={logoGeoomnii} alt="Geoomnii" />
                                <div className="ap-exp-info">
                                    <span className="ap-exp-company">Geoomnii</span>
                                    <span className="ap-exp-role">Technical Product Manager</span>
                                </div>
                                <span className="ap-exp-year">2022 – 23</span>
                            </div>
                            <div className="ap-exp-item">
                                <img className="ap-exp-logo" src={logoApparel} alt="Apparel Group" />
                                <div className="ap-exp-info">
                                    <span className="ap-exp-company">Apparel Group</span>
                                    <span className="ap-exp-role">Data Analyst</span>
                                </div>
                                <span className="ap-exp-year">2022</span>
                            </div>
                        </div>
                    </div>

                    <div className="ap-card">
                        <span className="ap-card-title">Education & Recognition</span>
                        <div className="ap-exp-list">
                            <div className="ap-exp-item">
                                <div className="ap-exp-dot" />
                                <div className="ap-exp-info">
                                    <span className="ap-exp-company">University of Michigan</span>
                                    <span className="ap-exp-role">BS Computer Science, LSA Honors</span>
                                </div>
                                <span className="ap-exp-year">2028</span>
                            </div>
                            <div className="ap-exp-item">
                                <div className="ap-exp-dot" />
                                <div className="ap-exp-info">
                                    <span className="ap-exp-company">Y Combinator</span>
                                    <span className="ap-exp-role">F25 Batch (DigiPals & Narrative)</span>
                                </div>
                                <span className="ap-exp-year">2025</span>
                            </div>
                            <div className="ap-exp-item">
                                <div className="ap-exp-dot" />
                                <div className="ap-exp-info">
                                    <span className="ap-exp-company">Published Researcher</span>
                                    <span className="ap-exp-role">NHSJS & Wolfram Community</span>
                                </div>
                                <span className="ap-exp-year">2023</span>
                            </div>
                            <div className="ap-exp-item">
                                <div className="ap-exp-dot" />
                                <div className="ap-exp-info">
                                    <span className="ap-exp-company">TEDx Speaker</span>
                                    <span className="ap-exp-role">TEDxYouth</span>
                                </div>
                                <span className="ap-exp-year">2023</span>
                            </div>
                            <div className="ap-exp-item">
                                <div className="ap-exp-dot" />
                                <div className="ap-exp-info">
                                    <span className="ap-exp-company">Raffles World Academy</span>
                                    <span className="ap-exp-role">International Baccalaureate Diploma</span>
                                </div>
                                <span className="ap-exp-year">2024</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutPage
