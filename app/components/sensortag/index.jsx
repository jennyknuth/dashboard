import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';

import replacements from 'components/shared/replacements';

import BlankSlate from 'components/shared/blank-slate';
import Light from 'components/shared/light-graphic';
import SocketRoom from 'components/shared/socket-room';
import Instructions from 'components/shared/collapsible';
import Content from 'components/sensortag/sensortag-instructions';

import classes from 'theme/button.scss';
import layout from 'theme/layout.scss';
import lab from 'theme/lab.scss';

const SensorTag = (props) => {
  const linkClassNames = classNames (
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
            <Light color={props.color} />
          </div>
          <SocketRoom data={props.lastRead} />
        </div>
      </BlankSlate>
      <div className={layout.paper}>
        <Instructions>
          <Content replacements={replacements} />
        </Instructions>
      </div>
      <div className={layout.rightBlock}>
        <Link to="flow" className={linkClassNames}>Next Project</Link>
      </div>
    </div>
  );
};

SensorTag.propTypes = {
  lastRead: React.PropTypes.object,
  color: React.PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    ...state.led
  };
};

export default connect(mapStateToProps)(SensorTag);
