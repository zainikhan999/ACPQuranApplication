import React from 'react';

function CardsCombo({ cardsData }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="bg-white border border-gray-300 rounded-lg shadow-md p-6"
        >
          <div className="flex items-center mb-4">
            <img
              src={card.icon}
              alt={card.heading}
              className="h-12 w-12 mr-4"
            />
            <h3 className="text-xl font-semibold">{card.heading}</h3>
          </div>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
}

export default CardsCombo;