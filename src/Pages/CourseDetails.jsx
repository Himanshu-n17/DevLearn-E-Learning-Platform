import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const courseDetails = {
  1: {
    title: "React for Beginners",
    content: "Welcome to React! In this course...",
  },
  2: {
    title: "Advanced JavaScript",
    content: "This course covers closures, promises...",
  },
  3: {
    title: "UI/UX Design Principles",
    content: "In this course you will learn...",
  },
};

const CourseDetails = () => {
  const { id } = useParams();
  const course = courseDetails[id];

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>{course.title}</h2>
        <p>{course.content}</p>
        <button>Start Learning</button>
      </div>
      <Footer />
    </>
  );
};

export default CourseDetails;
