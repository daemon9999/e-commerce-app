import Title from "components/additional-components/Title";
import React from "react";
import { BiSearchAlt2, TiShoppingBag, MdOutlineSend, BiShieldQuarter } from "icons";
const Services = () => {
  return (
    <div className="mt-[30px] flex flex-col gap-y-6 mb-5 mx-auto w-[90%]">
      <Title>Our extra services</Title>
      <div className="grid grid-cols-4 items-center gap-x-5 ">
        <div className="flex flex-col  bg-white relative hover:scale-95 cursor-pointer duration-600 transition-transform">
          <span className="w-[55px] h-[55px] absolute bottom-[60px] right-[21px] flex items-center justify-center border-2 border-white bg-[#D1E7FF] rounded-full">
            <BiSearchAlt2 size={24} />
          </span>
          <img
            src="/images/industry.png"
            alt=""
            className="w-full h-full bg-black bg-opacity-80 rounded-t"
          />
          <div className="border-x border-b border-border rounded-b w-full px-5 py-4 font-medium text-lg">
            Source from
            <br />
            Industry Hubs
          </div>
        </div>

        <div className="flex flex-col  bg-white relative hover:scale-95 cursor-pointer duration-600 transition-transform">
          <span className="w-[55px] h-[55px] absolute bottom-[60px] right-[21px] flex items-center justify-center border-2 border-white bg-[#D1E7FF] rounded-full">
            <TiShoppingBag size={24} />
          </span>
          <img
            src="/images/customize.png"
            alt=""
            className="w-full h-full bg-black bg-opacity-80 rounded-t"
          />
          <div className="border-x border-b border-border rounded-b w-full px-5 py-4 font-medium text-lg">
            Customize Your
            <br />
            Products
          </div>
        </div>

        <div className="flex flex-col  bg-white relative hover:scale-95 cursor-pointer duration-600 transition-transform">
          <span className="w-[55px] h-[55px] absolute bottom-[60px] right-[21px] flex items-center justify-center border-2 border-white bg-[#D1E7FF] rounded-full">
            <MdOutlineSend size={24} />
          </span>
          <img
            src="/images/shipping.png"
            alt=""
            className="w-full h-full bg-black bg-opacity-80 rounded-t"
          />
          <div className="border-x border-b border-border rounded-b w-full px-5 py-4 font-medium text-lg">
            Fast, reliable shipping
            <br />
            by ocean or air
          </div>
        </div>

        <div className="flex flex-col  bg-white relative hover:scale-95 cursor-pointer duration-600 transition-transform">
          <span className="w-[55px] h-[55px] absolute bottom-[60px] right-[21px] flex items-center justify-center border-2 border-white bg-[#D1E7FF] rounded-full">
            <BiShieldQuarter size={24} />
          </span>
          <img
            src="/images/monitoring.png"
            alt=""
            className="w-full h-full bg-black bg-opacity-80 rounded-t"
          />
          <div className="border-x border-b border-border rounded-b w-full px-5 py-4 font-medium text-lg">
            Product monitoring
            <br />
            and inspection
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
