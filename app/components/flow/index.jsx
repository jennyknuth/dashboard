import React from 'react';
import { connect } from 'react-redux';
import BlankSlate from 'components/util/blank-slate';
import FlowInstructions from 'components/flow/instructions';
import SocketRoom from 'components/util/socket-room';
import FlowGraph from 'components/flow/flow-graph';
import FlowLed from 'components/flow/flow-led';
import FlowFan from 'components/flow/flow-fan';
import FlowWindSpeed from 'components/flow/flow-windspeed';
import InstructionsVideo from 'components/instructions/instructions-video';

import flow from 'theme/flow.scss';
import layout from 'theme/layout.scss';

const Flow = (props) => {
  return (
    <div className={flow.wrapper}>
      <BlankSlate visibilityData={props.lastRead} message="This area will populate once the service is built and sending data.">
        <div className={flow.container}>
          <FlowFan fanOn={props.fanOn} className={props.fan_state} />
          <FlowWindSpeed data={props.flow} />
          <FlowLed />
        </div>
        <div>
          <FlowGraph vals={props.vals}/>
        </div>
        <SocketRoom data={props.lastRead} />
      </BlankSlate>
      <div className={layout.paper}>
        <InstructionsVideo />
        <FlowInstructions />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.flow
  };
};

export default connect(mapStateToProps)(Flow);
