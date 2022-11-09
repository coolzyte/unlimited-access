import React from "react";
import { Link } from "react-router-dom";

const Button = ({ icon, text, url, bgColor, type, onClick, size }) => {
  return (
    <Link
      to={url}
      type={type}
      onClick={onClick}
      className={`text-white bg-${bgColor}-600 hover:bg-${bgColor}-500 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-md text-${size} px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 mb-2 capitalize`}
    >
      <span className="mr-2"> {icon}</span>
      {text}
    </Link>
  );
};

export default Button;
