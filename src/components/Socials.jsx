import React from "react";
import { BsYoutube, BsInstagram } from "react-icons/bs";

const Socials = () => {
  return (
    <>
      <a
        href="#"
        target="_blank"
        className="w-9 h-9 mr-3 ex-border flex items-center justify-center hover:bg-red-700 hover:text-white text-slate-300 transition ease-in-out"
      >
        <BsYoutube className="w-5 h-5" />
      </a>
      <a
        href="#"
        target="_blank"
        className="w-9 h-9 mr-3 ex-border flex items-center justify-center hover:bg-pink-600 hover:text-white text-slate-300 transition ease-in-out"
      >
        <BsInstagram className="w-5 h-5" />
      </a>
    </>
  );
};

export default Socials;
