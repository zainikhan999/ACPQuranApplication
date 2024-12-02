import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    text: "Quran Bliss has transformed my understanding of the Quran. The instructors are knowledgeable and supportive.",
    author: "Aisha K.",
  },
  {
    id: 2,
    text: "The flexibility of the classes allows me to learn at my own pace. Highly recommend!",
    author: "Omar M.",
  },
  {
    id: 3,
    text: "Engaging classes with skilled teachers make learning enjoyable. I'm grateful for this platform.",
    author: "Fatima S.",
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-[80%] mx-auto p-4 border rounded-lg shadow-lg border-iconsAndBorders mb-9">
      <div className="text-center mb-2">
        <p className="italic text-white-700 text-xl"> 
          "{testimonials[current].text}"
        </p>
        <h4 className="font-semibold text-lg mt-2">
          - {testimonials[current].author}
        </h4>
      </div>
      <div className="flex justify-between">
        <button
          onClick={prevTestimonial}
          className="px-4 py-2 bg-[#FFD54F] text-black
          rounded hover:bg-green-600"
        >
          Previous
        </button>
        <button
          onClick={nextTestimonial}
          className="px-4 py-2 bg-[#FFD54F] text-black rounded hover:bg-green-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
