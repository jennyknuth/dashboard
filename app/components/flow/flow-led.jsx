import React from 'react';
import { connect } from 'react-redux';

import flow from 'theme/flow.scss';

const FlowLed = (props) => {
  return (
    <div className={flow.rightWrapper}>
      <div className={flow.rightContainer} style={{background: props.color}}>
        <div className={flow.lightbulbIcon}></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.led
  };
};

export default connect(mapStateToProps)(FlowLed);
