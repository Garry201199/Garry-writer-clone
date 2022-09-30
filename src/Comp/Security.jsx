import React from "react";
import gdpr from "../Assets/gdpr.svg";
import fl from "../Assets/fl.svg";
import aicpa from "../Assets/aicpa.webp";
import pci from "../Assets/pci.webp";
import b from "../Assets/b.svg";

const secCards = [
  { id: 1, img: gdpr },
  { id: 2, img: fl },
  { id: 3, img: aicpa },
  { id: 4, img: pci },
  { id: 5, img: b },
];
const Security = () => {
  return (
    <div className="flex text-[0.625rem] md:text-base pt-24 font-pop gap-y-6 text-center text-black flex-col bg-[#f3f5ff] justify-center items-center">
      <p className="font-semibold self-center tracking-[0.4rem]">SECURITY</p>
      <p className=" self-center font-medium text-[1.5rem]  md:text-[3rem] ">
        Your data is not the product
      </p>
      <p className=" font-medium text-[0.9rem] w-[80%] md:text-[1.2rem] md:w-[60%]">
        Data privacy and security are our top priority. We analyze your data
        transiently, and we don’t store or use your data to train our machine
        learning models.
      </p>

      <div className="flex flex-wrap items-center w-full justify-center gap-y-6 gap-x-12 mt-8">
        {secCards?.map((i) => (
          <div key={i.id}  className=" w-28 h-28 md:w-32 md:h-32 drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] shadow-purple-300  flex bg-white justify-center items-center rounded-full">
            <img className="object-contain h-[60%]" src={i.img} alt={i.img} />
          </div>
        ))}
      </div>

      <div className=" my-12 md:my-24 flex flex-col items-center justify-center  md:w-[20%]  border-t-2 border-gray-400 ">
        <p className="text-gray-600 text-base mt-3">Learn more</p>
        <div className="flex  items-center  gap-x-4">
          <p className="font-pop font-medium hover:opacity-70 duration-300 transition-all cursor-pointer  text-[1.169rem] md:text-[1.5rem]">
          Security at Writer

          </p>
          <svg
            className="hover:text-gray-600"
            width="16"
            height="7"
            viewBox="0 0 16 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.01 2.625H0V4.375H12.01V7L16 3.5L12.01 0V2.625Z"
              fill="black"
            ></path>
          </svg>{" "}
        </div>
      </div>

      <div className="flex flex-col py-20 gap-y-8 bg-[#f6effd] w-full h-fit ">
          <p className=" self-center font-medium w-[80%] text-[1.25rem] md:text-[3rem] ">Make Writer part of your team</p>
          <div className="flex flex-col font-semibold gap-y-3 justify-center items-center gap-4 ml-4 md:flex-row ">
        <button className="px-2 w-[70%] md:w-fit  md:px-6 text-sm md:text-[1.5rem]  border-2 border-black bg-inherit hover:bg-black transition-all duration-500 ease-in-out py-2 md:py-6  text-black hover:text-white rounded-full ">
          Request a demo
        </button>
        <button className="px-2 w-[70%] md:w-fit  md:px-6 text-sm md:text-[1.5rem] bg-black hover:bg-[#373738] transition-all duration-500 ease-in-out py-2 md:py-6  text-white rounded-full ">
          Try for free
        </button>
      </div>
      </div>
    </div>
  );
};

export default React.memo(  Security) ;
