import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Welcome to E-Learnify</h1>
        <p>Discover courses and enhance your skills anywhere, anytime.</p>
        <Link to="/courses">
          <button>Explore Courses</button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Home;
