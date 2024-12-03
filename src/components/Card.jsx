// Card.js
import React from 'react';

export default function Card({ heading, icon, description }) {
  return (
    <div className="w-[350px] h-[450px] border border-[#d4a017] p-4 flex flex-col 
    items-center justify-center 
       rounded-lg text-black shadow-lg shadow-white-500/50">
      <img src={icon} alt="icon" className="rounded-full w-20 h-20 mb-2" />

      <h1 className="text-lg font-bold mb-2">{heading}</h1>
      <p className="text-center text-white">{description}</p>
    </div>
  );
}