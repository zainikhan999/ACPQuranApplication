// Cardscombo.js
import React from 'react';
import Card from './Card';

export default function Cardscombo({ cardsData }) {
  return (
    <>
      <h1 className="text-center">What We Offer?</h1>
      <div className="flex flex-row flex-wrap gap-4 justify-center items-center p-8 w-full h-auto">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            heading={card.heading}
            icon={card.icon}
            description={card.description}
          />
        ))}
      </div>
    </>
  );
}
