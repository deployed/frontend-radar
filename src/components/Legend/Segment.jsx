import React from "react";
import Ring from "./Ring";
import "./legend.css";

const Segment = ({ segment, rings, setTechClicked, techClicked }) => {
  return (
    <div>
      <div className="segment" style={{ color: segment.color }}>
        {segment.label}
      </div>
      <div className="rings-container">
        {Object.keys(segment.rings).map((ringSlug) => {
          const ring = segment.rings[ringSlug];
          return (
            <Ring
              key={ringSlug}
              ring={ring}
              setTechClicked={setTechClicked}
              techClicked={techClicked}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Segment;
