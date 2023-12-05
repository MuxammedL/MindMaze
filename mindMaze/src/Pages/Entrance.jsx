import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { motion as m } from "framer-motion";
import { AnimatePresence } from "framer-motion";
const Entrance = () => {
  const navigate = useNavigate();
  const [isAnimating, SetIsAnimating] = useState(false);
  const handleClick = () => {
    SetIsAnimating(!isAnimating);
    setInterval(() => {
      navigate('/registration')
    }, 801);
  };

  return (
    <>
      <main className="entrance">
        <div className="images">
          <m.div
            className="cloud1"
            style={{ backgroundImage: "url('./images/cloud.svg')" }}
            initial={{
              x: 0,
            }}
            animate={{
              x: isAnimating ? -200 : 0,
            }}
            transition={{ duration: 0.8, ease: "linear" }}
          ></m.div>
          <m.div
            className="cloud2"
            style={{ backgroundImage: "url('./images/cloud.svg')" }}
            initial={{
              x: 0,
            }}
            animate={{
              x: isAnimating ? 190 : 0,
            }}
            transition={{ duration: 0.6, ease: "linear" }}
          ></m.div>
          <m.div
            className="cloud3"
            style={{ backgroundImage: "url('./images/cloud.svg')" }}
            initial={{
              x: 0,
            }}
            animate={{
              x: isAnimating ? 120 : 0,
            }}
            transition={{ duration: 0.6, ease: "linear" }}
          ></m.div>
          <m.div
            className="sun"
            style={{ backgroundImage: "url('./images/sun.svg')" }}
            initial={{
              x: 0,
              rotate: 0,
            }}
            animate={{
              x: isAnimating ? -150 : 0,
              rotate: isAnimating ? -150 : 0,
            }}
            transition={{ duration: 0.8, ease: "linear" }}
          ></m.div>
          <m.div
            className="ellipse"
            style={{ backgroundImage: "url('./images/ellipse.svg')" }}
            animate={{
              y: isAnimating ? 320 : 0,
              opacity: isAnimating ? 0 : 1,
            }}
            transition={{ duration: 0.8, ease: "linear" }}
          ></m.div>
        </div>
        <div className="content">
          <m.h3
            animate={{
              opacity: isAnimating ? 0 : 1,
            }}
            transition={{ duration: 0.8, ease: "linear" }}
          >
            Zehnini labirintdən çıxar!
          </m.h3>
          <m.p
            animate={{
              opacity: isAnimating ? 0 : 1,
            }}
            transition={{ duration: 0.8, ease: "linear" }}
          >
            Oyun ilə öyrənmənin sonsuz kefini çıxarın
          </m.p>
          <m.button
            onClick={handleClick}
            className="link"
            style={{ backgroundImage: "url('./images/arrow1.svg')" }}
            animate={{
              opacity: isAnimating ? 0 : 1,
            }}
            transition={{ duration: 0.8, ease: "linear" }}
          ></m.button>
        </div>
      </main>
    </>
  );
};
export default Entrance;
