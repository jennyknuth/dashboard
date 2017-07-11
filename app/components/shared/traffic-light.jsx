import React from 'react';
import Progress from 'react-nuik/lib/components/progress-bar';

import priorities from 'theme/priorities';
import progress from 'theme/progress';

const TrafficLight = ({total, redValue, yellowValue, greenValue, redLabel, yellowLabel, greenLabel }) => {

  return (
    <div>
      <div className={priorities.priorities}>
        <div>
          {redLabel} {redValue} of {total}
          <Progress className={progress.progress} percent={redValue / total} variant='danger' />
        </div>
        <div>
          {yellowLabel} {yellowValue} of {total}
          <Progress className={progress.progress} percent={yellowValue / total} variant='warning' />
        </div>
        <div>
          {greenLabel} {greenValue} of {total}
          <Progress className={progress.progress} percent={greenValue / total} variant='affirmative' />
        </div>
      </div>
    </div>
  );
};

TrafficLight.propTypes = {
  total: React.PropTypes.number,
  redValue: React.PropTypes.number,
  yellowValue: React.PropTypes.number,
  greenValue: React.PropTypes.number,
};

export default TrafficLight;
