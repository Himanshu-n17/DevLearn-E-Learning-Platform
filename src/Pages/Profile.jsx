import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2>User Profile</h2>
        <p>Name: John Doe</p>
        <p>Email: john@example.com</p>
        <button>Edit Profile</button>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
