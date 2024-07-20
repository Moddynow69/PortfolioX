import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";

export default function About() {
  return (
    <div className="w-full h-screen relative">
      <DotPattern
        cr={5}
        cx={5}
        cy={10}
        width={32}
        height={32}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] h-full w-full"
        )}
      />
      <p className="z-10 h-fit w-fit whitespace-pre-wrap text-opacity-40 text-center text-8xl font-black tracking-tighter text-[#9e9d9d] dark:text-white absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] uppercase font-sans ">
        Big Bang
      </p>
    </div>
  );
}
