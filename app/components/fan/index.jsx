import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import FanIcon from 'components/fan/fan-top-icon';
import FanGraph from 'components/fan/fan-graph';
import SocketRoom from 'components/util/socket-room';
import Button from 'react-nuik/lib/components/button';
import nio from 'niojs';

import fan from 'theme/fan.scss';
import button from 'theme/button.scss';

const Fan = (props) => {
  return (
    <div className={fan.wrapper}>
      <div className={fan.container}>
        <FanIcon fanOn={props.fanOn} />
        <FanGraph vals={props.vals} />
      </div>
      <SocketRoom data={props.lastRead} />
      <Link to="step3" className={button.nextProjButton}>Next Project</Link>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    ...state.fan
  }
};

export default connect(mapStateToProps)(Fan);
