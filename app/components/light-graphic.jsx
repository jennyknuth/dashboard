import React from 'react';
import classNames from 'classnames';

import flow from 'theme/flow.scss';

const FlowLed = (props) => {
  const className = classNames(
    flow.light,
    flow.lightbulbIcon
  );
  return (
    <div className={className} style={{backgroundColor: props.color}} />
  );
};

export default FlowLed;
