// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const testimonials = [
//   {
//     image: "/images/sec3img1.png", // replace with actual path
//     logo: "/images/56.png", // replace with actual path
//     feedback:
//       "You Give Them The Scope And Goals, And They Deliver. This Was Such An Experience With AlphaTeam. #BestInDigitalMarketing",
//     name: "Nitesh Jain",
//     position: "Co-Founder, Workspace.city",
//   },

//   {
//     image: "/images/sec3img1.png", // replace with actual path
//     logo: "/images/56.png", // replace with actual path
//     feedback:
//       "You Give Them The Scope And Goals, And They Deliver. This Was Such An Experience With AlphaTeam. #BestInDigitalMarketing",
//     name: "Nitesh Jain",
//     position: "Co-Founder, Workspace.city",
//   },
//   {
//     image: "/images/sec3img1.png", // replace with actual path
//     logo: "/images/56.png", // replace with actual path
//     feedback:
//       "You Give Them The Scope And Goals, And They Deliver. This Was Such An Experience With AlphaTeam. #BestInDigitalMarketing",
//     name: "Nitesh Jain",
//     position: "Co-Founder, Workspace.city",
//   },
//   {
//     image: "/images/sec3img1.png", // replace with actual path
//     logo: "/images/56.png", // replace with actual path
//     feedback:
//       "You Give Them The Scope And Goals, And They Deliver. This Was Such An Experience With AlphaTeam. #BestInDigitalMarketing",
//     name: "Nitesh Jain",
//     position: "Co-Founder, Workspace.city",
//   },
//   {
//     image: "/images/sec3img1.png", // replace with actual path
//     logo: "/images/56.png", // replace with actual path
//     feedback:
//       "You Give Them The Scope And Goals, And They Deliver. This Was Such An Experience With AlphaTeam. #BestInDigitalMarketing",
//     name: "Nitesh Jain",
//     position: "Co-Founder, Workspace.city",
//   },
//   // You can add more slides here
// ];

// const TestimonialSlider = () => {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   return (
//     <div className="w-screen mx-auto p-6 m-10 relative">
//       <Swiper
//         modules={[Navigation, Pagination]}
//         spaceBetween={30}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         navigation={{
//           prevEl: prevRef.current,
//           nextEl: nextRef.current,
//         }}
//         onInit={(swiper) => {
//           swiper.params.navigation.prevEl = prevRef.current;
//           swiper.params.navigation.nextEl = nextRef.current;
//           swiper.navigation.init();
//           swiper.navigation.update();
//         }}
//         className="rounded-2xl shadow-md bg-white p-6"
//       >
//         {testimonials.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="flex flex-col md:flex-row items-center">
//               {/* User Image */}
//               <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-32 h-32 rounded-full object-cover"
//                 />
//               </div>

//               {/* Content */}
//               <div className="text-center md:text-left">
//                 <img
//                   src={item.logo}
//                   alt="Company Logo"
//                   className="w-20 mx-auto md:mx-0 mb-4"
//                 />
//                 <p className="text-gray-700 text-lg mb-4">“{item.feedback}”</p>
//                 <p className="font-bold text-gray-900">{item.name}</p>
//                 <p className="text-gray-500">{item.position}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom Navigation Arrows */}
//       <div
//         ref={prevRef}
//         className="absolute z-999 right-20 bottom-5 transform -translate-y-1/2 cursor-pointer text-gray-400 hover:text-black text-4xl"
//       >
//         &#8592;
//       </div>
//       <div
//         ref={nextRef}
//         className="absolute z-999 right-10 bottom-5 transform -translate-y-1/2 cursor-pointer text-gray-400 hover:text-black text-4xl"
//       >
//         &#8594;
//       </div>
//     </div>
//   );
// };

// export default TestimonialSlider;

// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const testimonials = [
//   {
//     image: "/images/sec3img1.png", // replace with actual path
//     logo: "/images/56.png", // replace with actual path
//     feedback:
//       "You Give Them The Scope And Goals, And They Deliver. This Was Such An Experience With AlphaTeam. #BestInDigitalMarketing",
//     name: "Nitesh Jain",
//     position: "Co-Founder, Workspace.city",
//   },

