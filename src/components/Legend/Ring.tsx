import React from 'react';
import Element from './Element';
import { legendStyles } from '../../styles';

type RingProps = {
  ring: {
    label: string;
    elements: {
      label: string;
      index: number;
      link?: string;
    }[];
  };
  color: string;
};

const Ring = ({ring, color}: RingProps) => {
  const {elements, label} = ring;

  return (
    <div className={legendStyles.ringContainer}>
      <div className={legendStyles.ringLabel}>{label}</div>
      <ul className={legendStyles.elementsList}>
        {elements.length === 0 ? <div className={legendStyles.defaultLabel}>No technology</div> : null}
        {elements.map((element) => (
          <Element key={element.index} element={element} color={color} />
        ))}
      </ul>
    </div>
  );
};

export default Ring;
