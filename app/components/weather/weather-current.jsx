import React from 'react';
import WeatherIcons from 'react-weathericons';
import classNames from 'classnames';

import convertIcon from './weather-icon-converter';

import weather from 'theme/weather.scss';

const WeatherTop = ({ current }) => {
  const relativeTemp = (current.temp < 32 ? 'cold' : current.temp < 60 ? 'cool' : current.temp < 80 ? 'warm' : 'hot');

  const summaryClasses = classNames(
    weather.summary,
    weather[relativeTemp]
  );

  const detailClasses = classNames(
    weather.detail,
    weather.buttonLook
  );

  const locationClasses = classNames(
    weather.location,
    weather[relativeTemp]
  );

  return (
    <div className={weather.weatherHeader}>
      <div className={summaryClasses}>
        <div className={weather.details}>
          <div className={weather.temp}>{current.temp}°</div>
          <WeatherIcons name={convertIcon[current.icon]} size="5x" />
        </div>
        <div className={weather.details}>
          <div className={detailClasses}>Feels Like {current.feels_like}°</div>
          <div className={detailClasses}>Wind {current.wind_dir} {current.wind_mph}mph</div>
        </div>
      </div>
      <div className={locationClasses}>
        <i className="fa fa-map-marker" aria-hidden="true"></i>
        <div>{current.location}</div>
      </div>
    </div>
  );
};

export default WeatherTop;
