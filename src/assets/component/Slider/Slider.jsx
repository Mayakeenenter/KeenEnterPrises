import "./Slider.css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { SwiperSlide, Swiper } from "swiper/react";
function Slider() {
  return (
    <div className="slider">
      <Swiper
        pagination={{ clickable: true,
         }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
         
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
     
          1200: {
            slidesPerView: 5,
            spaceBetween: 7, 
          },
        }}
      >
        <SwiperSlide>
          <img
            src="/slider/WhatsApp-Image-2025-01-09-at-6.15.10-PM1-300x135-1.webp"
            alt="sliderImg"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/slider/WhatsApp-Image-2025-01-09-at-6.15.10-PM2.webp"
            alt="liderImg"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/slider/WhatsApp-Image-2025-01-09-at-6.15.12-PM-768x382-1.webp"
            alt="liderImg"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/slider/WhatsApp-Image-2025-01-09-at-6.15.13-PM.webp"
            alt="liderImg"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/slider/WhatsApp-Image-2025-01-09-at-6.15.13-PM1-150x150-1.webp"
            alt="liderImg"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/slider/WhatsApp-Image-2025-01-09-at-6.15.40-PM.webp"
            alt="liderImg"
            loading="lazy"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
