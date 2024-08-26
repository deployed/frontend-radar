import React from "react";
import Element from "./Element";
import "./legend.css";

type RingProps = {
  ring: {
    label: string;
    elements: {
      label: string;
      index: number;
    }[];
  };
};

const Ring = ({ ring }: RingProps) => {
  return (
    <div>
      <div className="ring-label">{ring.label}</div>
      <ul className="elements-list">
        {ring.elements.map((element) => (
          <Element key={element.index} element={element} />
        ))}
      </ul>
    </div>
  );
};

export default Ring;
