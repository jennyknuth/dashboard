import React from 'react';
import Button from 'react-nuik/lib/components/button';
import { Link } from 'react-router';
import SocketRoom from 'components/util/socket-room';

import fan from 'theme/fan.scss';
import button from 'theme/button.scss';

const SensorTag = ({ }) => {
  return (
    <div className={fan.wrapper}>
      <div className={fan.container}>
      </div>
      <SocketRoom />
      <Link to="step4" className={button.nextProjButton}>Next Project</Link>
    </div>
  );
};

export default SensorTag;
