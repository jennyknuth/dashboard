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

  return (
    <div className={layout.artboard}>
      <div className={layout.paper}>
        <h3>DVP</h3>
        <TrafficLight
          total={props.dvpTotal}
          redValue={props.dvp['To Do ']}
          yellowValue={props.dvp['In Progress']}
          greenValue={props.dvp.Done}
        />
      </div>
      <div className={barGraphClasses}>
        <h3>Hours Worked</h3>
        <div>
          <BarGraph data={props.timely && props.timely} />
        </div>
      </div>
    </div>
  );
};

AgricultureDashboard.propTypes = {
  timely: React.PropTypes.object,
  time: React.PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    ...state.agriculture
  };
};

export default connect(mapStateToProps)(AgricultureDashboard);
