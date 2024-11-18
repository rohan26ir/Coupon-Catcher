import React from "react";
import card1 from "../.././assets/HC 01.webp";
import card2 from "../.././assets/HC 2.webp";
import card3 from "../.././assets/HC 3.webp";

const HomeCard = () => {
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-11/12 mx-auto">
        <div className="flex gap-2 items-center p-4 bg-blue-400  rounded-2xl">
          <div className="w-[100%] hover:scale-110">
            <img className="" src={card1} alt="" />
          </div>
          <div>
            <h2 className="font-bold text-2xl">Deals & Coupons</h2>
            <p>
              Explore a wide range of exclusive deals and coupons to save on
              your favorite brands and products.
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center p-4 bg-blue-400 rounded-2xl">
          <div className="w-[100%] hover:scale-110">
            <img className="" src={card2} alt="" />
          </div>
          <div>
            <h2 className="font-bold text-2xl">Find Best Offers</h2>
            <p>
              Easily find top-rated offers tailored to help you get the most
              value for your money.
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center p-4 bg-blue-400 rounded-2xl">
          <div className="w-[100%] hover:scale-110">
            <img className="" src={card3} alt="" />
          </div>
          <div>
            <h2 className="font-bold text-2xl">Save Money</h2>
            <p>
              Shop smarter and keep more in your pocket with our curated
              collection of money-saving opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