//   {
//     image: "/images/sec3img1.png", // replace with actual path
//     logo: "/images/56.png", // replace with actual path
//     feedback:
//       "You Give Them The Scope And Goals, And They Deliver. This Was Such An Experience With AlphaTeam. #BestInDigitalMarketing",
//     name: "Nitesh Jain",
//     position: "Co-Founder, Workspace.city",
//   },
//   {
//     image: "/images/sec3img1.png", // replace with actual path
//     logo: "/images/56.png", // replace with actual path
//     feedback:
//       "You Give Them The Scope And Goals, And They Deliver. This Was Such An Experience With AlphaTeam. #BestInDigitalMarketing",
//     name: "Nitesh Jain",
//     position: "Co-Founder, Workspace.city",
//   },
//   {
//     image: "/images/sec3img1.png", // replace with actual path
//     logo: "/images/56.png", // replace with actual path
//     feedback:
//       "You Give Them The Scope And Goals, And They Deliver. This Was Such An Experience With AlphaTeam. #BestInDigitalMarketing",
//     name: "Nitesh Jain",
//     position: "Co-Founder, Workspace.city",
//   },
//   {
//     image: "/images/sec3img1.png", // replace with actual path
//     logo: "/images/56.png", // replace with actual path
//     feedback:
//       "You Give Them The Scope And Goals, And They Deliver. This Was Such An Experience With AlphaTeam. #BestInDigitalMarketing",
//     name: "Nitesh Jain",
//     position: "Co-Founder, Workspace.city",
//   },
//   // You can add more slides here
// ];

// const TestimonialSlider = () => {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   return (
//     <div className="w-screen mx-auto p-6 m-10 relative">
//       <Swiper
//         modules={[Navigation, Pagination]}
//         spaceBetween={30}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         navigation={{
//           prevEl: prevRef.current,
//           nextEl: nextRef.current,
//         }}
//         onInit={(swiper) => {
//           swiper.params.navigation.prevEl = prevRef.current;
//           swiper.params.navigation.nextEl = nextRef.current;
//           swiper.navigation.init();
//           swiper.navigation.update();
//         }}
//         className="rounded-2xl shadow-md bg-white p-6"
//       >
//         {testimonials.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="flex flex-col md:flex-row items-center">
//               {/* User Image */}
//               <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-32 h-32 rounded-full object-cover"
//                 />
//               </div>

//               {/* Content */}
//               <div className="text-center md:text-left">
//                 <img
//                   src={item.logo}
//                   alt="Company Logo"
//                   className="w-20 mx-auto md:mx-0 mb-4"
//                 />
//                 <p className="text-gray-700 text-lg mb-4">“{item.feedback}”</p>
//                 <p className="font-bold text-gray-900">{item.name}</p>
//                 <p className="text-gray-500">{item.position}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom Navigation Arrows */}
//       <div
//         ref={prevRef}
//         className="absolute z-999 right-20 bottom-5 transform -translate-y-1/2 cursor-pointer text-gray-400 hover:text-black text-4xl"
//       >
//         &#8592;
//       </div>
//       <div
//         ref={nextRef}
//         className="absolute z-999 right-10 bottom-5 transform -translate-y-1/2 cursor-pointer text-gray-400 hover:text-black text-4xl"
//       >
//         &#8594;
//       </div>
//     </div>
//   );
// };

// export default TestimonialSlider;

import React, { useState } from "react";
import TextAnimator from "./TextAnimator";

