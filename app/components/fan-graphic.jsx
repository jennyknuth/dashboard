import React from 'react';
import classNames from 'classnames';

import flow from 'theme/flow.scss';

const FlowFan = ({ fanOn }) => {
  const className = classNames (
    flow.fan,
    fanOn && flow.active
  );

  return (
    <div className={className}></div>
  );
};

export default FlowFan;
