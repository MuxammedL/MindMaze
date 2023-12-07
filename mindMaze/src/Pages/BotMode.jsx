import React from "react";
import { Link } from "react-router-dom";

const BotMode = () => {
  return (
    <>
      <main className="bot-mode">
        <div className="mode-wrapper">
          <div className="name">
            <h2>
              Mind<span>Maze</span>
            </h2>
          </div>

          <div className="d-text">
            <span>Sual sayı seçin</span> </div>
          <div className="content">
            <div className="content-wrapper">
              <Link to="/bot-questions">
                <span>10</span>
              </Link>
              <Link to="/bot-questions">
                <span>15</span>
              </Link>
              <Link to="/bot-questions">
                <span>20</span>
              </Link>
            </div>
          </div>

          <Link className="back-button" to="/gamer-modes">
            <span>Geri</span>
          </Link>
        </div>
      </main>
    </>
  );
};

export default BotMode;
