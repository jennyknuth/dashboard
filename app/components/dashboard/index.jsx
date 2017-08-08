import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import BarGraph from 'components/shared/bar-graph';
import Clock from 'components/shared/clock';
import DisplayList from 'components/shared/display-list';
import Statistic from 'components/shared/statistic';

import layout from 'theme/layout';

const Dashboard = (props) => {
  const barGraphClasses = (size) => classNames(
    layout.paper,
    size === 'big' ? layout.bigBarGraph : layout.barGraph,
  );

  return (
    <div className={layout.artboard}>
      <div className={barGraphClasses()}>
        <h2>Q3</h2>
        <h3>Hours Worked</h3>
        { <BarGraph data={props.timely_hours_ordinal && props.timely_hours_ordinal} />}
      </div>
      <div className={layout.paper}>
        <h2>Cups of Coffee</h2>
        <h3>Made Today</h3>
        <Statistic value={props.kitchen_coffee_count.coffee_count} />
      </div>
      <div className={layout.paper}>
        <h2>Kitchen Live Stream</h2>
        <img src="http://65.112.205.134:8282/stream/video.mjpeg" width="350" height="275" />
      </div>
      <div className={layout.paper}>
        <Clock
          day={props.time && props.time.day}
          month={props.time && props.time.month}
          year={props.time && props.time.year}
          weekday={props.time && props.time.weekday}
          time={props.time && props.time.currentTime}
        />
      </div>
      <div className={layout.paper}>
        <h2>Employees</h2>
        <Statistic value={props.slack_employees_count.employees} />
      </div>
      <div className={layout.paper}>
        <h2>Open Positions</h2>
        <DisplayList data={Array.from(props.jazz_jobs_list)} />
      </div>
      <div className={layout.paper}>
        <h2>Applicants</h2>
        <Statistic label='' unit='' value={props.jazz_applicants_count.applicants} />
      </div>
      <div className={layout.paper}>
        <h2>Active Users</h2>
        <h3>Designer</h3>
        <Statistic value={props.auth0_active_users_count.count} />
      </div>
      <div className={layout.paper}>
        <h2>Total Users</h2>
        <h3>Designer</h3>
        <Statistic value={props.auth0_total_user_count.count} />
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  opsTimely: React.PropTypes.array,
  time: React.PropTypes.object,
  openPositions: React.PropTypes.array,
  applicants: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object]),
  employeeCount: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  coffeeCount: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
};

const mapStateToProps = (state) => {
  return {
    ...state.dashboard
  };
};

export default connect(mapStateToProps)(Dashboard);
