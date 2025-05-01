
import React from 'react';
import {useEffect,useState,useRef} from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
function Home() {
      const navigationPrevRef = useRef(null);
      const navigationNextRef = useRef(null);
  return (
    <>
        <div className='relative bg-white w-full'>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                effect={'fade'}
                autoplay={{
                delay: 7000,
                disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !bg-yellow-300 !w-3 !h-3 !opacity-50',
                bulletActiveClass: 'swiper-pagination-bullet-active !opacity-100 !bg-yellow-300',
                }}
                navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
                }}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                className="w-full h-full">
                
            </Swiper>
    <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-6 z-20">
        <button 
          ref={navigationPrevRef}
          className="w-12 h-12 rounded-full bg-black bg-opacity-50 text-yellow-300 border-2 border-yellow-300 flex items-center justify-center transition duration-300 hover:bg-opacity-70"
        >
          ❮
        </button>
        <button 
          ref={navigationNextRef}
          className="w-12 h-12 rounded-full bg-black bg-opacity-50 text-yellow-300 border-2 border-yellow-300 flex items-center justify-center transition duration-300 hover:bg-opacity-70"
        >
          ❯
        </button>
      </div>
        </div>
    </>
  )
}

export default Home;