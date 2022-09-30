import React from "react";
import hero_bg from '../Assets/hero_bg.mp4'
const Hero = () => {
  return (
    <div className="flex min-h-screen min-w-full justify-center items-center">
    {/* <div className="font-pop pt-[76px] bg-[#F7F4FF] h-fit  ">

      <p className="font-com mb-4  text-[3rem] md:text-[5rem] tracking-tight font-bold  ">
        Give them just the right words
      </p>
      <p className=" text-[1.5rem] mb-4  md:text-[2rem] ">
        Writer is the AI writing platform for teams
      </p>
      <div className="flex flex-col z-40 font-semibold gap-y-3 justify-center items-center gap-4 ml-4 md:flex-row ">
        <button className="px-2 md:px-4 text-sm md:text-[1.5rem]  border-2 border-black bg-inherit hover:bg-black transition-all duration-500 ease-in-out py-4 text-black hover:text-white rounded-full ">
          Request a demo
        </button>
        <button className="px-2 md:px-4 text-sm md:text-[1.5rem] bg-[#5551ff] hover:bg-[#1f1da2] transition-all duration-500 ease-in-out py-4 text-white rounded-full ">
          Try for free
        </button>
      </div>
      <video className="absolute bg-[#F7F4FF] bottom-0  min-h-fit md:min-h-screen  md:top-5  " muted loop autoPlay>
                <source src={hero_bg} type="video/mp4" />
                <source src={hero_bg} type="video/ogg" />
                Your browser does not support the video tag.
      </video>
    </div> */}

  <video className="flex self-end  sm:bg-[#F7F4FF] sm:bottom-0 md:top-10 " muted loop autoPlay>
                <source src={hero_bg} type="video/mp4" />
                <source src={hero_bg} type="video/ogg" />
                Your browser does not support the video tag.
      </video>
    <div  className="absolute px-4 py-6 top-[76px]" >
    <p className="font-com mb-4  text-[2.2rem] md:text-[5rem] tracking-tight font-bold  ">
        Give them just the right words
      </p>
      <p className=" text-[1.5rem] mb-4  md:text-[2rem] ">
        Writer is the AI writing platform for teams
      </p>
      <div className="flex flex-col z-40 font-semibold gap-y-3 justify-center items-center gap-4 ml-4 md:flex-row ">
        <button className="px-2 w-[70%] md:w-fit  md:px-4 text-sm md:text-[1.5rem]  border-2 border-black bg-inherit hover:bg-black transition-all duration-500 ease-in-out py-2 md:py-3  text-black hover:text-white rounded-full ">
          Request a demo
        </button>
        <button className="px-2 w-[70%] md:w-fit  md:px-4 text-sm md:text-[1.5rem] bg-[#5551ff] hover:bg-[#1f1da2] transition-all duration-500 ease-in-out py-2 md:py-4 text-white rounded-full ">
          Try for free
        </button>
      </div>
    </div>
    </div>
  );
};

export default  React.memo(Hero) ;