const testimonials = [
  {
    image: "/images/testimonial1.png",
    logo: "/images/workspace-commercial-interior-design-event-logo-vector1.png",
    feedback:
      "You Give Them The Scope And Goals, And They Deliver. This Was Such An Experience With AlphaTeam. #BestInDigitalMarketing",
    name: "Nitesh Jain",
    position: "Co-Founder, Workspace.city",
  },
  {
    image: "/images/testimonial1.png",
    logo: "/images/workspace-commercial-interior-design-event-logo-vector1.png",
    feedback:
      "You Give Them The Scope And Goals, And They Deliver. This Was Such An Experience With AlphaTeam. #BestInDigitalMarketing",
    name: "Nitesh Jain",
    position: "Co-Founder, Workspace.city",
  },
  {
    image: "/images/testimonial1.png",
    logo: "/images/workspace-commercial-interior-design-event-logo-vector1.png",
    feedback:
      "You Give Them The Scope And Goals, And They Deliver. This Was Such An Experience With AlphaTeam. #BestInDigitalMarketing",
    name: "Nitesh Jain",
    position: "Co-Founder, Workspace.city",
  },
  {
    image: "/images/testimonial1.png",
    logo: "/images/workspace-commercial-interior-design-event-logo-vector1.png",
    feedback:
      "You Give Them The Scope And Goals, And They Deliver. This Was Such An Experience With AlphaTeam. #BestInDigitalMarketing",
    name: "Nitesh Jain",
    position: "Co-Founder, Workspace.city",
  },
  {
    image: "/images/testimonial1.png",
    logo: "/images/workspace-commercial-interior-design-event-logo-vector1.png",
    feedback:
      "You Give Them The Scope And Goals, And They Deliver. This Was Such An Experience With AlphaTeam. #BestInDigitalMarketing",
    name: "Nitesh Jain",
    position: "Co-Founder, Workspace.city",
  },
  {
    image: "/images/testimonial1.png",
    logo: "/images/workspace-commercial-interior-design-event-logo-vector1.png",
    feedback:
      "You Give Them The Scope And Goals, And They Deliver. This Was Such An Experience With AlphaTeam. #BestInDigitalMarketing",
    name: "Nitesh Jain",
    position: "Co-Founder, Workspace.city",
  },
  {
    image: "/images/testimonial1.png",
    logo: "/images/workspace-commercial-interior-design-event-logo-vector1.png",
    feedback:
      "You Give Them The Scope And Goals, And They Deliver. This Was Such An Experience With AlphaTeam. #BestInDigitalMarketing",
    name: "Nitesh Jain",
    position: "Co-Founder, Workspace.city",
  },
  {
    image: "/images/testimonial1.png",
    logo: "/images/workspace-commercial-interior-design-event-logo-vector1.png",
    feedback:
      "You Give Them The Scope And Goals, And They Deliver. This Was Such An Experience With AlphaTeam. #BestInDigitalMarketing",
    name: "Nitesh Jain",
    position: "Co-Founder, Workspace.city",
  },
  {
    image: "/images/testimonial1.png",
    logo: "/images/workspace-commercial-interior-design-event-logo-vector1.png",
    feedback:
      "You Give Them The Scope And Goals, And They Deliver. This Was Such An Experience With AlphaTeam. #BestInDigitalMarketing",
    name: "Nitesh Jain",
    position: "Co-Founder, Workspace.city",
  },
  {
    image: "/images/testimonial1.png",
    logo: "/images/workspace-commercial-interior-design-event-logo-vector1.png",
    feedback:
      "You Give Them The Scope And Goals, And They Deliver. This Was Such An Experience With AlphaTeam. #BestInDigitalMarketing",
    name: "Nitesh Jain",
    position: "Co-Founder, Workspace.city",
  },
  // Add more if needed
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-[95vw] font-[mainfont] pt-10 pb-10 mx-auto relative overflow-hidden">
      <div
        className="flex transition-transform duration-1400 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="min-w-full flex flex-col md:flex-row items-center p-4 pt-10 pb-14 rounded-2xl shadow"
          >
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <img
                src={item.image}
                alt={item.name}
                className="w-52 h-52 rounded-full object-cover"
              />
            </div>
            <div className="text-center md:text-left md:w-[66%] ml-20">
              <img
                src={item.logo}
                alt="Company Logo"
                className="w-30 mx-auto md:mx-0 mb-4"
              />
              <TextAnimator>
                <p className="text-lg mb-4 font-[montserrat] text-gray-700">
                  “{item.feedback}”
                </p>
              </TextAnimator>
              <TextAnimator>
                <p className="font-bold text-gray-900 mb-2">{item.name}</p>
              </TextAnimator>
              <TextAnimator>
                <p className="text-gray-700 font-[montserrat]">
                  {item.position}
                </p>
              </TextAnimator>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Arrow Buttons with PNG Logos */}
      <button
        onClick={prevSlide}
        className="absolute bottom-14 right-20 transform -translate-y-1/2 cursor-pointer"
      >
        <img src="/images/Arrow7.png" alt="Previous" className="w-6 h-3" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute bottom-14 right-10 transform -translate-y-1/2 cursor-pointer"
      >
        <img src="/images/Arrow6.png" alt="Next" className="w-6 h-3" />
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2 absolute bottom-16 right-30">
        {testimonials.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-black" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
