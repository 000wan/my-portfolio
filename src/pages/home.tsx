import React from "react";
import Card from "../components/Card";
import "../css/home.css";

const HomePage = () => {
  return (
    <div className="home-page page">
      <div className="home-top">
        <img
          src="https://user-images.githubusercontent.com/87213416/218112645-ceac15d4-b401-41d6-95d4-74668f19137b.jpg"
          width="600px"
        />
        <h1 className="home-name">권영완</h1>
        <p className="home-name">YoungWan Kweon</p>
      </div>
      <div className="home-bottom">
        <Card />
      </div>
    </div>
  );
};

export default HomePage;
