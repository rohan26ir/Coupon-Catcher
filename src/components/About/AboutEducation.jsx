import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutEducation = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-5 gap-5'>
        {/* Left Section */}
        <div className="md:col-span-2" data-aos="fade-right">
          <h1 className="text-3xl font-bold text-[#133E87]">Education.</h1>
          <p className="text-gray-700 py-3">
            All my life I have been driven by my strong belief that education is important. I try to learn something new every single day.
          </p>
        </div>

        {/* Right Section */}
        <div className='col-span-3 mx-auto' data-aos="fade-left">
          {/* BSC Section */}
          <div>
            <h1 className='text-2xl font-semibold text-[#16325B]'>BSC in Computer Science and Engineering</h1>
            <p className='text-gray-600 text-lg'>2022 - 2025</p>
            <p className='text-gray-700 text-xl'>City University</p>
          </div>

          {/* Front-End Development Section */}
          <div className='mt-3' data-aos="zoom-in">
            <h1 className='text-2xl font-semibold text-[#16325B]'>Front-End Development</h1>
            <p className='text-gray-600 text-lg'>2024</p>
            <p className='text-gray-700 text-xl'>Programming Hero</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEducation;