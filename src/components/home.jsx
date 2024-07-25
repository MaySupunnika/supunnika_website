import React from "react";
import "../styles/home.css";
import CloudOne from "../assets/cloudOne.webp";
import CloudTwo from "../assets/cloudTwo.webp";
import Sun from "../assets/sun.webp";
import Lamp from "../assets/lamp.webp";
import RedCar from "../assets/redCar.webp";
import BlueBus from "../assets/blueBus.webp";
import PinkStore from "../assets/pinkStore.webp";
import PurpleStore from "../assets/purpleStore.webp";
import Bush from "../assets/bush.webp";
import Chair from "../assets/chair.webp";
import Billboard from "../assets/billboard.webp";
import Duck from "../assets/duck.gif";
import Fire from "../assets/fire.gif";
export default function Home() {
  return (
    <div className="bg-[#12022B] max-w-screen overflow-hidden h-screen relative">
      <img
        src={CloudOne}
        alt="cloud"
        className="w-[22rem] h-auto absolute top-[8rem] left-[-1rem]"
      />
      <img
        src={CloudOne}
        alt="cloud"
        className="w-[22rem] h-auto absolute top-[8rem] right-[-1rem] scale-x-[-1]"
      />
      <img
        src={CloudTwo}
        alt="cloud"
        className="w-[15rem] absolute top-[19rem] left-[3rem]"
      />
      <img
        src={CloudTwo}
        alt="cloud"
        className="w-[15rem] absolute top-[19rem] right-[3rem]"
      />
      <img
        src={Sun}
        alt="sun"
        className="absolute w-[20rem] left-[50rem] top-[10rem] "
      />
      <h1 className="text-[10rem] font-semibold tracking-custom font-silkscreen text-[#FF0068] left-[23%] top-[26.5%] absolute">
        supunnika
      </h1>
      <h1 className="text-[10rem] font-semibold tracking-custom font-silkscreen text-white left-[22.5%] top-[26%] absolute">
        supunnika
      </h1>
      <img src={Bush} alt="bush" className="absolute bottom-0 z-10" />
      <img
        src={Bush}
        alt="bush"
        className="absolute bottom-0 right-[-2.5rem] z-10"
      />
      <img src={Lamp} alt="lamp" className="absolute bottom-[2.5rem] left-12" />
      <img
        src={Lamp}
        alt="lamp"
        className="absolute bottom-[2.5rem] right-12 scale-x-[-1]"
      />

      <img
        src={PinkStore}
        alt="pink-store"
        className="absolute bottom-0 left-[7rem] z-20 scale-x-[-1]"
      />
      <img
        src={BlueBus}
        alt="bus"
        className="absolute bottom-0 left-[11rem] z-30"
      />
      <img
        src={BlueBus}
        alt="bus"
        className="absolute bottom-0 right-[11rem] z-30 scale-x-[-1]"
      />
      <img
        src={PurpleStore}
        alt="purple-store"
        className="absolute bottom-0 left-[24rem] scale-x-[-1]"
      />
      <img
        src={PurpleStore}
        alt="purple-store"
        className="absolute bottom-0 right-[24rem] "
      />
      <img
        src={RedCar}
        alt="car"
        className="absolute bottom-0 left-[30rem] z-10 w-[9.5rem]"
      />
      <img
        src={RedCar}
        alt="car"
        className="absolute bottom-0 right-[30rem] w-[9.5rem] scale-x-[-1] z-30"
      />
      <img src={Bush} alt="bush" className="absolute bottom-0 left-[33rem]" />
      <img
        src={Bush}
        alt="bush"
        className="absolute bottom-0 right-[33rem] scale-x-[-1] z-20"
      />
      <img
        src={PinkStore}
        alt="pink-store"
        className="absolute bottom-0 right-[40rem] z-10 "
      />
      <img
        src={Billboard}
        alt="billboard"
        className="absolute bottom-0 right-[10rem] w-[12rem]"
      />
      <img
        src={Bush}
        alt="bush"
        className="absolute bottom-0 right-[49rem] scale-x-[-1]"
      />
      <img
        src={Chair}
        alt="chair"
        className="absolute bottom-0 left-[45.5rem]"
      />
      <img
        src={Duck}
        alt="duck"
        className="absolute bottom-0 left-[46rem] scale-x-[-1]"
      />
      <h2 className="font-vt323 text-white  text-4xl flex justify-center my-[35rem]">
        Welcome to my website. Let's go look at the details.
      </h2>
      <img
        src={Fire}
        alt="fire"
        className="absolute bottom-[18.9rem] scale-x-[-1] w-[12rem] right-[29rem]"
      />
      <img
        src={Fire}
        alt="fire"
        className="absolute bottom-[18.9rem] w-[12rem] left-[29rem]"
      />
    </div>
  );
}
