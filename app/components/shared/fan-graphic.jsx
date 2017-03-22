import React from 'react';
import classNames from 'classnames';

import fanIcon from 'theme/fanIcon.scss';

const FanIcon = ({ fanOn }) => {
  const className = classNames (
    fanIcon.fan,
    fanOn && fanIcon.active
  );

  return (
    <div className={className}></div>
  );
};

FanIcon.propTypes = {
  fanOn: React.PropTypes.bool
};

export default FanIcon;
