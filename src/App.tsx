import React, { useState, useContext } from "react";
import "./App.css";
import { TechProvider } from "./context/Context";
import { RadarContent } from "./components/RadarContent";
import { Header } from "./components/Header/Header";

export enum Team {
  FRONT = "front",
  BACK = "back",
}

function App() {
  const [team, setTeam] = useState<Team>(Team.FRONT);

  return (
    <div>
      <TechProvider>
        <Header team={team} setTeam={setTeam} />
        <div className="divider" />
        <RadarContent team={team} />
      </TechProvider>
    </div>
  );
}

export default App;
