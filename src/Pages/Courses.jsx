import React from "react";
import CourseCard from "../Components/CourseCard/CourseCard";
const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      description:
        "Learn the basics of web development with HTML, CSS, and JavaScript",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      duration: "8 weeks",
      level: "Beginner",
      progress: 0,
    },
    {
      id: 2,
      title: "React.js Mastery",
      description: "Master React.js and build modern web applications",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      duration: "10 weeks",
      level: "Intermediate",
      progress: 30,
    },
    {
      id: 3,
      title: "Python Programming",
      description: "Learn Python programming from scratch",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      duration: "12 weeks",
      level: "Beginner",
      progress: 0,
    },
    {
      id: 4,
      title: "Artificial Intellegince With Generative AI",
      description:
        "This course explores Artificial Intelligence and Generative AI, covering Machine Learning, Deep Learning, NLP, and AI model deployment. Learn to build and optimize GPT, Transformers, and AI-driven applications for real-world use cases. ",
      thumbnail:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
      duration: "15 weeks",
      level: "Beginner",
      progress: 0,
    },
    {
      id: "5",
      title: "Introduction to Cybersecurity",
      description: "Learn essential cybersecurity concepts and best practices",
      thumbnail:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
      duration: "6 weeks",
      level: "Beginner",
      progress: 0,
    },
  ];

  return (
    <div className="courses-page">
      <h1>All Courses</h1>
      <div className="courses-grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
