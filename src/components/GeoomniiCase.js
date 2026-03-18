import '../assets/css/TwinMindCase.css'

const GeoomniiCase = ({ onBack }) => {
    return (
        <div className="casestudy">

            <header className="cs-hero">
                <div className="cs-inner">
                    <div className="cs-tags">
                        <span className="cs-tag">Product Management</span>
                        <span className="cs-tag">E-Commerce</span>
                        <span className="cs-tag">Operations</span>
                        <span className="cs-tag cs-tag--year">2022 – 2023</span>
                    </div>

                    <h1 className="cs-title">Geoomnii</h1>
                    <p className="cs-subtitle">
                        Led delivery of an e-commerce platform across catalog, payments, and operations — driving 12K sales and cutting operating costs by 40%.
                    </p>

                    <div className="cs-meta-row">
                        <div className="cs-meta-col">
                            <span className="cs-meta-label">Timeline</span>
                            <span className="cs-meta-val">June 2022 – July 2023</span>
                        </div>
                        <div className="cs-meta-col">
                            <span className="cs-meta-label">Company</span>
                            <span className="cs-meta-val">Geoomnii · Dubai, UAE</span>
                        </div>
                        <div className="cs-meta-col">
                            <span className="cs-meta-label">Role</span>
                            <span className="cs-meta-val">Technical Product Manager</span>
                        </div>
                        <div className="cs-meta-col">
                            <span className="cs-meta-label">Tools</span>
                            <span className="cs-meta-val">Jira · SQL · Figma · Miro · Excel</span>
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
                            I owned the product roadmap for a full-stack e-commerce platform — translating stakeholder needs into shipped features that drove 12K sales and dramatically improved operations.
                        </h2>
                        <p className="cs-text">
                            As Technical Product Manager, I was the bridge between business stakeholders, engineering, and operations. I defined user journeys, maintained the prioritized backlog, ran sprint planning, and made the trade-off calls that determined what shipped and when. The platform was built from scratch in a market with unique fulfillment challenges.
                        </p>
                        <div className="cs-three-col">
                            <div className="cs-pillar">
                                <span className="cs-pillar-num">01</span>
                                <h4>Platform Delivery</h4>
                                <p>Led end-to-end delivery across catalog management, payments integration, and order operations. Onboarded 500+ products and optimized checkout UX.</p>
                            </div>
                            <div className="cs-pillar">
                                <span className="cs-pillar-num">02</span>
                                <h4>Operations Optimization</h4>
                                <p>Diagnosed cancellation root causes with engineering and ops. Shipped real-time inventory sync and exception workflows that cut costs by 40%.</p>
                            </div>
                            <div className="cs-pillar">
                                <span className="cs-pillar-num">03</span>
                                <h4>Data-Driven Decisions</h4>
                                <p>Defined core metrics (conversion, cancellation rate, fulfillment SLA). Built KPI dashboards and ran weekly business reviews to prioritize the roadmap.</p>
                            </div>
                        </div>
                    </section>

                    <hr className="cs-divider" />

                    {/* ── The Problem ── */}
                    <section className="cs-section">
                        <span className="cs-eyebrow">The Challenge</span>
                        <h2 className="cs-h2">
                            The platform needed to scale from zero to a fully operational e-commerce system — fast — in a market with unique logistics constraints.
                        </h2>
                        <p className="cs-text">
                            Dubai's e-commerce landscape has distinct fulfillment challenges: high customer expectations for delivery speed, complex last-mile logistics, and inventory fragmentation across suppliers. We needed a platform that could handle all of this while maintaining a premium checkout experience.
                        </p>

                        <div className="cs-hmw">
                            <span className="cs-hmw-icon">💡</span>
                            <div>
                                <span className="cs-hmw-label">How might we</span>
                                <p>build an e-commerce platform that handles the full lifecycle — catalog, payments, fulfillment — while maintaining reliability in a market with complex logistics?</p>
                            </div>
                        </div>

                        <div className="cs-two-col">
                            <div className="cs-pain-card">
                                <h4>Inventory Blindness</h4>
                                <p>"We're selling products we don't have in stock, leading to cancellations and wasted ops time."</p>
                            </div>
                            <div className="cs-pain-card">
                                <h4>Checkout Friction</h4>
                                <p>"Customers are dropping off at payment. The flow is too many steps for a mobile-first market."</p>
                            </div>
                            <div className="cs-pain-card">
                                <h4>No Visibility</h4>
                                <p>"We don't know our real conversion rate or why orders are being cancelled."</p>
                            </div>
                            <div className="cs-pain-card">
                                <h4>Manual Operations</h4>
                                <p>"Every exception requires a manual intervention. It doesn't scale."</p>
                            </div>
                        </div>
                    </section>

                    <hr className="cs-divider" />

                    {/* ── Inventory & Fulfillment ── */}
                    <section className="cs-section">
                        <span className="cs-eyebrow">Key Initiative</span>
                        <h2 className="cs-h2">
                            I diagnosed the cancellation problem and shipped real-time inventory sync — cutting operating costs by 40%.
                        </h2>
                        <p className="cs-text">
                            Cancellations were eating into margins and destroying customer trust. I partnered with engineering and ops to trace the root cause: we were accepting orders for out-of-stock items because inventory wasn't syncing in real-time. I scoped and prioritized a real-time inventory sync system with exception handling workflows that automatically flagged and routed edge cases.
                        </p>

                        <div className="cs-feature-block">
                            <span className="cs-feature-label">Technical Product Work</span>
                            <h3>Real-time inventory sync + exception workflows</h3>
                            <p>
                                Designed the integration spec between our catalog and supplier inventory systems. Defined the exception workflow logic — what happens when stock drops below threshold, when a supplier fails to confirm, when an order needs manual intervention. Worked with engineering to ship incrementally over 3 sprints.
                            </p>
                            <div className="cs-feature-stats">
                                <div className="cs-feature-stat">
                                    <strong>40%</strong>
                                    <span>Operating cost reduction</span>
                                </div>
                                <div className="cs-feature-stat">
                                    <strong>500+</strong>
                                    <span>Products onboarded</span>
                                </div>
                                <div className="cs-feature-stat">
                                    <strong>Real-time</strong>
                                    <span>Inventory visibility</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr className="cs-divider" />

                    {/* ── Metrics & Dashboards ── */}
                    <section className="cs-section">
                        <span className="cs-eyebrow">Metrics & Governance</span>
                        <h2 className="cs-h2">
                            I defined the core KPIs and built the reporting infrastructure that drove every roadmap decision.
                        </h2>
                        <p className="cs-text">
                            Before I joined, there was no consistent measurement framework. I defined the metrics that mattered — conversion rate, cancellation rate, fulfillment SLA adherence — and built cohort dashboards that let us see performance by category, time period, and customer segment. These dashboards became the centerpiece of weekly business reviews where I facilitated roadmap trade-off discussions.
                        </p>

                        <div className="cs-insights">
                            <h4>What I built</h4>
                            <ul className="cs-list">
                                <li>Core KPI framework: conversion, cancellation rate, fulfillment SLA, average order value</li>
                                <li>Cohort reporting dashboards broken down by category and time period</li>
                                <li>Weekly business review cadence with structured trade-off discussions</li>
                                <li>Category expansion decisions driven by margin and velocity data</li>
                                <li>Exception rate tracking that directly informed engineering priorities</li>
                            </ul>
                        </div>
                    </section>

                    <hr className="cs-divider" />

                    {/* ── Results ── */}
                    <section className="cs-section cs-section--last">
                        <span className="cs-eyebrow">Results</span>
                        <h2 className="cs-h2">
                            A platform that scaled from zero to 12K sales with dramatically improved operations.
                        </h2>
                        <div className="cs-results-grid">
                            <div className="cs-result">
                                <strong>12K</strong>
                                <span>Total sales driven</span>
                            </div>
                            <div className="cs-result">
                                <strong>40%</strong>
                                <span>Operating cost reduction</span>
                            </div>
                            <div className="cs-result">
                                <strong>500+</strong>
                                <span>Products onboarded</span>
                            </div>
                            <div className="cs-result">
                                <strong>Real-time</strong>
                                <span>Inventory sync shipped</span>
                            </div>
                            <div className="cs-result">
                                <strong>KPI dashboards</strong>
                                <span>Cohort-level reporting</span>
                            </div>
                            <div className="cs-result">
                                <strong>Weekly reviews</strong>
                                <span>Data-driven roadmap</span>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}

export default GeoomniiCase
