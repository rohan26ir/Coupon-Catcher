import React, { useEffect, useState } from "react";
import Brand from "./Brand";
import { Helmet } from "react-helmet";

const Brands = () => {

  const [brands, setBrands] = useState([])
  
  useEffect(() => {
    fetch("./coupon.json")
    .then(res => res.json())
    .then(data => setBrands(data))
    .catch(error => (error))
  },[])


  return (
      <div className="bg-gradient-to-r from-[#243B55] to-[#141E30]">
        <Helmet>
          <title>Brands - Coupon Catcher</title>
        </Helmet>
      <div className=" p-4">
      <div className="flex justify-start items-center w-[82%] mx-auto">
        <div>
          <label className="input  input-bordered w-[140%] md:w-[200%] flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        {/* Right side */}
        <div>
          {/* <h3 className="text-gray-600 text-3xl font-semibold">Search your Brands</h3> */}
        </div>

      </div>
    </div>
        
        <div className="text-gray-200 mx-32">
        <h2 className="text-2xl font-bold">Brands:</h2>
        </div>


        <div className="w-[100%] py-5 space-y-5 flex flex-col justify-center items-center ">
          {
            brands.map(brand => <Brand key={brand._id} brand={brand}></Brand>
            )
          }
        </div>
      </div>
  );
};

export default Brands;
