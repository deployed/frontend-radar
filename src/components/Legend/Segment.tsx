import React from 'react';

import Ring from './Ring';
import './legend.css';

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
    <div className="segment-container">
      <div className="segment" style={{color: segment.color}}>
        {segment.label}
      </div>
      <div className="rings-container">
        {ringsKeys.map((ringSlug) => {
          const ring = segment.rings[ringSlug];
          return <Ring key={ringSlug} ring={ring} color={segment.color} />;
        })}
      </div>
    </div>
  );
};

export default Segment;
