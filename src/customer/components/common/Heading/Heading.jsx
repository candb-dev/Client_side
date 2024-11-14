import React from "react";
import Floral2 from "../../../../assets/floral2.svg";

const Heading = ({ text }) => {
  return (
    <div className="relative flex justify-center items-center flex-col bg-white/10">
      <div className="absolute z-10">
        <h1 className="mb-16 lg:mb-[72px] text-center text-2xl lg:text-3xl font-bold whitespace-nowrap tracking-[.165em] leading-[1.23em] font-alegreya">{text}</h1>
      </div>
      <div className="w-[300px] lg:w-[400px] relative">
        <img src={Floral2} alt='' className="z-0" />
      </div>
    </div>
  );
};

export default Heading;
