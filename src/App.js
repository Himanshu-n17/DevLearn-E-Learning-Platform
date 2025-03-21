import React from "react";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Welcome to E-Learnify</h1>
        <p>Your platform for learning anything, anytime!</p>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default App;
