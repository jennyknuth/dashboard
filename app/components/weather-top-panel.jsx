import React from 'react';
import WeatherIcons from 'react-weathericons';
import WeatherTopForecast from './weather-top-panel-forecast';

import weather from 'theme/weather.scss';
import socketRoom from 'theme/socket-room.scss';


const WeatherTop = () => {
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

        <WeatherTopForecast />
      </div>
      <h2 className={socketRoom.socketRoom}>Socket Room</h2>
      <div className="socketOutput">
        <textarea value="[sample output here]"></textarea>
      </div>
    </div>
  );
};

export default WeatherTop;
