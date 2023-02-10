import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser, MdMessage, AiFillHeart, HiShoppingCart } from "icons";
import classNames from "classnames";
const Navbar = () => {
  const setLinkStyle = (isActive) => 
    classNames({
      "flex flex-col hover:text-black justify-center items-center gap-y-[6px] text-[#8B96A5]": true,
      "text-black": isActive
    });
  return (
    <div className="flex items-center gap-x-5 ml-12">
      <NavLink to={"/profile"} className={({ isActive }) => setLinkStyle(isActive)}>
        <FaUser size={20} />
        <div className="text-xs">Profile</div>
      </NavLink>
      <NavLink to={"/message"} className={({ isActive }) => setLinkStyle(isActive)}>
        <MdMessage size={20} />
        <div className="text-xs">Message</div>
      </NavLink>
      <NavLink to={"/orders"} className={({ isActive }) => setLinkStyle(isActive)}>
        <AiFillHeart size={20} />
        <div className="text-xs">Orders</div>
      </NavLink>
      <NavLink to={"/cart"} className={({ isActive }) => setLinkStyle(isActive)}>
        <HiShoppingCart size={20} />
        <div className="text-xs">My cart</div>
      </NavLink>
    </div>
  );
};

export default Navbar;
