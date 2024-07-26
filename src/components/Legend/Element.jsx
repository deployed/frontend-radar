import React from "react";
import "./legend.css";
import { Tooltip } from "react-tooltip";
const Element = ({ element, setTechClicked, techClicked }) => {
  return (
    <div>
      <li
        className={`element-item ${
          techClicked === element.index ? "active" : ""
        }`}
        onClick={() => setTechClicked(element.index)}
      >
        {element.index}. {element.label}
      </li>
    </div>
  );
};

export default Element;
