import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import SensorTagInstructions from 'components/sensortag/instructions';
import SocketRoom from 'components/util/socket-room';

import fan from 'theme/fan.scss';
import button from 'theme/button.scss';

const SensorTag = (props) => {
  return (
    <div className={fan.wrapper}>
      <div className={fan.container}>
        <div style={{color: props.color}}>Look at me, an LED!</div>
      </div>
      <SocketRoom data={props.lastRead} />
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
