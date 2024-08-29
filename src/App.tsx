import React, {useState, useContext} from 'react';

import './App.css';
import {Header} from './components/Header/Header';
import {RadarContent} from './components/RadarContent';
import {TechProvider} from './context/Context';

export enum Team {
  FRONT = 'front',
  BACK = 'back',
}

function App() {
  const [team, setTeam] = useState<Team>(Team.FRONT);

  return (
    <div>
      <TechProvider>
        <Header team={team} setTeam={setTeam} />
        <RadarContent team={team} />
      </TechProvider>
    </div>
  );
}

export default App;
