import LogoColored from "images/LogoColored";
import React from "react";
import {  AiOutlineTwitter } from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
const Information = () => {
  return (
    <div className="grid grid-cols-5 gap-x-16 items-center  w-[90%] pt-10 pb-[59px] justify-center">
      <div className="flex flex-col justify-center gap-y-4 ">
        <span className="h-[46px] w-auto">
          <LogoColored />
        </span>
        <p>
          Best information about the company gies here but now lorem ipsum is
        </p>
        <div className="flex items-center gap-x-[10px]">
          <a
            href="#s"
            className="flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full text-white"
          >
            <FaFacebookF />
          </a>
          <a
            href="#s"
            className="flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full text-white"
          >
            <AiOutlineTwitter />
          </a>
          <a
            href="#s"
            className="flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full text-white"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#s"
            className="flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full text-white"
          >
            <AiFillInstagram size={20}/>
          </a>
         
       
          
        </div>
      </div>
      <div className="flex flex-col gap-y-1 ml-20">
        <h5 className="font-medium mb-[6px]">About</h5>
        <p className="text-gray-500">About Us</p>
        <p className="text-gray-500">Find store</p>
        <p className="text-gray-500">Categories</p>
        <p className="text-gray-500">Blogs</p> 
      </div>
      <div className="flex flex-col gap-y-1 ml-6">
        <h5 className="font-medium mb-[6px]">Partnership</h5>
        <p className="text-gray-500">About Us</p>
        <p className="text-gray-500">Find store</p>
        <p className="text-gray-500">Categories</p>
        <p className="text-gray-500">Blogs</p> 
      </div>
      <div className="flex flex-col gap-y-1">
        <h5 className="font-medium mb-[6px]">Information</h5>
        <p className="text-gray-500">Help Center</p>
        <p className="text-gray-500">Money Refund</p>
        <p className="text-gray-500">Shipping</p>
        <p className="text-gray-500">Contact us</p> 
      </div>
      <div className="flex flex-col gap-y-1">
        <h5 className="font-medium mb-[6px]">For users</h5>
        <p className="text-gray-500">Login</p>
        <p className="text-gray-500">Register</p>
        <p className="text-gray-500">Settings</p>
        <p className="text-gray-500">My Orders</p> 
      </div>
    </div>
  );
};

export default Information;
