import React from 'react';
import { connect } from 'react-redux';

import flow from 'theme/flow.scss';

const FlowWindSpeed = (props) => {
  return (
    <div className={flow.centerWrapper}>
      <div className={flow.centerContainer}>
        <div className={flow.fanWindSpeed}>
          <h3>Wind Speed</h3>
          <h2>{Math.round(props.flow * 100) / 100}</h2>
          <h4>MPH</h4>
        </div>

      </div>
    </div>
  );
};
//<FanGraph vals={props.vals} />
const mapStateToProps = (state) => {
  return {
    ...state.flow
  };
};

export default connect(mapStateToProps)(FlowWindSpeed);
