import React from "react";
import "./home.css";
import photo from "./../../pictures/linkedIn.jpeg";

function Home() {
  return (
    <main>
      <div className="home-head" />

      <image>
        <img src={photo} className="pic"></img>
      </image>
      <div>
        <p>Hello World!</p>
        <p>
          Welcome to my website. Feel free to contact me, if you have any
          question.
        </p>
      </div>
    </main>
  );
}

export default Home;
