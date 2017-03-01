import React from 'react';

import flow from 'theme/flow.scss';

const FlowFan = ({ fanOn }) => {
  return (
    <div className={flow.left}>
        <div className={flow.icon} className={(fanOn) ? 'on' : 'off'}></div>
    </div>
  );
};

export default FlowFan;
