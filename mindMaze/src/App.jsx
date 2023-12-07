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
      const connection = new HubConnectionBuilder()
        .withUrl(
          "https://mindmazeprojectwebapi-6nortrmkbq-ey.a.run.app/playhub"
        )
        .configureLogging(LogLevel.Information)
        .build();

      connection.on("ResultOfInvite", (str1,str2) => {
        console.log(str1,str2);
      });
      connection.on("RecMessage", (str1,str2) => {
        console.log(str1,str2);
      });
      await connection.start();
      await connection.invoke("BeOnline", { token, username, point });
    } catch (error) {}
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
