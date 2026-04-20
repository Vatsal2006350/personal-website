import React, { useEffect, useRef } from 'react'
import '../assets/css/Entrepreneurship.css'
import data from '../assets/json/entrepreneurship.json'

const images = require.context('../assets/img/entrepreneurship', true)

const Entrepreneurship = () => {
    const gridRef = useRef(null)

    useEffect(() => {
        const cards = gridRef.current?.querySelectorAll('.pg-card')
        if (!cards) return

        const handleMouseMove = (e) => {
            const rect = e.currentTarget.getBoundingClientRect()
            const x = (e.clientX - rect.left) / rect.width - 0.5
            const y = (e.clientY - rect.top) / rect.height - 0.5
            e.currentTarget.style.setProperty('--rx', `${y * -8}deg`)
            e.currentTarget.style.setProperty('--ry', `${x * 8}deg`)
            e.currentTarget.style.setProperty('--glow-x', `${(x + 0.5) * 100}%`)
            e.currentTarget.style.setProperty('--glow-y', `${(y + 0.5) * 100}%`)
        }

        const handleMouseLeave = (e) => {
            e.currentTarget.style.setProperty('--rx', '0deg')
            e.currentTarget.style.setProperty('--ry', '0deg')
        }

        cards.forEach((card) => {
            card.addEventListener('mousemove', handleMouseMove)
            card.addEventListener('mouseleave', handleMouseLeave)
        })

        return () => {
            cards.forEach((card) => {
                card.removeEventListener('mousemove', handleMouseMove)
                card.removeEventListener('mouseleave', handleMouseLeave)
            })
        }
    }, [])

    const ventureKeys = Object.keys(data)

    return (
        <section className="playground" id="entrepreneurship">
            <div className="pg-grid" ref={gridRef}>
                {ventureKeys.map((key, i) => {
                    const venture = data[key]
                    const hasImage = venture.imagePath

                    return (
                        <a
                            className={`pg-card pg-card--${i}`}
                            href={venture.link}
                            target="_blank"
                            rel="noreferrer"
                            key={key}
                            style={{ animationDelay: `${i * 0.15}s` }}
                        >
                            <div className="pg-card-inner">
                                {hasImage ? (
                                    <img
                                        className="pg-card-img"
                                        src={images(venture.imagePath)}
                                        alt={key}
                                    />
                                ) : (
                                    <div className="pg-card-gradient" />
                                )}
                                <div className="pg-card-glow" />
                                <div className="pg-card-overlay" />
                                <div className="pg-card-content">
                                    <span className="pg-card-role">{venture.role}</span>
                                    <h3 className="pg-card-title">{key}</h3>
                                    {venture.stat && (
                                        <span className="pg-card-stat">{venture.stat}</span>
                                    )}
                                </div>
                                <div className="pg-card-arrow-wrap">
                                    <span className="pg-card-arrow">&#8599;</span>
                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>

            {/* Floating ambient elements */}
            <div className="pg-floaters" aria-hidden="true">
                <div className="pg-floater pg-floater--1" />
                <div className="pg-floater pg-floater--2" />
                <div className="pg-floater pg-floater--3" />
            </div>
        </section>
    )
}

export default Entrepreneurship
