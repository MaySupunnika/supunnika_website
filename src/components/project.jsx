import React, { useEffect } from "react";
import "../styles/project.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SlideCard from "./slideCard";

export default function Project() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variantSkill = {
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
      id="Project"
      className="h-screen bg-[#12022B] relative overflow-hidden flex justify-center items-start max-[1500px]:items-start"
    >
      <div className="w-[80rem] flex justify-between items-center max-[701px]:scale-75 max-[701px]:flex-col max-[701px]:mt-[6%] max-[1120px]:flex-col max-[1120px]:scale-75 max-[1120px]:pt-[5%] max-[1500px]:scale-75 max-[1500px]:justify-start max-[1500px]:mt-[-5rem]">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variantSkill}
          className="relative w-[30%] h-[7rem] flex justify-center items-center max-[701px]:mb-[1%] max-[1120px]:mb-[-12%]"
        >
          <h2 className="font-silkscreen text-[#FF0068] text-[4.5rem] font-semibold tracking-custom max-[701px]:scale-75 max-[1120px]:scale-75">
            project
          </h2>
          <h2 className="absolute top-[4%] left-[3%] tracking-custom font-silkscreen text-white text-[4.5rem] font-semibold max-[701px]:scale-75 max-[701px]:top-[3%] max-[701px]:left-[-30%] max-[1120px]:scale-75 max-[1120px]:left-[-3%]">
            project
          </h2>
        </motion.div>
        <div className="ml-[10rem] mt-[12rem] max-[701px]:m-auto max-[1120px]:ml-[5%]">
          <SlideCard />
        </div>
      </div>
    </div>
  );
}
