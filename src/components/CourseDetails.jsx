import React from 'react';

function CourseDetails({ purchasedCourses }) {
  return (
    <div>
      <h2 className="text-headings font-semibold text-xl mb-4">Course Details</h2>
      <ul>
        {purchasedCourses.map((course, index) => (
          <li key={index}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;