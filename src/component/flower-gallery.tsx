import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './flower-gallery.css';

import { Icon } from '@chakra-ui/react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import slide_image_1 from '~/assets/images/img_1.jpg';
import slide_image_2 from '~/assets/images/img_2.jpg';
import slide_image_3 from '~/assets/images/img_3.jpg';
import slide_image_4 from '~/assets/images/img_4.jpg';
import slide_image_5 from '~/assets/images/img_5.jpg';
import slide_image_6 from '~/assets/images/img_6.jpg';
import slide_image_7 from '~/assets/images/img_7.jpg';

export function FlowerGallery() {
  return (
    <>
      <main className="html" id="flower-gallery">
        <div className="container">
          <h1 className="heading">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-blue-500">
              Flower Gallery
            </span>
          </h1>

          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
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
              // clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide>
              <img src={slide_image_1} alt="slide_image" />
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

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
                <Icon as={IoIosArrowBack} style={{ width: '1.5rem', height: '1.5rem' }} />
              </div>
              <div className="swiper-button-next slider-arrow">
                {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
                <Icon as={IoIosArrowForward} style={{ width: '1.5rem', height: '1.5rem' }} />
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </main>
    </>
  );
}
