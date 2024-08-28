import React from 'react';

import Element from './Element';
import './legend.css';

type RingProps = {
  ring: {
    label: string;
    elements: {
      label: string;
      index: number;
    }[];
  };
  color: string;
};

const Ring = ({ring, color}: RingProps) => {
  const {elements, label} = ring;

  return (
    <div className="ring-container">
      <div className="ring-label">{label}</div>
      <ul className="elements-list">
        {elements.length === 0 ? <div className="default-label">No technology</div> : null}
        {elements.map((element) => (
          <Element key={element.index} element={element} color={color} />
        ))}
      </ul>
    </div>
  );
};

export default Ring;
