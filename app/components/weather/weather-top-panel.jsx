import React from 'react';
import WeatherIcons from 'react-weathericons';
import WeatherBottomForecast from './weather-bottom-forecast';
import convertIcon from './weather-icon-converter';

// import wrapper from 'theme/wrapper.scss';
import weather from 'theme/weather.scss';

const WeatherTop = ({ current, forecast }) => {
  return (
    <div >
      <div >
        <div className={weather.warm}>
          <div className={weather.left}>
            <h2>{current.temp}°</h2>
            <WeatherIcons name={convertIcon[current.icon]} size="5x" />
            <div className={weather.feelslike}>
              <h3>Feels Like {current.feels_like}°</h3>
              <h3>Wind {current.wind_dir} {current.wind_mph}mph</h3>
            </div>
          </div>
          <div className={weather.right}>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <h4>{current.location}</h4>
          </div>
        </div>

        <WeatherBottomForecast forecastDays={forecast}/>
      </div>
    </div>
  );
};

export default WeatherTop;
