import React from 'react';
import FanIcon from './fan-top-icon';
import FanGraph from './fan-graph';
import SocketRoom from './socket-room';
import Button from 'react-nuik/lib/components/button';

import fan from 'theme/fan.scss';

const dataFromAPI = [
  {
    "time": 1483819200,
    "precipProbability": 0.16,
    "temperature": 67.76,
  },
  {
    "time": 1483822800,
    "precipProbability": 0.08,
    "temperature": 64.77,
  },
  {
    "time": 1483826400,
    "precipProbability": 0.21,
    "temperature": 59,
  },
  {
    "time": 1483830000,
    "precipProbability": 0.2,
    "temperature": 57,
  },
  {
    "time": 1483833600,
    "precipProbability": 0.34,
    "temperature": 56.76,
  },
  {
    "time": 1483837200,
    "precipProbability": 0.55,
    "temperature": 53,
  },
];

const Fan = () => {
  return (
    <div className={fan.wrapper}>
      <div className={fan.container}>
        <FanIcon />
        <FanGraph data={dataFromAPI} />
      </div>
      <SocketRoom />
      <Button variant="affirmative" mod="floatRight">Next</Button>
    </div>
  );
};

export default Fan;
