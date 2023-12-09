import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BotMode = ({ handleClick }) => {
  useEffect(() => {
    const btns = document.querySelectorAll(".content-wrapper .fill");
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        handleClick();
      });
    });
  }, []);
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
            <span>Sual sayı seçin</span>{" "}
          </div>
          <div className="content">
            <div className="content-wrapper">
              <div>
                <div
                  onClick={handleClick}
                  className="fill"
                  data-value={10}
                ></div>
                <span>10</span>
              </div>
              <div>
                <div
                  onClick={handleClick}
                  className="fill"
                  data-value={15}
                ></div>
                <span>15</span>
              </div>
              <div>
                <div
                  onClick={handleClick}
                  className="fill"
                  data-value={20}
                ></div>
                <span>20</span>
              </div>
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
