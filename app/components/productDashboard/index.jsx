import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Clock from 'components/shared/clock';
import BarGraph from 'components/shared/bar-graph';
import TrafficLight from 'components/shared/traffic-light.jsx';
import Statistic from 'components/shared/statistic';

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
        <h2>JIRA Breakdown</h2>
        <h3>Blocks</h3>
        <TrafficLight
          total={props.jira_blk_progress.blkTotal}
          redValue={props.jira_blk_progress.blk.red_value}
          redLabel={props.jira_blk_progress.blk.red_label}
          yellowValue={props.jira_blk_progress.blk.yellow_value}
          yellowLabel={props.jira_blk_progress.blk.yellow_label}
          greenValue={props.jira_blk_progress.blk.green_value}
          greenLabel={props.jira_blk_progress.blk.green_label}
        />
      </div>
      <div className={TrafficLightClasses}>
        <h2>JIRA Breakdown</h2>
        <h3>Customer Engagement</h3>
        <TrafficLight
          total={props.jira_ce_progress.ceTotal}
          redValue={props.jira_ce_progress.ce.red_value}
          redLabel={props.jira_ce_progress.ce.red_label}
          yellowValue={props.jira_ce_progress.ce.yellow_value}
          yellowLabel={props.jira_ce_progress.ce.yellow_label}
          greenValue={props.jira_ce_progress.ce.green_value}
          greenLabel={props.jira_ce_progress.ce.green_label}
        />
      </div>
      <div className={TrafficLightClasses}>
        <h2>JIRA Breakdown</h2>
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
        <h2>JIRA Breakdown</h2>
        <h3>DevOps</h3>
        <TrafficLight
          total={props.jira_devops_progress.devopsTotal}
          redValue={props.jira_devops_progress.devops.red_value}
          redLabel={props.jira_devops_progress.devops.red_label}
          yellowValue={props.jira_devops_progress.devops.yellow_value}
          yellowLabel={props.jira_devops_progress.devops.yellow_label}
          greenValue={props.jira_devops_progress.devops.green_value}
          greenLabel={props.jira_devops_progress.devops.green_label}
        />
      </div>
      <div className={TrafficLightClasses}>
        <h2>JIRA Breakdown</h2>
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
      <div className={layout.paper}>
        <h2>Sprint</h2>
        <h3>Days Left</h3>
        <Statistic value={props.jira_sprint_days_count.days_left} />
      </div>
      <div className={TrafficLightClasses}>
        <h2>JIRA Breakdown</h2>
        <h3>niolabs Site</h3>
        <TrafficLight
          total={props.jira_nl_progress.nlTotal}
          redValue={props.jira_nl_progress.nl.red_value}
          redLabel={props.jira_nl_progress.nl.red_label}
          yellowValue={props.jira_nl_progress.nl.yellow_value}
          yellowLabel={props.jira_nl_progress.nl.yellow_label}
          greenValue={props.jira_nl_progress.nl.green_value}
          greenLabel={props.jira_nl_progress.nl.green_label}
        />
      </div>
      <div className={TrafficLightClasses}>
        <h2>JIRA Breakdown</h2>
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

ProductDashboard.propTypes = {
  timely_hours_ordinal: React.PropTypes.array,
  jira_pubkeeper_progress: React.PropTypes.object,
  jira_designer_progress: React.PropTypes.object,
  jira_api_progress: React.PropTypes.object,
  jira_ce_progress: React.PropTypes.object,
  jira_devops_progress: React.PropTypes.object,
  jira_nl_progress: React.PropTypes.object,
  time: React.PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    ...state.product
  };
};

export default connect(mapStateToProps)(ProductDashboard);
