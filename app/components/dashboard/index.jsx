import React from 'react';
import { connect } from 'react-redux';

import BarGraph from 'components/shared/bar-graph';
import Clock from 'components/shared/clock';
import DisplayList from 'components/shared/displayList';
import Statistic from 'components/shared/statistic';

import layout from 'theme/layout';

const Dashboard = ({ timely, time, openPositions, applicants }) => {
  console.log('Dashboard props', applicants);

  return (
    <div>
      <div className={layout.paper}>
        { <BarGraph data={timely && timely} />}
      </div>
      <div className={layout.paper}>
        <Clock
          day={time && time.cur_day}
          month={time && time.cur_month}
          year={time && time.cur_year}
          weekday={time && time.cur_weekday}
          time={time && time.cur_time}
        />
      </div>
      <div className={layout.paper}>
        <h3>Open Positions</h3>
        <DisplayList data={Array.from(openPositions)} />
      </div>
      <div className={layout.paper}>
        <h3>Applicants</h3>
        <Statistic label='' unit='' value={applicants.count} />
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  timely: React.PropTypes.object,
  time: React.PropTypes.object,
  openPositions: React.PropTypes.object,
  time: React.PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    ...state.dashboard
  };
};

export default connect(mapStateToProps)(Dashboard);
