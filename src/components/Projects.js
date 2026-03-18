import React from 'react'
import '../assets/css/Projects.css'
import data from '../assets/json/projects.json'

const images = require.context('../assets/img/projects', true)

const Projects = ({ onCaseStudy }) => {
    const projectKeys = Object.keys(data)

    const handleClick = (key, e) => {
        if (data[key].caseStudy) {
            e.preventDefault()
            onCaseStudy(data[key].caseStudy)
        }
    }

    return (
        <section className="projects" id="projects">
            <h2>Projects</h2>
            <div className="projects-stack">
                {projectKeys.map((key, i) => (
                    <a
                        className="project-card"
                        href={data[key].link}
                        target={data[key].caseStudy ? undefined : "_blank"}
                        rel={data[key].caseStudy ? undefined : "noreferrer"}
                        key={key}
                        onClick={(e) => handleClick(key, e)}
                    >
                        <div className={`project-visual project-visual--${i + 1}`}>
                            {data[key].imagePath ? (
                                <img
                                    src={images(data[key].imagePath)}
                                    alt={key}
                                    className="project-img"
                                />
                            ) : (
                                <div className="project-placeholder">
                                    <span className="project-placeholder-name">{key}</span>
                                </div>
                            )}
                            <div className="project-overlay">
                                <span className="project-arrow">
                                    {data[key].caseStudy ? '→' : '↗'}
                                </span>
                            </div>
                        </div>
                        <div className="project-info">
                            <span className="project-name">{key}</span>
                            <span className="project-tagline">{data[key].tagline}</span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Projects
