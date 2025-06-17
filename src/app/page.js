"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import PinWrapper from "./components/PinWrapper";
import Section3 from "./components/Section3";

export default function Home() {
  return (
    <div className="h-auto w-[100vw]">
      <Navbar />
        <Hero />
        <Section2 />
        <Section3 />
    </div>
  );
}
