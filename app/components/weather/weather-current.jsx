import React from 'react';
import WeatherIcons from 'react-weathericons';
import classNames from 'classnames';

import convertIcon from 'components/weather/weather-icon-converter';

import weather from 'theme/weather.scss';

const WeatherCurrent = ({ current }) => {

  const now = new Date();
  const currentHour = now.getHours();

  const isDay = ((currentHour < 21) && (currentHour > 5));

  const relativeTemp = (current.temp < 32 ? 'cold' : current.temp < 65 ? 'cool' : current.temp < 80 ? 'warm' : 'hot');

  // categorize weather
  const snow = ['chanceflurries', 'chancesnow', 'flurries', 'snow'];
  const rain = ['chancerain', 'chancesleet', 'rain', 'sleet'];
  const cloudy = ['cloudy', 'mostlycloudy', 'mostlysunny', 'partlycloudy', 'partlysunny'];
  const clear = ['clear', 'sunny'];
  const storms = ['tstorms', 'chancetstorms'];

  // divide into day and night classes
  const nightImage = (
    snow.indexOf(current.icon) >= 0 ? 'nightSnow' :
    rain.indexOf(current.icon) >= 0 ? 'nightRain' :
    cloudy.indexOf(current.icon) >= 0 ? 'nightCloudy' :
    clear.indexOf(current.icon) >= 0 ? 'nightClear' :
    current.icon === 'fog' ? 'nightFog' :
    'nightCloudy'
  );

  // for day, show category or temp if no category
  const dayImage = (
    snow.indexOf(current.icon) >= 0 ? 'daySnow' :
    rain.indexOf(current.icon) >= 0 ? 'dayRain' :
    cloudy.indexOf(current.icon) >= 0 ? 'dayCloudy' :
    clear.indexOf(current.icon) >= 0 ? 'dayClear' :
    current.icon === 'fog' ? 'dayFog' :
    relativeTemp
  );

  const weatherImage = (
    current.icon === 'hazy' ? 'sand' :
    storms.indexOf(current.icon) >= 0 ? 'storms' :
    isDay ? dayImage :
    nightImage
  );

  const currentClasses = classNames(
    weather.current,
    weather[weatherImage]
  );

  const detailClasses = classNames(
    weather.detail,
    weather.buttonLook
  );

  const locationClasses = classNames(
    weather.location,
    weather[weatherImage]
  );

  return (
    <div className={weather.weatherHeader}>
      <div className={currentClasses}>
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

WeatherCurrent.propTypes = {
  temp: React.PropTypes.number,
  icon: React.PropTypes.string,
  feels_like: React.PropTypes.number,
  wind_mph: React.PropTypes.number,
  wind_dir: React.PropTypes.string,
  location: React.PropTypes.string
};

export default WeatherCurrent;
