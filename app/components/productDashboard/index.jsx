import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

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
        <h2>JIRA epic</h2>
        <h3>API</h3>
        <TrafficLight
          total={props.apiTotal}
          redValue={props.api['To Do ']}
          yellowValue={props.api['In Progress']}
          greenValue={props.api.Done}
        />
      </div>
      <div className={TrafficLightClasses}>
        <h2>JIRA epic</h2>
        <h3>Designer</h3>
        <TrafficLight
          total={props.designerTotal}
          redValue={props.designer['To Do']}
          yellowValue={props.designer['In Progress']}
          greenValue={props.designer.Done}
        />
      </div>
      <div className={TrafficLightClasses}>
        <h2>JIRA epic</h2>
        <h3>Pubkeeper</h3>
        <TrafficLight
          total={props.pubkeeperTotal}
          redValue={props.pubkeeper['To Do ']}
          yellowValue={props.pubkeeper['In Progress']}
          greenValue={props.pubkeeper.Done}
        />
      </div>
      <div className={barGraphClasses}>
        <h2>Q2</h2>
        <h3>Hours Worked</h3>
        <BarGraph data={props.productTimely && props.productTimely} />
      </div>
    </div>
  );
};

ProductDashboard.propTypes = {
  productTimely: React.PropTypes.array,
  time: React.PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    ...state.product
  };
};

export default connect(mapStateToProps)(ProductDashboard);
