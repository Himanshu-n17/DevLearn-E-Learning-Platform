import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import CourseCard from "../Components/CourseCard/CourseCard";

const courses = [
  {
    id: 1,
    title: "React for Beginners",
    description: "Learn the basics of React.js",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Deep dive into JS concepts",
  },
  {
    id: 3,
    title: "UI/UX Design Principles",
    description: "Create user-friendly designs",
  },
];

const Courses = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Available Courses</h2>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Courses;
