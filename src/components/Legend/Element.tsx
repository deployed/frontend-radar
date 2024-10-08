import React from 'react';

import {useTechContext} from '../../context/Context';
import './legend.css';

interface ElementProps {
  element: {index: number; label: string; link?: string};
  color: string;
}

const Element = ({element, color}: ElementProps) => {
  const {techClicked, setTechClicked} = useTechContext();

  return (
    <div>
      <li
        className={`element-item ${techClicked === element.index ? 'active' : ''}`}
        style={{
          backgroundColor: techClicked === element.index ? color : '#fff',
        }}
        onClick={() => {
          element.link ? window.open(element.link) : null;
        }}
        onMouseEnter={() => setTechClicked(element.index)}>
        {element.index + 1}. {element.label}
      </li>
    </div>
  );
};

export default Element;
