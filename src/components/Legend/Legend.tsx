import React from "react";
import "./legend.css";
import Segment from "./Segment";
import { groupElements } from "./helper";
import { LegendProps } from "./types";

const Legend = ({ segments, rings, elements }: LegendProps) => {
  const groupedData = groupElements(elements, segments, rings);

  return (
    <div>
      {Object.keys(groupedData).map((segmentSlug) => {
        const segment = groupedData[segmentSlug];
        return <Segment key={segmentSlug} segment={segment} />;
      })}
    </div>
  );
};

export default Legend;
