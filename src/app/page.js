'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section2 from "./components/Section2";

export default function Home() {
  return (
   <div className="h-auto w-[100vw]">
    <Navbar/>
    <Hero/>
    <Section2/>
   </div>
  );
}
