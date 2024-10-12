import React from 'react';

import {Team} from '../App';
import elementsBack from '../data-back/elements.json';
import ringsBack from '../data-back/rings.json';
import segmentsBack from '../data-back/segments.json';
import elementsFront from '../data-front/elements.json';
import ringsFront from '../data-front/rings.json';
import segmentsFront from '../data-front/segments.json';
import Legend from './Legend/Legend';
import Radar from './Radar/Radar';

const data = {
  front: {
    segments: segmentsFront,
    rings: ringsFront,
    elements: elementsFront,
  },
  back: {
    segments: segmentsBack,
    rings: ringsBack,
    elements: elementsBack,
  },
};

type RadarContentProps = {
  team: Team;
};

export const foo = () => {};

export const RadarContent = ({team}: RadarContentProps) => {
  const {segments, rings, elements} = data[team] || {};

  return (
    <div className="app-content">
      <div
        style={{
          backgroundColor: '#f1f4f9',
          padding: '5px',
          flex: 1,
        }}>
        <Legend segments={segments} rings={rings} elements={elements} />
      </div>
      <Radar segments={segments} rings={rings} elements={elements} />
    </div>
  );
};
