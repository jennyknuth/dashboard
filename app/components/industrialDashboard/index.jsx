import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import BarGraph from 'components/shared/bar-graph';
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
        <h2>JIRA breakdown</h2>
        <h3>DGS</h3>
        <TrafficLight
          total={props.dgsTotal}
          redValue={props.dgs['To Do ']}
          yellowValue={props.dgs['In Progress']}
          greenValue={props.dgs.Done}
        />
      </div>
      <div className={barGraphClasses}>
        <h2>Q2</h2>
        <h3>Hours Worked</h3>
        <BarGraph data={props.industrialTimely && props.industrialTimely} />
      </div>
      <div className={layout.paper}>
        <h2>Zendesk</h2>
        <h4>Average Response Time</h4>
        <Statistic value={props.zenReply && props.zenReply.toString()} />
      </div>
    </div>
  );
};

IndustrialDashboard.propTypes = {
  industrialTimely: React.PropTypes.array,
  time: React.PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    ...state.industrial
  };
};

export default connect(mapStateToProps)(IndustrialDashboard);
