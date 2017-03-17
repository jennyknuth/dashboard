import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';

import BlankSlate from 'components/shared/blank-slate';
import FanIcon from 'components/shared/fan-graphic';
import AreaGraph from 'components/shared/area-graph';
import SocketRoom from 'components/shared/socket-room';
import Instructions from 'components/shared/collapsible';
import Content from 'components/fan/fan-instructions';

import classes from 'theme/button.scss';
import layout from 'theme/layout.scss';
import lab from 'theme/lab.scss';
import fan from 'theme/fan.scss';
import chart from 'theme/chart.scss';

const FanLab = (props) => {
  const linkClassNames = classNames(
    classes.button,
    classes.link,
    classes.affirmative,
    classes.large,
  );

  return (
    <div>
      <BlankSlate visibilityData={props.lastRead} message="This area will populate once the service is built and sending data.">
        <div className={lab.labData}>
          <div className={lab.header}>
            <FanIcon className={fan.fan} fanOn={props.fanOn} />
            <div className={fan.graph}>
              <AreaGraph vals={props.vals} />
              <div className={chart.title}>
                <h2>Accelerometer Data</h2>
                <h3>measured in g's (gravitational&nbsp;force)</h3>
              </div>
            </div>
          </div>
          <SocketRoom data={props.lastRead} />
        </div>
      </BlankSlate>
      <div className={layout.paper}>
        <Instructions><Content/></Instructions>
      </div>
      <div className={layout.rightBlock}>
        <Link to="sensorTag" className={linkClassNames}>Next Project</Link>
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
