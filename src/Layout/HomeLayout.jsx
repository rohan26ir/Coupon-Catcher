import HomeCard from "../components/Cards/HomeCard";
import TopBrand from "../components/Home/TopBrand";
import Slider from "../components/Slider";

import banner1 from "../assets/banner02.jpg";
import banner2 from "../assets/banner04.png";
import banner3 from "../assets/banner02.jpg";
import banner4 from "../assets/banner05.jpg";
import { useEffect, useState } from "react";
import BrandsonSell from "../components/BrandsonSell";
import { Helmet } from "react-helmet";

const HomeLayout = () => {

  const [datas, setDatas] = useState([])

  useEffect(() => {
    fetch("./coupon.json")
     .then(res => res.json())
     .then(data => setDatas(data))
  }, [])

  // console.log(datas);

  const slides = [
    <div
      className="relative bg-cover bg-center h-full"
      style={{
        backgroundImage: `url(${banner1})`,
      }}
    >
      {/* <div className="flex justify-end w-[40%] ml-auto items-end p-4 text-white bg-black bg-opacity-50 rounded-bl-box">
        <h3>Up to 50% offer!</h3>
      </div> */}
    </div>,
    <div
      className="bg-cover bg-center h-full"
      style={{
        backgroundImage: `url(${banner2})`,
      }}
    >
      {/* <div className="flex justify-end w-[40%] ml-auto items-end p-4 text-white bg-black bg-opacity-50 rounded-bl-box">
        <h3>Lorem ipsum dolor sit amet.</h3>
      </div> */}
    </div>,
    <div
      className="bg-cover bg-center h-full"
      style={{
        backgroundImage: `url(${banner3})`,
      }}
    >
      {/* <div className="flex justify-end w-[40%] ml-auto items-end p-4 text-white bg-black bg-opacity-50 rounded-bl-box">
        <h3>Lorem ipsum dolor sit amet.</h3>
      </div> */}
    </div>,
    <div
      className="bg-cover bg-center h-full"
      style={{
        backgroundImage: `url(${banner4})`,
      }}
    >
      {/* <div className="flex justify-end w-[40%] ml-auto items-end p-4 text-white bg-black bg-opacity-50 rounded-bl-box">
        <h3>Lorem ipsum dolor sit amet.</h3>
      </div> */}
    </div>,
  ];

  return (
    <div className="bg-[#2C3E50]">
      <Helmet>
        <title>Home - Coupon Catcher</title>
      </Helmet>
      <div>
        <Slider slides={slides} autoplayDelay={3000} />
      </div>
      <div>
        <HomeCard></HomeCard>
      </div>
      <div>
        <TopBrand datas={datas}></TopBrand>
      </div>
      <div>
        <BrandsonSell datas={datas}></BrandsonSell>
      </div>
    </div>
  );
};

export default HomeLayout;