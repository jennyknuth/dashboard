import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Clock from 'components/shared/clock';
import BarGraph from 'components/shared/bar-graph';
import TrafficLight from 'components/shared/traffic-light.jsx';
import EmbedScreen from 'components/shared/embed.jsx';

import layout from 'theme/layout.scss';

const AgricultureDashboard = (props) => {
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
        <h2>JIRA breakdown</h2>
        <h3>DVP</h3>
        <TrafficLight
          total={props.jira_dvp_progress.dvpTotal}
          redValue={props.jira_dvp_progress.dvp.red_value}
          redLabel={props.jira_dvp_progress.dvp.red_label}
          yellowValue={props.jira_dvp_progress.dvp.yellow_value}
          yellowLabel={props.jira_dvp_progress.dvp.yellow_label}
          greenValue={props.jira_dvp_progress.dvp.green_value}
          greenLabel={props.jira_dvp_progress.dvp.green_label}
        />
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
        <EmbedScreen
          url='https://n.io'
        />
      </div>
      <div className={barGraphClasses}>
        <h2>{`Q${props.quarter}`}</h2>
        <h3>Hours Worked</h3>
        <div>
          <BarGraph data={props.timely_hours_ordinal && props.timely_hours_ordinal} />
        </div>
      </div>
    </div>
  );
};

AgricultureDashboard.propTypes = {
  timely_hours_ordinal: React.PropTypes.array,
  jira_dvp_progress: React.PropTypes.object,
  time: React.PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    ...state.agriculture
  };
};

export default connect(mapStateToProps)(AgricultureDashboard);
