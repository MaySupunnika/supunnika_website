import React, { useState, useEffect } from "react";
import Fire from "../assets/fire.gif";
import { Link } from "react-scroll";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const clickHamburger = () => {
    setIsActive(!isActive);
  };

  const clickHamburgerClose = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`w-screen overflow-x-hidden h-[6rem] fixed top-0 left-0 right-0 transition ease-linear z-[999]   ${
          scrolled ? "bg-[#1a033f]" : "bg-transparent"
        } max-[1120px]:hidden max-[700px]:hidden`}
      >
        <div className="flex justify-between h-[6rem] ">
          <div
            className="flex items-center relative max-[1500px]:scale-75 max-[1500px]:ml-[3rem]"
            id="left-container"
          >
            <div className="w-[12rem] absolute left-[1rem]">
              <img src={Fire} alt="fire" />
            </div>
            <div className="w-[12rem] absolute left-[7rem] scale-x-[-1]">
              <img src={Fire} alt="fire" />
            </div>
            <Link to="Home" smooth={true} className="cursor-pointer ">
              <h2 className="text-4xl font-semibold text-[#FF0068] font-silkscreen tracking-custom absolute top-[1.45rem] left-[2.6rem] ">
                supunnika
              </h2>
              <h2 className="text-4xl font-semibold text-white font-silkscreen tracking-custom absolute top-[1.55rem] left-[2.8rem] ">
                supunnika
              </h2>
            </Link>
          </div>
          <div
            id="right-container"
            className="flex  w-[52rem] justify-evenly max-[1500px]:scale-75"
          >
            <Link
              to="AboutMe"
              smooth={true}
              className="flex items-center cursor-pointer relative "
            >
              <h2 className="text-2xl text-white font-semibold font-silkscreen hover:text-[#FF0068] duration-200">
                ABOUT ME
              </h2>
            </Link>
            <Link
              to="Skills"
              smooth={true}
              className="flex items-center cursor-pointer "
            >
              <h2 className="text-2xl text-white font-semibold font-silkscreen hover:text-[#FF0068] duration-200">
                SKILL
              </h2>
            </Link>
            <Link
              to="Project"
              smooth={true}
              className="flex items-center cursor-pointer "
            >
              <h2 className="text-2xl text-white font-semibold font-silkscreen hover:text-[#FF0068] duration-200">
                PROJECT
              </h2>
            </Link>
            <Link
              to="Footer"
              smooth={true}
              className="flex items-center cursor-pointer "
            >
              <h2 className="text-2xl text-white font-semibold font-silkscreen hover:text-[#FF0068] duration-200">
                CONTACT
              </h2>
            </Link>
          </div>
        </div>
      </nav>
      <nav
        className={`w-screen overflow-x-hidden h-[5rem] fixed top-0 left-0 right-0 transition ease-linear z-50   ${
          scrolled ? "bg-[#1a033f]" : "bg-transparent"
        } min-[1121px]:hidden`}
      >
        <div className="flex justify-between h-[100%]">
          <div
            className="flex items-center relative ml-[3rem]"
            id="left-container"
          >
            <div className="w-[10rem] absolute left-[-2rem]">
              <img src={Fire} alt="fire" />
            </div>
            <div className="w-[10rem] absolute left-[7rem] scale-x-[-1]">
              <img src={Fire} alt="fire" />
            </div>
            <Link to="Home" smooth={true} className="cursor-pointer">
              <h2 className="text-3xl font-semibold text-[#FF0068] font-silkscreen tracking-custom absolute top-[1.15rem] left-[2.6rem] ">
                supunnika
              </h2>
              <h2 className="text-3xl font-semibold text-white font-silkscreen tracking-custom absolute top-[1.25rem] left-[2.8rem] ">
                supunnika
              </h2>
            </Link>
          </div>
          <div
            className="flex flex-col mr-[7rem] justify-center cursor-pointer"
            onClick={clickHamburger}
          >
            <div className="w-5 h-[2px] bg-white mb-1"></div>
            <div className="w-5 h-[2px] bg-white mb-1"></div>
            <div className="w-5 h-[2px] bg-white"></div>
          </div>
        </div>
        {isActive ? (
          <div className="w-screen h-[15rem] bg-[#1a033f] fixed top-0 flex flex-col justify-center items-center gap-y-[0.7rem] ">
            <p
              className="absolute top-[7%] right-[8%] cursor-pointer font-silkscreen text-lg text-white hover:text-[#FF0068]"
              onClick={clickHamburgerClose}
            >
              x
            </p>
            <Link
              to="AboutMe"
              smooth={true}
              className="cursor-pointer font-silkscreen text-lg text-white hover:text-[#FF0068]"
              onClick={clickHamburgerClose}
            >
              about me
            </Link>
            <Link
              to="Skills"
              smooth={true}
              className="cursor-pointer font-silkscreen text-lg text-white hover:text-[#FF0068]"
              onClick={clickHamburgerClose}
            >
              skill
            </Link>
            <Link
              to="Project"
              smooth={true}
              className="cursor-pointer font-silkscreen text-lg text-white hover:text-[#FF0068]"
              onClick={clickHamburgerClose}
            >
              project
            </Link>
            <Link
              to="Footer"
              smooth={true}
              className="cursor-pointer font-silkscreen text-lg text-white hover:text-[#FF0068]"
              onClick={clickHamburgerClose}
            >
              contact
            </Link>
          </div>
        ) : (
          ""
        )}
      </nav>
    </>
  );
}
