import React, {useState} from "react";
import {AiOutlineMenu, BsChevronDown} from "icons"
import CurrencySelect from "@paylike/react-currency-select";
import ReactFlagsSelect from "react-flags-select";

const BottomHeader = () => {
    const [currency, setCurrency] = useState("USD");
    const [country, setCountry] = useState("US");
  return (
    <div className="px-[50px] font-medium h-14 flex justify-between items-center">
      <div className="flex items-center gap-x-6">
        <div className="flex items-center gap-x-2">
          <AiOutlineMenu />
          All category
        </div>
        <div>Hot offers</div>
        <div>Gift boxes</div>
        <div>Projects</div>
        <div>Menu item</div>
        <div className="flex items-center gap-x-2">
          Help
          <BsChevronDown className="text-[#8B96A5] " />
        </div>
      </div>
      <div className="flex items-center gap-x-5">
        <CurrencySelect
          className="w-[200px] outline-none"
          value={currency}
          initial="red"
          funding={false}
          onChange={(currency) => setCurrency(currency)}
        />
        <ReactFlagsSelect
          selected={country}
          onSelect={(country) => setCountry(country)}
          showSelectedLabel={false}
          optionsSize={20}
          className="mt-2 outline-none"
        />
      </div>
    </div>
  );
};

export default BottomHeader;
