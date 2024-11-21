import { data } from "autoprefixer";
import React from "react";

const BrandsonSell = ({ datas }) => {
  // console.log("on sell: ", datas);


  return (
    <div className=" w-[90%] mx-auto py-5">
      <h1 className="text-4xl text-gray-200 py-4">Brands on Sell.</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {datas.map(
          (data) =>
            data.isSaleOn && (
              <div key={data._id}>
                <div>
                  <div className="card bg-base-100 w-80 mx-auto shadow-xl">
                    <figure>
                      <img
                      className="h-24"
                        src={data.brand_logo}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        {data.brand_name}
                        <div className="badge border-2 rounded-3xl bg-gray-300">{data.rating}</div>
                      </h2>
                      <p>Number of Coupons: {data.coupons.length}</p>
                      <div className="card-actions justify-end">
                        <div className="badge badge-outline">{data.category}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default BrandsonSell;
