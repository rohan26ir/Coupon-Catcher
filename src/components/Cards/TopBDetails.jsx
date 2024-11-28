import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const TopBDetails = ({ datas }) => {

  const { user } = useContext(AuthContext);
  
  return (
    <div>
      <div className="flex gap-20 items-end">
        {datas.map((brand) => (
          <Link
            key={brand._id}
            to={!user ? `/login` : `/brand-details/${brand._id}`}
            className="mx-6 flex items-end h-28 cursor-pointer hover:scale-110 transition-transform"
          >
            <div className="bg-white w-40 object-cover flex justify-center">
            <img
              src={brand.brand_logo}
              alt={brand.brand_name || "Brand Logo"}
              className="h-16 w-auto object-contain"
              title={brand.brand_name || "Brand"}
            />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopBDetails;