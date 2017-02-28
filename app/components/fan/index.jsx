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

const Fan = ({ }) => {
  return (
    <div className={fan.wrapper}>
      <div className={fan.container}>
        <FanIcon />
        <FanGraph />
      </div>
      <SocketRoom />
      <Link to="step3" className={button.nextProjButton}>Next Project</Link>
    </div>
  );
};
// export default connect(
//   mapStateToProps
// )(Fan);

export default Fan;
