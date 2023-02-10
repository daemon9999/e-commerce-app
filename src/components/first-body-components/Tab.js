import React, { useState } from "react";
import classNames from "classnames";
import categories  from "api/categories.json"
const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <div className="bg-white mb-[30px] flex py-5 pl-[14px] pr-5 items-center gap-x-[11px] w-full border mt-5  rounded">
      <div className="flex flex-col flex-1  w-[250px] h-[373px]  overflow-auto">
        {categories.map((category, key) => (
          <button
            onClick={() => setActiveTab(key)}
            key={key}
            className={classNames({
              "px-[10px] py-2 font-medium w-full flex items-center justify-start rounded hover:bg-[#E5F1FF] hover:text-[#1C1C1C]": true,
              "text-gray-600 font-normal": key !== activeTab,
              "bg-[#E5F1FF]": key === activeTab,
            })}
          >
            {category.title}
          </button>
        ))}
      </div>
      <div className="h-[373px] w-auto relative">
        <img
          src={categories[activeTab].image}
          alt={categories[activeTab].title}
          className="h-auto "
        />
        <div className="absolute left-[46px] top-[53px] flex flex-col jusitfy-center">
            <p className="text-[28px] tracking-widest">Latest trending</p>
            <h2 className="font-bold text-[32px] -mt-2 mb-4">{categories[activeTab].title}</h2>
            <button className="bg-white w-[100px] h-10 rounded-md">Learn more</button>
        </div>
      </div>

      <div className="flex flex-col w-[200px] ml-[9px] gap-y-[10px]">
        <div className="flex flex-col py-[14px] px-[10px] gap-y-[7px] bg-[#E3F0FF] rounded-md">
          <div className="flex items-center gap-x-2">
            <span className="w-11 h-11">
              <img
                src="/images/profile.png"
                alt="profile"
                className="w-full h-full"
              />
            </span>
            <span className="flex flex-col leading-5">
              <p>Hi, user</p>
              <p>let's get start</p>
            </span>
          </div>
          <button className="bg-primary text-white hover:bg-opacity-60 rounded-md w-full mt-[6px] h-[30px]">Join now</button>
          <button className="bg-white hover:bg-opacity-60 text-primary rounded-md w-full mt-[6px] h-[30px]">Log in</button>
        </div>


        <div className="flex flex-col leading-5 bg-[#F38332] p-4 rounded-md">
            <p className="text-white">Get US $10 off</p>
            <p className="text-white">with a new</p>
            <p className="text-white">supplier</p>
        </div>

        <div className="flex flex-col leading-5 bg-[#55BDC3] p-4 rounded-md">
            <p className="text-white">Send quotes with</p>
            <p className="text-white">supplier</p>
            <p className="text-white">preferences</p>
        </div>
      </div>
    </div>
  );
};

export default Tab;
