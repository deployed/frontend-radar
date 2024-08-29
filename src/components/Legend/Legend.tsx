import React from 'react';

import Segment from './Segment';
import {groupElements} from './helper';
import './legend.css';
import {LegendProps} from './types';

const Legend = ({segments, rings, elements}: LegendProps) => {
  const groupedData = groupElements(elements, segments, rings);
  const groupedDataSegments = Object.keys(groupedData);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        gap: '20px',
      }}>
      {groupedDataSegments.map((segmentSlug) => {
        const segment = groupedData[segmentSlug];
        return <Segment key={segmentSlug} segment={segment} />;
      })}
    </div>
  );
};

export default Legend;
