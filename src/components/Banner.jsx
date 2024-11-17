import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[400px]"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-7xl font-bold">Welcome to <br /><span className="text-orange-500">CouponSeek</span></h1>
            <p className="mb-5">
            Discover unbeatable deals and exclusive savings with Coupon Catcher! Your ultimate destination for collecting and redeeming the best coupons online. Start saving today!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
