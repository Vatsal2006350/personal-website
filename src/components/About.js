import React from 'react'
import '../assets/css/About.css'
import data from '../assets/json/chunk-text.json'
import resume from '../assets/resume.pdf'
import me1 from '../assets/img/me/me1.jpg'

const About = () => {
    const about_text = data.about

    return (
        <section className="about" id="about">
            <h2>About Me</h2>
            <div className="about-layout">
                <div className="about-text">
                    <p>{about_text}</p>
                    <a className="button-link" href={resume} download>
                        <span>Resume / CV</span>
                    </a>
                </div>
                <div className="about-img-wrap">
                    <img className="abt-img" src={me1} alt="Vatsal Shah" />
                </div>
            </div>
        </section>
    )
}

export default About
