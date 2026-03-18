import React from 'react'
import '../assets/css/Entrepreneurship.css'
import data from '../assets/json/entrepreneurship.json'
import { ArrowUpRight } from 'react-bootstrap-icons'

const images = require.context('../assets/img/entrepreneurship', true)

const Entrepreneurship = () => {
    const ventures = Object.keys(data).map((key) => (
        <div className="venture-card" key={key}>
            <div className="venture-img-wrap">
                <img src={images(data[key].imagePath)} alt={key} className="venture-img" />
            </div>
            <div className="venture-info">
                <div className="venture-header">
                    <div>
                        <h3 className="venture-title">{key}</h3>
                        <span className="venture-role">{data[key].role}</span>
                    </div>
                    <a className="venture-link-btn" href={data[key].link} target="_blank" rel="noreferrer" aria-label="Learn more">
                        <ArrowUpRight size={16} />
                    </a>
                </div>
                <p className="venture-description">{data[key].description}</p>
            </div>
        </div>
    ))

    return (
        <section className="entrepreneurship" id="entrepreneurship">
            <h2>Entrepreneurship & Activism</h2>
            <div className="ventures-grid">
                {ventures}
            </div>
        </section>
    )
}

export default Entrepreneurship
