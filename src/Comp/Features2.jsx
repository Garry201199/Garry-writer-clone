import React from 'react'
import img_1_2 from "../Assets/img-1-2.webp";
import Great_writing from "../Assets/Everything-your-team_Great-writing.m4v";
import Personal_and_team from "../Assets/Everything-your-team_Personal-and-team-snippets.m4v";
import Autocorrect from "../Assets/Alt-Autocorrect-Cropped.m4v";
const Features2 = () => {
  return (
    <div className="flex relative font-pop justify-center  py-24  bg-white w-full h-fit">
    <div className=" w-[60%] grid gap-8 grid-cols-2">
      {/* 1 */}
      <div className=" px-2 py-3 bg-white  flex font-semibold text-[1.6rem]  items-center flex-col ">
        <p className="text-center  ">Everything </p>
        <p className="text-center"> your team needs</p>
        <p className="text-gray-600">in an AI writing platform</p>
        <img className="object-contain h-full" src={img_1_2} alt="" />
      </div>
      {/* 2 */}
      <div className=" rounded-lg flex  gap-y-3 font-semibold  items-center flex-col pt-4 md:px-14 md:py-6 px-4 bg-[#E4E9FF] ">
        <div className="">
          <p className="text-center text-[1.5rem]">Great writing </p>
          <p className="text-center text-[1.2rem] text-gray-600 font-normal ">
            Crisp, clear, on-brand writing, every time
          </p>
        </div>

        <video className="  " muted loop autoPlay>
          <source src={Great_writing} type="video/mp4" />
          <source src={Great_writing} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* 3 */}
      <div className=" rounded-lg flex  gap-y-3 font-semibold  items-center flex-col pt-4 md:px-14 md:py-6 px-4 bg-[#E4E9FF] ">
        <div className="">
          <p className="text-center text-[1.5rem]">
            Personal and team snippets
          </p>
          <p className="text-center text-[1.2rem] text-gray-600 font-normal ">
            Your best content, easy to reuse
          </p>
        </div>

        <video className="  " muted loop autoPlay>
          <source src={Personal_and_team} type="video/mp4" />
          <source src={Personal_and_team} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* 4 */}
      <div className=" rounded-lg flex  gap-y-3 font-semibold  items-center flex-col pt-4 md:px-14 md:py-6 px-4 bg-[#E4E9FF] ">
        <div className="">
          <p className="text-center text-[1.5rem]">
            Autocorrect and autocomplete
          </p>
          <p className="text-center text-[1.2rem] text-gray-600 font-normal ">
            Their next thought, teed up (and cleaned up)
          </p>
        </div>

        <video className="  " muted loop autoPlay>
          <source src={Autocorrect} type="video/mp4" />
          <source src={Autocorrect} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>


  </div>
  )
}

export default Features2