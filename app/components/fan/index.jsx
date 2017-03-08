import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import BlankSlate from 'components/util/blank-slate';
import FanIcon from 'components/fan/fan-top-icon';
import FanGraph from 'components/fan/fan-graph';
import FanInstructions from 'components/fan/instructions';
import InstructionsVideo from 'components/instructions/instructions-video';
import SocketRoom from 'components/util/socket-room';
import classNames from 'classnames';

import fan from 'theme/fan.scss';
import classes from 'theme/button.scss';
import layout from 'theme/layout.scss';

const Fan = (props) => {
  const linkClassNames = classNames (
    classes.button,
    classes.link,
    classes.primary,
    classes.large,
  );
  return (
    <div className={fan.wrapper}>
      <BlankSlate visibilityData={props.lastRead} message="This area will populate once the service is built and sending data.">
        <div className={layout.paper}>
          <FanIcon fanOn={props.fanOn} className="fanIcon" />
          <FanGraph vals={props.vals} />
          <SocketRoom data={props.lastRead} />
        </div>
      </BlankSlate>
      <div className={layout.paper}>
        <InstructionsVideo />
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

export default connect(mapStateToProps)(Fan);
