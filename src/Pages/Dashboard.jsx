import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Your Dashboard</h2>
        <p>Track your progress and continue learning!</p>
        <ul>
          <li>React for Beginners - 50% completed</li>
          <li>Advanced JavaScript - 20% completed</li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
