import React from 'react';
import { connect } from 'react-redux';
import FanIcon from 'components/fan/fan-top-icon';
import FanGraph from 'components/fan/fan-graph';
import SocketRoom from 'components/util/socket-room';
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
      <Button href="step3" variant="affirmative" mod="floatRight">Next</Button>
    </div>
  );
};
// export default connect(
//   mapStateToProps
// )(Fan);

export default Fan;
