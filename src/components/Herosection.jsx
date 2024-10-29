import React from 'react';

const HeroSection = ({ imageUrl, height = 'h-96', children }) => {
  return (
    <div
      className={`bg-cover bg-center flex flex-col items-center justify-center gap-5 
         text-white ${height}`}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      {children && <div className="text-center flex flex-col justify-center items-center">{children}</div>}
    </div>
  );
};

export default HeroSection;
