import React from 'react';
import classNames from 'classnames';

import today from 'theme/today.scss';

const TodayCard = ({ title, posts }) => {

  const iconClasses = classNames(
    today.icon,
    today[title],
  );

  return (
    <div className={today.card}>
      <div className={iconClasses} />
      <div className={today.title}>{title}</div>
      { posts && posts.map((blurb, index) => (<div key={`${title}-${index}`} className={today.blurb}>{blurb}</div>)) }
    </div>
  );
};

TodayCard.propTypes = {
  icon: React.PropTypes.string,
  title: React.PropTypes.string,
  blurb: React.PropTypes.string,
};

export default TodayCard;
