import React from 'react';
import { connect } from 'react-redux';
import BlankSlate from 'components/blank-slate';
import FlowInstructions from 'components/flow/instructions';
import SocketRoom from 'components/socket-room';
import FlowGraph from 'components/flow-graph';
import FlowLed from 'components/flow-led';
import FlowFan from 'components/flow-fan';
import FlowWindSpeed from 'components/flow/flow-windspeed';

import layout from 'theme/layout.scss';
import lab from 'theme/lab.scss';
import flow from 'theme/flow.scss';

const Flow = (props) => {
  return (
    <div>
      <BlankSlate visibilityData={props.lastRead} message="This area will populate once the service is built and sending data.">
        <div className={lab.labData}>
          <div className={lab.header}>
            <FlowFan fanOn={props.fanOn} />
            <FlowWindSpeed data={props.flow} />
            <FlowLed color={props.color}/>
          </div>
          <div className={flow.graph}>
            <FlowGraph vals={props.vals}/>
          </div>
          <SocketRoom data={props.lastRead} />
        </div>
      </BlankSlate>
      <div className={layout.paper}>
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
