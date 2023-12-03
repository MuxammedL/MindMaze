import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound/NotFound";
import Layout from "./components/Layout/Layout";
import Entrance from "./Pages/Entrance";
import Registration from "./Pages/Registration";
import PlayerModes from "./Pages/PlayerModes";
import SinglePlayerModes from "./Pages/SinglePlayerModes";
import GroupPlayerModes from "./Pages/GroupPlayerModes";
import BotMode from "./Pages/BotMode";
import "./style/_global.scss";
import Questions from "./Pages/Questions";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Entrance />} />
          <Route path="registration" element={<Registration/>} />
          <Route path="gamer-modes" element={<PlayerModes/>} />
          <Route path="single-player-mode" element={<SinglePlayerModes/>} />
          <Route path="group-player-mode" element={<GroupPlayerModes/>}/>
          <Route path="bot-mode" element={<BotMode/>}/>

          <Route path="questions" element={<Questions/>}/>

          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
