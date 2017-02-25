import React from 'react';
import { connect } from 'react-redux';
import FanIcon from './fan-top-icon';
import FanGraph from './fan-graph';
import SocketRoom from './socket-room';
import Button from 'react-nuik/lib/components/button';
import nio from 'niojs';

import fan from 'theme/fan.scss';

const Fan = ({ }) => {
  return (
    <div className={fan.wrapper}>
      <div className={fan.container}>
        <FanIcon />
        <FanGraph />
      </div>
      <SocketRoom />
      <Button variant="affirmative" mod="floatRight">Next</Button>
    </div>
  );
};
// export default connect(
//   mapStateToProps
// )(Fan);

export default Fan;
