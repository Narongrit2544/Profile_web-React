import React from 'react';
import timelineItems from '../data/timeline-data';
import ParticlesBackground from '../components/ParticlesBackground';
import { FaUser } from 'react-icons/fa';

const About = () => {
  return (
    <div className="relative w-full min-h-screen  text-white justify-center items-center ">
     
      {/* Header */}
      <div className="relative flex flex-col md:flex-row justify-center items-center md:items-start px-4 sm:px-8 md:px-16 lg:px-24 gap-12 mx-auto z-10">
        <div className="max-w-2xl my-5 sm:my-6 px-6 sm:px-16 flex flex-row items-center gap-4 text-center md:text-center">
          <FaUser className="text-gray-500 text-2xl sm:text-3xl md:text-3xl" />
          <h1 className="text-2xl sm:text-4xl md:text-4xl font-bold text-gray-500 font-nunito">About Me</h1>
        </div>
      </div>

      {/* Main Container */}
      <div className="relative flex flex-col md:flex-row  justify-center items-center md:items-start  px-4 sm:px-8 md:px-16 lg:px-24 gap-12 max-w-screen-xl mx-auto z-10">
        {/* Profile Image with Blurry Border */}
        <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 flex flex-col sm:flex-col md:flex-row">
          {/* Image */}
          <div className="relative overflow-hidden rounded-[20px] shadow-2xl z-10 object-cover">
            <img
              src="https://img2.pic.in.th/pic/F740EBFB-413F-48A6-8600-0BA8BAF24AE2.jpg"
              alt="image Boom"
              className="w-full h-full object-cover transform scale-125 group-hover:scale-150 transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>

        {/* Description */}
        <div className="max-w-2xl  md:my-40 px-6 sm:px-16 text-center md:text-left">
          <h1 className="text-2xl sm:text-4xl md:text-4xl font-bold text-gray-500 mb-4 font-nunito">Hi, I'm Boom 👋</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 font-nunito">
            A passionate Full Stack Software Developer having an
            experience of building web application with JavaScript,
            ReactJs, NodeJs and some other cool libraries and frameworks.
          </p>
          {/* About Me Button */}
          <div className="pt-1">
            <a
              href="#education"
              className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-semibold text-lg shadow-md hover:bg-gray-300 transition duration-300"
            >
              Education
            </a>
          </div>
        </div>

      </div>
      {/* Header */}
      <div className="relative flex flex-col md:flex-row justify-center items-center md:items-start px-4 sm:px-8 md:px-16 lg:px-24 gap-12 mx-auto z-10">
        <div className="max-w-2xl my-5 sm:my-6 px-6 sm:px-16 flex flex-row items-center gap-4 text-center md:text-center">
          <FaUser className="text-gray-500 text-2xl sm:text-3xl md:text-3xl" />
          <h1 className="text-2xl sm:text-4xl md:text-4xl font-bold text-gray-500 font-nunito">Education</h1>
        </div>
      </div>
      <div className="relative flex flex-col md:flex-row  justify-center items-center md:items-start  px-4 sm:px-8 md:px-16 lg:px-24 gap-12 max-w-screen-xl mx-auto z-10">

    </div>
    </div>
    
  );
};

export default About;
