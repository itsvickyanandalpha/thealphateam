"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import PinWrapper from "./components/PinWrapper";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import InfScr from "./components/InfScr";
import QADropdownList from "./components/QADropdownList";
import RocketSection from "./components/RocketSection";
import FreeAuditSection from "./components/FreeAuditSection";
import Footer from "./components/Footer";
import TestimonialSlider from "./components/TestimonialSlider";
import NewsUpdates from "./components/NewsUpdates";
import HorizontalScrollSection from "./components/HorizontalScrollSection";
import CaseStudies from "./components/CaseStudies";

export default function Home() {
  return (
    <div className="h-auto w-[100vw] bg-white">
      <Navbar />
      <Hero />
      <Section2 />
      {/* <PinWrapper> */}
      <Section3 />
      {/* </PinWrapper> */}
      {/* <PinWrapper> */}

      {/* <PinWrapper> */}
      <Section4 />
      {/* </PinWrapper> */}
      {/* <PinWrapper> */}
      <QADropdownList />
      {/* </PinWrapper> */}
      {/* <PinWrapper> */}

      <RocketSection />
      <HorizontalScrollSection />
      {/* </PinWrapper> */}

      {/* <InfScr/> */}
      {/* </PinWrapper> */}
      <FreeAuditSection />
      <CaseStudies />
      <TestimonialSlider />
      <NewsUpdates />
      <Footer />
    </div>
  );
}
