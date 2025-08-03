import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/pagination"; 
import "swiper/css/navigation"; 
import Group from "../Group";
import i1 from "../../assets/i1.png";
import i2 from "../../assets/i2.png";
import i3 from "../../assets/i3.png";
import i4 from "../../assets/i4.png";

const Slider = () => {
  return (
    <div className="container">
      <Group text="خصائصنا" />
      <h1 className="about-title">تعرف علي خصائصنا و مميزاتنا</h1>
      <div className="swiper-container">
        <Swiper
          spaceBetween={30} 
          slidesPerView={1} 
          loop={true} 
          autoplay={{
            delay: 2500,
            disableOnInteraction: false, 
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1200: {
              slidesPerView: 4, 
            },
            1024: {
              slidesPerView: 3, 
            },
            768: {
              slidesPerView: 2, 
            },
            300: {
              slidesPerView: 1, 
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          <SwiperSlide>
            <div className="slider-item">
              <div className="icon">
                <img src={i1} alt="Icon 1" />
              </div>
              <span>ميزة</span>
              <h3>ادارة العملاء</h3>
              <p>ادارة العملاء الخاصة بك بكل سهولة و سرعة تامة.</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slider-item">
              <div className="icon">
                <img src={i2} alt="Icon 2" />
              </div>
              <span>ميزة</span>
              <h3>ادارة الموظفين</h3>
              <p>ادارة الموظفين الخاصة بك بكل سهولة و سرعة تامة.</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slider-item">
              <div className="icon">
                <img src={i3} alt="Icon 3" />
              </div>
              <span>ميزة</span>
              <h3>ادارة المشاريع</h3>
              <p>ادارة المشاريع الخاصة بك بكل سهولة و سرعة تامة.</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slider-item">
              <div className="icon">
                <img src={i4} alt="Icon 4" />
              </div>
              <span>ميزة</span>
              <h3>ادارة المالية</h3>
              <p>ادارة المالية الخاصة بك بكل سهولة و سرعة تامة.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
