import React from 'react'
import '../assets/css/Entrepreneurship.css'
import data from '../assets/json/entrepreneurship.json'
import { ArrowRightShort, ChevronLeft, ChevronRight } from 'react-bootstrap-icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';

const images = require.context('../assets/img/entrepreneurship', true)

const Entrepreneurship = () => {

    const ventures = Object.keys(data).map((key) => {
        return (
            <SwiperSlide key={key}>
                <div className="venture-content">
                    <img src={images(data[key].imagePath)} alt={key} className="venture-img" />
                    <div className="venture-data">
                        <h3 className="venture-title">{key}</h3>
                        <span className="venture-subtitle">{data[key].role}</span>
                        <p className="venture-description">{data[key].description}</p>
                        <a className="button-link venture-button" href={data[key].link} target="_blank" rel="noreferrer">
                            <span>
                                Learn More
                                <ArrowRightShort className="button-icon" />
                            </span>
                        </a>
                    </div>
                </div>
            </SwiperSlide>
        )
    })

  return (
    <section className="entrepreneurship" id="entrepreneurship">
        <h2>Entrepreneurship & Activism</h2>
        <div className="venture-container">
            <Swiper 
                modules={[Navigation, Pagination]}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                pagination={{ clickable: true, el: '.swiper-pagination' }}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
            >
                <div className="swiper-button-prev">
                    <ChevronLeft />
                </div>
                {ventures}
                <div className="swiper-button-next">
                    <ChevronRight />
                </div>
                <div className="swiper-pagination">
                    
                </div>
            </Swiper>  
        </div>
    </section>
  )
}

export default Entrepreneurship