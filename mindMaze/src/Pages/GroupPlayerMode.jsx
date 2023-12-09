import React from "react";
import { Link } from "react-router-dom";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const GroupPlayerModes = ({ connection, setOpponent,setQuestions }) => {
  const navigate = useNavigate();

  const findOpponent = async (connection) => {
    try {
      connection.on("opponentnotfound", () => {
        setOpponent(null);
        console.log("Opponent Not Found");
      });
      connection.on("OpponentFound", (opponentinfo, questions) => {
        setOpponent(opponentinfo);
        localStorage.setItem("opponentinfo", JSON.stringify(opponentinfo));
        
        setQuestions(questions.result)
        console.log("OpponentFound: ", { opponentinfo, questions });
      });
      await connection.invoke("FindOpponent");
    } catch (error) {
      console.error("Error find opponent:", error);
    }
  };
  const handleClick = () => {
    findOpponent(connection);
    navigate("/duels-zone");
  };
  return (
    <>
      <main className="group-player-mode">
        <div className="images">
          <div
            className="ellipse1"
            style={{ backgroundImage: "url('./images/ellipse-3.svg')" }}
          ></div>
          <div
            className="ellipse2"
            style={{ backgroundImage: "url('./images/ellipse-4.svg')" }}
          ></div>
          <div
            className="ellipse3"
            style={{ backgroundImage: "url('./images/ellipse-6.png')" }}
          ></div>
        </div>

        <div className="content">
          <div className="name">
            <h2>
              Mind<span>Maze</span>
            </h2>
          </div>

          <div className="game-modes">
            <div onClick={handleClick} className="game-mode">
              <div className="wrapper">
                <img
                  src="../images/single-player-mode-2.svg"
                  alt=""
                  className="image1"
                />
                <span>Mücadilə</span>
              </div>
            </div>
            <Link to="/" className="game-mode">
              <div className="wrapper">
                <img src="./images/group-mode.svg" alt="" className="image2" />
                <span>Meydan oxu</span>
              </div>
            </Link>
          </div>
          <Link className="back-button" to="/gamer-modes">
            <span>Geri</span>
          </Link>
        </div>
      </main>
    </>
  );
};

export default GroupPlayerModes;
