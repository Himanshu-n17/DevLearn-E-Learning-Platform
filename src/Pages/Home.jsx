import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "../Components/CourseCard/CourseCard";

const Home = () => {
  const featuredCourses = [
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
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Transform Your Future with Online Learning</h1>
          <p>Access quality education from anywhere in the world</p>
          <Link to="/courses" className="cta-button">
            Explore Courses
          </Link>
        </div>
      </section>

      <section className="featured-">
        <h2>Featured Courses</h2>
        <div className="courses-grid">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
