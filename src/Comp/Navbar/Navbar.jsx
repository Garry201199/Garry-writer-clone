import React, { useState,   } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import './Navbar.css'
import ModalBridge from "../ModalBridge";
import { data } from "../../Utils/mobileNavData";

const Navbar = () => {
  const [open, setOpen] = useState(false);
 
  const [changedColor, setChangedColor] = useState("white");
  const [op, setOp] = useState({
    openproduct: false,
    openuse_cases: false,
    openresources: false,
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const toggle = (i)=>{
    if(selected === i ){
      return setSelected(null)
    }
    setSelected(i)

  }
 

  const changeNavbarColor = () => {
    window.scrollY >= 76
      ? setChangedColor(() => "white")
      : setChangedColor(() => "[#F7F4FF]");
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div
      className={`font-pop  w-full fixed  z-50 text-${
        changedColor === "black" ? "white" : ""
      } bg-${changedColor} duration-500   transition-colors h-[76px]`}
    >
      <div className=" flex w-full h-full justify-between items-center px-4 md:px-6 lg:px-12">
        <h1 className=" font-anton  text-[1.5em] md:text-[2.5rem] cursor-pointer ">WRITER</h1>
        <div className=" flex h-full  md:gap-2 lg:gap-4 font-semibold ">
          <ul className=" hidden group md:flex items-center md:gap-3  lg:gap-6  text-base">
            <li  
              id="product"
              onClick={(e) => setOpen(open ? true : !open)}
              onMouseEnter={(e) =>
                setOp({
                  openproduct: op.openproduct ? true : !op.openproduct,
                })
              }
              onMouseLeave={() => {
                setOp({ openproduct: !op.openproduct });
              }}
              className="flex gap-1 h-full cursor-pointer items-center"
            >
              Product {op.openproduct ? <AiFillCaretUp /> : <AiFillCaretDown />}
            </li>
            <li
              id="use_cases"
              onMouseEnter={(e) =>
                setOp({
                  openuse_cases: op.openuse_cases ? true : !op.openuse_cases,
                })
              }
              onClick={(e) =>
                setOp({
                  openuse_cases: op.openuse_cases ? true : !op.openuse_cases,
                })
              }
              onMouseLeave={() => {
                setOp({ openuse_cases: !op.openuse_cases });
              }}
              className="flex gap-1 h-full  group cursor-pointer items-center"
            >
              Use Cases{" "}
              {op.openuse_cases ? <AiFillCaretUp /> : <AiFillCaretDown />}
            </li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Customers</li>
            <li
              id="resources"
              onMouseEnter={(e) =>
                setOp({
                  openresources: op.openresources ? true : !op.openresources,
                })
              }
              onClick={(e) =>
                setOp({
                  openresources: op.openresources ? true : !op.openresources,
                })
              }
              onMouseLeave={() => {
                setOp({ openresources: !op.openresources });
              }}
              className="flex gap-1 cursor-pointer h-full items-center"
            >
              Resources
              {op.openresources ? <AiFillCaretUp /> : <AiFillCaretDown />}
            </li>
          </ul>

          <div className="md:flex  items-center justify-center hidden my-4 gap-2 lg:gap-4 ml-4">
            <button className=" md:text-sm md:px-2 md:py-1 lg:py-3 lg:px-4 bg-[#5551ff]  place-self-center hover:bg-[#1f1da2] transition-all duration-500 ease-in-out  text-white rounded-full ">
              Try for free
            </button>
            <button className=" md:text-sm md:px-2 md:py-1 lg:py-3 lg:px-4 bg-black hover:bg-[#5c5c5c] place-self-center transition-all duration-500 ease-in-out   text-white rounded-full ">
              Sign in
            </button>
          </div>
          {/* Mobile Menu */}
          <div className="flex md:hidden align-center items-center  ">
            <p className="text-[0.8rem] mr-4"> Try for free</p>

            <div onClick={() => setMenuOpen((menuOpen) => !menuOpen)} className={`tham tham-e-squeeze ${menuOpen && 'tham-active'}   tham-w-6`}>
  <div className="tham-box">
    <div className="tham-inner" />
  </div>
</div>

            <div
              className={`text-xl md:hidden  overflow-y-auto  duration-500  transition-all  font-pop absolute 
                top-[76px] left-0 z-30 bg-white
                   ${
                  menuOpen ? "flex opacity-100 left-0 " : " bg-black opacity-0  left-[100%]"
                }    flex-col ease-in-out
                 h-[calc(100vh-76px)] w-full`}
            >

              <div className="flex flex-col  h-full pl-6 ">
                <div className="accordion">
                  {data.map((item ) =>(
                    <div  key={item.id}  className="item  ">
                    <div className="title" onClick={() => toggle(item.id)}>
                      <h2 className="text-[0.9rem] mr-3 ">{item.title}</h2> 
                      {item.isExpandable && <div className={`${selected === item.id ? 'rotate-180' :'' } transition-all duration-500 ease-out `}><AiFillCaretDown size={16} /></div>  } 
                    </div>
                    <div className={` ${selected === item.id && item.isExpandable ? 'content show ' : 'content' } `}>
                      {item.content}
                    </div>
                  </div>
                  ))}
                </div>
                <div className=" flex pb-8 items-center justify-center gap-4 mt-6 ">
            <button className="px-4 text-[1rem] bg-[#5551ff]  place-self-center hover:bg-[#1f1da2] transition-all duration-500 ease-in-out py-2 text-white rounded-full ">
              Try for free
            </button>
            <button className="px-4 text-[1rem] bg-black hover:bg-[#5c5c5c] place-self-center transition-all duration-500 ease-in-out py-2 text-white rounded-full ">
              Sign in
            </button>
          </div>

          
              </div>
            
            </div>
          </div>
        </div>
      </div>
      <ModalBridge setOp={setOp} op={op} />
    </div>
  );
   
};

export default React.memo(Navbar);
