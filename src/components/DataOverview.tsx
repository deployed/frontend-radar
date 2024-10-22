import React from 'react';

import {dataOverviewStyles} from '../styles';
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

export const DataOverview = ({segments, rings, elements, title}: Data) => {
  const radarConfig = {
    totalAngle: Math.PI * 2,
    padding: -5,
    minPlotRadius: 100,
  };

  return (
    <div className={dataOverviewStyles.appContent}>
      <div className={dataOverviewStyles.legendContainer}>
        {title ? <div className={dataOverviewStyles.title}>{title}</div> : null}
        <div>
          <Legend segments={segments} rings={rings} elements={elements} />
          <Definitions />
        </div>
      </div>
      <Radar segments={segments} rings={rings} elements={elements} />
    </div>
  );
};
