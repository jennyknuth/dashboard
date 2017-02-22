import React from 'react';
import WeatherIcons from 'react-weathericons';

import weather from 'theme/weather.scss';


const WeatherTopForecast = () => {
  return (

    <div className={weather.forecast}>
      <h3>10 Day Forecast</h3>
      <div className={weather.tenDay}>
        <ul>
          <li className={weather.dayWarm}>
            <WeatherIcons className={weather.dayCool} name="cloudy-windy" size="5x" />
            <h4>MON</h4>
            <h5>54º / 45º</h5>
          </li>
          <li>
            <WeatherIcons className={weather.dayCool} name="day-rain" size="5x" />
            <h4>TUE</h4>
            <h5>65º / 60º</h5>
          </li>
          <li >
            <WeatherIcons className={weather.dayWarm} name="day-sunny" size="5x" />
            <h4>WED</h4>
            <h5>80º / 70º</h5>
          </li>
          <li>
            <WeatherIcons className={weather.dayCold} name="snowflake-cold" size="5x" />
            <h4>THUR</h4>
            <h5>40º / 35º</h5>
          </li>
          <li>
            <WeatherIcons className={weather.dayWarm} name="day-sunny" size="5x" />
            <h4>FRI</h4>
            <h5>80º / 70º</h5>
          </li>
          <li className={weather.dayWarm}>
            <WeatherIcons className={weather.dayHot} name="hot" size="5x" />
            <h4>MON</h4>
            <h5>54º / 45º</h5>
          </li>
          <li>
            <WeatherIcons className={weather.dayCool} name="day-rain" size="5x" />
            <h4>TUE</h4>
            <h5>65º / 60º</h5>
          </li>
          <li >
            <WeatherIcons className={weather.dayWarm} name="day-sunny" size="5x" />
            <h4>WED</h4>
            <h5>80º / 70º</h5>
          </li>
          <li>
            <WeatherIcons className={weather.dayCold} name="snowflake-cold" size="5x" />
            <h4>THUR</h4>
            <h5>40º / 35º</h5>
          </li>
          <li>
            <WeatherIcons className={weather.dayWarm} name="day-sunny" size="5x" />
            <h4>FRI</h4>
            <h5>80º / 70º</h5>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherTopForecast;
