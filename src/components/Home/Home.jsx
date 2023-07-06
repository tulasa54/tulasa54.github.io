import React from "react";
import "./home.css";
import photo from "./../../pictures/linkedIn.jpeg";

function Home() {
  return (
    <main>
      <div className="home head" />

      <div className="home row">
        <div className="home col">
          <div className="home row">
            <div className="home col left">
              <p>Hello World!</p>
              <p>
                Welcome to my website. Feel free to contact me, if you have any
                question.
              </p>
            </div>
            <div className="home col right">
              <image>
                <img src={photo} className="pic"></img>
              </image>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
