import React from 'react';

import {Header} from './components/Header/Header';
import {RadarContent} from './components/RadarContent';
import elementsBack from './data-back/elements.json';
import ringsBack from './data-back/rings.json';
import segmentsBack from './data-back/segments.json';

const backendData = {
  segments: segmentsBack,
  rings: ringsBack,
  elements: elementsBack,
};

export const Backend = () => {
  return (
    <div>
      <Header />
      <RadarContent
        title="Backend Team"
        segments={backendData.segments}
        rings={backendData.rings}
        elements={backendData.elements}
      />
    </div>
  );
};
