import '../assets/css/TwinMindCase.css'

const TwinMindCase = ({ onBack }) => {
    return (
        <div className="casestudy">

            <header className="cs-hero">
                <div className="cs-inner">
                    <div className="cs-tags">
                        <span className="cs-tag">Product</span>
                        <span className="cs-tag">Engineering</span>
                        <span className="cs-tag">Growth</span>
                        <span className="cs-tag cs-tag--year">2024 – 2025</span>
                    </div>

                    <h1 className="cs-title">TwinMind</h1>
                    <p className="cs-subtitle">
                        An AI second brain that captures everything you hear, see, and think —
                        and helps you remember it all and get things done.
                    </p>

                    <div className="cs-meta-row">
                        <div className="cs-meta-col">
                            <span className="cs-meta-label">Timeline</span>
                            <span className="cs-meta-val">May 2024 – July 2025</span>
                        </div>
                        <div className="cs-meta-col">
                            <span className="cs-meta-label">Company</span>
                            <span className="cs-meta-val">TwinMind ($60M valuation)</span>
                        </div>
                        <div className="cs-meta-col">
                            <span className="cs-meta-label">Role</span>
                            <span className="cs-meta-val">First Founding Member</span>
                        </div>
                        <div className="cs-meta-col">
                            <span className="cs-meta-label">Stack</span>
                            <span className="cs-meta-val">React · Figma · Postgres · Groq API · Vercel</span>
                        </div>
                    </div>
                </div>
            </header>

            <div className="cs-body">
                <div className="cs-inner">

                    {/* ── Long story short ── */}
                    <section className="cs-section">
                        <span className="cs-eyebrow">Long story short</span>
                        <h2 className="cs-h2">
                            I joined as employee #1 when TwinMind was just an idea — and helped build it into a $60M venture-backed platform used by 100,000+ people.
                        </h2>
                        <p className="cs-text">
                            My mandate was broad by design: own product vision, ship features, grow users, and help raise the round. I worked directly with the CEO and CTO, managing a cross-functional team of designers and interns while simultaneously doing the deep technical work myself — RAG architecture, React UI, Chrome extension — and leading growth from first principles.
                        </p>
                        <div className="cs-three-col">
                            <div className="cs-pillar">
                                <span className="cs-pillar-num">01</span>
                                <h4>Product &amp; Design</h4>
                                <p>Led UI/UX in Figma and React. Shipped privacy toggle, voice-to-text, multilingual query system, and AI daily digest. Defined the roadmap and led weekly sprints.</p>
                            </div>
                            <div className="cs-pillar">
                                <span className="cs-pillar-num">02</span>
                                <h4>Engineering</h4>
                                <p>Built RAG backend with Postgres + Vercel Worker Functions. Implemented local audio encryption and a chunking pipeline that cut query latency by 60%.</p>
                            </div>
                            <div className="cs-pillar">
                                <span className="cs-pillar-num">03</span>
                                <h4>Growth</h4>
                                <p>Led Product Hunt launch (#2 POTD, 2K users in 24h). Built ambassador program across 20 universities. Pitched to Roelof Botha and Anand Rajaraman, helping close a $5.7M seed.</p>
                            </div>
                        </div>
                    </section>

                    <hr className="cs-divider" />

                    {/* ── The Problem ── */}
                    <section className="cs-section">
                        <span className="cs-eyebrow">The Problem</span>
                        <h2 className="cs-h2">
                            Knowledge workers capture information everywhere — and recall almost none of it.
                        </h2>
                        <p className="cs-text">
                            Meetings generate context. Conversations generate decisions. Voice memos, browser tabs, Notion docs — they all hold fragments of what matters. But recalling the right thing at the right moment is nearly impossible. People spend time re-reading old notes, re-asking questions that were already answered, and losing the thread of their own thinking.
                        </p>

                        <div className="cs-hmw">
                            <span className="cs-hmw-icon">💡</span>
                            <div>
                                <span className="cs-hmw-label">How might we</span>
                                <p>help knowledge workers — founders, engineers, researchers — capture context from their whole digital life and surface it instantly when it matters?</p>
                            </div>
                        </div>

                        <div className="cs-two-col">
                            <div className="cs-pain-card">
                                <h4>Information Overload</h4>
                                <p>"I capture everything but can never find what I need when I actually need it."</p>
                            </div>
                            <div className="cs-pain-card">
                                <h4>Fragmented Context</h4>
                                <p>"My notes are across 4 different apps. There's no single source of truth."</p>
                            </div>
                            <div className="cs-pain-card">
                                <h4>Recall Failure</h4>
                                <p>"I know I discussed this somewhere — I just can't remember where or when."</p>
                            </div>
                            <div className="cs-pain-card">
                                <h4>The Action Gap</h4>
                                <p>"I have great notes. But nothing happens with them. They just sit there."</p>
                            </div>
                        </div>
                    </section>

                    <hr className="cs-divider" />

                    {/* ── User Research ── */}
                    <section className="cs-section">
                        <span className="cs-eyebrow">Speaking to Users</span>
                        <h2 className="cs-h2">
                            I went out and interviewed 100+ users across three continents to find the real friction.
                        </h2>
                        <p className="cs-text">
                            I personally ran structured beta interviews with editors, founders, and remote teams in the US, Dubai, and London — building an interview protocol, synthesizing patterns, and turning raw feedback into actionable product decisions. Every feature shipped in my tenure traces back to something a user said in one of these sessions.
                        </p>

                        <div className="cs-insights">
                            <h4>What I learned</h4>
                            <ul className="cs-list">
                                <li>Mobile capture was strong, but most deep work happened on laptop — creating a memory gap between devices</li>
                                <li>Users wanted to ask natural-language questions against their own captured context, not just search keywords</li>
                                <li>Daily active use required a trigger — something that pulled users back into the app with new value</li>
                                <li>International users hit friction immediately with English-only query support</li>
                                <li>Students wanted social proof and campus-native distribution — not just app store discovery</li>
                            </ul>
                        </div>
                    </section>

                    <hr className="cs-divider" />

                    {/* ── Technical Work ── */}
                    <section className="cs-section">
                        <span className="cs-eyebrow">Technical Architecture</span>
                        <h2 className="cs-h2">
                            I built the backend that let users query thousands of memories in under a second.
                        </h2>
                        <p className="cs-text">
                            The core technical challenge was retrieval — how do you let a user ask "what did I discuss with my co-founder last Tuesday?" and get a meaningful answer across potentially thousands of voice transcripts, fast? I led the architecture and implementation of TwinMind's RAG backend from first principles.
                        </p>

                        <div className="cs-feature-block">
                            <span className="cs-feature-label">Flagship technical contribution</span>
                            <h3>RAG architecture: Postgres + Vercel + Groq API</h3>
                            <p>
                                Built a vector database querying system using Postgres (with pgvector), Vercel Worker Functions for serverless compute, and custom API endpoints. Designed an efficient audio chunking pipeline that broke transcripts into semantically meaningful segments — significantly reducing the search space per query and improving answer quality.
                            </p>
                            <div className="cs-feature-stats">
                                <div className="cs-feature-stat">
                                    <strong>~60%</strong>
                                    <span>Query latency reduction</span>
                                </div>
                                <div className="cs-feature-stat">
                                    <strong>Multilingual</strong>
                                    <span>Groq API integration</span>
                                </div>
                                <div className="cs-feature-stat">
                                    <strong>End-to-end encrypted</strong>
                                    <span>Local audio storage</span>
                                </div>
                            </div>
                        </div>

                        <div className="cs-highlight-text">
                            <h4>Privacy-first from day one</h4>
                            <p className="cs-text">
                                Audio data is sensitive. I implemented local-first encryption so that raw audio never left the device unencrypted — only processed transcripts were sent to the backend. Designed fallback workflows that maintained reliability during high-traffic sessions, preventing data loss even under load.
                            </p>
                        </div>
                    </section>

                    <hr className="cs-divider" />

                    {/* ── Chrome Extension ── */}
                    <section className="cs-section">
                        <span className="cs-eyebrow">Key Product Insight</span>
                        <h2 className="cs-h2">
                            TwinMind was mobile-first. But users did all their real work on laptops.
                        </h2>
                        <p className="cs-text">
                            Through user research, I noticed a consistent pattern: people captured content on their phones but then sat down at a laptop to do actual work. The product had no presence there. I surfaced this as a critical gap and proposed a Chrome extension that would sync notes and memories directly into the browser.
                        </p>

                        <div className="cs-hmw cs-hmw--alt">
                            <span className="cs-hmw-icon">💡</span>
                            <div>
                                <p>"TwinMind should be the second brain that connects across every part of your life — not just mobile. A Chrome extension would open the entire desktop workflow as a new surface."</p>
                            </div>
                        </div>

                        <p className="cs-text">
                            I built the extension from MVP to production — designing the UI in Figma, shipping the React frontend, and wiring it into the existing backend. The launch was coordinated as a Product Hunt campaign with custom copy, visuals, and press outreach that I wrote and coordinated entirely.
                        </p>

                        <div className="cs-stats-row">
                            <div className="cs-stat-item">
                                <strong>30,000+</strong>
                                <span>Total Chrome users</span>
                            </div>
                            <div className="cs-stat-item">
                                <strong>#2</strong>
                                <span>Product of the Day</span>
                            </div>
                            <div className="cs-stat-item">
                                <strong>2,000+</strong>
                                <span>New users in 24 hours</span>
                            </div>
                        </div>
                    </section>

                    <hr className="cs-divider" />

                    {/* ── Product Launches ── */}
                    <section className="cs-section">
                        <span className="cs-eyebrow">Product Launches</span>
                        <h2 className="cs-h2">
                            I shipped features between cycles. Two of them drove 50,000 new signups.
                        </h2>
                        <p className="cs-text">
                            Beyond the core product, I identified opportunities for high-leverage standalone launches that would drive growth while demonstrating TwinMind's value to new users.
                        </p>

                        <div className="cs-two-col">
                            <div className="cs-launch-card">
                                <span className="cs-launch-tag">AI Daily Digest</span>
                                <h4>Turning passive capture into active productivity</h4>
                                <p>
                                    Built a daily email and to-do list feature that pulled directly from a user's captured memories — automatically extracting action items, summarizing key decisions, and surfacing things that needed follow-up.
                                </p>
                                <ul className="cs-list">
                                    <li>Wrote the full PRD and user journey maps</li>
                                    <li>Integrated with the existing RAG backend</li>
                                    <li>Ran A/B tests on send time and task format</li>
                                </ul>
                            </div>
                            <div className="cs-launch-card">
                                <span className="cs-launch-tag">Viral Growth · 50K users</span>
                                <h4>"Profile Card" — making TwinMind shareable</h4>
                                <p>
                                    Built a webapp that turned someone's public profile into a fun visual "trading card" format. Designed to be shared, with a clear CTA driving curious viewers to discover TwinMind.
                                </p>
                                <ul className="cs-list">
                                    <li>Designed the card layout and visual identity</li>
                                    <li>Built the full React frontend and API</li>
                                    <li>Contributed to 50,000+ new user signups</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <hr className="cs-divider" />

                    {/* ── Community & Growth ── */}
                    <section className="cs-section">
                        <span className="cs-eyebrow">Community &amp; Growth</span>
                        <h2 className="cs-h2">
                            I treated growth as community-building — not just acquisition.
                        </h2>
                        <p className="cs-text">
                            The fastest-growing segments of TwinMind's user base were ones I reached through genuine community engagement: partnering with student organizations, showing up at hackathons, and building an ambassador network from scratch. None of this was ad spend. It was all relationships.
                        </p>

                        <div className="cs-feature-block">
                            <span className="cs-feature-label">Ambassador Program</span>
                            <h3>70 students. 20 universities. 40% of the user base.</h3>
                            <p>
                                I recruited, onboarded, and managed a network of student ambassadors — giving them materials, training, and clear incentives to run TwinMind sessions on their campuses.
                            </p>
                            <div className="cs-feature-stats">
                                <div className="cs-feature-stat">
                                    <strong>70</strong>
                                    <span>Ambassadors</span>
                                </div>
                                <div className="cs-feature-stat">
                                    <strong>20</strong>
                                    <span>Universities</span>
                                </div>
                                <div className="cs-feature-stat">
                                    <strong>5,000</strong>
                                    <span>Users in one day</span>
                                </div>
                                <div className="cs-feature-stat">
                                    <strong>40%</strong>
                                    <span>Student user share</span>
                                </div>
                            </div>
                        </div>

                        <div className="cs-highlight-text">
                            <h4>Activation at the edge</h4>
                            <p className="cs-text">
                                I traveled to hackathons and ran on-campus sessions that let students experience TwinMind in a high-intensity environment. The University of Michigan launch alone brought 5,000 new users in a single day. I used these sessions as research opportunities too, gathering live feedback that fed directly back into the product roadmap.
                            </p>
                        </div>
                    </section>

                    <hr className="cs-divider" />

                    {/* ── Fundraising ── */}
                    <section className="cs-section">
                        <span className="cs-eyebrow">Fundraising</span>
                        <h2 className="cs-h2">
                            I built the investor narrative from raw customer data — and pitched it to Sequoia.
                        </h2>
                        <p className="cs-text">
                            Product traction tells one story. The investor narrative tells it better. I synthesized 100+ user interviews, competitive analysis, and product metrics into the materials that supported TwinMind's seed raise. I then demoed the product directly to notable investors.
                        </p>
                        <ul className="cs-list">
                            <li>Distilled user research into sharp positioning: why now, why TwinMind, why this team</li>
                            <li>Built competitive landscape analysis mapping incumbents (Otter.ai, Mem, Notion AI) against TwinMind's wedge</li>
                            <li>Structured the product demo flow for investor meetings</li>
                            <li>Demoed to Roelof Botha (Sequoia Capital) and Anand Rajaraman (Rocketship.vc)</li>
                        </ul>

                        <div className="cs-quote-block">
                            <div className="cs-quote-avatar">AR</div>
                            <div className="cs-quote-body">
                                <p>
                                    "He demonstrated an execution cadence I have rarely ever seen. He stood out as one of the strongest product-minded operators I have seen at his stage, with rare judgment and ownership. I have built companies including Junglee (acquired by Amazon for $250M) and Kosmix (acquired by Walmart for $300M), and I can easily see Vatsal thriving in the kind of environment that rewards high ownership."
                                </p>
                                <span className="cs-quote-attr">
                                    <strong>Anand Rajaraman</strong> — Founding Partner, Rocketship.vc · Adjunct Lecturer, Stanford CS
                                </span>
                            </div>
                        </div>
                    </section>

                    <hr className="cs-divider" />

                    {/* ── Results ── */}
                    <section className="cs-section cs-section--last">
                        <span className="cs-eyebrow">Results</span>
                        <h2 className="cs-h2">
                            10× user growth. $5.7M raised. A $60M company.
                        </h2>
                        <div className="cs-results-grid">
                            <div className="cs-result">
                                <strong>10K → 100K</strong>
                                <span>Users in 3 months</span>
                            </div>
                            <div className="cs-result">
                                <strong>$5.7M</strong>
                                <span>Seed round closed</span>
                            </div>
                            <div className="cs-result">
                                <strong>$60M</strong>
                                <span>Company valuation</span>
                            </div>
                            <div className="cs-result">
                                <strong>30,000+</strong>
                                <span>Chrome extension users</span>
                            </div>
                            <div className="cs-result">
                                <strong>#2</strong>
                                <span>Product of the Day</span>
                            </div>
                            <div className="cs-result">
                                <strong>~60%</strong>
                                <span>Query latency reduction</span>
                            </div>
                            <div className="cs-result">
                                <strong>70 students</strong>
                                <span>Across 20 universities</span>
                            </div>
                            <div className="cs-result">
                                <strong>NVIDIA</strong>
                                <span>Inception Program</span>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}

export default TwinMindCase
