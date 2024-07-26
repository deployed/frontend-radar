import React from "react";
import Element from "./Element";
import "./legend.css";

const Ring = ({ ring, setTechClicked, techClicked }) => {
  return (
    <div>
      <div className="ring-label">{ring.label}</div>
      <ul className="elements-list">
        {ring.elements.map((element) => (
          <Element
            key={element.index}
            element={element}
            setTechClicked={setTechClicked}
            techClicked={techClicked}
          />
        ))}
      </ul>
    </div>
  );
};

export default Ring;
