import React from "react";
import { Link } from "react-router-dom";

const PlayerModes = () => {
  return (
    <>
      <main className="gamer-modes">
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
            <Link to="/bot-mode" className="game-mode">
              <div className="wrapper">
                <img
                  src="../images/single_player.svg"
                  alt=""
                  className="player"
                />
                <span>Tək</span>
              </div>
            </Link>
            <Link to="/group-player-mode" className="game-mode">
              <div className="wrapper">
                <img
                  src="../images/group-of-players.svg"
                  alt=""
                  className="players"
                />
                <span>Rəqabət</span>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default PlayerModes;
