import React from 'react';
import Instructions from 'components/instructions.jsx';
import Steps from 'components/steps.jsx';
import Tweet from 'components/tweet.jsx';
import Weather from 'components/weather.jsx';

import instructions from 'theme/instructions.scss';

const IntroLab = () => {
  return (
    <div>
      <h1>Page Title</h1>
      <div className="container">
        <Weather />
        <Instructions />
        <div className="right-panel">
          <Steps />
          <Tweet />
        </div>
      </div>
    </div>
  );
};

export default IntroLab;
