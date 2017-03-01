import React from 'react';

import fan from 'theme/fan.scss';

const FlowFan = ({ fanOn }) => {
  return (
    <div className={fan.left}>
        <div className={fan.icon} className={(fanOn) ? 'on' : 'off'}></div>
    </div>
  );
};

export default FlowFan;
