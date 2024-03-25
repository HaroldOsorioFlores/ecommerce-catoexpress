// @client
"use client";

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import "swiper/css";
import 'swiper/css/pagination';

import './styles.css';

let SwiperInstance: any;
if (typeof window !== 'undefined') {
  SwiperInstance = require('swiper').default;
}

const swiperParams: SwiperOptions = {
  slidesPerView: 3,
  spaceBetween: 50,
};

const NewSwiper = () => {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (SwiperInstance) {
      setSwiper(new SwiperInstance('.swiper', swiperParams));
    }
  }, []);

  return (
    <div className=' h-full'>
    <Swiper
      slidesPerView={3}
      spaceBetween={0}
      className="mySwiper"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
    </div>
  );
}

export default NewSwiper;
