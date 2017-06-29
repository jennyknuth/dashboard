import React from 'react';

const Clock = ({day, month, year, weekday, time}) => {
  console.log('Clock', day, month, year, weekday, time);

  return (
    <div>
        <div>
          {day}
        </div>
        <div>
          {month} {year}
        </div>
        <div>
          {weekday}
        </div>
        <div>
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
