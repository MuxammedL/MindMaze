import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound/NotFound";
import Layout from "./components/Layout/Layout";
import Entrance from "./Pages/Entrance";
import Registration from "./Pages/Registration";
import PlayerModes from "./Pages/GameModes";
import GroupPlayerModes from "./Pages/GroupPlayerMode";
import BotMode from "./Pages/BotMode";
import BotQuestions from "./Pages/BotQuestions";
import SecondaryLayout from "./components/SecondaryLayout/SecondaryLayout";
import Profil from "./Pages/Profil";
import Group from "./Pages/Group";
import Medals from "./Pages/Medals";
import DuelsZone from "./Pages/DuelsZone";
import Championship from "./Pages/Championship";
import "./style/_global.scss";
import Result from "./Pages/Result";
import Score from "./Pages/Score";
import DuelsQuestions from "./Pages/DuelsQuestions";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

function App() {
  const [connection, setConnection] = useState();

  const joinGame = async (token, username, point) => {
    try {
      const newConnection = new HubConnectionBuilder()
        .withUrl(
          "https://mindmazeprojectwebapi-6nortrmkbq-ey.a.run.app/playhub"
        )
        .configureLogging(LogLevel.Information)
        .build();

      newConnection.on("GetOnlineUsers", (onlineUsers) => {
        console.log("Received online users: ", onlineUsers);
      });

      newConnection.on("RecMessage", (str1, str2) => {
        console.log(str1, str2);
      });

      setConnection(newConnection); // Set the connection state

      await newConnection.start();
      // Invoke BeOnline method and handle any response

      await newConnection.invoke("BeOnline", {
        idToken: token,
        userName:username,
        point: point,
      });

      // Invoke GetOnlineUsers and handle the response
      const onlineUsers = await newConnection.invoke("GetOnlineUsers");
      const onlineFriends = await newConnection.invoke(
        "GetOnlineFriends",
        token
      );
      console.log("Online users:", onlineUsers);
      console.log("Online friends:", onlineFriends);
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
          <Route path="duels-zone" element={<DuelsZone />} />

          <Route path="/gamer-modes" element={<SecondaryLayout />}>
            <Route index element={<PlayerModes />} />

            <Route path="profil" element={<Profil />} />
            <Route path="group" element={<Group />} />
            <Route path="championship" element={<Championship />} />
            <Route path="medals" element={<Medals />} />
          </Route>
          <Route path="group-player-mode" element={<GroupPlayerModes />} />
          <Route path="bot-mode" element={<BotMode />} />

          <Route path="scores" element={<Score />} />
          <Route path="result" element={<Result />} />

          <Route path="bot-questions" element={<BotQuestions />} />
          <Route path="duels-questions" element={<DuelsQuestions />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
