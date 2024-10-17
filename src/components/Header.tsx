import React from 'react';

import cn from 'classnames';
import {NavLink} from 'react-router-dom';

import logoIcon from '../assets/Logo.svg';
import {useTechContext} from '../context/Context';
import {headerStyles} from '../styles/';

export const Header = () => {
  const {setTechClicked} = useTechContext();

  return (
    <div className={headerStyles.header}>
      <img src={logoIcon} alt="Logo" className={headerStyles.logo} />
      <div className={headerStyles.buttonsContainer}>
        <NavLink
          onClick={() => {
            setTechClicked(-1);
          }}
          to="/frontend"
          className={({isActive}) =>
            cn(headerStyles.buttonFrontend, !isActive && headerStyles.active)
          }>
          Frontend
        </NavLink>
        <NavLink
          onClick={() => {
            setTechClicked(-1);
          }}
          to="/backend"
          className={({isActive}) =>
            cn(headerStyles.buttonBackend, !isActive && headerStyles.active)
          }>
          Backend
        </NavLink>
      </div>
    </div>
  );
};
