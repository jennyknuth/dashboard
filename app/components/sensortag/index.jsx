import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import BlankSlate from 'components/util/blank-slate';
import SensorTagInstructions from 'components/sensortag/instructions';
import SocketRoom from 'components/util/socket-room';

import led from 'theme/led.scss';
import button from 'theme/button.scss';

const SensorTag = (props) => {
  return (
    <div className={led.wrapper}>
      <BlankSlate visibilityData={props.lastRead} message="This area will populate once the service is built and sending data.">
        <div className={led.container} style={{background: props.color}}>
          <div className={led.lightbulbIcon}></div>
        </div>
        <SocketRoom data={props.lastRead} />
      </BlankSlate>
      <SensorTagInstructions />
      <Link to="step4" className={button.nextProjButton}>Next Project</Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.led
  };
};

export default connect(mapStateToProps)(SensorTag);
