import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeProductCard2 = ({ imgUrl, price, oldPrice, productTitle }) => {
  return (
    <div className="card123 rounded-xl overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:scale-105">
      <div className="bg flex flex-col">
        <div className="relative flexCenter group overflow-hidden transition-all duration-300">
          <Link
            to={`/product`}
            className="h-12 w-12 bg-white rounded-full flexCenter absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform duration-500 z-20"
          >
            <FaSearch className="hover:rotate-90 hover:scale-125 transition-transform duration-200" />
          </Link>
          <img
            onClick={() => window.scrollTo(0, 0)}
            src={imgUrl}
            alt="productImage"
            className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-4">
          <h4 className="text-black font-bold text-lg mb-2">{productTitle}</h4>
          <div className="flex flex-col mb-2">
            <div className="flex justify-between">
              <div className="text-black font-bold text-md">
                &#8377;{price}.00
              </div>
              <div className="text-red-500 font-semibold text-md line-through mr-2">
                &#8377;{oldPrice}.00
              </div>
            </div>
            <div className="text-green-600 font-semibold mt-2 text-sm">
              35% Off
            </div>
          </div>
        </div>
      </div>
      <div className="blob"></div>
    </div>
  );
};

export default HomeProductCard2;
