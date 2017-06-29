import React from 'react';
import Progress from 'react-nuik/lib/components/progress-bar';

import priorities from 'theme/priorities';
import progress from 'theme/progress';

const TrafficLight = ({total, redValue, yellowValue, greenValue }) => {

  return (
    <div>
      <div className={priorities.priorities}>
        <div>
          Backlog {redValue} of {total}
          <Progress className={progress.progress} percent={redValue / total} variant='danger' />
        </div>
        <div>
          Doing {yellowValue} of {total}
          <Progress className={progress.progress} percent={yellowValue / total} variant='warning' />
        </div>
        <div>
          Done {greenValue} of {total}
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
