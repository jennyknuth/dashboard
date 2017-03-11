import React from 'react';
import { connect } from 'react-redux';
import BlankSlate from 'components/util/blank-slate';
import FlowInstructions from 'components/flow/instructions';
import SocketRoom from 'components/util/socket-room';
import FlowGraph from 'components/flow/flow-graph';
import FlowLed from 'components/flow/flow-led';
import FlowFan from 'components/flow/flow-fan';
import FlowWindSpeed from 'components/flow/flow-windspeed';

import layout from 'theme/layout.scss';
import lab from 'theme/lab.scss';

const Flow = (props) => {
  return (
    <div>
      <BlankSlate visibilityData={props.lastRead} message="This area will populate once the service is built and sending data.">
        <div className={lab.labData}>
          <div className={lab.header}>
            <FlowFan fanOn={props.fanOn} />
            <FlowWindSpeed data={props.flow} />
            <FlowLed />
          </div>
          <FlowGraph vals={props.vals}/>
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
