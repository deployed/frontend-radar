import React from 'react';
import { legendStyles } from '../../styles';
import Segment from './Segment';
import {groupElements} from './helper';
import {LegendProps} from './types';

const Legend = ({segments, rings, elements}: LegendProps) => {
  const groupedData = groupElements(elements, segments, rings);
  const groupedDataSegments = Object.keys(groupedData);

  return (
    <div className={legendStyles.legend}>
      {groupedDataSegments.map((segmentSlug) => {
        const segment = groupedData[segmentSlug];
        return <Segment key={segmentSlug} segment={segment} />;
      })}
    </div>
  );
};

export default Legend;
