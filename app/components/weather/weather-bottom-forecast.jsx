import React from 'react';
import WeatherIcons from 'react-weathericons';
import convertIcon from './weather-icon-converter';

import weather from 'theme/weather.scss';

const ForecastDay = (props) => {
  return (
    <li>
      <WeatherIcons name={convertIcon[props.icon]} size="5x" />
      <h4>{props.date}</h4>
      <h5>{props.high}° / {props.low}°</h5>
    </li>
  );
};

const WeatherBottomForecast = (props) => {
  console.log(props);
  return (
    <div className={weather.forecast}>
      <h2>10 Day Forecast</h2>
      <ul>
        {props.forecastDays.map((forecastDay, idx) => (
          <ForecastDay {...forecastDay} key={idx} />
        ))}
      </ul>
    </div>
  );
};

export default WeatherBottomForecast;
