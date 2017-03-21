import React from 'react';
import { connect } from 'react-redux';

import flow from 'theme/flow.scss';

const FlowWindSpeed = (props) => {
  const arrow = props.flow < 2 ? 'arrowUp' : 'arrowDown';
  return (
    <div className={flow.speed}>
      <div className={flow.fanWindSpeed}>
        <div className={flow.title} >Wind Speed</div>
        <div className={flow[arrow]} />
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
