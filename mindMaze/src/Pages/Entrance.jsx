import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
const Entrance = () => {
  return (
    <>
      <main className="entrance">
        <div className="images">
          <div
            className="cloud1"
            style={{ backgroundImage: "url('./images/cloud.svg')" }}
          ></div>
          <div
            className="cloud2"
            style={{ backgroundImage: "url('./images/cloud.svg')" }}
          ></div>
          <div
            className="cloud3"
            style={{ backgroundImage: "url('./images/cloud.svg')" }}
          ></div>
          <div
            className="sun"
            style={{ backgroundImage: "url('./images/sun.svg')" }}
          ></div>
          <div
            className="ellipse"
            style={{ backgroundImage: "url('./images/ellipse.svg')" }}
          ></div>
        </div>
        <div className="content">
          <h3>Zehnini labirintdən çıxar!</h3>
          <p>Oyun ilə öyrənmənin sonsuz kefini çıxarın</p>
          <Link to="/registration" style={{ backgroundImage: "url('./images/arrow1.svg')" }} className="link"></Link>
        </div>
      </main>
    </>
  );
};
export default Entrance;
