import React from 'react';

import {Header} from './components/Header/Header';
import {RadarContent} from './components/RadarContent';
import elementsFront from './data-front/elements.json';
import ringsFront from './data-front/rings.json';
import segmentsFront from './data-front/segments.json';

const frontendData = {
  segments: segmentsFront,
  rings: ringsFront,
  elements: elementsFront,
};

export const Frontend = () => {
  return (
    <div>
      <Header />
      <RadarContent
        title="Frontend Team"
        segments={frontendData.segments}
        rings={frontendData.rings}
        elements={frontendData.elements}
      />
    </div>
  );
};
