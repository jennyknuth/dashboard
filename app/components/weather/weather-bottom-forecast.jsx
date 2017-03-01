import React from 'react';
import WeatherIcons from 'react-weathericons';

import weather from 'theme/weather.scss';

const ForecastDay = (props) => {
  return (
    <li>
      <WeatherIcons name={props.icon} size="5x" />
      <h4>{props.day}</h4>
      <h5>{props.highTemp} / {props.lowTemp}</h5>
    </li>
  )
}
const WeatherBottomForecast = (props) => {
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
