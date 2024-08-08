import React, { useEffect } from "react";
import Tools from "../data/dataTools";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import Chair from "../assets/chair.webp";
// import CloudTwo from "../assets/cloudTwo.webp";
// import CloudOne from "../assets/cloudOne.webp";
// import Light from "../assets/light.svg";
// import Grass from "../assets/grass.webp";
// import Boy from "../assets/boy.webp";
// import Coin from "../assets/coin.webp";
// import BlueTree from "../assets/blue-tree.webp";
// import Mushroom from "../assets/mushroom.webp";
import "../styles/Skills.css";

export default function Skills() {
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
    hidden: { opacity: 0, x: 200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

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

  const bgAnimated = {
    hidden: { opacity: 0, y: -200 },
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
      id="Skills"
      className="h-screen bg-[#12022B] relative overflow-hidden pt-[3rem]"
    >
      <div className="flex flex-col pt-[12rem]  items-center max-[701px]:pt-[5rem] max-[1120px]:pt-[8rem] max-[1500px]:pt-[8%]">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variantSkill}
          className="relative mb-[2.5rem] max-[701px]:mb-[1rem] max-[1120px]:mb-[1%]"
        >
          <h2 className="font-silkscreen text-[#FF0068] text-[4.5rem] font-semibold tracking-custom max-[701px]:scale-50 max-[1120px]:scale-60 max-[1500px]:scale-65">
            SKILLS
          </h2>
          <h2 className="absolute top-[-0.25rem] left-[-0.25rem] tracking-custom font-silkscreen text-white text-[4.5rem] font-semibold max-[701px]:scale-50 max-[701px]:top-[-0.12rem] max-[701px]:left-[-0.12rem] max-[1120px]:scale-60 max-[1500px]:scale-65">
            Skills
          </h2>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="grid grid-cols-5 gap-x-12 gap-y-7 max-[701px]:grid-cols-3 max-[701px]:gap-y-2 max-[701px]:gap-x-3 max-[1120px]:grid-cols-3 max-[1120px]:gap-y-0.5 max-[1500px]:gap-y-0.5 max-[1500px]:gap-x-0.5 max-[1500px]:mt-[-2%]"
        >
          {Tools.map((tool) => (
            <div
              key={tool.id}
              className="w-[6rem] flex flex-col items-center hover:animate-bounce hover:scale-110 duration-200 max-[701px]:scale-75 max-[1120px]:scale-75 max-[1500px]:scale-75"
            >
              <img src={tool.icon} alt="icon" />
              <p className="text-xl font-vt323 text-white ">{tool.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
