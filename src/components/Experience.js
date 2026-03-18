import { useState } from 'react'
import { MortarboardFill, BriefcaseFill, PeopleFill } from 'react-bootstrap-icons'
import data from '../assets/json/experience.json'
import '../assets/css/Experience.css'

const CASE_STUDIES = {
    'TwinMind': 'twinmind'
}

const Experience = ({ onCaseStudy }) => {
    const [open, setOpen] = useState("education")

    const tabs = [
        { id: "education", label: "Education", icon: <MortarboardFill /> },
        { id: "work", label: "Work", icon: <BriefcaseFill /> },
        { id: "projects", label: "Projects", icon: <PeopleFill /> },
    ]

    return (
        <section className="experience" id="experience">
            <h2>Experience</h2>
            <div className="experience-container">
                <div className="experience-tabs">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            className={`experience-tab${open === tab.id ? ' active' : ''}`}
                            onClick={() => setOpen(tab.id)}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>
                <div className="experience-list">
                    {data[open].map((item, index) => {
                        const caseStudyKey = CASE_STUDIES[item[0]]
                        return (
                            <div className="experience-item" key={index}>
                                <div className="experience-dot" />
                                <div className="experience-content">
                                    <div className="experience-title-row">
                                        <h3 className="experience-title">{item[0]}</h3>
                                        {caseStudyKey && onCaseStudy && (
                                            <button
                                                className="experience-case-btn"
                                                onClick={() => onCaseStudy(caseStudyKey)}
                                            >
                                                Case study →
                                            </button>
                                        )}
                                    </div>
                                    <span className="experience-subtitle">{item[1]}</span>
                                    <span className="experience-date">{item[2]}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Experience
