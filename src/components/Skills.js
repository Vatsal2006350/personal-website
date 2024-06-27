import React from 'react'
import { useState } from 'react'
import data from '../assets/json/skills.json'
import { Row } from 'react-bootstrap'
import { Braces, CodeSlash, ChevronDown } from 'react-bootstrap-icons'
import { AiOutlineRobot } from 'react-icons/ai';
import { FiTool } from 'react-icons/fi';
import '../assets/css/Skills.css'

const Skills = () => {

    const icons = {
        "Languages": <Braces className="skills-icon" />,
        "Web Development": <CodeSlash className="skills-icon" />,
        "Machine Learning": <AiOutlineRobot className="skills-icon" />,
        "Tools & Software": <FiTool className="skills-icon" />,
    }

    const [open, setOpen] = useState("");

    const year = new Date().getFullYear()

    const categories = Object.keys(data).map(key => {
        const skills = data[key].map(skill => {
            const num = year-skill[1]+1
            return (
                <Row key={key+skill}>
                    <div 
                        className="skills-data"
                        aria-expanded={open === key ? "true" : "false"}
                    >
                        <div className="skills-title">
                            <span className="skills-name">{skill[0]}</span>
                            <span className="skills-number">{num} {num===1 ? "year" : "years"}</span>
                        </div>
                    </div>
                </Row>
            )
        })
        return (
            <div 
                className={open === key ? "skills-content skills-open" : "skills-content skills-closed"} 
                onClick={() => {
                    if (open === key) {
                        setOpen("")
                    } else {
                        setOpen(key)
                    }
                }}
                key={key}
            >
                <div className="skills-header">
                    {icons[key]}
                    <h3>{key}</h3>
                    <ChevronDown className="skills-arrow" />
                </div>
                <div className="skills-list">
                    {skills}
                </div>
            </div>
        )
    })

  return (
    <section className="skills" id="skills">
        <h2>Skills</h2>
        <div className="skills-container">
            {categories}
        </div>
    </section>
  )
}

export default Skills