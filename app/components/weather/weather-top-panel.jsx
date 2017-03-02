import React from 'react';
import WeatherIcons from 'react-weathericons';
import WeatherBottomForecast from './weather-bottom-forecast';

import weather from 'theme/weather.scss';

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

  const sampleTodayData = [
    {
      feelslike_f: '80',
      icon: 'cloud',
      wind_degrees: '102',
      wind_mph: '8',
      wind_dir: 'ESE',
      temp_f: '75',
      observation_location: {
        full: "Mission District, San Francisco, CA"
      }
    }
  ];
  return (

    <div className={weather.wrapper}>
      <div className={weather.container}>
        <div className={weather.warm}>
          <div className={weather.left}>
            <h2>{sampleTodayData.temp_f}</h2>
            <WeatherIcons name={sampleTodayData.icon} size="5x" />
            <div className={weather.feelslike}>
              <h3>Feels Like {sampleTodayData.feelslike_f}°</h3>
              <h3>Wind {sampleTodayData.wind_dir} {sampleTodayData.wind_mph}mph</h3>
            </div>
          </div>
          <div className={weather.right}>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <h4>{sampleTodayData['observation_location']}</h4>
          </div>
        </div>

        <WeatherBottomForecast forecastDays={sampleForecastData}/>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
}
export default WeatherTop;
