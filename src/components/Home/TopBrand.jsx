import React from "react";
import Marquee from "react-fast-marquee";
import TopBDetails from "../Cards/TopBDetails";

const TopBrand = ({ datas }) => {

  console.log(datas);

  return (
    <div>
      <div className="py-10">
        <div className="flex items-center justify-center">
          <h2 className="mx-2 text-gray-100 text-4xl font-bold w-[90%]">Top Brands</h2>
        </div>
        <div className="">
          
        </div>

        <div className="w-[90%] mx-auto">
        <Marquee
            gradient={false}
            pauseOnHover={true}
            speed={100}
            direction="left"
          >
            <TopBDetails  datas={datas}></TopBDetails>
          </Marquee>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-[90%] mx-auto mt-10">
          {
            datas.map(data => (<div key={data._id}>
              <div className="h-72 rounded-lg p-5  bg-gradient-to-b from-white via-sky-200 to-sky-300 hover:rotate-2">

                <div>
                  <img 
                  className="h-20 w-20 rounded-full" 
                  src={data.brand_logo } alt="" />
                </div>
                
                <div className="text-2xl font-semibold">{data.brand_name}</div>
                <div>
                  <p>{data.description}</p>
                  <p className="font-bold">Rating: {data.rating}</p>
                </div>
              </div>
            </div>))
          }
        </div>
      </div>
    </div>
  );
};

export default TopBrand;