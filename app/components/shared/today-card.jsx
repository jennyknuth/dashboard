import React from 'react';
import classNames from 'classnames';

import today from 'theme/today.scss';

const TodayCard = ({ title, posts }) => {
  console.log('card posts', posts);

  const iconClasses = classNames(
    today.icon,
    today[title],
  );

  return (
    <div className={today.card}>
      <div className={iconClasses} />
      <div className={today.title}>{title}</div>
      { posts && posts.map(blurb => (<div className={today.blurb}>blurb</div>)) }
      Ben Schnelle
    </div>
  );
};

TodayCard.propTypes = {
  icon: React.PropTypes.string,
  title: React.PropTypes.string,
  blurb: React.PropTypes.string,
};

export default TodayCard;
