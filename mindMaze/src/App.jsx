import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound/NotFound";
import Layout from "./components/Layout/Layout";
import Entrance from "./Pages/Entrance";
import Registration from "./Pages/Registration";
import PlayerModes from "./Pages/GameModes";
import SinglePlayerModes from "./Pages/SinglePlayerMode";
import GroupPlayerModes from "./Pages/GroupPlayerMode";
import BotMode from "./Pages/BotMode";
import Questions from "./Pages/Questions";
import SecondaryLayout from "./components/SecondaryLayout/SecondaryLayout";
import Profil from "./Pages/Profil";
import Group from "./Pages/Group";
import Medals from "./Pages/Medals";
import DuelsZone from "./Pages/DuelsZone";
import Championship from "./Pages/Championship";
import "./style/_global.scss";

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
            <Route path="single-player-mode" element={<SinglePlayerModes/>} />
            <Route path="group-player-mode" element={<GroupPlayerModes/>}/>
            <Route path="bot-mode" element={<BotMode/>}/>

            <Route path="profil" element={<Profil/>}/>
            <Route path="group" element={<Group/>}/>
            <Route path="medals" element={<Medals/>}/>
          </Route>






          <Route path="championship" element={<Championship/>}/>

          <Route path="questions" element={<Questions/>}/>

          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
