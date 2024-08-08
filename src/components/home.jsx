import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/home.css";
import Fire from "../assets/fire.gif";

export default function Home() {
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
  return (
    <div
      className="max-w-screen overflow-hidden h-screen relative flex flex-col justify-center items-center"
      id="Home"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="relative w-[56%] h-[25%] flex justify-center items-center"
      >
        <div className="relative text-[6rem] font-bold tracking-tight font-pixeled text-[#FF0068] max-[701px]:scale-50 max-[1120px]:scale-60 max-[1500px]:scale-60">
          SUPUNNIKA
          <h1 className="text-[6rem] font-bold tracking-tight font-pixeled text-white absolute top-[0.4rem] left-[0.4rem]">
            SUPUNNIKA
          </h1>
        </div>
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="relative w-[60%] h-[10%] flex justify-center items-center"
      >
        <img
          src={Fire}
          alt="fire"
          className="absolute rotate-[135deg] right-[8%] w-[12rem]  max-[1120px]:scale-75 max-[701px]:hidden min-[1121px]:visible"
        />
        <img
          src={Fire}
          alt="fire"
          className="absolute rotate-45 left-[8%] w-[12rem] max-[1120px]:scale-75 max-[701px]:hidden min-[1121px]:visible"
        />
        <h3 className=" font-vt323 text-white text-4xl max-[1120px]:scale-60 max-[1500px]:scale-60">
          Welcome to my website. Let's go look at the details.
        </h3>
      </motion.div>
    </div>
  );
}
