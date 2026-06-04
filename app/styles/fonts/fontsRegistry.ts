import { Playpen_Sans, Geist, Geist_Mono } from "next/font/google";

const playpen = Playpen_Sans({
  variable: "--font-playpen",
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const fontRegistry = {
  playpen,
  geistSans,
  geistMono,
};

export const fontVariables = Object.values(fontRegistry)
  .map((font) => font.variable)
  .join(" ");
