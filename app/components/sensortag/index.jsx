import React from 'react';
import Button from 'react-nuik/lib/components/button';
import SocketRoom from 'components/util/socket-room';

import fan from 'theme/fan.scss';

const SensorTag = ({ }) => {
  return (
    <div className={fan.wrapper}>
      <div className={fan.container}>
      </div>
      <SocketRoom />
      <Button href="step4" variant="affirmative" mod="floatRight">Next Project</Button>
    </div>
  );
};

export default SensorTag;
