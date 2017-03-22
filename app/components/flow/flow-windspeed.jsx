import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import flow from 'theme/flow.scss';

const FlowWindSpeed = (props) => {
  const getWindClasses = height => classNames(
    flow.wave,
    props.flow < 2 && flow[height]
  );

  return (
    <div className={flow.speed}>
      <div className={flow.fanWindSpeed}>
        <svg className={getWindClasses('thirty')} xmlns="http://www.w3.org/2000/svg" width="300" height="60" viewBox="0 0 300 60">
          <path strokeWidth="18" fill="none"
            d="M0,40
            c30,0 45,-20 75,-20
            c30,0  45,20  75,20
            c30,0 45,-20 75,-20
            c30,0  45,20  75,20"
          />
        </svg>
        <svg className={getWindClasses('fifty')} xmlns="http://www.w3.org/2000/svg" width="300" height="60" viewBox="0 0 300 60">
          <path strokeWidth="18" fill="none"
            d="M0,40
            c30,0 45,-20 75,-20
            c30,0  45,20  75,20
            c30,0 45,-20 75,-20
            c30,0  45,20  75,20"
          />
        </svg>
        <svg className={getWindClasses('seventy')} xmlns="http://www.w3.org/2000/svg" width="300" height="60" viewBox="0 0 300 60">
          <path strokeWidth="18" fill="none"
            d="M0,40
            c30,0 45,-20 75,-20
            c30,0  45,20  75,20
            c30,0 45,-20 75,-20
            c30,0  45,20  75,20"
          />
        </svg>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.flow
  };
};

export default connect(mapStateToProps)(FlowWindSpeed);
