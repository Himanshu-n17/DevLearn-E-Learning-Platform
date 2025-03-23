import React from "react";
import { Link } from "react-router-dom";
import "./CourseCard.css";

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <img src={course.thumbnail} alt={course.title} className="course-image" />
      <div className="course-content">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <div className="course-meta">
          <span>{course.duration}</span>
          <span>{course.level}</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${course.progress}%` }}
          ></div>
        </div>
        <Link to={`/course/${course.id}`} className="course-button">
          {course.progress > 0 ? "Continue Learning" : "Start Course"}
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
