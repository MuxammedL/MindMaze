import { useState, useEffect } from "react";

const Ranking = () => {
  const [users, setUsers] = useState(null);
  const response = JSON.parse(localStorage.getItem("response"));

  const getUsers = async () => {
    const url = `https://mindmazeprojectwebapi-6nortrmkbq-ey.a.run.app/User/GetAllUsers`;
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${response && response.token}`,
      },
    };
    const res = await fetch(url, requestOptions);
    const data = await res.json();
    setUsers(data.response);
  };
  const me = {
    idToken: response.idToken,
    userName: response.userName,
    point: response.point,
  };

  useEffect(() => {
    getUsers();
  }, []);
  useEffect(() => {
    const mine = document.querySelector(".mine");
    const rankContainer = document.querySelector(".ranking-players");
    rankContainer.addEventListener("scroll", () => {
      if (rankContainer.scrollTop >= 1200) {
        mine.style.position = "relative";
        mine.style.bottom = "0";
        mine.style.width = "100%";
      } else {
        mine.style.position = "absolute";
        mine.style.bottom = "19px";
        mine.style.width = "calc(100% - 4px)";
      }
    });
  }, [users]);

  return (
    <>
      <main>
        <div className="ranking">
          <div className="ranking-wrapper">
            <div
              className="bg-image"
              style={{ backgroundImage: "url('../images/ranking-star.svg')" }}
            ></div>
            <div className="ranking-content">
              <div className="border-button">
                <div className="button-inner"></div>
              </div>

              <div className="ranking-players">
                {users &&
                  users.map((user, index) => (
                    <div
                      className={`player ${
                        user.userName == response.userName ? "mine" : ""
                      }`}
                      key={index}
                    >
                      <div className="player-wrapper">
                        <div
                          className="player-profile"
                          style={{
                            backgroundImage:
                              "url('../images/group-profile-bg.svg')",
                          }}
                        >
                          <img src="../images/group-profile-img.svg" alt="" />
                        </div>

                        <div className="content">
                          <h3>{user.userName.slice(0, 12)}</h3>{" "}
                          {/* Assuming user object has a 'name' property */}
                          <span className="score">{user.point}</span>{" "}
                          {/* Assuming user object has a 'score' property */}
                        </div>
                      </div>

                      <div className="player-details">
                        <div className="detail">
                          <span className="rank-indicator">{index + 1}</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="border-button">
                <div className="button-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Ranking;
