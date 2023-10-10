import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Home.css';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import slide_image_1 from '../../images/earth.jpg';
import slide_image_2 from '../../images/fire.jpg';
import slide_image_3 from '../../images/grad.jpg';
import slide_image_4 from '../../images/plane2.jpg';
import slide_image_5 from '../../images/notebook.jpg';
import slide_image_6 from '../../images/neon.jpg';
import slide_image_7 from '../../images/spac2.jpg';

function Cards() {
  const [initialSlide, setInitialSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setInitialSlide(swiper.realIndex);
  };

  return (
    <>
      <div className='vh-100'>
        <div className="fw-bold text-center p-4 text-cut">ATTRACTIONS</div>
        <div className="container mt-5 d-flex justify-content-center align-items-center">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={4}
            initialSlide={initialSlide}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            autoplay={{ delay: 2000 }}
            className="h-100 position-relative d-flex flex-column"
            onSlideChange={(swiper) => handleSlideChange(swiper)}
          >
            <SwiperSlide>
              <img src={slide_image_1} alt="slide_image"  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_2} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_3} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_4} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_5} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_6} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_7} alt="slide_image" />
            </SwiperSlide>
           

            {/* <div className="slider-controler mt-5 p-4">
              <div className="swiper-button-prev  slider-arrow">
                <ion-icon name="arrow-back-outline" className="afo"></ion-icon>
              </div>
              <div className="swiper-button-next  slider-arrow">
                <ion-icon name="arrow-forward-outline" className="afo"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div> */}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Cards;