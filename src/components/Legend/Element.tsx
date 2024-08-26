import React, { useContext } from "react";
import "./legend.css";
import { TechContext } from "../../context/Context";

const Element = ({ element }) => {
  const { techClicked, setTechClicked } = useContext(TechContext);

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
