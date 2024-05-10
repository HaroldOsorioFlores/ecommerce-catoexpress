// @client
"use client";

import React, { useEffect, useRef, useState } from 'react';
import { CardViewModule } from "@/components"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import "swiper/css";
import 'swiper/css/pagination';
import './styles.css';

import { Autoplay, Pagination } from 'swiper/modules';


let SwiperInstance: any;
if (typeof window !== 'undefined') {
  SwiperInstance = require('swiper').default;
}

const NewSwiper = ({ data }: { data: IProduct[] }) => {
  console.log({ data })

  return (
    <div className='h-full'>
      <Swiper
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        loop
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {data.map(product => <SwiperSlide key={product._id}><div>

          <Image className="rounded-lg h-[15rem] object-cover" src={product.urlImage} alt="" width={2000} height={2000} priority />
          <p>{product.description}</p></div></SwiperSlide>)}
      </Swiper>
    </div>
  );
}

export default NewSwiper;
