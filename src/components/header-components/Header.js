import React from "react";
import { Link } from "react-router-dom";
import LogoColored from "images/LogoColored";
import Search from "./Search";
import Navbar from "./Navbar";
import BottomHeader from "./BottomHeader";



const Header = ({ searchable = true }) => {



  return (
    <div className="flex flex-col bg-white ">
      <div className="flex  px-[50px]  border-opacity-40 justify-between gap-x-12 items-center h-[86px] ">
        <Link to={"/"} replace={true} >
        <LogoColored />
        </Link>

        {searchable && <Search />}
        <Navbar />
      </div>
      <hr />
      <BottomHeader/>
    </div>
  );
};

export default Header;
