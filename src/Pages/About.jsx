import React from 'react';
import AboutHero from '../components/About/AboutHero';
import AboutContact from '../components/About/AboutContact';
import AboutEducation from '../components/About/AboutEducation';
import Marquee from 'react-fast-marquee';
import manWalk from '../assets/man-walk.gif'
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div className=' bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 p-12'>
 

      <Helmet>
        <title>About - Coupon Catcher</title>
      </Helmet>
      <main>
        <AboutHero></AboutHero>


        <div className='-mb-9 text-9xl flex items-end justify-center'>
          
        <Marquee 
        direction='right'
        >
        <a href="#education">
        <div className=' mx-auto '>
        <img 
        className='h-60'
        src={manWalk} 
        alt="" />
        </div>
        </a>
        </Marquee>


        </div>


        <div  id="education" className="divider bg-gray-400 h-[1px] mb-10 rounded-3xl"></div>
        
        <div>
        <AboutEducation></AboutEducation>
        </div>
        <div className="divider bg-gray-400 h-[1px] my-10 rounded-3xl"></div>
        <AboutContact></AboutContact>
      </main>
      
    </div>
  );
};

export default About;