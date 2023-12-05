import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./_Header.scss";

const Header = () => {
  const pathName = window.location.pathname;
  useEffect(() => {
    const menuItems = document.querySelectorAll(".menu-item");
    const navbarBg = document.querySelector(".navbar-bg");
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        item.classList.add("active");
        if (item.dataset.id == "1") {
          navbarBg.style.left = "6px";
          localStorage.setItem("navbar", "gamer-modes");
        } else if (item.dataset.id == "2") {
          navbarBg.style.left = "107px";
          localStorage.setItem("navbar", "medals");
        } else if (item.dataset.id == "3") {
          navbarBg.style.left = "212px";
          localStorage.setItem("navbar", "group");
        } else if (item.dataset.id == "4") {
          navbarBg.style.left = "308px";
          localStorage.setItem("navbar", "profil");
        }
      });
    });

    if (localStorage.getItem("navbar") === "gamer-modes") {
      navbarBg.style.left = "6px";
    } else if (localStorage.getItem("navbar") === "medals") {
      navbarBg.style.left = "107px";
    } else if (localStorage.getItem("navbar") === "group") {
      navbarBg.style.left = "212px";
    } else if (localStorage.getItem("navbar") === "profil") {
      navbarBg.style.left = "308px";
    }
  }, []);

  return (
    <>
      <header>
        <div className="navbar-menu">
          <div
            className="navbar-bg"
            style={{ backgroundImage: "url('../images/navbar-ellipse.svg')" }}
          ></div>
          <nav className="nav-bar">
            <ul className="menu">
              <li>
                <Link
                  data-id="1"
                  to="/gamer-modes"
                  className={`menu-item ${
                    pathName === "/gamer-modes" ? "active" : ""
                  }`}
                  style={{
                    backgroundImage: `url('../images/circle-play-solid.svg')`,
                  }}
                ></Link>
              </li>

              <li>
                <Link
                  data-id="2"
                  to="medals"
                  className={`menu-item ${
                    pathName.includes("/medals") ? "active" : ""
                  }`}
                  style={{
                    backgroundImage: `url('../images/medal-solid.svg')`,
                  }}
                ></Link>
              </li>

              <li>
                <Link
                  data-id="3"
                  to="championship"
                  className={`menu-item ${
                    pathName.includes("/championship") ? "active" : ""
                  }`}
                  style={{ backgroundImage: `url('../images/cup.svg')` }}
                ></Link>
              </li>

              <li>
                <Link
                  data-id="4"
                  to="profil"
                  className={`menu-item ${
                    pathName.includes("/profil") ? "active" : ""
                  }`}
                  style={{ backgroundImage: `url('../images/user-solid.svg')` }}
                ></Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
