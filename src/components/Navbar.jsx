import React from "react";
import { RiMenu3Line } from "react-icons/ri";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "preact/hooks";
gsap.registerPlugin(ScrollTrigger)


const Navbar = () => {
  
  useEffect(()=>{
    gsap.to(".navText", {
      y: -100,
      // backgroundColor: white,
      ease: "power1",
      scrollTrigger: {
        trigger: ".main_div",
        start: "top -92%",
        end: "top -100%",
        scrub: 1
      }
    })
  }, [])

  return (
    <div className='main_div w-full flex justify-between z-10 items-center font-helvetica font-thin text-base fixed px-8 py-6'>
      <div className="flex justify-between w-[50%]">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="50pt"
          height="20pt"
          viewBox="0 0 197.000000 78.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,78.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M40 361 l0 -351 203 0 c218 0 276 9 365 54 61 32 125 98 154 161 19
42 23 67 23 156 0 98 -2 110 -30 164 -35 69 -92 117 -168 141 -41 14 -103 18
-299 22 l-248 4 0 -351z m380 206 c45 -22 64 -80 64 -192 1 -159 -40 -235
-125 -235 l-39 0 0 220 0 220 38 0 c20 0 48 -6 62 -13z"
            />
            <path
              d="M840 360 l0 -350 140 0 140 0 0 140 0 140 65 0 65 0 0 -140 0 -140
140 0 140 0 0 350 0 350 -140 0 -140 0 0 -140 0 -140 -65 0 -65 0 0 140 0 140
-140 0 -140 0 0 -350z"
            />
            <path
              d="M1701 364 c-47 -39 -42 -70 35 -204 36 -63 75 -123 86 -133 51 -43
138 -3 138 65 0 37 -117 251 -154 280 -30 25 -70 22 -105 -8z"
            />
            <path
              d="M1575 155 c-35 -34 -33 -78 4 -116 36 -36 79 -38 115 -7 40 35 43 78
11 116 -35 42 -93 45 -130 7z"
            />
          </g>
        </svg>
        <p className="navText lg:flex text-sm hidden text-[#4D4D4D]">
          Based in Delhi <br /> India
        </p>
        <p className="navText lg:flex text-sm hidden text-[#4D4D4D]">
          Looking for front end <br />
          opportunity
        </p>
      </div>
      <nav className="md:flex hidden text-sm gap-3 text-[#4D4D4D]">
        <p className="navText"><a href="#about">About,</a></p>
        <p className="navText hover:scale-125"><a href="#work">Work,</a></p>
        <p className="navText"><a href="#contact">Contact,</a></p>
      </nav>
    </div>
  );
};

export default Navbar;
