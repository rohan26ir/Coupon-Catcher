import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DynamicRating from "../../components/DynamicRating";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import { RiCoupon2Line } from "react-icons/ri";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { BiCategory } from "react-icons/bi";


const Brand = ({ brand }) => {

  const {
    _id,
    brand_logo,
    brand_name,
    rating,
    description,
    coupons,
    isSaleOn,
    shop_Link,
    category
  } = brand;

  console.log("Is true or not:", isSaleOn);
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const handleViewCoupons = () => {
    if (user) {
      navigate(`/brand-details/${_id}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className=" border-2 border-gray-200 rounded-2xl w-[80%]">
      {/* Card Section */}
      <div className="bg-white rounded-2xl shadow-xl p-10">
        <figure>
          <img
            src={brand_logo}
            alt={`${brand_name} logo`}
            className="w-full h-72 object-cover"
          />
        </figure>

        <div className="flex justify-around items-center my-4">
          <div>
            <h2 className="card-title ml-2">{brand_name}</h2>
          </div>
          <div className="flex">
            <DynamicRating rating={rating} />{" "}
            <div className="mx-4 card-title">{rating}</div>
          </div>
        </div>

        <div className="divider"></div>

        {/* Description */}
        <p className="mt-4">
          <span className="font-bold">{brand_name} :</span> {description}
        </p>

        <div className="flex items-center gap-1 my-2">
        <SiHomeassistantcommunitystore /> Store:  <a className="flex items-center text-red-600 " target="_blank" href={shop_Link} > Shop the Collection </a>
        </div>

        <div>
          <div className="flex items-center">
            <div className="font-bold flex justify-between  text-xl items-center space-x-3"><BiCategory /> Category:</div> 
            
            <div className="bg-gray-600 text-white px-4 py-1 rounded-3xl">{category}</div>
            </div>
        </div>

        {/* View Coupons Button */}
        <div className="card-actions justify-center mt-4">
          <button
            className={`btn border-2 cursor-default rounded-r-none pr-10 -mr-5 ${
              isSaleOn ? "text-green-600" : "hidden"
            }`}
          >
            <p className={` flex gap-1 ${
              isSaleOn ? "animate-bounce" : ""
            }`}  ><FaShoppingCart /> Sale is On</p>
          </button>
          <button
            onClick={handleViewCoupons}
            className={`btn bg-orange-400  z-50  ${
              isSaleOn ? "rounded-l-none" : ""
            }`}
          >
            <RiCoupon2Line /> View Coupon
          </button>
        </div>
      </div>
    </div>
  );
};

export default Brand;
