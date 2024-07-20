import Globe from "@/components/magicui/globe";
import Particles from "@/components/magicui/particles";
import Image from "next/image";
import "./style.css";

export default function Hero() {
  return (
    <div className="w-screen h-screen relative">
      <Particles
        className="absolute inset-0"
        quantity={300}
        ease={80}
        color={"#000"}
        refresh
      />
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg px-40 pb-40 pt-8 md:pb-60 parentDiv">
        <span className="pointer-events-auto cursor-pointer whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-[100px] text-transparent dark:from-white dark:to-slate-900/10 z-[100]">
          <span className="duration-100 ease-out hover:text-9xl">F</span>
          <span className="duration-100 ease-out hover:text-9xl">r</span>
          <span className="duration-100 ease-out hover:text-9xl">o</span>
          <span className="duration-100 ease-out hover:text-9xl">n</span>
          <span className="duration-100 ease-out hover:text-9xl">t</span>
          <span className="duration-100 ease-out hover:text-9xl">e</span>
          <span className="duration-100 ease-out hover:text-9xl">n</span>
          <span className="duration-100 ease-out hover:text-9xl">d</span>{" "}
          <span className="text-black text-9xl">
            <span className="duration-100 ease-out hover:text-7xl">T</span>
            <span className="duration-100 ease-out hover:text-7xl">u</span>
            <span className="duration-100 ease-out hover:text-7xl">s</span>
            <span className="duration-100 ease-out hover:text-7xl">h</span>
            <span className="duration-100 ease-out hover:text-7xl">a</span>
            <span className="duration-100 ease-out hover:text-7xl">r</span>
          </span>{" "}
          <span className="duration-100 ease-out hover:text-9xl">D</span>
          <span className="duration-100 ease-out hover:text-9xl">e</span>
          <span className="duration-100 ease-out hover:text-9xl">v</span>
          <span className="duration-100 ease-out hover:text-9xl">e</span>
          <span className="duration-100 ease-out hover:text-9xl">l</span>
          <span className="duration-100 ease-out hover:text-9xl">o</span>
          <span className="duration-100 ease-out hover:text-9xl">p</span>
          <span className="duration-100 ease-out hover:text-9xl">e</span>
          <span className="duration-100 ease-out hover:text-9xl">r</span>
        </span>
        <Globe className="bottom-0 z-[90] left-1/2 -translate-x-1/2" />
        <Image
          className="absolute right-4 bottom-4 HoverdImg opacity-20 hover:opacity-100 z-[101] duration-200"
          src={"/images/hero.png"}
          width={150}
          height={150}
          alt={""}
        />
            <span className="absolute top-40 left-1/2 translate-x-[-50%] text-3xl text-black font-black cursor-pointer Hoverdbutton z-[101]">
          Hover to close
        </span>
        <div className="absolute HoverdDiv z-[100] w-full h-full top-0 flex justify-center items-center">
          <Image
            src="/images/heroHoverd.png"
            width={800}
            height={800}
            alt={""}
            className="hover:drop-shadow-2xl hover:scale-105 duration-200  w-[800px] h-fit"
          />
        </div>
      </div>
    </div>
  );
}
