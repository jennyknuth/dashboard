import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import BarGraph from 'components/shared/bar-graph';
import Clock from 'components/shared/clock';
import TrafficLight from 'components/shared/traffic-light.jsx';
import Statistic from 'components/shared/statistic.jsx';

import layout from 'theme/layout.scss';

const IndustrialDashboard = (props) => {
  const barGraphClasses = classNames(
    layout.paper,
    layout.barGraph,
  );

  const TrafficLightClasses = classNames(
    layout.paper,
    layout.trafficLight,
  );

  return (
    <div className={layout.artboard}>
      <div className={TrafficLightClasses}>
        <h2>JIRA Breakdown</h2>
        <h3>AZZ</h3>
        <TrafficLight
          total={props.jira_dgs_progress.dgsTotal}
          redValue={props.jira_dgs_progress.dgs.red_value}
          redLabel={props.jira_dgs_progress.dgs.red_label}
          yellowValue={props.jira_dgs_progress.dgs.yellow_value}
          yellowLabel={props.jira_dgs_progress.dgs.yellow_label}
          greenValue={props.jira_dgs_progress.dgs.green_value}
          greenLabel={props.jira_dgs_progress.dgs.green_label}
        />
      </div>
      <div className={layout.paper}>
        <h2>JIRA</h2>
        <h4>Critical Tickets</h4>
        <Statistic value={props.jira_dgs_priority_progress.dgs && props.jira_dgs_priority_progress.dgs.red_value} />
      </div>
      <div className={TrafficLightClasses}>
        <h2>JIRA Ticket</h2>
        <h3>Priority Level</h3>
        <TrafficLight
          total={props.jira_dgs_priority_progress && props.jira_dgs_priority_progress.dgsTotal}
          redValue={props.jira_dgs_priority_progress.dgs && props.jira_dgs_priority_progress.dgs.red_value}
          redLabel={props.jira_dgs_priority_progress.dgs && props.jira_dgs_priority_progress.dgs.red_label}
          yellowValue={props.jira_dgs_priority_progress.dgs && props.jira_dgs_priority_progress.dgs.yellow_value}
          yellowLabel={props.jira_dgs_priority_progress.dgs && props.jira_dgs_priority_progress.dgs.yellow_label}
          greenValue={props.jira_dgs_priority_progress.dgs && props.jira_dgs_priority_progress.dgs.green_value}
          greenLabel={props.jira_dgs_priority_progress.dgs && props.jira_dgs_priority_progress.dgs.green_label}
        />
      </div>
      <div className={layout.paper}>
        <h2>Zendesk</h2>
        <h4>Average Response Time</h4>
        <Statistic value={props.zendesk_response_time && props.zendesk_response_time.toString()} />
      </div>
      <div className={layout.paper}>
        <h2>Zendesk</h2>
        <h4>Ticket Count</h4>
        <Statistic value={props.zendesk_tickets_count && props.zendesk_tickets_count.tickets} />
      </div>
      <div className={barGraphClasses}>
        <h2>Q{props.quarter}</h2>
        <h3>Hours Worked</h3>
        <BarGraph data={props.timely_hours_ordinal && props.timely_hours_ordinal} />
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
    </div>
  );
};

IndustrialDashboard.propTypes = {
  timely_hours_ordinal: React.PropTypes.array,
  zendesk_response_time: React.PropTypes.string,
  zendesk_tickets_count: React.PropTypes.object,
  jira_dgs_progress: React.PropTypes.object,
  jira_dgs_priority_progress: React.PropTypes.object,
  jira_dgs_critical_count: React.PropTypes.object,
  time: React.PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    ...state.industrial
  };
};

export default connect(mapStateToProps)(IndustrialDashboard);
