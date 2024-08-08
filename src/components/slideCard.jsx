import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Courseflow from "../assets/course-flow.png";
import ThePizza from "../assets/the_pizza_clone.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination } from "swiper/modules";

import "../styles/slideCard.css";

export default function slideCard() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

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

  const handleClickMoreDetails = (card) => {
    setIsOpen(true);
    setSelectedCard(card);
  };

  const slides = [
    {
      id: 1,
      src: Courseflow,
      video:
        "https://izknyexhzpqgdgorlpmh.supabase.co/storage/v1/object/sign/portfolio-storage/video/course-flow%20(1).mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8tc3RvcmFnZS92aWRlby9jb3Vyc2UtZmxvdyAoMSkubXA0IiwiaWF0IjoxNzIyNzUwOTk3LCJleHAiOjE3NTQyODY5OTd9.TK67XBDT-UPRJGa-aTHO3z0VNTaBXK4MyApZPTxzk7M&t=2024-08-04T05%3A56%3A37.391Z",
      name: "Course flow",
      description:
        "The one-stop online class management system that caters to all your educational needs Our system facilitates classroom management for both admins and users. Users can see all available class contents and materials. For administrators, they can organize curriculum management.",
      github: "https://github.com/MaySupunnika/CourseFlowProject",
      techStack: [
        "React JS",
        "Formik and Yup",
        "Tailwind CSS",
        "Material UI",
        "Swiper",
        "Node JS",
        "Express",
        "JWT",
        "Supabase",
      ],
    },
    {
      id: 2,
      src: ThePizza,
      video:
        "https://izknyexhzpqgdgorlpmh.supabase.co/storage/v1/object/sign/portfolio-storage/video/course-flow%20(1).mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8tc3RvcmFnZS92aWRlby9jb3Vyc2UtZmxvdyAoMSkubXA0IiwiaWF0IjoxNzIyNzUwOTk3LCJleHAiOjE3NTQyODY5OTd9.TK67XBDT-UPRJGa-aTHO3z0VNTaBXK4MyApZPTxzk7M&t=2024-08-04T05%3A56%3A37.391Z",
      name: "The Pizza Clone",
      description:
        "The Pizza project draws inspiration from the website The Pizza 1112. Its purpose is to enhance web development skills. The website features two roles: users and admins. Users can browse products and place orders.",
      github: "https://github.com/MaySupunnika/the_pizza_clone",
      techStack: [
        "React JS",
        "Tailwind CSS",
        "Material UI",
        "Swiper",
        "Node JS",
        "Express",
        "JWT",
        "Supabase",
      ],
    },
  ];
  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper flex justify-center items-center w-[40rem] h-[40rem] px-4 max-[701px]:scale-90"
        >
          {slides.map((card, id) => (
            <SwiperSlide key={id}>
              <div className="w-[95%] h-full flex flex-col ">
                <img
                  src={card.src}
                  alt={card.name}
                  className="w-full rounded-2xl"
                />
                <h2 className="font-vt323 text-white font-medium text-[2.3rem] tracking-wide mt-[1rem] ml-[2rem]">
                  {card.name}
                </h2>
                <h4 className="text-white font-vt323 font-medium text-[1.5rem]">
                  {card.description}
                </h4>
                <div className="flex mt-[1rem]">
                  <a
                    href={card.github}
                    target="_blank"
                    className="text-white font-vt323 font-medium text-[1.3rem] underline"
                  >
                    Code 🡥
                  </a>
                  <button
                    className="text-white font-vt323 font-medium text-[1.3rem] underline ml-[3rem]"
                    onClick={() => handleClickMoreDetails(card)}
                  >
                    More Details 🡥
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {isOpen ? (
          <div className="w-[40rem] h-[40rem] bg-[#1a033f] absolute z-50 top-[18%] rounded-2xl flex max-[701px]:scale-95 max-[701px]:mt-[-1rem] max-[1120px]:mt-[4%]">
            <div className="flex flex-col items-center mt-[3rem]">
              <video
                className="w-[70%] h-auto"
                src={selectedCard.video}
                alt={selectedCard.name}
                type="video/mp4"
                autoPlay
                muted
              />
              <h3 className="text-white font-vt323 text-[2.5rem] font-medium my-[1.3rem]">
                Tech Stack and Tools
              </h3>

              <div className="grid grid-cols-2 gap-4 text-white font-vt323 text-[1.5rem] leading-5">
                {selectedCard.techStack.map((tech, index) => (
                  <div key={index} className="flex items-start">
                    <span className="mr-2">-</span>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <p
              className="absolute z-[60] top-[1%] right-[1%] text-white font-medium text-3xl font-vt323 text-end px-[1.5rem] pt-[0.7rem] cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              x
            </p>
          </div>
        ) : (
          ""
        )}
      </motion.div>
    </>
  );
}
