import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import BlankSlate from 'components/util/blank-slate';
import SensorTagInstructions from 'components/sensortag/instructions';
import SocketRoom from 'components/util/socket-room';
import classNames from 'classnames';

import led from 'theme/led.scss';
import classes from 'theme/button.scss';
import layout from 'theme/layout.scss';

const SensorTag = (props) => {
  const linkClassNames = classNames (
    classes.button,
    classes.link,
    classes.primary,
    classes.large,
  );

  return (
    <div>
      <BlankSlate visibilityData={props.lastRead} message="This area will populate once the service is built and sending data.">
        <div className={led.container} style={{background: props.color}}>
          <div className={led.lightbulbIcon}></div>
        </div>
        <SocketRoom data={props.lastRead} />
      </BlankSlate>
      <div className={layout.paper}>
        <SensorTagInstructions />
      </div>
      <div className={layout.rightBlock}>
        <Link to="step4" className={linkClassNames}>Next Project</Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.led
  };
};

export default connect(mapStateToProps)(SensorTag);
