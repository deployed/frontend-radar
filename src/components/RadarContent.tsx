import React from 'react';

import {Definitions} from './Definitions';
import Legend from './Legend/Legend';
import Radar from './Radar/Radar';

type Data = {
  title?: string;
  segments: {label: string; slug: string; color: string}[];
  rings: {label: string; slug: string}[];
  elements: {
    label: string;
    segment: string;
    ring: string;
    link?: string;
  }[];
};

export const RadarContent = ({segments, rings, elements, title}: Data) => {
  const radarConfig = {
    totalAngle: Math.PI * 2,
    padding: -5,
    minPlotRadius: 100,
  };

  return (
    <div className="app-content">
      <div
        style={{
          backgroundColor: '#f1f4f9',
          paddingTop: '80px',
          flex: 1,
          overflowY: 'scroll',
          height: '100vh',
        }}>
        {title ? (
          <div
            style={{
              paddingLeft: '20px',
              paddingTop: '20px',
              fontSize: '25px',
              fontWeight: 'bold',
            }}>
            {title}
          </div>
        ) : null}
        <Legend segments={segments} rings={rings} elements={elements} />
        <Definitions />
      </div>
      <Radar options={radarConfig} segments={segments} rings={rings} elements={elements} />
    </div>
  );
};
