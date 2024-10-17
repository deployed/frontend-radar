import React from 'react';

import {Header} from './components/Header';
import {DataOverview} from './components/DataOverview';
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
      <DataOverview
        title="Frontend Team"
        segments={frontendData.segments}
        rings={frontendData.rings}
        elements={frontendData.elements}
      />
    </div>
  );
};
