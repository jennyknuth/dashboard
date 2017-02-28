import React from 'react';
import Button from 'react-nuik/lib/components/button';
import SocketRoom from 'components/util/socket-room';

import fan from 'theme/fan.scss';

const Flow = ({ }) => {
  return (
    <div className={fan.wrapper}>
      <div className={fan.container}>
      </div>
      <SocketRoom />
    </div>
  );
};

export default Flow;
