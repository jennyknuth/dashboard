import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import BlankSlate from 'components/blank-slate';
import Light from 'components/light-graphic';
import SensorTagInstructions from 'components/sensortag/instructions';
import SocketRoom from 'components/socket-room';
import classNames from 'classnames';

import classes from 'theme/button.scss';
import layout from 'theme/layout.scss';
import lab from 'theme/lab.scss';

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
        <div className={lab.labData}>
          <div className={lab.header}>
            <Light color={props.color} />
          </div>
          <SocketRoom data={props.lastRead} />
        </div>
      </BlankSlate>
      <div className={layout.paper}>
        <SensorTagInstructions />
      </div>
      <div className={layout.rightBlock}>
        <Link to="lab4" className={linkClassNames}>Next Project</Link>
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
