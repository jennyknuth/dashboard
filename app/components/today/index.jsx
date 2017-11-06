import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import TodayCard from 'components/shared/today-card';

import today from 'theme/today.scss';

const Today = (props) => {
  const date = moment().format('LL');
  const cards = ['birthdays', 'reminders', 'updates'];
  console.log('today props', props);

  return (
    <div className={today.today}>
      {date}
      <div className={today.cards}>
        { cards.map(card => (<TodayCard key={`card-${card}`} title={card} posts={props[card]} />)) }
      </div>
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
