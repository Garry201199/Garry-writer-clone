import React from "react";
import footer_logo from "../Assets/footer-logo.svg";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className=" selection:text-sky-300 selection:bg-sky-300/20  hidden md:flex flex-col font-pop w-full py-12  justify-center items-center bg-black text-white ">
      <div className="flex flex-wrap w-[80%] justify-evenly pb-8 ">
        <div className="">
          {" "}
          <img src={footer_logo} alt="footer_logo" />{" "}
        </div>
        {/* column 1 */}
        <div className=" flex flex-col ">
          <p className=" pb-8  font-semibold text-[1.4rem] tracking-wider">
            Product
          </p>
          <ul className="flex  flex-col gap-y-3 text-[1.1rem]  ">
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Overview
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Security
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Writer for Chrome
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Writer for Contentful
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Writer for Figma
            </li>
          </ul>
          <div className="border-b-2 w-[40%] my-3 border-gray-600"></div>
          <ul className="flex  flex-col gap-y-3 text-[1.1rem]  ">
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Grammarly alternative
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Request a demo
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Try for free
            </li>
          </ul>
        </div>
        {/* column 2 */}

        <div className=" flex flex-col ">
          <p className=" pb-8  font-semibold text-[1.4rem] tracking-wider">
            Resources
          </p>
          <ul className="flex  flex-col gap-y-3 text-[1.1rem]  ">
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Blog
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Guides
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Inclusive language
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Style guide template
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Terminology management
            </li>
          </ul>
          <div className="border-b-2 w-[40%] my-3 border-gray-600"></div>
          <ul className="flex  flex-col gap-y-3 text-[1.1rem]  ">
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Free grammar check
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Free plagiarism check
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Free punctuation check
            </li>
          </ul>
        </div>
        {/* column 3 */}

        <div className=" flex flex-col ">
          <p className=" pb-8  font-semibold text-[1.4rem] tracking-wider">
            Company
          </p>
          <ul className="flex  flex-col gap-y-3 text-[1.1rem]  ">
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Careers
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Partners
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Contact usuation check
            </li>
          </ul>
        </div>
        {/* column 4 */}
        <div className=" flex flex-col ">
          <p className=" pb-8  font-semibold text-[1.4rem] tracking-wider">
            Support
          </p>
          <ul className="flex  flex-col gap-y-3 text-[1.1rem]  ">
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Help center
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              API
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Status
            </li>
          </ul>
        </div>
      </div>
      <div className="flex  w-[80%] font-bold tracking-[0.3rem] items-center  justify-evenly mt-6 pb-4 ">
        <p className=" ">© 2022 WRITER</p>
        <div className="flex gap-x-4 text-white ">
            <div className="bg-[#2d2d2d] hover:bg-opacity-50 drop-shadow-3xl   duration-300 transition  rounded-full p-4"><FaFacebookF size={25} /></div>
            <div className="bg-[#2d2d2d] hover:bg-opacity-50 drop-shadow-3xl   duration-300 transition rounded-full p-4"><FaTwitter size={25}/></div>
            <div className="bg-[#2d2d2d] hover:bg-opacity-50 drop-shadow-3xl   duration-300 transition rounded-full p-4"><FaLinkedinIn size={25}/></div> 
        </div>
        <div className="divide-x-2  gap-x-4 flex">
          <p className="hover:text-white/80 duration-300 transition cursor-pointer  ">TERMS</p> <p className="pl-4 hover:text-white/80 duration-300 transition cursor-pointer">PRIVACY</p>
        </div>
      </div>
    </div>


    {/* MObile Footer */}
    <div className=" flex md:hidden flex-col font-pop w-full pt-12 pb-6  justify-center items-center bg-black text-white ">
      <div className="flex flex-col w-[85%]">
        {/* image */}
      <div className=" pb-5" >
          <img src={footer_logo} alt="footer_logo" />{" "}
        </div>
        {/* footer grid */}
        <div className="grid grid-cols-2 gap-4 ">
                  {/* column 1 */}
        <div className=" flex flex-col ">
          <p className=" pb-5  font-semibold text-[1rem] tracking-wider">
            Product
          </p>
          <ul className="flex  flex-col gap-y-3 text-[0.7rem]  ">
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Overview
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Security
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Writer for Chrome
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Writer for Contentful
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Writer for Figma
            </li>
          </ul>
          <div className="border-b-2 w-[40%] my-3 border-gray-600"></div>
          <ul className="flex  flex-col gap-y-3 text-[0.7rem]  ">
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Grammarly alternative
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Request a demo
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Try for free
            </li>
          </ul>
        </div>
        {/* column 2 */}

        <div className=" flex flex-col ">
          <p className=" pb-5  font-semibold text-[1rem] tracking-wider">
            Resources
          </p>
          <ul className="flex  flex-col gap-y-3 text-[0.7rem]  ">
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Blog
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Guides
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Inclusive language
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Style guide template
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Terminology management
            </li>
          </ul>
          <div className="border-b-2 w-[40%] my-3 border-gray-600"></div>
          <ul className="flex  flex-col gap-y-3 text-[0.7rem]  ">
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Free grammar check
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Free plagiarism check
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Free punctuation check
            </li>
          </ul>
        </div>
                {/* column 3 */}

        <div className=" flex flex-col ">
          <p className=" pb-5  font-semibold text-[1rem] tracking-wider">
            Company
          </p>
          <ul className="flex  flex-col gap-y-3 text-[0.7rem]  ">
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Careers
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Partners
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Contact usuation check
            </li>
          </ul>
        </div>
        {/* column 4 */}
        <div className=" flex flex-col ">
          <p className=" pb-5  font-semibold text-[1rem] tracking-wider">
            Support
          </p>
          <ul className="flex  flex-col gap-y-3 text-[0.7rem]  ">
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Help center
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              API
            </li>
            <li className=" duration-300 transition-all cursor-pointer text-[#bdbdbd] hover:text-white ">
              Status
            </li>
          </ul>
        </div>

        </div>
      </div>

      <div className="flex flex-col w-[80%] font-semibold tracking-[0.3rem] items-center  justify-center gap-y-2 mt-6 pb-4  ">
        <div className="flex gap-x-4 text-white ">
            <div className="bg-[#2d2d2d] hover:bg-opacity-50 drop-shadow-3xl   duration-300 transition  rounded-full p-4"><FaFacebookF size={20} /></div>
            <div className="bg-[#2d2d2d] hover:bg-opacity-50 drop-shadow-3xl   duration-300 transition rounded-full p-4"><FaTwitter size={20}/></div>
            <div className="bg-[#2d2d2d] hover:bg-opacity-50 drop-shadow-3xl   duration-300 transition rounded-full p-4"><FaLinkedinIn size={20}/></div> 
        </div>
        <div className="divide-x-2 text-[0.8rem]  gap-x-4 flex">
          <p className="hover:text-white/80  duration-300 transition cursor-pointer  ">TERMS</p> <p className="pl-4  hover:text-white/80 duration-300 transition cursor-pointer">PRIVACY</p>
        </div>
        <p className="text-[0.8rem] ">© 2022 WRITER</p>
        
        
      </div>

    </div>
    </>
  );
};

export default  React.memo(  Footer) ;
