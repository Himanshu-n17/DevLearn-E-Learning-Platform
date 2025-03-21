import React from "react";
import "./CourseCard.css";

const CourseCard = ({ title, description, progress }) => {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <button>Continue</button>
    </div>
  );
};

export default CourseCard;
