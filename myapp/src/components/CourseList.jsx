import React from 'react';
import CourseCard from './CourseCard';

const courses = [
  {
    id: 1,
    title: "Course 1",
    description: "Tajweed Course",
    thumbnail: "https://via.placeholder.com/150",
    price: 100,
  },
  {
    id: 2,
    title: "Course 2",
    thumbnail: "https://via.placeholder.com/150",
    description: "An advanced course",
    price: 100,
  },
  {
    id: 2,
    title: "Course 3",
    thumbnail: "https://via.placeholder.com/150",
    description: "Tafseer Course",
    price: 100,
  },
];

function CourseList({ purchasedCourses, onPurchase }) {
  return (
    <div>
      <h2 className="text-subheadings font-semibold text-xl mb-2">Available Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} onPurchase={onPurchase} />
        ))}
      </div>

      <h2 className="text-subheadings font-semibold text-xl mt-8">My Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {purchasedCourses.length > 0 ? (
          purchasedCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg p-4">
              <img src={course.thumbnail} alt={course.title} className="rounded mb-4" />
              <h3 className="text-headings font-semibold">{course.title}</h3>
              <p className="text-bodyText mt-2">{course.description}</p>
              <p className="text-bodyText mt-2">Price: {course.price} USD</p> {/* Display price in My Courses */}
            </div>
          ))
        ) : (
          <p className="text-bodyText">No courses purchased yet.</p>
        )}
      </div>
    </div>
  );
}

export default CourseList;
