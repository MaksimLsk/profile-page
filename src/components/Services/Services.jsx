// import React from 'react';
import { services } from '../../Data';
import { FaArrowRight } from 'react-icons/fa';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import shapeTwo from '../../assets/shape-2.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import './Services.css';

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title text-cs">What I Do</h2>
      <p className="section__subtitle">
        My <span>Services</span>
      </p>

      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]} className="servises__container container mySwiper">
        {services.map(({ name, title, description }, index) => {
          return (
            <SwiperSlide key={index} className="services__item card card-one">
              <span className="services__subtitle text-cs">
                {name}</span>
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>

              <a href="" className="link">
                See Pricing<FaArrowRight className='link__icon'></FaArrowRight>
              </a>

              <img src={shapeTwo} alt="" className="shape c__shape" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Services;
