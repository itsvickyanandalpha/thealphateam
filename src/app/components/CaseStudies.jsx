import React from "react";
import ZoomInImage from "./ZoomInImage";
import TextAnimator from "./TextAnimator";

const caseStudies = [
  {
    img: "/images/casestudy2.png",
    title: "An Integrated Workplace Management App",
    desc: "",
    learnMore: true,
  },
  {
    img: "/images/casestudy1.png",
    title: "Gray Matter - Enabling Data & Digital Transformation",
    desc: "",
    learnMore: true,
  },
  {
    img: "/images/casestudy3.png",
    title: "Herkey",
    desc: "",
    learnMore: true,
  },
  {
    img: "/images/casestudy1.png",
    title: "Gray Matter - Enabling Data & Digital Transformation",
    desc: "",
    learnMore: true,
  },
  {
    img: "/images/casestudy2.png",
    title: "An Integrated Workplace Management App",
    desc: "",
    learnMore: true,
  },
];

const CaseStudies = () => {
  return (
    <div className="h-full w-screen flex flex-col mt-10">
      <div className="flex flex-row">
        <div className="p-10">
          <TextAnimator>
            <div className="uppercase text-6xl font-black p-5">
              case studies
            </div>
          </TextAnimator>
          <div className="p-5">
            {/* <img
              src={caseStudies[0].img}
              alt={caseStudies[0].title}
              className="w-full h-full object-cover rounded"
            /> */}
            <ZoomInImage
              src={caseStudies[0].img}
              alt={caseStudies[0].title}
              className="w-full h-full object-cover rounded"
            />
            <div className="w-[100%] h-[50px] flex flex-row justify-between">
              <div
                style={{
                  textShadow: `
                0.5px 0 black,
                -0.5px 0 black,
                0 0.5px black,
                0 -0.5px black
              `,
                }}
                className="text-base pb-5"
              >
                An Integrated Workplace Management App
              </div>
              <div className="text-nowrap">Learn More</div>
            </div>
          </div>
        </div>
        <div className="pl-10">
          <div className="p-5">
            <ZoomInImage
              src={caseStudies[1].img}
              alt={caseStudies[1].title}
              className="w-full h-full object-cover rounded"
            />
            <div className="w-[100%] h-[50px] flex flex-row justify-between">
              <div
                style={{
                  textShadow: `
                0.5px 0 black,
                -0.5px 0 black,
                0 0.5px black,
                0 -0.5px black
              `,
                }}
                className="text-base pb-5"
              >
                Gray Matter - Enabling Data & Digital Transformation
              </div>
              <div className="text-nowrap">Learn More</div>
            </div>
          </div>
          <div className="p-5">
            <ZoomInImage
              src={caseStudies[2].img}
              alt={caseStudies[2].title}
              className="w-full h-full object-cover rounded"
            />
            <div className="w-[100%] h-[50px] flex flex-row justify-between">
              <div
                style={{
                  textShadow: `
                0.5px 0 black,
                -0.5px 0 black,
                0 0.5px black,
                0 -0.5px black
              `,
                }}
                className="text-base pb-5"
              >
                Herkey
              </div>
              <div className="text-nowrap">Learn More</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-screen">
        <div className="w-[40%] h-[60%] p-5">
          <ZoomInImage
            src={caseStudies[3].img}
            alt={caseStudies[3].title}
            className="w-full h-full object-cover rounded"
          />
          <div className="w-[100%] h-[50px] flex flex-row justify-between">
            <div
              style={{
                textShadow: `
                0.5px 0 black,
                -0.5px 0 black,
                0 0.5px black,
                0 -0.5px black
              `,
              }}
              className="text-base pb-5"
            >
              Gray Matter - Enabling Data & Digital Transformation
            </div>
            <div className="text-nowrap">Learn More</div>
          </div>
        </div>
        <div className="w-[60%] h-[90%] p-5">
          <ZoomInImage
            src={caseStudies[4].img}
            alt={caseStudies[4].title}
            className="w-full h-full object-cover rounded"
          />
          <div className="w-[100%] h-[50px] flex flex-row justify-between">
            <div
              style={{
                textShadow: `
                0.5px 0 black,
                -0.5px 0 black,
                0 0.5px black,
                0 -0.5px black
              `,
              }}
              className="text-base pb-5"
            >
              An Integrated Workplace Management App
            </div>
            <div className="text-nowrap">Learn More</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
