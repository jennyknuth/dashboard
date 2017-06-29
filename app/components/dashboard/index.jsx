import React from 'react';
import { connect } from 'react-redux';

import BarGraph from 'components/shared/bar-graph';
import Clock from 'components/shared/clock';

import layout from 'theme/layout';

const Dashboard = ({ timely, time }) => {
  console.log('Dashboard props', timely, time);

  return (
    <div>
      <div className={layout.paper}>
        { <BarGraph data={timely && timely} />}
      </div>
      <div className={layout.paper}>
        <Clock
          day={time.cur_day}
          month={time.cur_month}
          year={time.cur_year}
          weekday={time.cur_weekday}
          time={time.cur_time}
        />
      </div>
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
