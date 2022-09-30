import React from "react";
import one_voice from "../Assets/one_voice.webp";
import latest_guides from "../Assets/latest_guides.webp";
import wr_logo from "../Assets/wr_logo.svg";
const Products = [
  {
    id: 1,
    caption: "Styleguide",
    img: (
      <img
        loading="lazy"
        width="32"
        height="32"
        src="https://writer.com/wp-content/uploads/2022/09/styleguide_menu.svg?w=32"
        alt=""
      ></img>
    )
  },
  {
    id: 2,
    caption: "Terms",
    img: (
      <img
        loading="lazy"
        width="32"
        height="32"
        src="https://writer.com/wp-content/uploads/2022/09/terms_menu.svg?w=32"
        alt=""
      />
    )
  },
  {
    id: 3,
    caption: "Snippets",
    img: (
      <img
        loading="lazy"
        width="32"
        height="32"
        src="https://writer.com/wp-content/uploads/2022/09/snippets_menu.svg?w=32"
        alt=""
      ></img>
    )
  },
  {
    id: 4,
    caption: "CoWrite",
    img: (
      <img
        loading="lazy"
        width="32"
        height="32"
        src="https://writer.com/wp-content/uploads/2022/08/cowrite.svg?w=32"
        alt=""
      ></img>
    )
  },
  {
    id: 5,
    caption: "Data, security, &amp privacy",
    img: (
      <img
        loading="lazy"
        width="32"
        height="32"
        src="https://writer.com/wp-content/uploads/2021/09/ic-data.svg"
        alt="Data, security, and privacy"
      />
    )
  },
  {
    id: 6,
    caption: "Reporting &amp analytics",
    img: (
      <img
        loading="lazy"
        width="32"
        height="32"
        src="https://writer.com/wp-content/uploads/2021/09/ic-analytics.svg"
        alt="Reporting and analytics"
      />
    )
  },
  {
    id: 7,
    caption: "Onboarding &amp support",
    img: (
      <img
        loading="lazy"
        width="32"
        height="32"
        src="https://writer.com/wp-content/uploads/2021/09/ic-implementation.svg"
        alt="Onboarding and support"
      />
    )
  }
];
const Integrations = [
  {
    id: 1,
    caption: "Chrome",
    img: (
      <img
        loading="lazy"
        width="32"
        height="32"
        src="https://writer.com/wp-content/uploads/2021/09/ic-chrome.svg"
        alt="Chrome"
      ></img>
    )
  },
  {
    id: 2,
    caption: "Google Docs",
    img: (
      <img
        loading="lazy"
        width="32"
        height="32"
        src="https://writer.com/wp-content/uploads/2021/09/ic-documentation.svg"
        alt="Documentation"
      />
    )
  },
  {
    id: 3,
    caption: "Word",
    img: (
      <img
        loading="lazy"
        width="32"
        height="32"
        src="https://writer.com/wp-content/uploads/2021/09/ic-word.svg"
        alt="Word"
      />
    )
  },
  {
    id: 4,
    caption: "Outlook",
    img: (
      <img
        loading="lazy"
        width="32"
        height="32"
        src="https://writer.com/wp-content/uploads/2021/09/ic-outlook.svg"
        alt="Outlook"
      />
    )
  },
  {
    id: 5,
    caption: "Figma",
    img: (
      <img
        loading="lazy"
        width="32"
        height="32"
        src="https://writer.com/wp-content/uploads/2021/09/ic-figma.svg"
        alt="Figma"
      />
    )
  }
];
const useCases = [
  {
    id: 1,
    title: "Content strategy",
    desc: "Automate your content strategy",
    img: (
      <img
        loading="lazy"
        width="32"
        height="32"
        src="https://writer.com/wp-content/uploads/2021/09/ic-content-strategy.svg"
        alt="Content strategy"
      />
    )
  },
  {
    id: 2,
    title: "Marketing",
    desc: "Keep messages consistent + on-brand",
    img: (
      <img
        loading="lazy"
        width="32"
        height="32"
        src="https://writer.com/wp-content/uploads/2021/09/ic-marketing.svg"
        alt="Marketing"
      />
    )
  },
  {
    id: 3,
    title: "Editorial",
    desc: "AEnforce your editorial guidelines",
    img: (
      <img
        loading="lazy"
        width="32"
        height="32"
        src="https://writer.com/wp-content/uploads/2021/09/ic-editorial.svg"
        alt="Editorial"
      />
    )
  },
  {
    id: 4,
    title: "Support",
    desc: "Give agents the right words",
    img: (
      <img
        loading="lazy"
        width="32"
        height="32"
        src="https://writer.com/wp-content/uploads/2021/09/ic-support.svg"
        alt="Support"
      />
    )
  },
  {
    id: 5,
    title: "Documentation",
    desc: "Write clear, consistent, scannable docs",
    img: (
      <img
        loading="lazy"
        width="32"
        height="32"
        src="https://writer.com/wp-content/uploads/2021/09/ic-documentation-1.svg"
        alt="Documentation"
      />
    )
  },
  {
    id: 6,
    title: "Learning and development",
    desc: "Build high-quality learning content",
    img: (
      <img
        loading="lazy"
        width="32"
        height="32"
        src="https://writer.com/wp-content/uploads/2021/09/ic-learning.svg"
        alt="Learning and development"
      />
    )
  },
  {
    id: 7,
    title: "Operations and IT",
    desc: "Prioritize data security and privacy",
    img: (
      <img
        loading="lazy"
        width="32"
        height="32"
        src="https://writer.com/wp-content/uploads/2021/09/ic-it.svg"
        alt="Operations and IT"
      />
    )
  },
  {
    id: 8,
    title: "HR",
    desc: "Inspire a healthy, positive culture",
    img: (
      <img
        loading="lazy"
        width="32"
        height="32"
        src="https://writer.com/wp-content/uploads/2021/09/ic-hr.svg"
        alt="HR"
      />
    )
  }
];
const ModalBridge = ({ setOp, op }) => {
  return (
    <>
      <div  //fault here in product hover........
      onMouseEnter={(e) =>
        setOp({
          ...op,
          openproduct: op.openproduct ? true : !op.openproduct
        })
      }
      onMouseLeave={() => {
        setOp({ ...op, openproduct: !op.openproduct });
      }}
      className={`absolute   ${
        op.openproduct
          ? "top-[72px] opacity-100 z-10 "
          : " opacity-0 -z-30 hidden top-[76px] "
      } transition-all duration-500   group-hover:block  border-t  min-w-full  bg-white text-gray-800 `}
        
      >
        <div className="px-4 hidden md:flex  divide-x divide-solid  gap-x-3   ">
          <div className=" flex-1 py-4 flex-col flex  place-self-start justify-end  ">
            <p className="font-pop text-sm mb-6 tracking-[0.4em] font-semibold text-gray-700 ">
              CUSTOMER STORY
            </p>
            <div className="flex  justify-end place-self-start gap-3 ">
              <img src={one_voice} className="w-36" alt="one" />
              <div className="flex flex-col  max-w-[40%] font-com tracking-tight text-[2rem] font-bold">
                <p className="text-start  mb-8">
                  Content is Brand: One Voice at UiPath
                </p>
                <p className="font-pop cursor-pointer  flex items-center gap-3 hover:text-gray-600 font-semibold text-sm">
                  Read full story
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
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex py-4  justify-start  ">
            {" "}
            <div className="flex ml-10 flex-col">
              <p className="font-pop text-sm mb-6   font-semibold tracking-[0.4em] text-start text-gray-700 ">
                PRODUCTS
              </p>
              <ul>
                {Products &&
                  Products.map(({ id, caption, img }) => (
                    <li
                      className="flex px-3 cursor-pointer rounded-md py-2 gap-x-4 transition-all duration-300 ease-in-out hover:bg-[#d6e7fd] "
                      key={id}
                    >
                      {" "}
                      {img} <span className="text-base">{caption}</span>{" "}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="flex ml-10 flex-col">
              <p className="font-pop text-sm mb-6   font-semibold tracking-[0.4em] text-start text-gray-700 ">
                INTEGRATIONS
              </p>
              <ul>
                {Integrations &&
                  Integrations.map(({ id, caption, img }) => (
                    <li
                      className="flex px-3 cursor-pointer rounded-md py-2 gap-x-4 transition-all duration-300 ease-in-out hover:bg-[#d6e7fd] "
                      key={id}
                    >
                      {" "}
                      {img} <span className="text-base">{caption}</span>{" "}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        onMouseEnter={(e) =>
          setOp({
            ...op,
            openuse_cases: op.openuse_cases ? true : !op.openuse_cases
          })
        }
        onMouseLeave={() => {
          setOp({ ...op, openuse_cases: !op.openuse_cases });
        }}
        className={`absolute   ${
          op.openuse_cases
            ? "top-[72px] opacity-100 z-10 "
            : " opacity-0 -z-30 hidden top-[76px] "
        } transition-all duration-500   group-hover:block  border-t  min-w-full  bg-white text-gray-800 `}
      >
        <div className="px-4 hidden md:flex  divide-x divide-solid  gap-x-3   ">
          <div className=" flex-1 py-4 flex-col flex  place-self-start justify-end  ">
            <p className="font-pop text-sm mb-6 tracking-[0.4em] font-semibold text-gray-700 ">
              CUSTOMER STORY
            </p>
            <div className="flex  justify-end place-self-start gap-3 ">
              <img src={one_voice} className="w-36" alt="one" />
              <div className="flex flex-col  max-w-[40%] font-com tracking-tight text-[2rem] font-bold">
                <p className="text-start  mb-8">
                  Content is Brand: One Voice at UiPath
                </p>
                <p className="font-pop cursor-pointer  flex items-center gap-3 hover:text-gray-600 font-semibold text-sm">
                  Read full story
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
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex py-4  justify-start  ">
            {" "}
            <div className="flex ml-10 flex-col">
              <p className="font-pop text-sm mb-6   font-semibold tracking-[0.4em] text-start text-gray-700 ">
                USE CASES
              </p>
              <div className="grid grid-cols-2 gap-1">
                {useCases &&
                  useCases.map(({ id, title, desc, img }) => (
                    <div
                      className="flex px-3 cursor-pointer rounded-md py-1  gap-x-4 transition-all duration-300 ease-in-out hover:bg-[#d6e7fd] "
                      key={id}
                    >
                      {" "}
                      {img}{" "}
                      <div className="flex flex-col gap-y-1">
                        <span className="text-[0.9rem] font-semibold text-start">
                          {title}
                        </span>
                        <span className="text-[0.8rem] text-start">{desc}</span>{" "}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        onMouseEnter={(e) =>
          setOp({
            ...op,
            openresources: op.openresources ? true : !op.openresources
          })
        }
        onMouseLeave={() => {
          setOp({ ...op, openresources: !op.openresources });
        }}
        className={`absolute   ${
          op.openresources
            ? "top-[72px] opacity-100 z-10 "
            : " opacity-0 -z-30 hidden top-[76px]   "
        } transition-all duration-500   group-hover:block  border-t  min-w-full  bg-white text-gray-800 `}
      >
        <div className="px-14  hidden md:flex  divide-x divide-solid  gap-x-3   ">
          {/* 1 */}
          <div className="py-4 flex-col flex  place-self-start justify-end  ">
            <p className="font-pop text-sm mb-6 tracking-[0.4em] font-semibold text-gray-700 ">
              LATEST GUIDE
            </p>
            <div className="flex  justify-end place-self-start gap-3 ">
              <img src={latest_guides} className="w-36" alt="one" />
              <div className="flex flex-col tracking-tighter justify-between  max-w-[40%] font-formula text-[2rem] ">
                <p className="text-start  mb-8">
                  Your guide to AI writing software
                </p>
                <p className="font-pop tracking-wider hover:underline decoration-2 decoration-gray-600  underline-offset-2  cursor-pointer  flex items-center gap-3 hover:text-gray-600 font-semibold text-sm">
                  Read full story
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
                </p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="flex-1/2 flex py-4 flex-col  px-8 justify-between  ">
            <p className="font-pop text-start text-sm   tracking-[0.4em] font-semibold text-gray-700 ">
              Guides
            </p>

            <div className="w-fit h-32  flex items-center bg-black hover:bg-gradient-to-r from-[#f5eefc] to-[#e7e8f4]   hover:shadow-inner duration-300 ease-in-out transition-all   hover:text-black   text-white p-8">
              <p className="tracking-widest  text-[1.5rem]">G u i d e s</p>
            </div>
            <p className="font-pop tracking-wider hover:underline decoration-2 decoration-gray-600  underline-offset-2  cursor-pointer  flex items-center gap-3 hover:text-gray-600 font-semibold text-sm">
              See all Writer's Guide
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
            </p>
          </div>
          {/* 3 */}
          <div className="flex-1/2 flex py-4 flex-col  px-8 justify-between  ">
            <p className="font-pop text-start text-sm   tracking-[0.4em] font-semibold text-gray-700 ">
              BLOG
            </p>
            <img className="w-32" src={wr_logo} alt="wr_logo" />

            <p className="font-pop tracking-wider hover:underline decoration-2 decoration-gray-600  underline-offset-2  cursor-pointer  flex items-center gap-3 hover:text-gray-600 font-semibold text-sm">
              Go to the Blog
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
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalBridge;
