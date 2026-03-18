import '../assets/css/TwinMindCase.css'

const NarrativeCase = ({ onBack }) => {
    return (
        <div className="casestudy">

            <header className="cs-hero">
                <div className="cs-inner">
                    <div className="cs-tags">
                        <span className="cs-tag">Product</span>
                        <span className="cs-tag">Strategy</span>
                        <span className="cs-tag">0→1</span>
                        <span className="cs-tag cs-tag--year">2024 – 2025</span>
                    </div>

                    <h1 className="cs-title">Narrative</h1>
                    <p className="cs-subtitle">
                        AI-powered video editing that cuts manual editing time by 40%.
                        Built the product from zero after 100+ customer discovery interviews.
                    </p>

                    <div className="cs-meta-row">
                        <div className="cs-meta-col">
                            <span className="cs-meta-label">Timeline</span>
                            <span className="cs-meta-val">2024 – 2025</span>
                        </div>
                        <div className="cs-meta-col">
                            <span className="cs-meta-label">Company</span>
                            <span className="cs-meta-val">Narrative (YC F25)</span>
                        </div>
                        <div className="cs-meta-col">
                            <span className="cs-meta-label">Role</span>
                            <span className="cs-meta-val">CPO & Co-Founder</span>
                        </div>
                        <div className="cs-meta-col">
                            <span className="cs-meta-label">Stack</span>
                            <span className="cs-meta-val">Next.js · React · Python · Figma</span>
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
                            I co-founded Narrative as CPO and led the product from idea to launch — running 100+ customer interviews, defining the roadmap, and shipping an AI editing tool that cut manual editing time by 40%.
                        </h2>
                        <p className="cs-text">
                            Narrative started with a hypothesis: video creators spend too much time on repetitive editing tasks that AI could handle. I led the product strategy end-to-end — from initial customer discovery through to shipping the MVP. My role spanned user research, product definition, sprint planning, and working directly with engineering to build and iterate fast.
                        </p>
                        <div className="cs-three-col">
                            <div className="cs-pillar">
                                <span className="cs-pillar-num">01</span>
                                <h4>Customer Discovery</h4>
                                <p>Ran 100+ structured interviews with creators, editors, and agencies. Built a research protocol that directly informed every feature decision in the MVP.</p>
                            </div>
                            <div className="cs-pillar">
                                <span className="cs-pillar-num">02</span>
                                <h4>Product Strategy</h4>
                                <p>Defined the MVP roadmap from 0→1, prioritizing features by user pain severity. Translated research into user journeys, PRDs, and a prioritized backlog.</p>
                            </div>
                            <div className="cs-pillar">
                                <span className="cs-pillar-num">03</span>
                                <h4>Execution</h4>
                                <p>Led weekly sprints with engineering. Shipped iteratively, measuring activation and retention to validate product-market fit signals early.</p>
                            </div>
                        </div>
                    </section>

                    <hr className="cs-divider" />

                    {/* ── The Problem ── */}
                    <section className="cs-section">
                        <span className="cs-eyebrow">The Problem</span>
                        <h2 className="cs-h2">
                            Video editing is one of the most time-intensive parts of content creation — and most of it is repetitive.
                        </h2>
                        <p className="cs-text">
                            Creators spend hours on cuts, color correction, captioning, and reformatting for different platforms. Agencies juggle dozens of projects with tight turnarounds. The tools are powerful but slow. The bottleneck isn't creativity — it's the manual labor of post-production.
                        </p>

                        <div className="cs-hmw">
                            <span className="cs-hmw-icon">💡</span>
                            <div>
                                <span className="cs-hmw-label">How might we</span>
                                <p>use AI to automate the repetitive parts of video editing so creators can focus on storytelling instead of timeline scrubbing?</p>
                            </div>
                        </div>

                        <div className="cs-two-col">
                            <div className="cs-pain-card">
                                <h4>Time Sink</h4>
                                <p>"I spend 6 hours editing a 10-minute video. Most of it is cuts and captions."</p>
                            </div>
                            <div className="cs-pain-card">
                                <h4>Platform Fragmentation</h4>
                                <p>"I have to re-export for TikTok, Reels, Shorts, and YouTube. Each has different specs."</p>
                            </div>
                            <div className="cs-pain-card">
                                <h4>Agency Bottleneck</h4>
                                <p>"We have 30 clients. Our editors are the bottleneck for every deliverable."</p>
                            </div>
                            <div className="cs-pain-card">
                                <h4>Quality vs. Speed</h4>
                                <p>"I can either edit fast or edit well. I can't do both with current tools."</p>
                            </div>
                        </div>
                    </section>

                    <hr className="cs-divider" />

                    {/* ── Research ── */}
                    <section className="cs-section">
                        <span className="cs-eyebrow">Customer Discovery</span>
                        <h2 className="cs-h2">
                            I ran 100+ interviews across creators, agencies, and editors to find the sharpest pain points.
                        </h2>
                        <p className="cs-text">
                            I built a structured interview protocol and personally ran every conversation. I segmented users by workflow type, volume, and tool stack — then synthesized patterns into actionable product decisions. Every feature in the MVP traced directly back to a user pain point.
                        </p>

                        <div className="cs-insights">
                            <h4>Key Insights</h4>
                            <ul className="cs-list">
                                <li>Captioning and rough cuts were the two highest-time tasks across all segments</li>
                                <li>Agencies wanted batch processing more than individual creators — a clear wedge for B2B</li>
                                <li>Creators valued "good enough fast" over "perfect slow" for social content</li>
                                <li>Existing AI tools felt gimmicky — users wanted something that fit into their real workflow</li>
                                <li>Export and reformatting for multiple platforms was a universal frustration</li>
                            </ul>
                        </div>
                    </section>

                    <hr className="cs-divider" />

                    {/* ── Product Decisions ── */}
                    <section className="cs-section">
                        <span className="cs-eyebrow">Product Decisions</span>
                        <h2 className="cs-h2">
                            I defined the MVP around three core workflows that addressed 80% of editing time.
                        </h2>
                        <p className="cs-text">
                            Rather than building a full NLE competitor, I scoped the MVP to the three workflows that consumed the most time in user interviews: automated rough cuts from transcripts, one-click captioning with style presets, and multi-platform export. This let us ship fast and validate before expanding.
                        </p>

                        <div className="cs-feature-block">
                            <span className="cs-feature-label">Core Product Decision</span>
                            <h3>Workflow-first, not feature-first</h3>
                            <p>
                                Instead of building isolated AI features, I structured the product around end-to-end workflows. Users upload footage, get an AI-generated rough cut, refine it, add captions, and export to all platforms — in a single flow. This reduced context-switching and made the time savings feel dramatic.
                            </p>
                            <div className="cs-feature-stats">
                                <div className="cs-feature-stat">
                                    <strong>~40%</strong>
                                    <span>Editing time reduction</span>
                                </div>
                                <div className="cs-feature-stat">
                                    <strong>100+</strong>
                                    <span>Customer interviews</span>
                                </div>
                                <div className="cs-feature-stat">
                                    <strong>0→1</strong>
                                    <span>MVP in 8 weeks</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr className="cs-divider" />

                    {/* ── Fundraising ── */}
                    <section className="cs-section">
                        <span className="cs-eyebrow">Fundraising & Demo Day</span>
                        <h2 className="cs-h2">
                            We raised $1M after Demo Day on the strength of early traction and a clear product vision.
                        </h2>
                        <p className="cs-text">
                            I built the investor narrative from customer research data — synthesizing 100+ interviews into sharp positioning on why the market was ready, why our approach was defensible, and why our team could execute. The pitch focused on the workflow wedge and early retention signals from beta users.
                        </p>

                        <div className="cs-stats-row">
                            <div className="cs-stat-item">
                                <strong>$1M</strong>
                                <span>Raised after Demo Day</span>
                            </div>
                            <div className="cs-stat-item">
                                <strong>YC F25</strong>
                                <span>Y Combinator batch</span>
                            </div>
                            <div className="cs-stat-item">
                                <strong>~40%</strong>
                                <span>Editing time saved</span>
                            </div>
                        </div>
                    </section>

                    <hr className="cs-divider" />

                    {/* ── Results ── */}
                    <section className="cs-section cs-section--last">
                        <span className="cs-eyebrow">Results</span>
                        <h2 className="cs-h2">
                            From zero to funded — a product built on real user pain.
                        </h2>
                        <div className="cs-results-grid">
                            <div className="cs-result">
                                <strong>$1M</strong>
                                <span>Raised post Demo Day</span>
                            </div>
                            <div className="cs-result">
                                <strong>YC F25</strong>
                                <span>Accepted into Y Combinator</span>
                            </div>
                            <div className="cs-result">
                                <strong>100+</strong>
                                <span>Customer interviews</span>
                            </div>
                            <div className="cs-result">
                                <strong>~40%</strong>
                                <span>Manual editing time reduced</span>
                            </div>
                            <div className="cs-result">
                                <strong>0→1</strong>
                                <span>MVP shipped in 8 weeks</span>
                            </div>
                            <div className="cs-result">
                                <strong>3 workflows</strong>
                                <span>Cuts, captions, export</span>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}

export default NarrativeCase
