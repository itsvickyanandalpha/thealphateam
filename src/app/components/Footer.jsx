// import React from 'react'

// const Footer = () => {
//   return (
//     <div className='w-screen h-[60vh] bg-[#000000] flex flex-col'>
//         <div className='h-[25%] w-screen bg-red-500 '>
              
//         </div>
//         <div className='h-[65%] w-screen bg-blue-500'>

//         </div>
//         <div className='[10%] w-screen bg-white'> 

//         </div>
//     </div>
//   )
// }

// export default Footer

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-[#DDDCDC] font-[montserrat] px-6 py-10 w-full">
  {/* Top: Get a Callback Form */}
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
    <div className="text-center lg:text-left">
      <h2 className="text-4xl font-[runalto] text-white">GET A CALLBACK</h2>
      <p className="text-[#DDDCDC] mt-2 text-sm">
        Share with us your number and we will give you a call soon
      </p>
    </div>

    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
      <input
        type="text"
        placeholder="Your Name"
        className="px-4 py-2 rounded-full border border-[#DDDCDC] bg-transparent text-white placeholder-[#DDDCDC] focus:outline-none"
      />
      <input
        type="email"
        placeholder="Email Address"
        className="px-4 py-2 rounded-full border border-[#DDDCDC] bg-transparent text-white placeholder-[#DDDCDC] focus:outline-none"
      />
      <button className="px-6 py-2 bg-white text-black rounded-full">
        Submit
      </button>
    </div>
  </div>

  <hr className="border-[#DDDCDC] my-8" />

  {/* Bottom Footer Links */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left text-sm">
    {/* About Us */}
    <div>
      <h3 className="mb-4 text-white">ABOUT US</h3>
      <p>
        We Are A Group Of Innovative, Motivated And Experienced Marketing Professionals. We Depend On Creative Use Of Technology To Provide That Extra Edge To Our Clients.
      </p>
      <p className="mt-4">
        <span className="text-white">Address:</span> 91Springboard, 175 & 176, Bannerghatta Main Rd, Dollars Colony, Bangalore, Karnataka 560076
      </p>
      <p className="mt-2">
        The Alpha Team, 1557, 25th Main Rd, MCHS Colony, Stage 2, BTM Layout, Bangalore, Karnataka 560076
      </p>
      <p className="mt-2">
        <span className="text-white">Email:</span> Hello@Thealphateam.In <br />
        Career@Thealphateam.In
      </p>
    </div>

    {/* Quick Links */}
    <div className=' md:w-[200px] md:ml-20'>
      <h3 className="mb-4 text-white">QUICK LINKS</h3>
      <ul className="space-y-2">
        <li>Home</li>
        <li>About</li>
        <li>Pricing</li>
        <li>Contact Us</li>
        <li>Blog</li>
        <li>Case Studies</li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h3 className="mb-4 text-white">SERVICES</h3>
      <ul className="space-y-2">
        <li>Account Based</li>
        <li>Paid Advertisement</li>
        <li>Search Engine Optimisation</li>
        <li>AI Automation</li>
        <li>Content Marketing</li>
        <li>CRM Setup & Automation Workflow</li>
      </ul>
    </div>
  </div>

  <hr className="border-[#DDDCDC] my-8" />

  {/* Bottom Copyright */}
  <p className="text-center text-[#DDDCDC] text-xs">
    © 2025 The Alpha Team - Privacy And Terms
  </p>
</footer>

  );
};

export default Footer;
