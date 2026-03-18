import React from 'react'
import data from '../assets/json/skills.json'
import '../assets/css/Skills.css'

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <h2>Skills</h2>
            <div className="skills-grid">
                {Object.keys(data).map(category => (
                    <div className="skills-category" key={category}>
                        <h3 className="skills-category-name">{category}</h3>
                        <div className="skills-tags">
                            {data[category].map(skill => (
                                <span className="skill-tag" key={skill[0]}>{skill[0]}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
