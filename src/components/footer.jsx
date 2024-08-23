import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import CloudOne from "../assets/cloudOne.webp";
// import CloudTwo from "../assets/cloudTwo.webp";
// import WaterMachine from "../assets/waterMachine.webp";
// import StreetLamp from "../assets/streetLamp.webp";
// import PinkStore from "../assets/pinkStores.webp";
// import Building from "../assets/building2.svg";
// import Building2 from "../assets/building3.svg";
// import Bush from "../assets/bush.webp";
// import Fence from "../assets/fence.webp";
import PhoneIcon from "../assets/phone-icon.png";
import LInkedinIcon from "../assets/linkedin-icon.png";
import EmailIcon from "../assets/email-icon.png";
import GithubIcon from "../assets/githuh-icon.png";
import LocationIcon from "../assets/location-icon.png";
import "../styles/footer.css";

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
  const contact = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div
      id="Footer"
      className="h-screen bg-[#12022B] relative overflow-hidden flex flex-col justify-center pl-[17rem] max-[701px]:pl-0 max-[1120px]:pl-0 max-[1500px]:pl-0"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={contact}
        className="relative w-[20rem] h-[9rem]"
      >
        <h1 className="absolute font-silkscreen text-[4.3rem] font-semibold tracking-custom text-white z-10 max-[701px]:scale-55 max-[1120px]:scale-60 max-[1120px]:ml-[30%] max-[1500px]:scale-65 max-[1500px]:ml-[30%]">
          contact
        </h1>
        <h1 className="absolute font-silkscreen text-[4.3rem] font-semibold tracking-custom text-[#FF0068] top-[0.2rem] left-[0.2rem] max-[701px]:scale-55 max-[1120px]:scale-60 max-[1120px]:ml-[30%] max-[1500px]:scale-65 max-[1500px]:ml-[30%]">
          contact
        </h1>
      </motion.div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="flex flex-col"
      >
        <div className=" mb-[2rem] flex max-[701px]:scale-75 max-[701px]:mb-[1rem] max-[1120px]:scale-65 max-[1500px]:scale-75">
          <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-[#F20040] relative ">
            <img
              src={PhoneIcon}
              alt="phone-icon"
              className="w-8 absolute z-10 top-[11%] left-[11%]"
            />
          </div>
          <a
            href="tel:+66928479885"
            className="text-white font-vt323 text-3xl ml-[2rem]"
          >
            092-847-9885
          </a>
        </div>
        <div className=" mb-[2rem] flex max-[701px]:scale-75 max-[701px]:mb-[1rem] max-[1120px]:scale-65 max-[1500px]:scale-75">
          <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-[#FF28AD] relative">
            <img
              src={EmailIcon}
              alt="email-icon"
              className="w-6 absolute z-10 top-[20%] left-[20%]"
            />
          </div>
          <a
            href="mailto:supunnika.PKN@gmail.com"
            target="_blank"
            className="text-white font-vt323 text-3xl ml-[2rem]"
          >
            Supunnika_PKN@gmail.com
          </a>
        </div>
        <div className=" mb-[2rem] flex max-[701px]:scale-75 max-[701px]:mb-[1rem] max-[1120px]:scale-65 max-[1500px]:scale-75">
          <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-[#FF7F07] relative">
            <img
              src={LInkedinIcon}
              alt="linkedIn-icon"
              className="w-6 absolute z-10 top-[15%] left-[20%]"
            />
          </div>
          <a
            href="https://www.linkedin.com/in/supunnika-poklin-088b40287/"
            target="_blank"
            className="text-white font-vt323 text-3xl ml-[2rem]"
          >
            {" "}
            https://www.linkedin.com/in/supunnika-poklin-088b40287/
          </a>
        </div>
        <div className=" mb-[2rem] flex max-[701px]:scale-75 max-[701px]:mb-[1rem] max-[1120px]:scale-65 max-[1500px]:scale-75">
          <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-[#FF5C5C] relative">
            <img
              src={GithubIcon}
              alt="github-icon"
              className="w-8 absolute z-10 top-[11%] left-[11%]"
            />
          </div>
          <a
            href="https://github.com/MaySupunnika"
            target="_blank"
            className="text-white font-vt323 text-3xl ml-[2rem]"
          >
            https://github.com/MaySupunnika
          </a>
        </div>
        <div className="flex max-[701px]:scale-75 max-[1120px]:scale-65 max-[1500px]:scale-75">
          <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-[#9B21D9] relative">
            <img
              src={LocationIcon}
              alt="location-icon"
              className="w-6 absolute z-10 top-[20%] left-[20%]"
            />
            <div className="w-[0.6rem] h-[0.6rem] bg-[#12022B] rounded-full absolute z-10 top-[33%] left-[38%]"></div>
          </div>
          <a className="text-white font-vt323 text-3xl ml-[2rem]">
            Kanchanaburi, Thailand
          </a>
        </div>
      </motion.div>
    </div>
  );
}
