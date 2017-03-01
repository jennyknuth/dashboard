import React from 'react';
import { connect } from 'react-redux';
import FlowInstructions from 'components/flow/instructions';
import SocketRoom from 'components/util/socket-room';

import fan from 'theme/fan.scss';

const Flow = (props) => {
  return (
    <div className={fan.wrapper}>
      <div className={fan.container}>
        <div style={{color: props.color}}>The flow is {props.flow}</div>
      </div>
      <SocketRoom data={props.lastRead} />
      <FlowInstructions />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.flow
  };
};

export default connect(mapStateToProps)(Flow);
