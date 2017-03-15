import React from 'react';
import WeatherIcons from 'react-weathericons';
import convertIcon from './weather-icon-converter';

import weather from 'theme/weather.scss';

const ForecastDay = (props) => {
  const iconClass = props.icon === 'clear' || 'sunny' ? 'clear' : 'gray';
  return (
    <div className={weather.forecastTile}>
      <WeatherIcons className={weather[iconClass]} name={convertIcon[props.icon]} size="2x" />
      <h2 className={weather.day}>{props.date}</h2>
      <div className={weather.highLow}>{props.high}° / {props.low}°</div>
    </div>
  );
};

const WeatherForecast = ({forecastDays}) => {
  const forecast = forecastDays.map((day, i) =>
    (<ForecastDay {...day} key={i} />)
  );

  return (
    <div className={weather.forecastSection}>
      <h2 className={weather.forecastHeader}>10 Day Forecast</h2>
      <div className={weather.forecast}>
        {forecast}
      </div>
    </div>
  );
};

export default WeatherForecast;
