import React from 'react';
import classNames from 'classnames';

import today from 'theme/today.scss';

const TodayCard = ({ title, posts }) => {
  // const clockClasses = classNames(
  //   'fa fa-clock-o',
  //   clock.icon
  // );
  const icon = {
    birthdays: 'birthday',
    reminders: 'reminder',
    updates: 'update',
  };

  const iconClass = icon[title];

  const iconClasses = classNames(
    today.icon,
    today[iconClass],
  );

  return (
    <div className={today.card}>
      <div className={iconClasses} />
      <div className={today.title}>title</div>
      { posts && posts.map(blurb => (<div className={today.blurb}>blurb</div>)) }
    </div>
  );
};

TodayCard.propTypes = {
  icon: React.PropTypes.string,
  title: React.PropTypes.string,
  blurb: React.PropTypes.string,
};

export default TodayCard;
