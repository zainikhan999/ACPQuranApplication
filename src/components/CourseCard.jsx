import React from 'react';

function CourseCard({ course, onPurchase }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4  ">
      <img src={course.thumbnail} alt={course.title} className="rounded mb-4" />
      <h3 className="text-headings font-semibold">{course.title}</h3>
      <p className="text-black mt-2">{course.description}</p>
      <p className="text-black mt-2">Price: {course.price} USD</p> 
      <button
        onClick={() => onPurchase(course)} 
        className="mt-4 w-full bg-primaryButton text-navigationBar font-semibold py-2 rounded"
      >
        Buy Now
      </button>
      
    </div>
  );
}

export default CourseCard;