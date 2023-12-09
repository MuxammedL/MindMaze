import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NotFound from "./NotFound/NotFound";
import Layout from "./components/Layout/Layout";
import Entrance from "./Pages/Entrance";
import Registration from "./Pages/Registration";
import PlayerModes from "./Pages/GameModes";
import GroupPlayerModes from "./Pages/GroupPlayerMode";
import BotMode from "./Pages/BotMode";
import BotQuestions from "./Pages/BotQuestions";
import SecondaryLayout from "./components/SecondaryLayout/SecondaryLayout";
import Profile from "./Pages/Profile";
import Group from "./Pages/Group";
import DuelsZone from "./Pages/DuelsZone";
import Championship from "./Pages/Championship";
import Result from "./Pages/Result";
import DuelsQuestions from "./Pages/DuelsQuestions";
import Score from "./Pages/Score";
import Challenge from "./Pages/Challenge";
import "./style/_global.scss";
import Ranking from "./Pages/Ranking";
import History from "./Pages/History";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

function App() {
  const navigate = useNavigate();
  const [connection, setConnection] = useState();
  const [questions, setQuestions] = useState(null);
  const [opponent, setOpponent] = useState(null);
  const [questionCount, setQuestionsCount] = useState(null);

  const handleClick = (e) => {
    if (e && e.target && e.target.dataset.value) {
      setQuestionsCount(+e.target.dataset.value);
      getQuestions(+e.target.dataset.value);
      navigate("/bot-questions");
    }
  };
  // console.log(questionCount)
  const getQuestions = async (questionCount) => {
    const url = `https://mindmazeprojectwebapi-6nortrmkbq-ey.a.run.app/Questions?Count=${questionCount}`;
    const response = JSON.parse(localStorage.getItem("response"));

    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${response && response.token}`,
      },
    };
    const res = await fetch(url, requestOptions);
    // const res = await fetch('http://localhost:3000/questions')
    const data = await res.json();
    setQuestions(data.response);
  };

  const joinGame = async (token, username, point) => {
    try {
      const newConnection = new HubConnectionBuilder()
        .withUrl(
          "https://mindmazeprojectwebapi-6nortrmkbq-ey.a.run.app/playhub"
        )
        .configureLogging(LogLevel.Information)
        .withAutomaticReconnect()
        .build();

      newConnection.on("GetOnlineUsers", (onlineUsers) => {
        console.log("Received online users: ", onlineUsers);
      });

      newConnection.on("RecMessage", (str1, str2) => {
        console.log(str1, str2);
      });

      setConnection(newConnection);
      await newConnection.start();
      // Invoke BeOnline method and handle any response

      await newConnection.invoke("BeOnline", {
        idToken: token,
        userName: username,
        point: point,
      });

      // Invoke GetOnlineUsers and handle the response
      // const onlineUsers = await newConnection.invoke("GetOnlineUsers");
      // const onlineFriends = await newConnection.invoke(
      //   "GetOnlineFriends",
      //   token
      // );
      // console.log("Online users:", onlineUsers);
      // console.log("Online friends:", onlineFriends);
    } catch (error) {
      console.error("Error joining game:", error);
    }
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Entrance />} />
          <Route
            path="registration"
            element={<Registration joinGame={joinGame} />}
          />
          <Route
            path="duels-zone"
            element={<DuelsZone opponent={opponent} />}
          />

          <Route path="/gamer-modes" element={<SecondaryLayout />}>
            <Route index element={<PlayerModes />} />
            <Route path="profile" element={<Profile />} />
            <Route path="group" element={<Group />} />
            <Route path="championship" element={<Championship />} />
            <Route path="ranking" element={<Ranking />} />
          </Route>
          <Route
            path="group-player-mode"
            element={
              connection && (
                <GroupPlayerModes
                  connection={connection}
                  setOpponent={setOpponent}
                  setQuestions={setQuestions}
                />
              )
            }
          />
          <Route
            path="bot-mode"
            element={<BotMode handleClick={handleClick} />}
          />

          <Route path="scores" element={<Score />} />
          <Route path="result" element={<Result />} />

          <Route path="history" element={<History />} />

          <Route
            path="bot-questions"
            element={
              questions && (
                <BotQuestions
                  questions={questions}
                  questionCount={questionCount}
                />
              )
            }
          />
          <Route
            path="duels-questions"
            element={
              <DuelsQuestions
                questions={questions}
                questionCount={12}
                connection={connection}
                opponent={opponent}
              />
            }
          />

          <Route path="challenge" element={<Challenge />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
