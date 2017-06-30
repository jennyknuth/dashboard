import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import BarGraph from 'components/shared/bar-graph';
import TrafficLight from 'components/shared/traffic-light.jsx';

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
          total={props.dvpTotal}
          redValue={props.dvp['To Do ']}
          yellowValue={props.dvp['In Progress']}
          greenValue={props.dvp.Done}
        />
      </div>
      <div className={barGraphClasses}>
        <h2>Q2</h2>
        <h3>Hours Worked</h3>
        <div>
          <BarGraph data={props.agTimely && props.agTimely} />
        </div>
      </div>
    </div>
  );
};

AgricultureDashboard.propTypes = {
  agTimely: React.PropTypes.array,
  time: React.PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    ...state.agriculture
  };
};

export default connect(mapStateToProps)(AgricultureDashboard);
