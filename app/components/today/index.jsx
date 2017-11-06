import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import today from 'theme/today.scss';

const Today = (props) => {
  const date = moment().format('LL');
  console.log(props);

  return (
    <div className={today.today}>
      {date}
    </div>
  );
};

Today.propTypes = {
  question: React.PropTypes.object,
  answer: React.PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    ...state.today
  };
};

export default connect(mapStateToProps)(Today);
