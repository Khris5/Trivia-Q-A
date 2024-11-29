import React from "react";

const Card = ({ title, text, icon }) => {
  return (
    <div className="p-8 hover:shadow-xl transition-all transform hover:-translate-y-1 bg-white rounded-2xl shadow">
      <div className="flex items-center pb-4">
        {icon}
        <h3 className="text-lg text-gray-900 font-semibold">{title}</h3>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
