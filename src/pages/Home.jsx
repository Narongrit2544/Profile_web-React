// src/pages/Home.jsx
import React from 'react';
import ParticlesBackground from '../components/ParticlesBackground';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const AnimatedText = () => (
  <h1 className="text-white text-4xl font-bold">
    <Typewriter
      words={['Hi! I\'m Boom', 'Full Stack Developer', 'Creative Thinker']}
      loop={true}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </h1>
);
const Home = () => {
  return (
    <div className="relative h-screen w-full flex items-center content-center text-white">
      <ParticlesBackground />

      <div className="w-full h-full px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col justify-center items-start space-y-5">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
          Hi!
        </h1>
        <h1 className='text-5xl sm:text-5xl lg:text-6xl font-bold text-gray-900'>
          I'm Boom
        </h1>
        <h2 className="text-3xl text-gray-800 font-medium">
          I am Into&nbsp;
          <span className="text-red-600">
            <Typewriter
              words={['Full Stack Developer', 'Backend Developer', 'Frontend Developer']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>

        {/* Social Icons */}
        <div className="flex space-x-6 pt-4 text-2xl text-gray-700">
          <a href="https://www.linkedin.com/in/narongrit-klinloy-84a0022a3/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-600 transition-colors duration-300" />
          </a>
          <a href="https://github.com/Narongrit2544" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-black transition-colors duration-300" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100009976171760&locale=th_TH" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="hover:text-blue-500 transition-colors duration-300" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100009976171760&locale=th_TH" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 transition-colors duration-300" />
          </a>
          <a href="https://www.tiktok.com/@nk_bx.time?_t=ZS-8wR8fu73VSb&_r=1" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="hover:text-black transition-colors duration-300" />
          </a>
        </div>

      </div>

      <div className="w-full h-full px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col justify-center items-start space-y-5">
        <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-white shadow-lg group scale-125 ">
          <img
            src="https://img2.pic.in.th/pic/F740EBFB-413F-48A6-8600-0BA8BAF24AE2.jpg"
            alt="image Boom"
            className="w-full h-full object-cover transform scale-125 group-hover:scale-150 transition-transform duration-500 ease-in-out"
          />
        </div>
      </div>

    </div>
  );
};

export default Home;