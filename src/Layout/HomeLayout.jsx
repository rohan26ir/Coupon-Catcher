import HomeCard from "../components/Cards/HomeCard";
import TopBrand from "../components/Home/TopBrand";
import Slider from "../components/Slider";

import banner1 from "../assets/banner02.jpg";
import banner2 from "../assets/banner04.png";
import banner3 from "../assets/banner02.jpg";
import banner4 from "../assets/banner05.jpg";

const HomeLayout = () => {
  const slides = [
    <div
      className="relative bg-cover bg-center h-full"
      style={{
        backgroundImage: `url(${banner1})`,
      }}
    >
      <div className="flex justify-end w-[40%] ml-auto items-end p-4 text-white bg-black bg-opacity-50 rounded-bl-box">
        <h3>Lorem ipsum dolor sit amet.</h3>
      </div>
    </div>,
    <div
      className="bg-cover bg-center h-full"
      style={{
        backgroundImage: `url(${banner2})`,
      }}
    >
      <div className="flex justify-end w-[40%] ml-auto items-end p-4 text-white bg-black bg-opacity-50 rounded-bl-box">
        <h3>Lorem ipsum dolor sit amet.</h3>
      </div>
    </div>,
    <div
      className="bg-cover bg-center h-full"
      style={{
        backgroundImage: `url(${banner3})`,
      }}
    >
      <div className="flex justify-end w-[40%] ml-auto items-end p-4 text-white bg-black bg-opacity-50 rounded-bl-box">
        <h3>Lorem ipsum dolor sit amet.</h3>
      </div>
    </div>,
    <div
      className="bg-cover bg-center h-full"
      style={{
        backgroundImage: `url(${banner4})`,
      }}
    >
      <div className="flex justify-end w-[40%] ml-auto items-end p-4 text-white bg-black bg-opacity-50 rounded-bl-box">
        <h3>Lorem ipsum dolor sit amet.</h3>
      </div>
    </div>,
  ];

  return (
    <div className="bg-[#2C3E50]">
      <div>
        <Slider slides={slides} autoplayDelay={3000} />
      </div>
      <div>
        <HomeCard></HomeCard>
      </div>
      <div>
        <TopBrand></TopBrand>
      </div>
    </div>
  );
};

export default HomeLayout;