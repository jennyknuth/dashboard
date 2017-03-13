import React from 'react';
import { connect } from 'react-redux';

import BlankSlate from 'components/shared/blank-slate';
import SocketRoom from 'components/shared/socket-room';
import AreaGraph from 'components/shared/area-graph';
import LightGraphic from 'components/shared/light-graphic';
import FanGraphic from 'components/shared/fan-graphic';

import FlowInstructions from 'components/flow/instructions';
import FlowWindSpeed from 'components/flow/flow-windspeed';

import layout from 'theme/layout.scss';
import lab from 'theme/lab.scss';
import chart from 'theme/chart.scss';

const Flow = (props) => {
  return (
    <div>
      <BlankSlate visibilityData={props.lastRead} message="This area will populate once the service is built and sending data.">
        <div className={lab.labData}>
          <div className={lab.header}>
            <FanGraphic fanOn={props.fanOn} />
            <FlowWindSpeed data={props.flow} />
            <LightGraphic color={props.color}/>
          </div>
          <div>
            <div className={chart.title}>
              <h2>Accelerometer Data</h2>
              <h3>measured in g's (gravitational force)</h3>
            </div>
            <AreaGraph vals={props.vals}/>
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
