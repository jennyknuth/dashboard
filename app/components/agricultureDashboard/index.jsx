import React from 'react';
import { connect } from 'react-redux';

import BarGraph from 'components/shared/bar-graph';
import TrafficLight from 'components/shared/traffic-light.jsx';

import layout from 'theme/layout.scss';

const AgricultureDashboard = (props) => {
  console.log('AgricultureDashboard', props);

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
      <div className={layout.paper}>
        <h3>Hours Worked</h3>
        <BarGraph data={props.timely && props.timely} />
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
