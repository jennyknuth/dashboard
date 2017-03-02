import React from 'react';
import classNames from 'classnames';

import flow from 'theme/flow.scss';

const FlowFan = ({ fanOn }) => {
  const className = {
    [flow.left]: true,
    [flow.animate]: fanOn,
  };
  return (
    <div className={classNames(className)}></div>
  );
};

export default FlowFan;
