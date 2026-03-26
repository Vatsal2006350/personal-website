import React from 'react'
import '../assets/css/Entrepreneurship.css'
import data from '../assets/json/entrepreneurship.json'

const images = require.context('../assets/img/entrepreneurship', true)

const Entrepreneurship = () => {
    const ventureKeys = Object.keys(data)

    return (
        <section className="entrepreneurship" id="entrepreneurship">
            <h2>Entrepreneurship & Activism</h2>
            <div className="ventures-layout">
                <div className="ventures-header">
                    <div className="ventures-header-title">
                        <h3>Beyond the Code.</h3>
                    </div>
                    <div className="ventures-header-grid">
                        {ventureKeys.map((key) => (
                            <div className="venture-card-new" key={key}>
                                <h4 className="venture-card-new-title">{key}</h4>
                                <span className="venture-card-new-role">{data[key].role}</span>
                                <p className="venture-card-new-desc">{data[key].description}</p>
                                <a className="venture-card-new-link" href={data[key].link} target="_blank" rel="noreferrer">
                                    Learn more →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="ventures-cards">
                    {ventureKeys.map((key) => (
                        <a className="venture-img-card" href={data[key].link} target="_blank" rel="noreferrer" key={key}>
                            <img src={images(data[key].imagePath)} alt={key} />
                            <div className="venture-img-card-overlay" />
                            <div className="venture-img-card-label">
                                <h4>{key}</h4>
                                <span>{data[key].role}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Entrepreneurship
