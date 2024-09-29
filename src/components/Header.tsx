import React from 'react';
import {headerStyles} from '../styles/';
import {NavLink} from 'react-router-dom';

import logoIcon from '../assets/Logo.svg';
import {useTechContext} from '../context/Context';

export const Header = () => {
  const {setTechClicked} = useTechContext();

  return (
    <div className={headerStyles.header} >
      <img src={logoIcon} alt="Logo" className={headerStyles.logo}/>
      <div className={headerStyles.buttonsContainer}>
        <NavLink
          onClick={() => {
            setTechClicked(-1);
          }}
          to="/frontend"
          className={({isActive}) => `${headerStyles.buttonFrontend} ${isActive ? '' : headerStyles.active}`}>
          Frontend
        </NavLink>
        <NavLink
          onClick={() => {
            setTechClicked(-1);
          }}
          to="/backend"
          className={({ isActive }) => `${headerStyles.buttonBackend} ${isActive ? '' : headerStyles.active}`}
>
          Backend
        </NavLink>
      </div>
    </div>
  );
};
