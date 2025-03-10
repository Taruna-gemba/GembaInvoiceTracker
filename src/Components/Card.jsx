import React from "react";

const Card = ({ title, info }) => {
  return (
    <div className="w-64 rounded-l overflow-hidden shadow-lg bg-indigo-950 text-white p-6 ">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2">{info}</p>
    </div>
  );
};

export default Card;
