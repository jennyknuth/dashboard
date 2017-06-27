import React from 'react';
import { connect } from 'react-redux';

import BarGraph from 'components/shared/bar-graph';

import lab from 'theme/lab.scss';

const Dashboard = ({ timely, time }) => {
  console.log('Dashboard', timely, time);

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
    <div className={lab.labData}>
      { <BarGraph data={staticData['n.io']} />}
    </div>
  );
};

Dashboard.propTypes = {
  timely: React.PropTypes.object,
  time: React.PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    ...state.dashboard
  };
};

export default connect(mapStateToProps)(Dashboard);
