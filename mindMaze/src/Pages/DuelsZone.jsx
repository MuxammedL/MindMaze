import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";

const DuelsZone = ({ connection,setQuestions,setOpponentMine }) => {
  const navigate = useNavigate();
  
  const [opponent, setOpponent] = useState(null);
  const [show,setShow] = useState(false)
  useEffect(() => {
    const findOpponent = async (connection) => {
      try {
        connection.on("opponentnotfound", () => {
          setOpponent(null);
          setShow(true)
          console.log("Opponent Not Found");
        });
        connection.on("OpponentFound", (opponentinfo, questions) => {
          setOpponent(opponentinfo);
          setOpponentMine(opponentinfo)
          localStorage.setItem("opponentinfo", JSON.stringify(opponentinfo));
          setQuestions(questions.result);
          console.log("OpponentFound: ", { opponentinfo, questions });
        });
        await connection.invoke("FindOpponent");
      } catch (error) {
        console.error("Error find opponent:", error);
      }
    };
    findOpponent(connection)
  }, []);

  if (opponent) {
    setTimeout(() => {
      navigate("/duels-questions");
    }, 900);
  }
  return (
    <>
      <main className="duels-zone">
        <div
          className="vs-bg"
          style={{ backgroundImage: "url('./images/vs-img.svg')" }}
        ></div>

        <div className="duel-content">
          <div className="name">
            <h2>
              Mind<span>Maze</span>
            </h2>
          </div>

          <div className="duel">
            <div className="player">
              <div className="player-img">
                <img src="./images/player.svg" alt="" />
              </div>
            </div>

            <div className="vs-img">
              <img src="./images/small-vs-img.svg" alt="" />
            </div>

            <div className="player">
              <div className="player-img">
                <img src="./images/player.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="player-names">
            <div className="player-name">
              <p>Sən</p>
            </div>

            <div className="player-name">
              <p>{opponent ? opponent.username : "Oyuncu axtarılır..."}</p>
            </div>
          </div>
          {show ? (
            <Link className="go-back" to="/group-player-mode">
              <span>Geri</span>
            </Link>
          ) : null}
        </div>
      </main>
    </>
  );
};

export default DuelsZone;
