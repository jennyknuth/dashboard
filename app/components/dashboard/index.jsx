import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import BarGraph from 'components/shared/bar-graph';
import TimeSeriesGraph from 'components/shared/area-graph';
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
      <div className={layout.paper}>
        <h2>Employees</h2>
        <Statistic value={props.slack_employees_count.employees} />
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
        <h2>Open Positions</h2>
        <DisplayList data={Array.from(props.jazz_jobs_list)} />
      </div>
      <div className={layout.paper}>
        <h2>Applicants</h2>
        <Statistic label='' unit='' value={props.jazz_applicants_count.applicants} />
      </div>
      <div className={barGraphClasses()}>
        <h2>Number of Employees</h2>
        { <TimeSeriesGraph vals={props.timely_employees_continuous && props.timely_employees_continuous} />}
      </div>
      <div className={barGraphClasses('big')}>
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
