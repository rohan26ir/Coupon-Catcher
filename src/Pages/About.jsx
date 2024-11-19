import React from 'react';
import { Helmet } from 'react-helmet';
import AboutHero from '../components/About/AboutHero';
import AboutContact from '../components/About/AboutContact';
import AboutEducation from '../components/About/AboutEducation';

const About = () => {
  return (
    <div className='bg-[#2C3E50] p-12'>
      <Helmet>
        <title>About Dev | Coupons Catcher</title>
      </Helmet>
      
      <main>
        <AboutHero></AboutHero>
        <div className="divider bg-gray-400 h-[1px] my-10 rounded-3xl"></div>
        <AboutEducation></AboutEducation>
        <div className="divider bg-gray-400 h-[1px] my-10 rounded-3xl"></div>
        <AboutContact></AboutContact>
      </main>
      
    </div>
  );
};

export default About;