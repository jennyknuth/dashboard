import React from 'react';
import { connect } from 'react-redux';

import FlowWindSpeed from 'components/flow/flow-windspeed';

const Flow = (props) => {
  return (
    <div>
    </div>
  );
};

FlowWindSpeed.propTypes = {
  fanOn: React.PropTypes.bool,
  color: React.PropTypes.string,
  lastRead: React.PropTypes.object,
  flow: React.PropTypes.number,
  vals: React.PropTypes.arrayOf(React.PropTypes.object)
};

const mapStateToProps = (state) => {
  return {
    ...state.flow
  };
};

export default connect(mapStateToProps)(Flow);
