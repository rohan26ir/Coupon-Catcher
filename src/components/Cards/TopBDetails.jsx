import React from "react";
import { useNavigate } from "react-router-dom";

const brandData = [
  {
    id: 1,
    name: "Nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    route: "/brand/nike",
  },
  {
    id: 2,
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    route: "/brand/adidas",
  },
  {
    id: 3,
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    route: "/brand/apple",
  },
  {
    id: 4,
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    route: "/brand/samsung",
  },
  {
    id: 5,
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    route: "/brand/microsoft",
  },
  {
    id: 6,
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    route: "/brand/amazon",
  },
];

const TopBDetails = () => {

  const navigate = useNavigate()

  const handleLogoClick = (route) => {
    navigate(route);
  };

  return (
    <div>
      <div className="flex gap-20 items-end ">
        {brandData.map((brand) => (
          <div
            key={brand.id}
            className="mx-6 flex items-end h-28 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => handleLogoClick(brand)}
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-16 w-auto object-contain  hover:animate-ping"
              title={brand.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBDetails;
