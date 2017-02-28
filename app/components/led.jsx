import React from 'react';
import { connect } from 'react-redux';
import FanIcon from './fan-top-icon';
import FanGraph from './fan-graph';
import SocketRoom from './socket-room';
import Button from 'react-nuik/lib/components/button';
import nio from 'niojs';

import fan from 'theme/led.scss';

const Fan = ({ }) => {
  return (
    <div className={led.wrapper}>
      <div className={led.container}>
        <LedBulb />
      </div>
      <SocketRoom />
      <Button variant="affirmative" mod="floatRight">Next</Button>
    </div>
  );
};

export default Led;
