import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "../styles/aboutMe.css";

export default function AboutMe() {
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
  const aboutMe = {
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
      id="AboutMe"
      className=" h-screen bg-[#12022B] flex flex-col justify-center items-center relative overflow-hidden pt-[3rem] max-[701px]:pt-[8rem] max-[1120px]:pt-[12rem] max-[1500px]:pt-[10%]"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={aboutMe}
        className=" relative"
      >
        <h1 className="text-[2.5rem] font-pixeled font-bold text-[#FF0068] max-[701px]:scale-50 max-[1120px]:scale-60 max-[1500px]:scale-65">
          ABOUT ME
        </h1>
        <h1 className="text-[2.5rem] font-pixeled font-bold text-white absolute top-[-0.25rem] left-[-0.25rem] max-[701px]:scale-50 max-[701px]:top-[-0.12rem] max-[701px]:left-[-0.12rem] max-[1120px]:scale-60 max-[1500px]:scale-65">
          ABOUT ME
        </h1>
      </motion.div>

      <motion.h2
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="text-white w-[44rem] h-[35rem] text-3xl flex font-vt323 mt-[4rem] max-[701px]:text-xl max-[701px]:w-[70%] max-[701px]:mt-[2rem] max-[1120px]:text-[1.3rem] max-[1500px]:text-[1.5rem] max-[1500px]:mt-[3%]"
      >
        <div className="flex flex-col mr-5 max-[701px]:scale-75 max-[1120px]:scale-60 max-[1500px]:scale-65">
          <div className="w-[2rem] h-[2rem] bg-[#F20040] mb-5"></div>
          <div className="w-[2rem] h-[2rem] bg-[#FF28AD] mb-5"></div>
          <div className="w-[2rem] h-[2rem] bg-[#FF5C5C] mb-5"></div>
          <div className="w-[2rem] h-[2rem] bg-[#9B21D9] mb-5"></div>
          <div className="w-[2rem] h-[2rem] bg-[#A509A8]"></div>
        </div>
        <div className="flex flex-col max-[1120px]:leading-6 max-[1500px]:leading-6">
          Hello, my name is Supunnika Poklin, but you can call me May. I hold a
          bachelor degree in science from Thammasat University.
          <br />
          <br /> My journey into the world of development began with self-study
          through YouTube, which eventually led me to enroll in a bootcamp
          course.
          <br />
          <br />I am dedicated to continuously enhancing both my technical and
          soft skills.
          <br />
          <br /> My ultimate goal is to make a meaningful impact by contributing
          to the success of the teams and companies I work with.
        </div>
        <div className="flex flex-col justify-end ml-5 max-[701px]:scale-75 max-[701px]:ml-1 max-[701px]:justify-center max-[1120px]:scale-60 max-[1120px]:justify-start max-[1500px]:scale-65 max-[1500px]:justify-start">
          <div className="w-[2rem] h-[2rem] bg-[#A509A8] mb-5"></div>
          <div className="w-[2rem] h-[2rem] bg-[#9B21D9] mb-5"></div>
          <div className="w-[2rem] h-[2rem] bg-[#FF5C5C] mb-5"></div>
          <div className="w-[2rem] h-[2rem] bg-[#FF28AD] mb-5"></div>
          <div className="w-[2rem] h-[2rem] bg-[#F20040] "></div>
        </div>
      </motion.h2>
    </div>
  );
}
