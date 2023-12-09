import "./_AnswerTimer.scss";
import { useEffect, useState, useRef } from "react";
const AnswerTimer = ({ duration, onTimeUp }) => {
  // const [counter, setCounter] = useState(0);
  // const [progressLoaded, setProgressLoaded] = useState(0);
  // const intervalRef = useRef();
  // useEffect(() => {
  //   intervalRef.current = setInterval(() => {
  //     setCounter((cur) => cur + 0.5);
  //   }, 1000);
  //   return () => clearInterval(intervalRef.current);
  // }, []);

  // useEffect(() => {
  //   setProgressLoaded(100 * (counter / duration));
  //   if (counter === duration) {
  //     clearInterval(intervalRef.current);
  //     setTimeout(() => {
  //       onTimeUp();
  //     }, 1000);
  //   }
  // }, [counter]);

  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setSeconds((prevSeconds) => {
        const newSeconds = prevSeconds - 1;

        if (newSeconds < 0) {
          clearInterval(timerInterval);
          return 0;
        }

        if (newSeconds === duration) {
          setTimeout(() => {
            onTimeUp();
          }, 1);
        }
        return newSeconds;
      });
    }, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  return (
    // <div className="answer-timer-container">
    //   <div
    //     style={{
    //       width: `${progressLoaded}%`,
    //     }}
    //     className="progress"
    //   ></div>
    // </div>
    <div className="timer">
      <span>{`00:${seconds < 10 ? "0" : ""}${seconds}`}</span>
    </div>
  );
};

export default AnswerTimer;
