import React from "react";

const FAQ = () => {
  return (
    <div className="w-[90%] mx-auto py-5 animate__animated animate__fadeIn">
      <div className="text-3xl font-bold text-white">
        <h2>Frequently Asked Questions</h2>
      </div>

      <div className="bg-gray-400 rounded-xl mt-3">
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
            What is a promo code?
            </div>
            <div className="collapse-content">
              <p>A promo code is an alphanumeric phrase used during checkout to receive an online digital discount (or other benefit) on the purchase of e-commerce goods or services. It is used interchangeably with terms like coupon code, discount code, voucher code and sometimes is simply referred to as an online digital coupon. You can find promo codes for over 5,000 brands and learn more about couponing to maximize your savings by utilizing the educational resources on CouponFollow website.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
            How can I get a discount or promo code every time I shop?
            </div>
            <div className="collapse-content">
              <p>To get a discount or promo code when shopping, visit the "Brands" section on our website and explore the available brands. Click on the brand you are interested in to view its coupon codes. Once you find a suitable code, simply click the "Copy" button to copy it. You can then use this code at checkout to enjoy your discount. It's an easy and convenient way to save every time you shop!</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
            Do the promo codes have an expiration date?
            </div>
            <div className="collapse-content">
              <p>Yes, each promo code may have a specific expiration date. Make sure to check the details provided with the code to ensure it's still valid before using it.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;