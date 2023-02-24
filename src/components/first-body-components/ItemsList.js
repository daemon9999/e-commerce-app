import React from "react";

const ItemsList = ({ categoryTitle, products, categoryBackground }) => {

    
  return (
    <div className="flex  mb-5  w-[90%] mx-auto bg-white  ">
      <div className="w-[280px] min-w-[280px] h-full relative  ">
        <img src={`/images/${categoryBackground}.png`} alt="" className="w-full h-full rounded-l" />
        <div className="absolute top-5 left-5 flex flex-col gap-y-[18px] w-[60%]">
          <div className="font-semibold text-xl">
            {categoryTitle}
          </div>
          <button className="bg-white h-10 px-4 rounded-md  hover:bg-opacity-80">Source now</button>
        </div>
      </div>

      <div className="flex flex-wrap border-b border-border   w-full overflow-hidden ">
        {products.map((product, key) => (
            <div key={key} className="flex items-center border-r border-t justify-between w-[25%] pl-4 border-border pt-5">
                <div className="flex-col gap-y-[9px] inline-flex mb-auto">
                    <h5>{product.title}</h5>
                    <p className="text-gray-500">From<br/>USD {product.price}</p>
                </div>
                <span className="h-[82px] w-[82px] flex items-center justify-center mr-2">
                    <img src={`/images/${product.img}.png`} alt="" className="h-[70px] w-auto" />
                </span>
            </div>
        ))}
      </div>
    </div>

    
  );
};

export default ItemsList;
