import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import SocketRoom from 'components/util/socket-room';

import led from 'theme/led.scss';
import button from 'theme/button.scss';

const SensorTag = (props) => {
  return (
    <div className={led.wrapper}>
      <div className={led.container} style={{background: props.color}}>
        <div className={led.lightbulbIcon}></div>
      </div>
      <SocketRoom data={props.lastRead} />
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
