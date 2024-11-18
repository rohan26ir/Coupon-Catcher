import HomeCard from "../components/Cards/HomeCard";
import TopBrand from "../components/Home/TopBrand";
import Slider from "../components/Slider";

const HomeLayout = () => {

  const slides = [
    <div style={{ backgroundColor: '#c7f9cc', height: '100%' }}>Slide 1</div>,
    <div style={{ backgroundColor: '#80ed99', height: '100%' }}>Slide 2</div>,
    <div style={{ backgroundColor: '#57cc99', height: '100%' }}>Slide 3</div>,
    <div style={{ backgroundColor: '#38a3a5', height: '100%' }}>Slide 4</div>,
    <div style={{ backgroundColor: '#22577a', height: '100%' }}>Slide 5</div>,
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