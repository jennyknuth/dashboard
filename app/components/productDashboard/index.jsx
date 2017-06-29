import React from 'react';
import { connect } from 'react-redux';

import BarGraph from 'components/shared/bar-graph';
import TrafficLight from 'components/shared/traffic-light.jsx';

import layout from 'theme/layout.scss';

const ProductDashboard = (props) => {
  console.log('ProductDashboard', props);

  return (
    <div>
      <div className={layout.paper}>
        <h3>API</h3>
        <TrafficLight
          total={props.apiTotal}
          redValue={props.api['To Do ']}
          yellowValue={props.api['In Progress']}
          greenValue={props.api.Done}
        />
      </div>
      <div className={layout.paper}>
        <h3>Designer</h3>
        <TrafficLight
          total={props.designerTotal}
          redValue={props.designer['To Do']}
          yellowValue={props.designer['In Progress']}
          greenValue={props.designer.Done}
        />
      </div>
      <div className={layout.paper}>
        <h3>Pubkeeper</h3>
        <TrafficLight
          total={props.pubkeeperTotal}
          redValue={props.pubkeeper['To Do ']}
          yellowValue={props.pubkeeper['In Progress']}
          greenValue={props.pubkeeper.Done}
        />
      </div>
      <div className={layout.paper}>
        <h3>Hours Worked</h3>
        <BarGraph data={props.timely && props.timely} />
      </div>
    </div>
  );
};

ProductDashboard.propTypes = {
  timely: React.PropTypes.object,
  time: React.PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    ...state.product
  };
};

export default connect(mapStateToProps)(ProductDashboard);
