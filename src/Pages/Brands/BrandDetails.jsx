import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import DynamicRating from "../../components/DynamicRating";
import Marquee from "react-fast-marquee";
import CouponCode from "../../components/CouponCode ";


const BrandDetails = () => {
  const data = useLoaderData();

  const { _id, brand_logo, brand_name, rating, coupons } = data;

  if (!data) {
    return <div>Brand not found</div>;
  }

  return (
    <div className="w-11/12 my-5 mx-auto rounded-2xl">  
      <div className=" p-5 my-5 rounded-2xl border-2  bg-gradient-to-r from-[#FFFFFF] to-[#F0F4F8]">
        <div className="flex justify-center items-center my-2 mx-auto w-[80%]">
          <img
            className="h-40 "
            src={brand_logo}
            alt=""
          />
        </div>
        <div className="divider w-[80%] mx-auto"></div>
        <div className="flex justify-around  md:text-3xl font-bold">
          <div className="">
            <h1>{brand_name}</h1>
          </div>
          <div className="flex">
            <DynamicRating></DynamicRating>
            <div className="ml-2">{rating}</div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-5 mt-6">
          {
          coupons.map((coupon, index) => (
            <div key={index} className="bg-sky-400 w-[100%] md:w-[80%] py-5 px-2 rounded-xl">
              
              <div className="bg-white px-2 md:px-4 py-2 my-3">

              <div className="flex items-center ">
              <div className="bg-rose-600 px-2 w-[35%] md:w-[25%] py-1">
                <h1 className="text-center font-semibold text-lg md:text-2xl">Coupon {coupon.coupon_number}</h1></div>
              <div className="w-[75%]">
              <Marquee direction="right">
                <p className="text-xl"> {coupon.description} </p>
              </Marquee>
              </div>


              </div>
              </div>
              
              

              <div className="flex justify-center">
              <CouponCode code={coupon.coupon_code}></CouponCode>
              </div>



              <div className="space-y-2 my-3">
              <p className="text-2xl">Type: {coupon.coupon_type}</p>
              <p className="text-xl ">Condition: {coupon.condition}</p>
              <p className="text-xl font-bold">Expiry: {coupon.expiry_date}</p>
              </div>
            </div>
          ))}
          
        </div>
      </div>

      <div className="flex  justify-center  my-5">
      <Link to={'/brands'}>
         <div className="bg-orange-400 px-4 py-2 rounded-3xl">
         <p>Back to Brands</p>
         </div>
      </Link>
      </div>
    </div>
  );
};

export default BrandDetails;
