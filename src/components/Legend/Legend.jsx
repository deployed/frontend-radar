import React from "react";
import "./legend.css";
import Segment from "./Segment";
import { groupElements } from "./helper";
const Legend = ({ segments, rings, elements, setTechClicked, techClicked }) => {
  const groupedData = groupElements(elements, segments, rings);

  return (
    <div className="legend-container">
      {Object.keys(groupedData).map((segmentSlug) => {
        const segment = groupedData[segmentSlug];
        return (
          <Segment
            key={segmentSlug}
            segment={segment}
            rings={segment.rings}
            setTechClicked={setTechClicked}
            techClicked={techClicked}
          />
        );
      })}
    </div>
  );
};

export default Legend;
