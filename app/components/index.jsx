import React from 'react';
import Instructions from 'components/instructions.jsx';
import Steps from 'components/steps.jsx';
import Tweet from 'components/tweet.jsx';
import Fan from 'components/fan.jsx';

import instructions from 'theme/instructions.scss';

const IntroLab = () => {

  return (
    <div>
      <div className="container">
        <div className="inner-wrapper">
          <Fan />
          <Instructions />
        </div>
        <div className="right-panel">
          <Steps />
          <Tweet />
        </div>
      </div>
    </div>
  );
};

export default IntroLab;
