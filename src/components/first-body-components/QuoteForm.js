import React, { useState } from "react";
import categories from "api/categories.json"
const QuoteForm = () => {
    const [category, setCategory] = useState("")
  return (
    <div className="my-5 rounded-md mx-auto overflow-hidden w-[90%] flex items-start pt-[30px] pb-11 justify-between pr-[31px] pl-10 bg-form bg-no-repeat bg-cover h-[480px] before:bg-gradient-to-r before:from-[rgb(44,124,241,0.9)] before:to-[rgb(0,209,255,0.4)]  before:absolute before:inset-0 relative ">
      <div className="text-white flex flex-col justify-center z-10 w-[40%] gap-y-4">
        <h2 className="font-bold text-3xl">
          An easy way to send
          <br />
          requests to all suppliers
        </h2>
        <p className="font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>

      <form className="w-[491px] justify-center bg-white h-full z-10 rounded-md flex flex-col items-start gap-y-5 pt-[19px] pl-[19px] pr-8 pb-7">
        <h4 className="text-[22px] font-semibold -mb-2">
          Send quote to suppliers
        </h4>
        <input
          type="text"
          placeholder="What item you need?"
          className="w-full outline-none border border-border h-10 px-[10px] rounded focus:border-gray-500"
        />
        <textarea
          placeholder="Type more details"
          className="w-full resize-none py-1 outline-none border border-border h-28 px-[10px] rounded focus:border-gray-500"
        />
        <div className="flex items-center w-full gap-x-2">
          <input type="number" placeholder="Quantity" className="flex-1 outline-none border border-border rounded h-10 px-[10px] focus:border-gray-500" />
          <select  type="text" className="w-[50%] relative h-10  px-[10px] outline-none border border-border rounded focus:border-gray-500" value={category} onChange={e => setCategory(e.target.value)} >
            <option value={""}>Pcs</option>
            {categories.map((c, key) => (
                <option key={key} value={c.title.toLowerCase().replace(" ", "_")} className="absolute top-0 left-0">{c.title}</option>
            ))}
          </select>
        </div>
        <button className="w-full bg-primary h-10 px-[10px] text-white text-lg font-medium rounded hover:bg-opacity-90">Send inquiry</button>
      </form>
    </div>
  );
};

export default QuoteForm;
