import React from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = (state) => {
  return {
    ...state.led
  };
};

export default connect(mapStateToProps)(FlowLed);
