import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../context/PostContext";
import AnswerTimer from "../components/AnswerTimer/AnswerTimer";
import { resultInitialState } from "../constants";

const DuelsQuestions = ({ questions, questionCount, connection, opponent }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitialState);
  const [showResult, setShowResult] = useState(false);
  const [showAnswerTimer, setShowAnswerTimer] = useState(true);
  const { question, answers, correctAnswer } = questions[currentQuestion];
  const [opponentAnswer, setOpponentAnswer] = useState(null);
  console.log(currentQuestion);

  const sendMyAnswer = async (connection, myAnswer) => {
    try {
      connection.on("TakeAnswer", (answer) => {
        setOpponentAnswer(answer);
        console.log(answer);
      });
      const opponentinfo = JSON.parse(localStorage.getItem("opponentinfo"));
      console.log(myAnswer, opponentinfo.idToken);
      await connection.invoke("SendMyAnswer", (opponentinfo.idToken, myAnswer));
    } catch (error) {
      console.error("Error find opponent:", error);
    }
  };
  console.log(opponentAnswer);
  const onAnswerClick = (answer, index) => {
    setAnswerIdx(index);
    if (answer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };
  const onClickPass = () => {
    setAnswerIdx(null);
    setShowAnswerTimer(false);
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
    setTimeout(() => {
      setShowAnswerTimer(true);
    });
  };
  const onClickNext = (finalAnswer) => {
    setAnswerIdx(null);
    setShowAnswerTimer(false);
    setResult((prev) =>
      finalAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            score: prev.score - 5,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
    setTimeout(() => {
      setShowAnswerTimer(true);
    });
  };
  const onTryAgain = () => {
    setResult(resultInitialState);
    setShowResult(false);
  };
  const handleTimeUp = () => {
    setAnswer(false);
    onClickNext(false);
  };
  useEffect(() => {
    const variants = document.querySelectorAll(".variants .variant");
    variants.forEach((variant) => {
      variant.addEventListener("click", handleClick);
    });

    function handleClick(e) {
      variants.forEach((variant) => {
        variant.removeEventListener("click", handleClick);
      });
      sendMyAnswer(connection, this.dataset.choice);
      if (this.dataset.choice === correctAnswer) {
        this.classList.add("correct");

        setTimeout(() => {
          onClickNext(true);
        }, 750);
      } else {
        this.classList.add("wrong");
        setTimeout(() => {
          onClickNext(false);
        }, 750);
      }
    }
  }, [answers]);

  return (
    <>
      {!showResult ? (
        <>
          {showAnswerTimer && (
            <AnswerTimer duration={0} onTimeUp={handleTimeUp} />
          )}

          <main className="questions player-questions">
            <div className="question-wrapper">
              <div className="name">
                <h2>
                  Mind<span>Maze</span>
                </h2>
              </div>
              <div className="question-content">
                <div className="timer"></div>
                <span className="counter">{`${
                  questionCount - currentQuestion
                }`}</span>
                <div className="content">
                  <div className="question">
                    <p>{question}</p>
                  </div>
                  <ul className="variants">
                    {answers &&
                      answers.map((choice, index) => (
                        <li
                          onClick={() => onAnswerClick(choice, index)}
                          key={choice}
                          className={`variant`}
                          data-choice={choice}
                        >
                          <div className="variant-wrapper">
                            <span>
                              {index === 0
                                ? "A"
                                : index === 1
                                ? "B"
                                : index === 2
                                ? "C"
                                : "D"}
                            </span>
                            <p>{choice}</p>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>

              <div className="scores">
                <div className="score player-score">
                  <div className="score-wrapper">
                    <div className="score-owner">
                      <h3>Sən</h3>
                    </div>
                    <div className="score-button">
                      <span>{result.score}</span>
                    </div>
                  </div>
                </div>

                <div className="line"></div>

                <div className="score opponent-score">
                  <div className="score-wrapper">
                    <div className="score-owner">
                      <h3>{opponent.username}</h3>
                    </div>
                    <div className="score-button">
                      <span>0000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </>
      ) : (
        <main>
          <section className="result">
            <div className="result-wrapper">
              <div className="name">
                <h2>
                  Mind<span>Maze</span>
                </h2>
              </div>

              <div
                className={`message-text ${
                  result.correctAnswers > 0 ? "success" : "warning"
                }`}
              ></div>

              <div className="buttons">
                <div className="button">
                  <button className="scor-button success-btn">
                    <span>{result.score}</span>
                  </button>
                </div>

                <div className="button">
                  <Link className="back-button" to="/gamer-modes">
                    <span>Geri</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default DuelsQuestions;
