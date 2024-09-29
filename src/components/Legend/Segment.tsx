import React from 'react';
import {legendStyles} from '../../styles'
import Ring from './Ring';

type SegmentProps = {
  segment: {
    label: string;
    color: string;
    rings: {
      [ringSlug: string]: {
        label: string;
        elements: {
          label: string;
          index: number;
          link?: string;
        }[];
      };
    };
  };
};

const Segment = ({segment}: SegmentProps) => {
  const ringsKeys = Object.keys(segment.rings);

  return (
    <div className={legendStyles.segemntContainer}>
      <div className={legendStyles.segmentLabel} style={{color: segment.color}}>
        {segment.label}
      </div>
      <div className={legendStyles.ringsContainer}>
        {ringsKeys.map((ringSlug) => {
          const ring = segment.rings[ringSlug];
          return <Ring key={ringSlug} ring={ring} color={segment.color} />;
        })}
      </div>
    </div>
  );
};

export default Segment;
