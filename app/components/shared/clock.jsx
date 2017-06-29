import React from 'react';
import classNames from 'classnames';

import clock from 'theme/clock.scss';

const Clock = ({day, month, year, weekday, time}) => {
  console.log('Clock', day, month, year, weekday, time);
  const clockClasses = classNames(
    'fa fa-clock-o',
    clock.icon
  )

  return (
    <div>
      <div className={clock.date}>
        <div className={clock.dayNumber}>
          {day}
        </div>
        <div className={clock.dateColumn}>
          <div className={clock.monthYear}>
            {month} {year}
          </div>
          <div className={clock.weekday}>
            {weekday}
          </div>
        </div>

      </div>
        <div className={clock.time}>
          <i className={clockClasses}/>
          {time}
        </div>
      </div>
  );
};

Clock.propTypes = {
  day: React.PropTypes.number,
  month: React.PropTypes.number,
  year: React.PropTypes.number,
  weekday: React.PropTypes.number,
  time: React.PropTypes.number,
};

export default Clock;
