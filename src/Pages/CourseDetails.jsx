import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

const CourseDetails = () => {
  const { id } = useParams();

  // Mock course data - in a real app, this would come from an API
  const courses = {
    1: {
      id: "1",
      title: "Web Development Fundamentals",
      description:
        "Learn the basics of web development with HTML, CSS, and JavaScript",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      modules: [
        {
          id: 1,
          title: "Introduction to HTML",
          completed: true,
        },
        {
          id: 2,
          title: "CSS Basics",
          completed: false,
        },
        {
          id: 3,
          title: "JavaScript Fundamentals",
          completed: false,
        },
      ],
    },
    2: {
      id: "2",
      title: "React.js Mastery",
      description:
        "Master modern React.js with hooks, context, and advanced patterns",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      modules: [
        {
          id: 1,
          title: "React Fundamentals",
          completed: true,
        },
        {
          id: 2,
          title: "Hooks Deep Dive",
          completed: true,
        },
        {
          id: 3,
          title: "State Management",
          completed: false,
        },
        {
          id: 4,
          title: "Advanced Patterns",
          completed: false,
        },
      ],
    },
    3: {
      id: "3",
      title: "Python Programming",
      description:
        "Comprehensive Python programming from basics to advanced concepts",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      modules: [
        {
          id: 1,
          title: "Python Basics",
          completed: true,
        },
        {
          id: 2,
          title: "Data Structures",
          completed: true,
        },
        {
          id: 3,
          title: "Object-Oriented Programming",
          completed: false,
        },
        {
          id: 4,
          title: "Advanced Python Features",
          completed: false,
        },
      ],
    },
    4: {
      id: "4",
      title: "Artificial Intelligence With Generative AI",
      description:
        "Learn about AI fundamentals and modern generative AI technologies",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      modules: [
        {
          id: 1,
          title: "AI Fundamentals",
          completed: true,
        },
        {
          id: 2,
          title: "Neural Networks",
          completed: false,
        },
        {
          id: 3,
          title: "Large Language Models",
          completed: false,
        },
        {
          id: 4,
          title: "Generative AI Applications",
          completed: false,
        },
      ],
    },
    5: {
      id: "5",
      title: "Introduction to Cybersecurity",
      description: "Learn essential cybersecurity concepts and best practices",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      modules: [
        {
          id: 1,
          title: "Security Fundamentals",
          completed: true,
        },
        {
          id: 2,
          title: "Network Security",
          completed: false,
        },
        {
          id: 3,
          title: "Web Security",
          completed: false,
        },
        {
          id: 4,
          title: "Ethical Hacking",
          completed: false,
        },
      ],
    },
  };
  const course = courses[id];

  return (
    <div className="course-details">
      <h1>{course.title}</h1>
      <div className="video-container">
        <ReactPlayer
          url={course.videoUrl}
          width="100%"
          height="500px"
          controls
        />
      </div>
      <div className="course-content">
        <p className="course-description">{course.description}</p>
        <h2>Course Modules</h2>
        <div className="modules-list">
          {course.modules.map((module) => (
            <div key={module.id} className="module-item">
              <input
                type="checkbox"
                checked={module.completed}
                onChange={() => {}}
              />
              <span>{module.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
