import React from 'react';
import WeatherIcons from 'react-weathericons';
import WeatherBottomForecast from './weather-bottom-forecast';

import weather from 'theme/weather.scss';
import socketRoom from 'theme/socket-room.scss';


const WeatherTop = () => {
  const sampleForecastData = [
    {
      icon: 'cloud',
      day: 'MON',
      highTemp: 50,
      lowTemp: 40,
    },
    {
      icon: 'rain',
      day: 'TUE',
      highTemp: 20,
      lowTemp: 10,
    },
    {
      icon: 'cloudy',
      day: 'WED',
      highTemp: 50,
      lowTemp: 40,
    },
    {
      icon: 'rain-wind',
      day: 'THU',
      highTemp: 20,
      lowTemp: 10,
    },
    {
      icon: 'thunderstorm',
      day: 'FRI',
      highTemp: 50,
      lowTemp: 40,
    },
    {
      icon: 'cloud',
      day: 'SAT',
      highTemp: 50,
      lowTemp: 40,
    },
    {
      icon: 'rain',
      day: 'SUN',
      highTemp: 20,
      lowTemp: 10,
    },
    {
      icon: 'cloudy',
      day: 'MON',
      highTemp: 50,
      lowTemp: 40,
    },
    {
      icon: 'rain-wind',
      day: 'TUE',
      highTemp: 20,
      lowTemp: 10,
    },
    {
      icon: 'thunderstorm',
      day: 'WED',
      highTemp: 50,
      lowTemp: 40,
    },
  ];
  return (

    <div className={weather.wrapper}>
      <div className={weather.container}>
        <div className={weather.warm}>
          <div className={weather.left}>
            <h2>75°</h2>
            <WeatherIcons name="cloud" size="5x" />
            <div className={weather.feelslike}>
              <h3>Feels Like 80°</h3>
              <h3>Wind N 8mph</h3>
            </div>
          </div>
          <div className={weather.right}>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <h4>San Francisco, CA</h4>
          </div>
        </div>

        <WeatherBottomForecast forecastDays={sampleForecastData}/>
      </div>
    </div>
  );
};

export default WeatherTop;
