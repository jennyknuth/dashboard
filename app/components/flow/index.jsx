import React from 'react';
import { connect } from 'react-redux';
import SocketRoom from 'components/util/socket-room';
// import FlowGraph from 'components/fan/flow-graph';
import FlowLed from 'components/flow/flow-led';
import FlowFan from 'components/flow/flow-fan';

import flow from 'theme/flow.scss';

const Flow = (props) => {
  return (
    <div className={flow.wrapper}>
      <div className={flow.container}>
        <FlowFan fanOn={props.fanOn} className={props.fanOn}/>
        <div style={{color: props.color}}>The flow is {props.flow}</div>
        <FlowLed />
      </div>
      <SocketRoom data={props.lastRead} />
    </div>
  );
};
//<FanGraph vals={props.vals} />
const mapStateToProps = (state) => {
  return {
    ...state.flow
  };
};

export default connect(mapStateToProps)(Flow);
