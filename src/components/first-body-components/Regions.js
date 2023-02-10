import Title from "components/additional-components/Title";
import React from "react";
import regions from "api/regions.json";
import ReactCountryFlag from "react-country-flag";
const Regions = () => {
  return (
    <div className="flex flex-col gap-y-6 mb-5 ">
      <Title>Suppliers by region</Title>
      <div className="grid grid-cols-5 gap-x-[18px] gap-y-[10px]">
        {regions.map((region) => (
          <div key={region.id} className="flex items-center gap-x-4">
            <ReactCountryFlag
              countryCode={region.code}
              svg={true}
              style={{
                width: 28,
                height: 20
              }}
            />
            <div className="flex flex-col">
              <p>{region.country}</p>
              <p className="text-gray-400 text-[13px]">{region.website}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Regions;
