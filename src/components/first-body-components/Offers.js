import classNames from "classnames";
import React from "react";
import Timer from "./Timer";
import { useSelector } from "react-redux";
const Offers = () => {
  const { expiryTimestamp, isAvailable } = useSelector((state) => state.timer);
  const items = [
    {
      title: "Smart watches",
      img: "/images/smartwatch.png",
      sale: 25,
    },
    {
      title: "Laptops",
      img: "/images/laptop.png",
      sale: 15,
    },
    {
      title: "GoPro cameras",
      img: "/images/camera.png",
      sale: 40,
    },
    {
      title: "Headphones",
      img: "/images/gamingheadphone.png",
      sale: 25,
    },
    {
      title: "Phones",
      img: "/images/phone.png",
      sale: 25,
    },
  ];
  if (isAvailable) {
    return (
      <div className="flex items-center  overflow-hidden border border-border rounded-md h-[240px] mb-5 mx-auto w-[90%]">
        <div className="flex flex-col py-5 pr-10 pl-5 w-[25%]  bg-gray-100 h-full ">
          <h5 className="font-semibold text-xl">Deals and offers</h5>
          <p className="text-gray-500 mb-4">Hygiene equipments</p>
          <Timer expiryTimestamp={expiryTimestamp} />
        </div>
        <div className="flex items-center bg-white h-full flex-1 ">
          {items.map((item, key) => (
            <div
              className={classNames({
                " w-full border-border flex flex-col items-center h-full gap-y-2  py-3": true,
                "border-r": key !== items.length - 1,
              })}
              key={key}
            >
              <span className="h-[140px] w-[140px] flex items-center justify-center">
                <img src={item.img} alt="" className="h-auto w-auto" />
              </span>
              <div className="flex flex-col items-center gap-y-2 px-6">
                <p className="font-medium text-lg">{item.title}</p>
                <span className="flex items-center h-7 px-[13px] rounded-xl justify-center text-[#EB001B] bg-[#FFE3E3] font-medium">
                  -{item.sale}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Offers;
