import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import BlankSlate from 'components/blank-slate';
import FanIcon from 'components/flow-fan';
import FanGraph from 'components/flow-graph';
import FanInstructions from 'components/fan/instructions';
import SocketRoom from 'components/socket-room';
import classNames from 'classnames';

import classes from 'theme/button.scss';
import layout from 'theme/layout.scss';
import lab from 'theme/lab.scss';
import fan from 'theme/fan.scss';

const FanLab = (props) => {
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
            <FanIcon className={fan.fan} fanOn={props.fanOn} />
            <div className={fan.graph}>
              <FanGraph vals={props.vals} />
            </div>
          </div>
          <SocketRoom data={props.lastRead} />
        </div>
      </BlankSlate>
      <div className={layout.paper}>
        <FanInstructions />
      </div>
      <div className={layout.rightBlock}>
        <Link to="step3" className={linkClassNames}>Next Project</Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.fan
  };
};

export default connect(mapStateToProps)(FanLab);
