import '../assets/css/TwinMindCase.css'

const DigiPalsCase = ({ onBack }) => {
    return (
        <div className="casestudy">

            <header className="cs-hero">
                <div className="cs-inner">
                    <div className="cs-tags">
                        <span className="cs-tag">Product Engineering</span>
                        <span className="cs-tag">AI / Consumer</span>
                        <span className="cs-tag">Social</span>
                        <span className="cs-tag cs-tag--year">2025</span>
                    </div>

                    <h1 className="cs-title">DigiPals</h1>
                    <p className="cs-subtitle">
                        The future of Social in the age of AI. Building an AI-native social operating system
                        that improves your relationships with friends.
                    </p>

                    <div className="cs-meta-row">
                        <div className="cs-meta-col">
                            <span className="cs-meta-label">Timeline</span>
                            <span className="cs-meta-val">2025 – Present</span>
                        </div>
                        <div className="cs-meta-col">
                            <span className="cs-meta-label">Company</span>
                            <span className="cs-meta-val">DigiPals (YC F25)</span>
                        </div>
                        <div className="cs-meta-col">
                            <span className="cs-meta-label">Role</span>
                            <span className="cs-meta-val">Product Engineer</span>
                        </div>
                        <div className="cs-meta-col">
                            <span className="cs-meta-label">Stack</span>
                            <span className="cs-meta-val">React · TypeScript · AI/ML · Mobile</span>
                        </div>
                    </div>
                </div>
            </header>

            <div className="cs-body">
                <div className="cs-inner">

                    {/* ── Overview ── */}
                    <section className="cs-section">
                        <span className="cs-eyebrow">Overview</span>
                        <h2 className="cs-h2">
                            Social networks are dead. Social media became more media than social. I'm helping build what comes next.
                        </h2>
                        <p className="cs-text">
                            DigiPals is a YC-backed startup building the first AI-native social operating system. The core insight: our social lives are fragmented across dozens of apps — iMessage, WhatsApp, Find My, Partiful, Venmo. No single app actually helps you hang out with your friends. DigiPals changes that with ambient AI agents that coordinate your social life.
                        </p>
                        <div className="cs-three-col">
                            <div className="cs-pillar">
                                <span className="cs-pillar-num">01</span>
                                <h4>AI-Native Group Chats</h4>
                                <p>Building group chats with embedded AI agents (digipals) that know your location, calendar, and social context — and take action to coordinate IRL hangouts.</p>
                            </div>
                            <div className="cs-pillar">
                                <span className="cs-pillar-num">02</span>
                                <h4>Widget System</h4>
                                <p>Designing and building AI widgets that surface contextually in conversations — restaurant reservations, bill splitting, movie suggestions, memory sharing.</p>
                            </div>
                            <div className="cs-pillar">
                                <span className="cs-pillar-num">03</span>
                                <h4>Product Engineering</h4>
                                <p>Wearing both the product and engineering hats — defining features from user insight, then building them end-to-end across the full stack.</p>
                            </div>
                        </div>
                    </section>

                    <hr className="cs-divider" />

                    {/* ── The Problem ── */}
                    <section className="cs-section">
                        <span className="cs-eyebrow">The Problem</span>
                        <h2 className="cs-h2">
                            Social media became one-third ads, one-third content from strangers, and one-third AI slop. Your friends aren't on it anymore.
                        </h2>
                        <p className="cs-text">
                            The platforms that were supposed to connect us have become attention-harvesting machines. Meanwhile, actually coordinating a dinner with friends requires switching between 5 different apps. The social layer of the internet is broken — and the coordination cost of real-world friendships is too high.
                        </p>

                        <div className="cs-hmw">
                            <span className="cs-hmw-icon">💡</span>
                            <div>
                                <span className="cs-hmw-label">How might we</span>
                                <p>use AI not to replace social interaction, but to reduce the friction of coordinating it — so people spend less time planning and more time together?</p>
                            </div>
                        </div>

                        <div className="cs-two-col">
                            <div className="cs-pain-card">
                                <h4>Fragmented Social Life</h4>
                                <p>"I use 6 different apps just to plan dinner with friends. Nothing talks to each other."</p>
                            </div>
                            <div className="cs-pain-card">
                                <h4>Coordination Cost</h4>
                                <p>"By the time we all agree on a time and place, nobody wants to go anymore."</p>
                            </div>
                            <div className="cs-pain-card">
                                <h4>Dead Social Media</h4>
                                <p>"I haven't posted on Instagram in months. I don't even see my friends' posts anymore."</p>
                            </div>
                            <div className="cs-pain-card">
                                <h4>Lost Memories</h4>
                                <p>"We had an amazing trip last year. The photos are scattered across 4 people's phones."</p>
                            </div>
                        </div>
                    </section>

                    <hr className="cs-divider" />

                    {/* ── Product Vision ── */}
                    <section className="cs-section">
                        <span className="cs-eyebrow">Product Vision</span>
                        <h2 className="cs-h2">
                            Your group chat becomes the social operating system. AI widgets are the apps.
                        </h2>
                        <p className="cs-text">
                            DigiPals works through AI widgets that pop up right in your group chat when you need them. Talking about dinner? The restaurant widget appears. Someone sends a receipt? The bill split widget shows up. You never have to leave the conversation to coordinate.
                        </p>

                        <div className="cs-feature-block">
                            <span className="cs-feature-label">Core Architecture</span>
                            <h3>Ambient AI agents with social context</h3>
                            <p>
                                Each user has an AI agent (a digipal) that knows their location, calendar, relationship history, and photos. These agents communicate with each other to coordinate automatically — suggesting times when everyone's free, finding nearby restaurants, making reservations, and splitting bills after.
                            </p>
                            <div className="cs-feature-stats">
                                <div className="cs-feature-stat">
                                    <strong>YC F25</strong>
                                    <span>Y Combinator batch</span>
                                </div>
                                <div className="cs-feature-stat">
                                    <strong>AI-native</strong>
                                    <span>Agents, not feeds</span>
                                </div>
                                <div className="cs-feature-stat">
                                    <strong>IRL-first</strong>
                                    <span>Get people outside</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr className="cs-divider" />

                    {/* ── My Role ── */}
                    <section className="cs-section">
                        <span className="cs-eyebrow">My Contribution</span>
                        <h2 className="cs-h2">
                            I bridge the gap between product vision and technical execution — defining what to build, then building it.
                        </h2>
                        <p className="cs-text">
                            As a product engineer, I sit at the intersection of product thinking and full-stack engineering. I participate in user research and product strategy sessions, then translate those decisions into shipped features. The speed of a 3-person YC startup means every person needs to operate across the full stack — from user insight to production code.
                        </p>

                        <div className="cs-insights">
                            <h4>What I work on</h4>
                            <ul className="cs-list">
                                <li>Building AI widget infrastructure — the system that contextually surfaces the right widget at the right time</li>
                                <li>End-to-end feature development from product spec to shipped code across frontend and backend</li>
                                <li>Collaborating directly with the CEO and CTO on product direction and technical architecture</li>
                                <li>User testing and rapid iteration based on early access feedback</li>
                                <li>Contributing to the product roadmap with insights from engineering feasibility and user patterns</li>
                            </ul>
                        </div>
                    </section>

                    <hr className="cs-divider" />

                    {/* ── The Bigger Picture ── */}
                    <section className="cs-section cs-section--last">
                        <span className="cs-eyebrow">Where We're Going</span>
                        <h2 className="cs-h2">
                            The last social platform anyone will ever need.
                        </h2>
                        <p className="cs-text">
                            We're starting with widgets that make it easier to hang out IRL — restaurants, movies, concerts, bill splitting. Then we're adding widgets that help you stay close — shared memories, life updates, friend-of-friend connections. Eventually, anyone can build AI widgets for DigiPals. The group chat becomes the platform.
                        </p>

                        <div className="cs-stats-row">
                            <div className="cs-stat-item">
                                <strong>YC F25</strong>
                                <span>Y Combinator backed</span>
                            </div>
                            <div className="cs-stat-item">
                                <strong>San Francisco</strong>
                                <span>HQ</span>
                            </div>
                            <div className="cs-stat-item">
                                <strong>AI-native</strong>
                                <span>Social operating system</span>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}

export default DigiPalsCase
