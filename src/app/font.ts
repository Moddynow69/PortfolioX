import exp from "constants";
import { Inter } from "next/font/google";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const KoreanFont = localFont({
  src: [
    {
      path: "./Fonts/KoreanFont.ttf",
      style: "normal",
    }
  ],
  display: "swap",
});
export const Gasoek = localFont({
  src: [
    {
      path: "./Fonts/Gasoek.ttf",
      style: "normal",
    }
  ],
  display: "swap",
});
export const Fearless = localFont({
  src: [
    {
      path: "./Fonts/Fearless.otf",
      style: "normal",
    }
  ],
  display: "swap",
});
export const Harpert = localFont({
  src: [
    {
      path: "./Fonts/Harpert.otf",
      style: "normal",
    }
  ],
  display: "swap",
});
export const Quantum = localFont({
  src: [
    {
      path: "./Fonts/Quantum.ttf",
      style: "normal",
    }
  ],
  display: "swap",
});

export const EdgeDisplay = localFont({
  src: [
    {
      path: "./Fonts/EdgeDisplay.otf",
      style: "normal",
    }
  ],
  display: "swap",
});
export const Aalto = localFont({
  src: [
    {
      path: "./Fonts/Aalto.otf",
      style: "normal",
    },
  ],
  display: "swap",
});
export const Raphen = localFont({
  src: [
    {
      path: "./Fonts/Raphen.otf",
      style: "normal",
    },
  ],
  display: "swap",
});

