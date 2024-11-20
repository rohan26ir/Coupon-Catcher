import React, { useEffect } from 'react';
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaFacebook, FaMediumM } from 'react-icons/fa';
import rohan from '../../assets/Rohan.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutHero = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-in-out' });
  }, []);

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Left Section */}
        <div data-aos='fade-right'>
          <h2 className='text-4xl font-bold text-[#133E87] '>I am Rohan</h2>
          <p className='text-xl text-gray-700 my-8'>
            I am a Web Developer from Dhaka, Bangladesh. I am working to improve my web design and development skills. I enjoy creating websites and learning new things about technology. I want to take on more projects to gain experience, learn more, and grow as a developer.
          </p>

          <div className='text-gray-700 text-base space-y-2'>
            <p>Phone: 01869396022</p>
            <p>Email: rohan26ir@gmail.com</p>
            <p>Address: Savar, Dhaka, Bangladesh</p>
            <div className='flex text-rose-600'>
              <div className='mr-2 text-[#133E87] font-bold'>Social:</div>
              <div className='flex justify-center items-center gap-3 cursor-pointer'>
                <a href="https://www.facebook.com/rohan26ir/" target="_blank" rel="noopener noreferrer">
                  <p><FaFacebook /></p>
                </a>
                <a href="https://twitter.com/rohan26ir" target="_blank" rel="noopener noreferrer">
                  <p><BsTwitter /></p>
                </a>
                <a href="https://www.instagram.com/rohan26ir" target="_blank" rel="noopener noreferrer">
                  <p><BsInstagram /></p>
                </a>
                <a href="https://github.com/rohan26ir" target="_blank" rel="noopener noreferrer">
                  <p><BsGithub /></p>
                </a>
                <a href="https://www.linkedin.com/rohan26ir" target="_blank" rel="noopener noreferrer">
                  <p><BsLinkedin /></p>
                </a>
                <a href="https://medium.com/rohan26ir" target="_blank" rel="noopener noreferrer">
                  <p><FaMediumM /></p>
                </a>
              </div>
            </div>
            <div className='flex gap-5 py-4 font-bold text-gray-800 cursor-pointer'>
              <div className='px-4 py-1 bg-orange-500 shadow-xl hover:scale-105 transition-transform'>
                CONTACT ME
              </div>
              <div className='px-4 py-1 bg-slate-50 shadow-xl hover:scale-105 transition-transform'>
                Download CV
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div
          className='flex justify-center items-center'
          data-aos='zoom-in'
          data-aos-delay='200'
        >
          <img
            className='h-80 bg-blue-500 rounded-full p-3 shadow-lg'
            src={rohan}
            alt="Rohan"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;