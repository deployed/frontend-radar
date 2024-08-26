import React from "react";
import { Team } from "../../App";

type HeaderProps = {
  team: Team;
  setTeam: (team: Team) => void;
};

export const Header = ({ team, setTeam }: HeaderProps) => (
  <div className="header">
    <div>Deployed Tech Radar</div>
    <div className="header-container">
      <div
        onClick={() => setTeam(Team.FRONT)}
        className={`header-item ${team === Team.FRONT ? "active" : ""}`}
      >
        Frontasie i Mobisie
      </div>
      <div
        onClick={() => setTeam(Team.BACK)}
        className={`header-item ${team === Team.BACK ? "active" : ""}`}
      >
        Bakusie
      </div>
    </div>
  </div>
);
