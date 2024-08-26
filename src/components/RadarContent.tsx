import React from "react";
import Legend from "./Legend/Legend";
import Radar from "./Radar/Radar";
import segmentsFront from "../data-front/segments.json";
import ringsFront from "../data-front/rings.json";
import elementsFront from "../data-front/elements.json";
import segmentsBack from "../data-back/segments.json";
import ringsBack from "../data-back/rings.json";
import elementsBack from "../data-back/elements.json";
import { Team } from "../App";

const data = {
  front: {
    segments: segmentsFront,
    rings: ringsFront,
    elements: elementsFront,
  },
  back: {
    segments: segmentsBack,
    rings: ringsBack,
    elements: elementsBack,
  },
};

type RadarContentProps = {
  team: Team;
};

export const RadarContent = ({ team }: RadarContentProps) => {
  const radarConfig = {
    totalAngle: Math.PI * 2,
    padding: -5,
    minPlotRadius: 100,
  };

  const { segments, rings, elements } = data[team] || {};

  const halfLength = Math.ceil(segments.length / 2);
  const segmentsLeft = segments.slice(0, halfLength);
  const segmentsRight = segments.slice(halfLength);

  return (
    <div className="app-content">
      <Legend segments={segmentsLeft} rings={rings} elements={elements} />
      <Legend segments={segmentsRight} rings={rings} elements={elements} />
      <Radar
        options={radarConfig}
        segments={segments}
        rings={rings}
        elements={elements}
      />
    </div>
  );
};
