import React from "react";
import Ring from "./Ring";
import "./legend.css";

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
        }[];
      };
    };
  };
};

const Segment = ({ segment }: SegmentProps) => {
  return (
    <div className="segment-container">
      <div className="segment" style={{ color: segment.color }}>
        {segment.label}
      </div>
      <div className="rings-container">
        {Object.keys(segment.rings).map((ringSlug) => {
          const ring = segment.rings[ringSlug];
          return <Ring key={ringSlug} ring={ring} />;
        })}
      </div>
    </div>
  );
};

export default Segment;
