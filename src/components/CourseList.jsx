import React from 'react';
import CourseCard from './CourseCard';

const courses = [
  {
    id: 1,
    title: "Tajweed Course",
    description: "Tajweed Course is a 6 months designed specifically , once you buy this course you will be added to our whatsapp group.Mode of classes will be online via Zoom",
    thumbnail: "./OpenQuran.jpg",
    price: 100,
  },
  {
    id: 2,
    title: "Tasfeer",
    thumbnail: "./Quran.jpg",
    description: "The course is of 1 year Complete 30 chapters Tafseer will be delivered in the whatsapp groups students will be intended to attempt Quizzes related to it at the end the final test will be given.",
    price: 100,
  },
  {
    id: 2,
    title: "Hifz",
    thumbnail: "./Mosque.jpg",
    description: "Memorize Quran at your own pace , the scholar will be available via zoom and will listen the Qirat, at the end a test will be condcuted to measure how much the student is eilgble to be called Hafiza ",
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
