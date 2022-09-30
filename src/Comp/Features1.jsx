import React from "react";
import img_1_2 from "../Assets/img-1-2.webp";
import img_2 from "../Assets/img-2.webp";
import Great_writing from "../Assets/Everything-your-team_Great-writing.mp4";
import Personal_and_team from "../Assets/Everything-your-team_Personal-and-team-snippets.mp4";
import Autocorrect from "../Assets/Alt-Autocorrect-Cropped.mp4";
//
import Terms from "../Assets/Everything-you-need_Terms.mp4";
import Writing_rules from "../Assets/Everything-you-need_Writing-rules.mp4";
import Content_system from "../Assets/Everything-you-need_Content-design-system.mp4";

const Features1 = () => {
  return (
    <div className=" flex-col flex items-center  justify-center font-pop pt-24  bg-white w-full h-fit">
      <div className="w-full pb-20 flex items-center  justify-center  h-full">
        <div className=" w-[90%] md:w-[70%] grid gap-8 grid-cols-1 md:grid-cols-2">
          {/* 1 */}
          <div className=" px-2 py-3 bg-white  flex font-semibold  text-[1.169rem] md:text-[1.6rem]  items-center flex-col ">
            <p className="text-center  ">Everything </p>
            <p className="text-center"> your team needs</p>
            <p className="text-gray-600 text-center">
              in an AI writing platform
            </p>
            <img className="object-contain h-full" src={img_1_2} alt="" />
          </div>
          {/* 2 */}
          <div className=" rounded-lg flex h-fit gap-y-3 font-semibold  items-center flex-col  py-4 md:px-14 md:py-6 px-6 bg-[#E4E9FF] ">
            <div className="">
              <p className="text-center text-[1.169rem]  md:text-[1.5rem] ">
                Great writing{" "}
              </p>
              <p className="text-center md:text-[1.2rem] text-gray-600 font-normal ">
                Crisp, clear, on-brand writing, every time
              </p>
            </div>

            <video
              className="  object-contain rounded-lg drop-shadow-xl "
              muted
              loop
              autoPlay
            >
              <source src={Great_writing} type="video/mp4" />
              <source src={Great_writing} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* 3 */}
          <div className=" rounded-lg flex  gap-y-3 font-semibold  items-center flex-col  py-4 md:px-14 md:py-6 px-6 bg-[#E4E9FF] ">
            <div className="">
              <p className="text-center text-[1.169rem] md:text-[1.5rem]">
                Personal and team snippets
              </p>
              <p className="text-center  md:text-[1.2rem] text-gray-600 font-normal ">
                Your best content, easy to reuse
              </p>
            </div>

            <video className="  rounded-lg drop-shadow-xl " muted loop autoPlay>
              <source src={Personal_and_team} type="video/mp4" />
              <source src={Personal_and_team} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* 4 */}
          <div className=" rounded-lg flex  gap-y-3 font-semibold  items-center flex-col  py-4 md:px-14 md:py-6 px-6 bg-[#E4E9FF] ">
            <div className="">
              <p className="text-center text-[1.169rem] md:text-[1.5rem]">
                Autocorrect and autocomplete
              </p>
              <p className="text-center md:text-[1.2rem] text-gray-600 font-normal ">
                Their next thought, teed up (and cleaned up)
              </p>
            </div>

            <video className="  rounded-lg drop-shadow-xl " muted loop autoPlay>
              <source src={Autocorrect} type="video/mp4" />
              <source src={Autocorrect} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* & component */}
      <div className="z-30 ">
        <div className="bg-black text-white w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem] rounded-full ">
          <p className="font-pop flex justify-center items-center text-[3rem]  md:text-[7rem] self-center ">
            &
          </p>
        </div>
      </div>
      {/* 2nd grid */}
      <div className="w-full flex flex-col bg-[#Fafafa] items-center  justify-center  pt-32  -mt-10 md:-mt-20 h-full">
        <div className=" w-[90%] md:w-[70%] grid gap-8 md:grid-cols-2">
          {/* 1 */}
          <div className=" px-2 py-3 bg-white   flex font-semibold text-[1.169rem] md:text-[1.6rem]  items-center flex-col ">
            <p className="text-center  ">Everything you need </p>
            <p className="text-gray-600">to enforce strategy</p>
            <img className="object-contain h-full" src={img_2} alt="" />
          </div>
          {/* 2 */}
          <div className=" rounded-lg flex  gap-y-3 font-semibold  items-center flex-col  py-4 md:px-14 md:py-6 px-6 bg-[#F6EFFD] ">
            <div className="">
              <p className="text-center text-[1.169rem] md:text-[1.5rem]">
                Terminology management
              </p>
              <p className="text-center   md:text-[1.5rem] text-gray-600 font-normal ">
                Your most important words, organized
              </p>
            </div>

            <video className="  rounded-lg drop-shadow-xl " muted loop autoPlay>
              <source src={Terms} type="video/mp4" />
              <source src={Terms} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* 3 */}
          <div className=" rounded-lg flex  gap-y-3 font-semibold  items-center flex-col  py-4 md:px-14 md:py-6 px-6 bg-[#F6EFFD] ">
            <div className="">
              <p className="text-center text-[1.169rem] md:text-[1.5rem]">
                Writing rules
              </p>
              <p className="text-center md:text-[1.2rem] text-gray-600 font-normal ">
                Robust editorial customization for your voice and style
              </p>
            </div>

            <video className="  rounded-lg drop-shadow-xl " muted loop autoPlay>
              <source src={Writing_rules} type="video/mp4" />
              <source src={Writing_rules} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* 4 */}
          <div className=" rounded-lg flex  gap-y-3 font-semibold  items-center flex-col  py-4 md:px-14 md:py-6 px-6 bg-[#F6EFFD] ">
            <div className="">
              <p className="text-center text-[1.169rem] md:text-[1.5rem]">
                Beautiful online styleguide
              </p>
              <p className="text-center md:text-[1.2rem] text-gray-600 font-normal ">
                Build a styleguide in record time using templates
              </p>
            </div>

            <video className="  rounded-lg drop-shadow-xl " muted loop autoPlay>
              <source src={Content_system} type="video/mp4" />
              <source src={Content_system} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="my-24 flex flex-col items-center justify-center  md:w-[20%]  border-t-2 border-gray-400 ">
          <p className="text-gray-600 text-base mt-3">Learn more</p>
          <div className="flex  items-center  gap-x-4">
            <p className="font-pop font-semibold hover:opacity-70 duration-300 transition-all cursor-pointer  text-[1.169rem] md:text-[1.5rem]">
              Product overview
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
      </div>
    </div>
  );
};

export default  React.memo( Features1) ;
