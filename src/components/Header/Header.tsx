import React, {useContext} from 'react';

import {Team} from '../../App';
import logo from '../../assets/Logo.svg';
import {useTechContext} from '../../context/Context';

interface HeaderProps {
  team: Team;
  setTeam: (team: Team) => void;
}

export const Header = ({team, setTeam}: HeaderProps) => {
  const {setTechClicked} = useTechContext();

  return (
    <div className="header">
      <img src={logo} alt="Logo" />
      <div className="header-container">
        <div
          onClick={() => {
            setTechClicked(-1);
            setTeam(Team.FRONT);
          }}
          className={`header-item-front ${team === Team.FRONT ? 'active' : ''}`}>
          Frontasie i Mobisie
        </div>
        <div
          onClick={() => {
            setTechClicked(-1);
            setTeam(Team.BACK);
          }}
          className={`header-item-back ${team === Team.BACK ? 'active' : ''}`}>
          Bakusie
        </div>
      </div>
    </div>
  );
};
