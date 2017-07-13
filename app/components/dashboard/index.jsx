import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import BarGraph from 'components/shared/bar-graph';
import Clock from 'components/shared/clock';
import DisplayList from 'components/shared/display-list';
import Statistic from 'components/shared/statistic';

import layout from 'theme/layout';

const Dashboard = (props) => {
  const barGraphClasses = classNames(
    layout.paper,
    layout.bigBarGraph,
  );

  return (
    <div className={layout.artboard}>
      <div className={layout.paper}>
        <h2>Employees</h2>
        <Statistic value={props.slack_employees_count.employees} />
      </div>
      <div className={layout.paper}>
        <Clock
          day={props.time && props.time.cur_day}
          month={props.time && props.time.cur_month}
          year={props.time && props.time.cur_year}
          weekday={props.time && props.time.cur_weekday}
          time={props.time && props.time.cur_time}
        />
      </div>
      <div className={layout.paper}>
        <h2>Open Positions</h2>
        <DisplayList data={Array.from(props.jazz_jobs_list)} />
      </div>
      <div className={layout.paper}>
        <h2>Applicants</h2>
        <Statistic label='' unit='' value={props.jazz_applicants_count.applicants} />
      </div>
      <div className={barGraphClasses}>
        <h2>Q3</h2>
        <h3>Hours Worked</h3>
        { <BarGraph data={props.timely_hours_ordinal && props.timely_hours_ordinal} />}
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
};

const mapStateToProps = (state) => {
  return {
    ...state.dashboard
  };
};

export default connect(mapStateToProps)(Dashboard);
