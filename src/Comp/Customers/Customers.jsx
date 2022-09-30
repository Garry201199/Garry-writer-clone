import React from 'react'
import test1 from '../../Assets/main-card-2_3.webp'
import test2 from '../../Assets/main-card-1_3.webp'
import test3 from '../../Assets/main-card-2_1.webp'

import './Customers.css'

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination,Autoplay, Navigation } from "swiper";

const Testimonials =[
  {id:1 , imgSrc:test1, desc:`"Writer helps us take the style decisions that we had made and brings them to people who don't have the styleguide open all the time.”`, name:`TINA O'SHEA, INTUIT` },
  {id:2 , imgSrc:test2, desc:`"Writer gave our partners and our peers within Twitter an ability to write on our behalf because we can't write all of the content."`, name:`JORDAN CRAIG, TWITTER` },
  {id:3 , imgSrc:test3, desc:`"Writer has allowed us to bring our styleguide to people where they work, whether it's Google Docs or the Figma plugin."`, name:`SARAH MOHS, INTUIT` },
]
const Customers = () => {
  return (
    <div className='flex  select-none items-center justify-center flex-col w-full h-full text-white py-12 bg-black'>
      <p className='font-pop  text-[0.62rem] md:text-base self-center  tracking-[0.4rem]'>CUSTOMERS</p>
      <p className='font-pop w-[80%] self-center font-bold text-center  text-[1.5rem] md:text-[3rem]  '>Trusted by the content vanguard</p>
        <div className="flex  w-[100%] md:w-[80%]">
          <Swiper
        slidesPerView={1}
        effect={'fade'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        loop={true}
        pagination={{
          clickable: true,
        }}
        speed={800}
        navigation={true}
        className='customerSwiper'
        modules={[Pagination,Autoplay, Navigation]}
      >
        {Testimonials?.map((i) =>(
          <SwiperSlide key={i.id}>
        <div className='flex  py-5 gap-y-6  flex-col'>
          <img src={i.imgSrc} className= ' cursor-pointer h-full'  alt='text1'/>
        <p className=' font-com w-[70%] leading-tight	
         tracking-tight text-[1.2rem] md:text-[2rem] text-white 
          text-center self-center font-semibold ' >{i.desc}</p>
        <p className='font-pop self-center text-slate-400 font-semibold text-[0.8rem] md:text-[1.3rem] tracking-[0.2rem]'>{i.name}</p>
        </div>
        </SwiperSlide>
        ))
        }
      </Swiper>
        </div>
      
    </div>
  )
}

export default  React.memo(  Customers) 