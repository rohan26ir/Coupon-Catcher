import React, { useEffect } from "react";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

const BrandsonSell = ({ datas }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="w-[90%] mx-auto py-5 animate__animated animate__fadeIn"
      data-aos="fade-up"
    >
      <h1
        className="text-4xl text-gray-200 py-4 animate__animated animate__fadeInLeft"
        data-aos="fade-right"
      >
        Brands on Sell.
      </h1>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        data-aos="fade-up"
      >
        {datas.map(
          (data) =>
            data.isSaleOn && (
              <div
                key={data._id}
                className="animate__animated animate__zoomIn"
                data-aos="zoom-in"
              >
                <div>
                  <div
                    className="card bg-base-100 w-80 mx-auto shadow-xl"
                    data-aos="flip-left"
                  >
                    <figure>
                      <img
                        className="h-24"
                        src={data.brand_logo}
                        alt={data.brand_name}
                        data-aos="fade-down"
                      />
                    </figure>
                    <div
                      className="card-body"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <h2 className="card-title">
                        {data.brand_name}
                        <div className="badge border-2 rounded-3xl bg-gray-300">
                          {data.rating}
                        </div>
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
