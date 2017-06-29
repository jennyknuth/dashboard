import React from 'react';
import { connect } from 'react-redux';

import BarGraph from 'components/shared/bar-graph';
import TrafficLight from 'components/shared/traffic-light.jsx';
import Statistic from 'components/shared/statistic.jsx';

import layout from 'theme/layout.scss';

const IndustrialDashboard = (props) => {
  console.log('IndustrialDashboard', props);

  return (
    <div className={layout.artboard}>
      <div className={layout.paper}>
        <h3>DGS</h3>
        <TrafficLight
          total={props.dgsTotal}
          redValue={props.dgs['To Do ']}
          yellowValue={props.dgs['In Progress']}
          greenValue={props.dgs.Done}
        />
      </div>
      <div className={layout.paper}>
        <h3>Hours Worked</h3>
        <BarGraph data={props.timely && props.timely} />
      </div>
      <div className={layout.paper}>
        <h3>Zen Desk</h3>
        <h4>average reply time</h4>
        <Statistic value={props.zenReply && props.zenReply.toString()} />
      </div>
    </div>
  );
};

IndustrialDashboard.propTypes = {
  timely: React.PropTypes.object,
  time: React.PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    ...state.industrial
  };
};

export default connect(mapStateToProps)(IndustrialDashboard);
