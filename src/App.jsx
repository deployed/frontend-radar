import React, { useState } from "react";
import "./App.css";
import Legend from "./components/Legend/Legend";
import Radar from "./components/Radar/Radar";
import segmentsFront from "./data-front/segments.json";
import ringsFront from "./data-front/rings.json";
import elementsFront from "./data-front/elements.json";
import segmentsBack from "./data-back/segments.json";
import ringsBack from "./data-back/rings.json";
import elementsBack from "./data-back/elements.json";

const data = {
  FRONT: {
    segments: segmentsFront,
    rings: ringsFront,
    elements: elementsFront,
  },
  BACK: {
    segments: segmentsBack,
    rings: ringsBack,
    elements: elementsBack,
  },
};

const Header = ({ team, setTeam }) => (
  <div className="header">
    <div>Deployed Tech Radar</div>
    <div className="header-container">
      <div
        onClick={() => setTeam("FRONT")}
        className={`header-item ${team === "FRONT" ? "active" : ""}`}
      >
        Frontasie i Mobisie
      </div>
      <div
        onClick={() => setTeam("BACK")}
        className={`header-item ${team === "BACK" ? "active" : ""}`}
      >
        Bakusie
      </div>
    </div>
  </div>
);

const AppContent = ({ team, techClicked, setTechClicked }) => {
  const radarConfig = {
    totalAngle: Math.PI * 2,
    padding: -5,
    minPlotRadius: 100,
  };

  const { segments, rings, elements } = data[team] || {};

  const halfLength = Math.ceil(segments.length / 2);
  const segmentsLeft = segments.slice(0, halfLength);
  const segmentsRight = segments.slice(halfLength);

  return (
    <div className="app-content">
      <Legend
        techClicked={techClicked}
        setTechClicked={setTechClicked}
        segments={segmentsLeft}
        rings={rings}
        elements={elements}
      />
      <Radar
        techClicked={techClicked}
        setTechClicked={setTechClicked}
        options={radarConfig}
        segments={segments}
        rings={rings}
        elements={elements}
      />
      <Legend
        techClicked={techClicked}
        setTechClicked={setTechClicked}
        segments={segmentsRight}
        rings={rings}
        elements={elements}
      />
    </div>
  );
};
function App() {
  const [team, setTeam] = useState("FRONT");
  const [techClicked, setTechClicked] = useState(0);

  return (
    <div>
      <Header team={team} setTeam={setTeam} />
      <div className="divider" />
      <AppContent
        team={team}
        techClicked={techClicked}
        setTechClicked={setTechClicked}
      />
    </div>
  );
}

export default App;
