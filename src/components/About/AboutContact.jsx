import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutContact = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-out-back" });
  }, []);

  return (
    <div className="my-5">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 items-center md:gap-10">
        {/* Left Section with Fade-in Animation */}
        <div className="md:col-span-2" data-aos="fade-right">
          <h1 className="text-3xl font-bold text-[#133E87]">Contact.</h1>
          <p className="text-gray-700 py-3">
            Are you working on something great? I would love to help make it
            happen! Drop me a letter and start your project right now! Just do
            it.
          </p>
        </div>

        {/* Right Section with Slide-Up Animation */}
        <div className="md:col-span-3" data-aos="slide-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-auto">
            {/* Form Inputs */}
            <div className="space-y-2">
              <label className="input input-bordered flex items-center gap-2">
                Name
                <input type="text" className="grow" placeholder="Your Name" />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                Email
                <input type="email" className="grow" placeholder="Your Email" />
              </label>
            </div>

            {/* Message Textarea */}
            <div
              className="textarea-container w-[40%]"
              data-aos="flip-right"
              data-aos-delay="200"
            >
              <textarea
                className="h-[100%] w-[250%]"
                placeholder="Message"
              ></textarea>
            </div>
          </div>

          <div className="mt-2 flex justify-start" data-aos="zoom-in-right">
            <button className="input input-bordered">Send Message</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutContact;
