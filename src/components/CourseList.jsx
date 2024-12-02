// import React from 'react';
// import CourseCard from './CourseCard';

// const courses = [
//   {
//     id: 1,
//     title: "Tajweed Course",
//     description: "Tajweed Course is a 6-month course designed specifically. Once you buy this course, you will be added to our WhatsApp group. Mode of classes will be online via Zoom.",
//     thumbnail: "./OpenQuran.jpg",
//     price: 100,
//   },
//   {
//     id: 2,
//     title: "Tasfeer",
//     thumbnail: "./Quran.jpg",
//     description: "This 1-year course covers the complete 30 chapters of Tafseer. The course will be delivered in WhatsApp groups, and students will be required to attempt quizzes. A final test will be given at the end.",
//     price: 100,
//   },
//   {
//     id: 3, // Updated id for unique identification
//     title: "Hifz",
//     thumbnail: "./Mosque.jpg",
//     description: "Memorize the Quran at your own pace. The scholar will be available via Zoom and will listen to your Qirat. A final test will be conducted to assess your eligibility to be called Hafiza.",
//     price: 100,
//   },
// ];

// function CourseList({ purchasedCourses, onPurchase }) {
//   return (
//     <div>
//       <h2 className="text-subheadings font-semibold text-xl mb-2">Available Courses</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {courses.map((course) => (
//           <CourseCard key={course.id} course={course} onPurchase={onPurchase} />
//         ))}
//       </div>

//       <h2 className="text-subheadings font-semibold text-xl mt-8">My Courses</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
//         {purchasedCourses.length > 0 ? (
//           purchasedCourses.map((course) => (
//             <div key={course.id} className="bg-white rounded-lg shadow-lg p-4">
//               <img src={course.thumbnail} alt={course.title} className="rounded mb-4" />
//               <h3 className="text-headings font-semibold">{course.title}</h3>
//               <p className="text-black mt-2">{course.description}</p>
//               <p className="text-black mt-2">Price: {course.price} USD</p> 
//             </div>
//           ))
//         ) : (
//           <p className="text-bodyText">No courses purchased yet.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CourseList;
import React from 'react';
import CourseCard from './CourseCard';

const courses = [
  {
    id: 1,
    title: "Tajweed Course",
    description: "Tajweed Course is a 6-month course designed specifically. Once you buy this course, you will be added to our WhatsApp group. Mode of classes will be online via Zoom.",
    thumbnail: "./OpenQuran.jpg",
    price: 100,
  },
  {
    id: 2,
    title: "Tasfeer",
    thumbnail: "./Quran.jpg",
    description: "This 1-year course covers the complete 30 chapters of Tafseer. The course will be delivered in WhatsApp groups, and students will be required to attempt quizzes. A final test will be given at the end.",
    price: 100,
  },
  {
    id: 3,
    title: "Hifz",
    thumbnail: "./Mosque.jpg",
    description: "Memorize the Quran at your own pace. The scholar will be available via Zoom and will listen to your Qirat. A final test will be conducted to assess your eligibility to be called Hafiza.",
    price: 100,
  },
];

function CourseList({ onPurchase}) {
  return (
    <div>
      <h2 className="text-subheadings font-semibold text-xl mb-2">
        Available Courses 
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onPurchase={onPurchase}
          />
        ))}
      </div>
    </div>
  );
}

export default CourseList;