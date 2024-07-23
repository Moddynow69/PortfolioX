"use client";
import Globe from "@/components/magicui/globe";
import Particles from "@/components/magicui/particles";
import Image from "next/image";
import "./style.css";
import { useEffect, useState } from "react";
import {KoreanFont,dmSans,inter,Gasoek,Fearless,Harpert,EdgeDisplay,Aalto,Quantum,Raphen} from "@/app/font";

export default function Hero() {
  const fontcycle = [KoreanFont,Raphen];
  const [currentFont, setCurrentFont] = useState(KoreanFont);
  useEffect(() => {
    let idx = fontcycle.indexOf(currentFont);
    const interval = setInterval(() => {
      setCurrentFont(fontcycle[(idx + 1) % fontcycle.length]);
      idx = (idx + 1) % fontcycle.length
    }, 800);
    return () => clearInterval(interval);
  }, []);
  const str = "_Moddy_";
  const [output, setOutput] = useState(
    Array(str.length)
      .fill(0)
      .map(function () {
        return (
          "abcdefghijklmnopqrstuvwxyz".charAt(
            Math.floor(Math.random() * 26)
          ) as string
        ).toUpperCase();
      })
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setOutput((prev) => {
        const temp = [...prev];
        const index = Math.floor(Math.random() * str.length);
        temp[index] = str[index];
        for (let i = 0; i < str.length; i++) {
          if (temp[i] !== str[i]) {
            temp[i] = "abcdefghijklmnopqrstuvwxyz_M".charAt(
              Math.floor(Math.random() * 28)
            );
          }
        }
        return temp;
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-screen h-screen relative">
      <Particles
        className="absolute inset-0"
        quantity={300}
        ease={80}
        color={"#000"}
        refresh
      />
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg px-5 pb-40 pt-8 md:pb-60 parentDiv">
        <span className="pointer-events-auto cursor-pointer whitespace-pre-wrap text-center text-7xl 2xl:text-8xl font-semibold leading-[100px] flex flex-col justify-between items-center lg:flex-row gap-2 lg:gap-12 xl:gap-4 selection:text-balck">
          <span className="bg-gradient-to-b from-black to-gray-300/20 bg-clip-text text-transparent dark:from-white dark:to-slate-900/80 lg:opacity-20 hover:opacity-65 duration-300 z-[100] lg:z-[80]">
            <span className="duration-100 ease-out 2xl:hover:text-9xl">F</span>
            <span className="duration-100 ease-out 2xl:hover:text-9xl">r</span>
            <span className="duration-100 ease-out 2xl:hover:text-9xl">o</span>
            <span className="duration-100 ease-out 2xl:hover:text-9xl">n</span>
            <span className="duration-100 ease-out 2xl:hover:text-9xl">t</span>
            <span className="duration-100 ease-out 2xl:hover:text-9xl">e</span>
            <span className="duration-100 ease-out 2xl:hover:text-9xl">n</span>
            <span className="duration-100 ease-out 2xl:hover:text-9xl">d</span>
          </span>{" "}
          <span className={`text-black font-light text-8xl 2xl:text-9xl z-[100] ${currentFont.className} uppercase font-bold flex`}>
            <span className="duration-100 ease-out hover:text-5xl 2xl:hover:text-7xl text-black bg-white border border-black">
              t
            </span>
            <span className="duration-100 ease-out hover:text-5xl 2xl:hover:text-7xl text-white bg-black border border-white">
              u
            </span>
            <span className="duration-100 ease-out hover:text-5xl 2xl:hover:text-7xl text-black bg-white border border-black">
              s
            </span>
            <span className="duration-100 ease-out hover:text-5xl 2xl:hover:text-7xl text-white bg-black border border-white">
              h
            </span>
            <span className="duration-100 ease-out hover:text-5xl 2xl:hover:text-7xl text-black bg-white border border-black">
              a
            </span>
            <span className="duration-100 ease-out hover:text-5xl 2xl:hover:text-7xl text-white bg-black border border-white">
              r
            </span>
          </span>{" "}
          <span className="bg-gradient-to-b from-black to-gray-300/20 bg-clip-text  text-transparent dark:from-white dark:to-slate-900/80 lg:opacity-20 hover:opacity-65 duration-300 z-[100] lg:z-[80]">
            <span className="duration-100 ease-out 2xl:hover:text-9xl">D</span>
            <span className="duration-100 ease-out 2xl:hover:text-9xl">e</span>
            <span className="duration-100 ease-out 2xl:hover:text-9xl">v</span>
            <span className="duration-100 ease-out 2xl:hover:text-9xl">e</span>
            <span className="duration-100 ease-out 2xl:hover:text-9xl">l</span>
            <span className="duration-100 ease-out 2xl:hover:text-9xl">o</span>
            <span className="duration-100 ease-out 2xl:hover:text-9xl">p</span>
            <span className="duration-100 ease-out 2xl:hover:text-9xl">e</span>
            <span className="duration-100 ease-out 2xl:hover:text-9xl">r</span>
          </span>
        </span>
        <Globe className="bottom-1/2 translate-y-[55%] z-[90] left-1/2 -translate-x-[55%]" />
        <div
          className={`movingFont absolute top-4 left-4 text-3xl text-transparent drop-shadow-xl hover:drop-shadow-2xl hover:scale-105 duration-200 bg-clip-text bg-gradient-to-br from-purple-300 to-slate-500 cursor-pointer z-[1001]`}
        >
          {output}
        </div>
        <Image
          className="absolute right-4 top-4 HoverdImg opacity-20 hover:opacity-100 z-[101] duration-200"
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
