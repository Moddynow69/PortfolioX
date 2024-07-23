import Hero from "./_sections/Hero";
import RetroGrid from "@/components/magicui/retro-grid";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { Navbar } from "./_sections/Navbar";
import About from "./_sections/About";
import TextReveal from "@/components/magicui/text-reveal";
import {KoreanFont,dmSans} from "@/app/font";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <RetroGrid className="fixed" />
      <Navbar />
      <div className="w-full h-auto">
        <Hero />
        <VelocityScroll
          text="Tushar/ModdyNow"
          default_velocity={3}
          className={`${KoreanFont.className} text-center text-3xl font-bold tracking-[1px] text-black drop-shadow-sm dark:text-white md:text-5xl md:leading-[5rem] rotate-45 pointer-events-none`}
        />
        <TextReveal
          text={`Wait!! It all started with the big bang!!!`}
        />
        <About />
      </div>
    </div>
  );
}
