import React from "react";

const Dashboard = () => {
  const enrolledCourses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      progress: 60,
      lastAccessed: "2024-03-10",
    },
    {
      id: 2,
      title: "React.js Mastery",
      progress: 30,
      lastAccessed: "2024-03-09",
    },
  ];

  return (
    <div className="dashboard">
      <h1>My Dashboard</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Courses Enrolled</h3>
          <p className="stat-number">{enrolledCourses.length}</p>
        </div>
        <div className="stat-card">
          <h3>Hours Learned</h3>
          <p className="stat-number">24</p>
        </div>
        <div className="stat-card">
          <h3>Certificates Earned</h3>
          <p className="stat-number">1</p>
        </div>
      </div>

      <section className="enrolled-courses">
        <h2>My Courses</h2>
        <div className="courses-list">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="course-progress-card">
              <h3>{course.title}</h3>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <p>Last accessed: {course.lastAccessed}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
