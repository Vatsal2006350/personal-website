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
            <div className="bento-grid">
                {projectKeys.map((key, i) => {
                    const project = data[key]
                    const isLarge = i % 3 === 0
                    const hasImage = project.imagePath

                    return (
                        <a
                            className={`bento-card ${isLarge ? 'bento-card--large' : 'bento-card--small'} ${hasImage ? 'bento-card--has-image' : ''}`}
                            href={project.link}
                            target={project.caseStudy ? undefined : "_blank"}
                            rel={project.caseStudy ? undefined : "noreferrer"}
                            key={key}
                            onClick={(e) => handleClick(key, e)}
                        >
                            {hasImage && (
                                <img
                                    src={images(project.imagePath)}
                                    alt={key}
                                    className="bento-card-img"
                                />
                            )}
                            <div className="bento-card-content">
                                <span className="bento-card-tag">{project.tools}</span>
                                <h3 className="bento-card-title">{key}</h3>
                                <p className="bento-card-desc">{project.tagline}</p>
                                <span className="bento-card-action">
                                    {project.caseStudy ? 'View Case Study' : 'View Project'}
                                    <span className="bento-card-arrow">
                                        {project.caseStudy ? '→' : '↗'}
                                    </span>
                                </span>
                            </div>
                        </a>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects
