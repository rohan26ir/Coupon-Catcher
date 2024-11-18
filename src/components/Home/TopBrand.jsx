import React from "react";
import Marquee from "react-fast-marquee";
import TopBDetails from "../Cards/TopBDetails";

const TopBrand = () => {
  return (
    <div>
      <div className="py-10 flex">
        <div>
          <h2 className="mx-10 text-gray-100 text-4xl font-bold w-[10%]">Top Brands</h2>
        </div>
        <div>
          <Marquee
            gradient={false}
            pauseOnHover={true}
            speed={100}
            direction="left"
          >
            <TopBDetails></TopBDetails>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default TopBrand;