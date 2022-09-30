import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Clients.css'

import { Autoplay, Pagination, Navigation } from "swiper";
const Clients = () => {
  return (
    <div className="md:h-96 h-60 bg-white border py-6 md:py-12 border-b  ">
      <div className="flex  flex-col w-full  h-full items-center justify-center">
        <p className="font-pop flex justify-center items-center text-[1.5rem]   md:text-[3rem] ">
          Trusted by top teams
        </p>

        <Swiper
        className="clientsSwiper"
          rewind={false}
          slidesPerGroup={1}
          centeredSlides={false}
          loop={true}
          speed={3000}
          
          autoplay={{
            delay: 100,
            disableOnInteraction: false,
            reverseDirection:false,
            waitForTransition:true
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
  
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 7,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <img
              src="https://writer.com/wp-content/uploads/2021/08/img-15.svg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
          <img src="https://writer.com/wp-content/uploads/2021/08/img-1.svg" alt='bvh' />
          </SwiperSlide>
          <SwiperSlide>
          <img src="https://writer.com/wp-content/uploads/2021/08/img-2.svg"alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
          <img src="https://writer.com/wp-content/uploads/2021/08/img-3.svg" alt=""  />
          </SwiperSlide>
          <SwiperSlide>
          <img src="https://writer.com/wp-content/uploads/2021/08/img-4.svg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
          <img src="https://writer.com/wp-content/uploads/2021/08/img-5.svg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://writer.com/wp-content/uploads/2021/08/img-7.svg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
          <img src="https://writer.com/wp-content/uploads/2021/08/img-8.svg" alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://writer.com/wp-content/uploads/2021/08/img-9.svg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://writer.com/wp-content/uploads/2021/08/img-10.svg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://writer.com/wp-content/uploads/2021/08/img-11.svg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://writer.com/wp-content/uploads/2021/08/img-12.svg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://writer.com/wp-content/uploads/2021/08/img-13.svg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://writer.com/wp-content/uploads/2021/08/img-14.svg"
              alt=""
            />
          </SwiperSlide>

        </Swiper>
      </div>{" "}
    </div>
  );
};

export default React.memo( Clients) ;
