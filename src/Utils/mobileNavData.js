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
    ),
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
    ),
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
    ),
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
    ),
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
    ),
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
    ),
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
    ),
  },
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
    ),
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
    ),
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
    ),
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
    ),
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
    ),
  },
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
    ),
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
    ),
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
    ),
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
    ),
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
    ),
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
    ),
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
    ),
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
    ),
  },
];
const ProductsComp = (
  <div className={`border mx-2 min-w-fit   bg-white text-gray-800 `}>
    <div className="  flex  flex-col divide-x divide-solid  gap-x-3   ">
      <div className="flex-1 flex flex-col py-4 justify-start  ">
        {" "}
        <div className="flex ml-4 flex-col">
          <p className="font-pop text-[0.8rem] mb-3  tracking-[0.4em] text-start text-gray-700 ">
            PRODUCTS
          </p>
          <ul>
            {Products &&
              Products.map(({ id, caption, img }) => (
                <li
                  className="flex px-3 cursor-pointer rounded-md py-2 gap-x-2 transition-all duration-300 ease-in-out hover:bg-[#d6e7fd] "
                  key={id}
                >
                  {img} <span className="text-[0.7rem]  ">{caption}</span>{" "}
                </li>
              ))}
          </ul>
        </div>
        <div className="flex ml-4 mt-3 flex-col">
          <p className="font-pop text-[0.8rem] mb-4  tracking-[0.4em] text-start text-gray-700 ">
            INTEGRATIONS
          </p>
          <ul>
            {Integrations &&
              Integrations.map(({ id, caption, img }) => (
                <li
                  className="flex px-3 cursor-pointer rounded-md py-2 gap-x-2 transition-all duration-300 ease-in-out hover:bg-[#d6e7fd] "
                  key={id}
                >
                  {" "}
                  {img} <span className="text-[0.7rem]   ">{caption}</span>{" "}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
    <div className="  py-4 px-4 flex-col flex  items-center justify-center  ">
      <p className="font-pop place-self-start text-[0.8rem] mb-4 tracking-[0.4em] font-semibold text-gray-700 ">
        CUSTOMER STORY
      </p>
      <div className="flex  justify-center w-full   gap-2 ">
        <img src={one_voice} className="w-20" alt="one" />
        <div className="flex flex-col    font-com tracking-tight text-[1.2rem] font-bold">
          <p className="text-start  ">Content is Brand: One Voice at UiPath</p>
          <p className="font-pop cursor-pointer  flex items-center gap-3 hover:text-gray-600 font-semibold text-[0.8rem]">
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
  </div>
);
const useCasesComp = (
  <div
    className={`border mx-2  
  transition-all min-w-fit bg-white text-gray-800 `}
  >
    <div className="flex  flex-col divide-x divide-solid  gap-x-3    ">
      <div className="flex-1 flex py-4  justify-start  ">
        {" "}
        <div className="flex ml-6 flex-col">
          <p className="font-pop text-[0.9rem] mb-3   font-semibold tracking-[0.4em] text-start text-gray-700 ">
            USE CASES
          </p>
          <div className="grid grid-cols-1  ">
            {useCases &&
              useCases.map(({ id, title, desc, img }) => (
                <div
                  className="flex px-3 cursor-pointer rounded-md py-1 gap-x-4  transition-all duration-300 ease-in-out hover:bg-[#d6e7fd] "
                  key={id}
                >
                  {" "}
                  {img}{" "}
                  <div className="flex flex-col  ">
                    <span className="text-[0.7rem] font-semibold text-start">
                      {title}
                    </span>
                    <span className="text-[0.6rem] leading-tight font-normal text-start">
                      {desc}
                    </span>{" "}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* image */}
      <div className="  py-4 px-4 flex-col flex  items-center justify-center  ">
        <p className="font-pop place-self-start text-[0.8rem] mb-4 tracking-[0.4em] font-semibold text-gray-700 ">
          CUSTOMER STORY
        </p>
        <div className="flex  justify-center w-full   gap-2 ">
          <img src={one_voice} className="w-20" alt="one" />
          <div className="flex flex-col    font-com tracking-tight text-[1.2rem] font-bold">
            <p className="text-start  ">
              Content is Brand: One Voice at UiPath
            </p>
            <p className="font-pop cursor-pointer  flex items-center gap-3 hover:text-gray-600 font-semibold text-[0.8rem]">
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
    </div>
  </div>
);
const IntegrationsComp = (
  <div className={` mx-2  border  min-w-fit  bg-white text-gray-800 `}>
    <div className="  flex-col  flex divide-y  gap-x-3   ">
      {/* 1 */}
      <div className=" p-3 flex-col  flex  justify-evenly  ">
        <p className="font-pop text-start text-[0.8rem] mb-4 tracking-[0.4em] font-semibold text-gray-700 ">
          LATEST GUIDE
        </p>
        <div className="flex  justify-evenly gap-3 ">
          <img src={latest_guides} className="w-20 object-cover " alt="one" />
          <div className="flex flex-col   justify-between  max-w-[60%] font-formula  ">
            <p className="text-start  text-[1.2rem]">
              Your guide to AI writing software
            </p>
          </div>
        </div>
        <p className="font-pop tracking-wider hover:underline decoration-2 decoration-gray-600  underline-offset-2  cursor-pointer  flex items-center gap-3 hover:text-gray-600 font-semibold text-[0.8rem]">
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
      {/* 2 */}
      <div className=" flex  flex-col gap-y-1  p-3 justify-between  ">
        <p className="font-pop text-start text-[0.8rem]  tracking-[0.4em] font-semibold text-gray-700">
          Guides
        </p>

        <div className="w-fit h-32  flex justify-center items-center bg-black hover:bg-gradient-to-r from-[#f5eefc] to-[#e7e8f4]   hover:shadow-inner duration-300 ease-in-out transition-all   hover:text-black   text-white p-8">
          <p className="tracking-widest text-[1.5rem]">G u i d e s</p>
        </div>
        <p className="font-pop tracking-wider hover:underline decoration-2 decoration-gray-600  underline-offset-2  cursor-pointer  flex items-center gap-3 hover:text-gray-600 font-semibold text-[0.8rem]">
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
      <div className="flex p-3 gap-y-1 flex-col  justify-center  ">
        <p className="font-pop text-start text-[0.8rem] mb-4 tracking-[0.4em] font-semibold text-gray-700 ">
          BLOG
        </p>
        <img className="w-fit" src={wr_logo} alt="wr_logo" />

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
);
export const data = [
  { id: 1, title: "Products", content: ProductsComp, isExpandable: true },
  { id: 2, title: "Use Cases", content: useCasesComp, isExpandable: true },
  { id: 3, title: "Pricing", content: <></> },
  { id: 4, title: "Customers", content: <></> },
  { id: 5, title: "Resources", content: IntegrationsComp, isExpandable: true },
];
