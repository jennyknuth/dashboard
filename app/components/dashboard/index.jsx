import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';
import { map, filter } from 'lodash';

import BlankSlate from 'components/shared/blank-slate';
import BarGraph from 'components/shared/bar-graph';
// import AreaGraph from 'components/shared/area-graph';
// import SocketRoom from 'components/shared/socket-room';
// import Instructions from 'components/shared/collapsible';
// import Content from 'components/fan/fan-instructions';

import replacements from 'components/shared/replacements';

import classes from 'theme/button.scss';
import layout from 'theme/layout.scss';
import lab from 'theme/lab.scss';
import fan from 'theme/fan.scss';
import chart from 'theme/chart.scss';

const Dashboard = ({ timely, time, lastRead }) => {
  console.log('Dashboard', timely, time);
  const linkClassNames = classNames(
    classes.button,
    classes.link,
    classes.affirmative,
    classes.large,
  );

  const staticData = {
    'n.io': {
      'Accounting & Finance ': 868,
      'General Admin': 2814,
      'Back-End/Services': 1099,
      'Front-end': 1087,
      'Community Development': 117,
      'Learning & Innovation': 496,
      'Operations / Management ': 1622,
      'group': 'n.io',
      'PTO & Holidays': 1659,
      'Legal': 743,
      'Marketing / Design': 1271
    }
  };
  return (
    <div>
        <div className={lab.labData}>
          { <BarGraph data={staticData['n.io']} />}
        </div>
      <div className={layout.rightBlock}>
        <Link to='sensorTag' className={linkClassNames}>Next Project</Link>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  timely: React.PropTypes.object,
  lastRead: React.PropTypes.object,
  time: React.PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    ...state.dashboard
  };
};

export default connect(mapStateToProps)(Dashboard);
