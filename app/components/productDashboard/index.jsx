import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Clock from 'components/shared/clock';
import BarGraph from 'components/shared/bar-graph';
import TrafficLight from 'components/shared/traffic-light.jsx';

import layout from 'theme/layout.scss';

const ProductDashboard = (props) => {
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
        <h3>API</h3>
        <TrafficLight
          total={props.jira_api_progress.apiTotal}
          redValue={props.jira_api_progress.api.red_value}
          redLabel={props.jira_api_progress.api.red_label}
          yellowValue={props.jira_api_progress.api.yellow_value}
          yellowLabel={props.jira_api_progress.api.yellow_label}
          greenValue={props.jira_api_progress.api.green_value}
          greenLabel={props.jira_api_progress.api.green_label}
        />
      </div>
      <div className={TrafficLightClasses}>
        <h2>JIRA breakdown</h2>
        <h3>Designer</h3>
        <TrafficLight
          total={props.jira_designer_progress.designerTotal}
          redValue={props.jira_designer_progress.designer.red_value}
          redLabel={props.jira_designer_progress.designer.red_label}
          yellowValue={props.jira_designer_progress.designer.yellow_value}
          yellowLabel={props.jira_designer_progress.designer.yellow_label}
          greenValue={props.jira_designer_progress.designer.green_value}
          greenLabel={props.jira_designer_progress.designer.green_label}
        />
      </div>
      <div className={TrafficLightClasses}>
        <h2>JIRA breakdown</h2>
        <h3>Pubkeeper</h3>
        <TrafficLight
          total={props.jira_pubkeeper_progress.pubkeeperTotal}
          redValue={props.jira_pubkeeper_progress.pubkeeper.red_value}
          redLabel={props.jira_pubkeeper_progress.pubkeeper.red_label}
          yellowValue={props.jira_pubkeeper_progress.pubkeeper.yellow_value}
          yellowLabel={props.jira_pubkeeper_progress.pubkeeper.yellow_label}
          greenValue={props.jira_pubkeeper_progress.pubkeeper.green_value}
          greenLabel={props.jira_pubkeeper_progress.pubkeeper.green_label}
        />
      </div>
      <div className={barGraphClasses}>
        <h2>{`Q${props.quarter}`}</h2>
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

ProductDashboard.propTypes = {
  timely_hours_ordinal: React.PropTypes.array,
  jira_pubkeeper_progress: React.PropTypes.object,
  jira_designer_progress: React.PropTypes.object,
  jira_api_progress: React.PropTypes.object,
  time: React.PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    ...state.product
  };
};

export default connect(mapStateToProps)(ProductDashboard);
