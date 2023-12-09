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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Entrance />} />
          <Route path="registration" element={<Registration/>} />
          <Route path="duels-zone" element={<DuelsZone/>}/>

          <Route path="/gamer-modes" element={<SecondaryLayout/>}>
            <Route index element={<PlayerModes/>} />

            <Route path="profile" element={<Profile/>}/>
            <Route path="group" element={<Group/>}/>
          <Route path="championship" element={<Championship/>}/>
            <Route path="ranking" element={<Ranking/>}/>
          </Route>
            <Route path="group-player-mode" element={<GroupPlayerModes/>}/>
            <Route path="bot-mode" element={<BotMode/>}/>

            <Route path="scores" element={<Score/>}/>
          <Route path="result" element={<Result/>}/>


          <Route path="history" element={<History/>}/>

          <Route path="bot-questions" element={<BotQuestions/>}/>
          <Route path="duels-questions" element={<DuelsQuestions/>}/>

          <Route path="challenge" element={<Challenge/>}/>

          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
