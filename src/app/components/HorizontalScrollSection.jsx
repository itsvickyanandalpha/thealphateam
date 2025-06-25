import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceSection from "./ServiceSection";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    title: "SERVICES THAT GETS YOU SALES QUALIFIED LEADS",
    subtitle:
      "We offer customised solutions based on your specific needs and budgets.",
    logo: "/images/Layer_1-3.png",
    image: "/images/Rectangle-6008.png",
  },
  {
    title: "Account Based Marketing",
    subtitle:
      "Omnichannel outreach targeting priority accounts across multiple touchpoints. Intent data, IP based ads, and AI assisted bespoke communication defines our ABM strategy.",
    logo: "/images/Layer_1-3.png",
    image: "/images/Rectangle6008-2.png",
  },
  {
    title: "Paid Advertising",
    subtitle:
      "Targeted Google search ads and Linkedin ads using banners, lead forms, conversation ad formats, accurate conversion tracking and AI based bidding and optimisations ensures efficiency & quality.",
    logo: "/images/Layer_1-3.png",
    image: "/images/Rectangle6008-3.png",
  },
  {
    title: "Search Engine Optimisation",
    subtitle:
      "Technical on-page and content optimisation, LSI keywords, recommendations to improve session duration, CRO, and high quality backlinks increases your organic traffic multifolds.",
    logo: "/images/Layer_1-3.png",
    image: "/images/Rectangle6008-4.png",
  },
  {
    title: "AI Automation",
    subtitle:
      "Orchestrated bespoke emails and Linkedin messages based on user's profile and employer details done at scale using trained AI models, AI chatbots, AI powered phone conversations results in unimaginable response rates.",
    logo: "/images/Layer_1-3.png",
    image: "/images/Rectangle6008-5.png",
  },
  {
    title: "Content Marketing",
    subtitle:
      "We create engaging content for ABM, SEO, and referral traffic. Topics are chosen carefully and content crafted such that these articles encourage conversions. Gated content also serves as soft CTAs for our ABM efforts.",
    logo: "/images/Layer_1-3.png",
    image: "/images/Rectangle6008-6.png",
  },
  {
    title: "CRM Setup & Workflow Automation",
    subtitle:
      "CRMs ensure effective management and engagement of leads and registered users. We build automated workflows that helps convert free trial users into paying customers.",
    logo: "/images/Layer_1-3.png",
    image: "/images/Rectangle6008-7.png",
  },
];

const HorizontalScrollSection = () => {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const horizontal = horizontalRef.current;
    const sections = gsap.utils.toArray(".h-item");

    const totalScrollWidth = horizontal.scrollWidth;
    const viewportWidth = window.innerWidth;

    gsap.to(horizontal, {
      x: -(totalScrollWidth - viewportWidth), // Move to full width
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => "+=" + (totalScrollWidth - viewportWidth), // full horizontal scroll only
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-screen h-[100vh] overflow-hidden bg-gray-100"
    >
      <div ref={horizontalRef} className="flex h-[100vh] w-max">
        {data.map((item, index) => (
          <div
            key={index}
            className="h-item w-[100vw] h-[100vh] flex items-center justify-center bg-gradient-to-r from-purple-400 to-indigo-600 text-white text-5xl font-black"
          >
            {/* Slide {item} */}
            <ServiceSection
              arrowPosition={(index + 1) * 10}
              alphaboxposition={index % 2 == 0 ? true : false}
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
              logo={item.logo}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalScrollSection;
