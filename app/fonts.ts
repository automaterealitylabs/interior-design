import { Archivo, Fraunces, Geist_Mono } from "next/font/google";

export const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
  preload: true,
});

export const fraunces = Fraunces({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-fraunces",
  preload: false,
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-geist-mono",
  preload: false,
});
