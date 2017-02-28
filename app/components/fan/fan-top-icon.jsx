import React from 'react';
import { connect } from 'react-redux';

import fan from 'theme/fan.scss';

const FanIcon = ({ fanOn }) => {
  return (
    <div className={fan.left}>
        <div className={fan.icon}>{(fanOn) ? 'ON' : 'OFF'}</div>
    </div>
  );
};

export default FanIcon;
