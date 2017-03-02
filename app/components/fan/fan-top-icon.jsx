import React from 'react';
import classNames from 'classnames';

import fan from 'theme/fan.scss';

const FanIcon = ({ fanOn }) => {
  const className = {
    [fan.left]: true,
    [fan.animate]: fanOn,
  };
  return (
    <div className={classNames(className)}></div>
  );
};

export default FanIcon;
