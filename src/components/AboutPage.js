import '../assets/css/AboutPage.css'
import resume from '../assets/resume.pdf'
import me1 from '../assets/img/me/me1.jpg'
import me2 from '../assets/img/me/me2.jpg'
import me3 from '../assets/img/me/me3.jpg'
import logoNarrative from '../assets/narrative.jpeg'
import logoTwinmind from '../assets/twinmind logo.jpeg'
import logoGeoomnii from '../assets/geoomnii logo .jpeg'
import logoApparel from '../assets/apparel group .png'
import logoDigipals from '../assets/digipals .png'
import logoStanford from '../assets/stanford-logo.avif'
import iconBI from '../assets/img/awards/business-insider.png'
import iconTOI from '../assets/img/awards/times-of-india.png'
import iconPH from '../assets/img/awards/product-hunt.png'
import iconSTEM from '../assets/img/awards/stem-mena.png'

const AboutPage = ({ onBack }) => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="ap-hero">
                <div className="ap-hero-inner">
                    <div className="ap-hero-text">
                        <h1 className="ap-hero-headline hero-text-gradient">
                            The art of<br />
                            intentional building.
                        </h1>
                        <p className="ap-hero-sub">
                            A multidisciplinary engineer focused on the intersection of product precision and technical excellence.
                            Based in Ann Arbor, building globally.
                        </p>
                    </div>
                    <div className="ap-hero-meta">
                        <span className="ap-hero-meta-label">Curriculum Vitae</span>
                        <span className="ap-hero-meta-value">Vatsal Shah — 2025</span>
                    </div>
                </div>
            </section>

            {/* Split Layout: Narrative + Photos */}
            <section className="ap-split">
                <div className="ap-split-inner">
                    {/* Narrative Left */}
                    <div className="ap-narrative">
                        <div className="ap-narrative-block">
                            <div className="ap-narrative-label">
                                <span className="ap-narrative-line" />
                                <span className="ap-narrative-tag">Today</span>
                            </div>
                            <h2 className="ap-narrative-heading">Shaping products people love.</h2>
                            <p className="ap-narrative-text">
                                I'm a Computer Science student at the LSA Honors College at the University of Michigan.
                                I build products — from 0→1 MVPs to scaling platforms to 100K+ users. Currently building at DigiPals (YC F25),
                                an AI-native social operating system.
                            </p>
                        </div>

                        <div className="ap-narrative-block ap-narrative-block--card">
                            <div className="ap-narrative-label">
                                <span className="ap-narrative-line" />
                                <span className="ap-narrative-tag">Background</span>
                            </div>
                            <p className="ap-narrative-text">
                                Originally from India, I lived in Dubai before moving to Ann Arbor. I've co-founded startups,
                                led product at a $60M company, and shipped software used by hundreds of thousands of people.
                                I care about building things that matter — whether that's AI tools, e-commerce platforms, or community products.
                            </p>
                        </div>

                        <div className="ap-narrative-block">
                            <div className="ap-narrative-label">
                                <span className="ap-narrative-line" />
                                <span className="ap-narrative-tag">Beyond Code</span>
                            </div>
                            <p className="ap-narrative-text ap-narrative-text--italic">
                                "To bridge the gap between what technology can do and what people actually need."
                            </p>
                            <p className="ap-narrative-text">
                                In 2020, I weighed 140kg and decided to change. That fitness journey led me to
                                found Fitness Freak — an online community with 10,000+ users. I also enjoy reading,
                                Bollywood music, table tennis, and hitting the gym.
                            </p>
                        </div>

                        <a className="ap-resume-btn" href={resume} download>
                            Download Resume ↓
                        </a>
                    </div>

                    {/* Visual Right (Sticky) */}
                    <div className="ap-visual">
                        <div className="ap-visual-sticky">
                            <div className="ap-visual-main">
                                <img src={me1} alt="Vatsal Shah" />
                                <div className="ap-visual-main-overlay" />
                            </div>
                            <div className="ap-visual-grid">
                                <div className="ap-visual-thumb">
                                    <img src={me2} alt="Vatsal" />
                                </div>
                                <div className="ap-visual-thumb">
                                    <img src={me3} alt="Vatsal" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience & Skills */}
            <section className="ap-experience">
                <div className="ap-experience-inner">
                    {/* Experience */}
                    <div className="ap-roles">
                        <h3 className="ap-section-title">Selected Roles</h3>
                        <div className="ap-roles-list">
                            <div className="ap-role-item">
                                <img className="ap-role-logo" src={logoNarrative} alt="Narrative" />
                                <div className="ap-role-info">
                                    <h4>CPO & Co-Founder</h4>
                                    <p>Narrative (YC F25)</p>
                                </div>
                                <span className="ap-role-year">Jan 2024 — Jan 2025</span>
                            </div>
                            <div className="ap-role-item">
                                <img className="ap-role-logo" src={logoDigipals} alt="DigiPals" />
                                <div className="ap-role-info">
                                    <h4>Product Engineer</h4>
                                    <p>DigiPals (YC F25)</p>
                                </div>
                                <span className="ap-role-year">Jan 2025 — Pres.</span>
                            </div>
                            <div className="ap-role-item">
                                <img className="ap-role-logo" src={logoTwinmind} alt="TwinMind" />
                                <div className="ap-role-info">
                                    <h4>First Founding Product Manager</h4>
                                    <p>TwinMind</p>
                                </div>
                                <span className="ap-role-year">May 2024 — Jul 2025</span>
                            </div>
                            <div className="ap-role-item">
                                <img className="ap-role-logo" src={logoStanford} alt="Stanford" />
                                <div className="ap-role-info">
                                    <h4>AI Researcher</h4>
                                    <p>Stanford University</p>
                                </div>
                                <span className="ap-role-year">May 2025 — Pres.</span>
                            </div>
                            <div className="ap-role-item">
                                <img className="ap-role-logo" src={logoGeoomnii} alt="Geoomnii" />
                                <div className="ap-role-info">
                                    <h4>Technical Product Manager</h4>
                                    <p>Geoomnii</p>
                                </div>
                                <span className="ap-role-year">Jun 2022 — Jul 2023</span>
                            </div>
                            <div className="ap-role-item">
                                <img className="ap-role-logo" src={logoApparel} alt="Apparel Group" />
                                <div className="ap-role-info">
                                    <h4>Product & Marketing Analyst</h4>
                                    <p>Apparel Group</p>
                                </div>
                                <span className="ap-role-year">Jun 2022 — Jun 2022</span>
                            </div>
                        </div>

                    </div>

                    {/* Awards & Recognition */}
                    <div className="ap-skills">
                        <h3 className="ap-section-title">Awards & Recognition</h3>
                        <div className="ap-awards-list">
                            <a className="ap-award-item" href="https://www.businessinsider.com/twinmind-chatgpt-former-google-x-team-builds-ai-assistant-2024-11" target="_blank" rel="noreferrer">
                                <img className="ap-award-icon" src={iconBI} alt="Business Insider" />
                                <div className="ap-award-info">
                                    <h4>Featured in Business Insider</h4>
                                    <p>TwinMind AI assistant coverage</p>
                                </div>
                                <span className="ap-award-arrow">↗</span>
                            </a>
                            <a className="ap-award-item" href="https://timesofindia.indiatimes.com/life-style/spotlight/vatsal-shahs-new-book-rebirth-of-strength-provides-a-glimpse-into-his-inspirational-journey/articleshow/106507239.cms" target="_blank" rel="noreferrer">
                                <img className="ap-award-icon" src={iconTOI} alt="Times of India" />
                                <div className="ap-award-info">
                                    <h4>Featured in Times of India</h4>
                                    <p>Book — Rebirth of Strength</p>
                                </div>
                                <span className="ap-award-arrow">↗</span>
                            </a>
                            <a className="ap-award-item" href="https://teachmiddleeastmag.com/stem-mena-awards-2023-winners-announced/" target="_blank" rel="noreferrer">
                                <img className="ap-award-icon" src={iconSTEM} alt="STEM MENA" />
                                <div className="ap-award-info">
                                    <h4>Best STEM MENA Award</h4>
                                    <p>Winner — 2023</p>
                                </div>
                                <span className="ap-award-arrow">↗</span>
                            </a>
                            <a className="ap-award-item" href="https://www.producthunt.com/products/twinmind/launches/twinmind" target="_blank" rel="noreferrer">
                                <img className="ap-award-icon" src={iconPH} alt="Product Hunt" />
                                <div className="ap-award-info">
                                    <h4>#2 Product of the Day</h4>
                                    <p>TwinMind on Product Hunt</p>
                                </div>
                                <span className="ap-award-arrow">↗</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="ap-cta">
                <div className="ap-cta-card">
                    <div className="ap-cta-dots" />
                    <div className="ap-cta-content">
                        <h2>Let's create something<br />timeless together.</h2>
                        <a className="ap-cta-btn" href="https://calendar.app.google/v3pDfFADtTpDP2Nt7" target="_blank" rel="noreferrer">
                            Start a Conversation ↗
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage
