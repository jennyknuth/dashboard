import React from 'react';
import { connect } from 'react-redux';

import flow from 'theme/flow.scss';

const FlowWindSpeed = (props) => {
  return (
    <div className={flow.speed}>
      <div className={flow.fanWindSpeed}>
        <div className={flow.title} >Wind Speed</div>
        <div className={flow.value} >{Math.round(props.flow * 100) / 100}</div>
        <div className={flow.units}>MPH</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.flow
  };
};

export default connect(mapStateToProps)(FlowWindSpeed);
