import React from 'react';

import {definitionsStyles} from '../styles';

const definitions = [
  {
    title: 'ADOPT',
    definition:
      'Technologies we have high confidence in to serve our purpose, also in large scale. Technologies with a usage culture in our Deployed production environment, low risk and recommended to be widely used.',
  },
  {
    title: 'TRIAL',
    definition:
      'Technologies that we have seen work with success in project work to solve a realproblem; first serious usage experience that confirm benefits and can uncover limitations. TRIAL technologies are slightly more risky; some engineers in our organization walked this path and will share knowledge and experiences.',
  },
  {
    title: 'ASSESS',
    definition:
      'Technologies that are promising and have clear potential value-add for us; technologies worth to invest some research and prototyping efforts in to see if it has impact. ASSESS technologies have higher risks; they are often brand new and highly unproven in our organisation. You will find some engineers that have knowledge in the technology and promote it, you may even find teams that have started a prototyping effort. ',
  },
  {
    title: 'HOLD',
    definition:
      'Technologies not recommended to be used for new projects. Technologies that we think are not (yet) worth to (further) invest in. HOLD technologies should not be used for new projects, but usually can be continued for existing projects.',
  },
];

export const Definitions = () => {
  return (
    <div className={definitionsStyles.definitionsContainer}>
      {definitions.map((item, index) => (
        <div key={index} className={definitionsStyles.definitionContainers}>
          <div className={definitionsStyles.title}>{item.title}</div>
          <div className={definitionsStyles.definition}>{item.definition}</div>
        </div>
      ))}
    </div>
  );
};
