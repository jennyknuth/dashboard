import React from 'react';
import Instructions from 'components/instructions.jsx';
import Steps from 'components/steps.jsx';
import Tweet from 'components/tweet.jsx';
import Fan from 'components/fan.jsx';
// import Weather from 'components/weather.jsx';

import instructions from 'theme/instructions.scss';

const IntroLab = () => {

  return (
    <div>
      <h1><Fan /></h1>
      <div className="container">
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
