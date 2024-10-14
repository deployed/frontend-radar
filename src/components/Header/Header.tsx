import React from 'react';

import {NavLink} from 'react-router-dom';

import logo from '../../assets/Logo.svg';
import {useTechContext} from '../../context/Context';

export const Header = () => {
  const {setTechClicked} = useTechContext();

  return (
    <div className="header" style={{position: 'fixed', top: 0, width: '100%', zIndex: 1000}}>
      <img src={logo} alt="Logo" style={{padding: '10px'}} />
      <div className="header-container">
        <NavLink
          onClick={() => {
            setTechClicked(-1);
          }}
          to="/frontend"
          className={({isActive}) => `header-item-front ${isActive ? '' : 'active'}`}>
          Frontend
        </NavLink>
        <NavLink
          onClick={() => {
            setTechClicked(-1);
          }}
          to="/backend"
          className={({isActive}) => `header-item-back ${isActive ? '' : 'active'}`}>
          Backend
        </NavLink>
      </div>
    </div>
  );
};
