import React from 'react';
import { Link } from 'react-router';
import WeatherTop from 'components/weather/weather-top-panel';
import Button from 'react-nuik/lib/components/button';
import SocketRoom from 'components/util/socket-room';

import weather from 'theme/weather.scss';
import button from 'theme/button.scss';

const Weather = () => {
  return (
    <div className={weather.wrapper}>
      <div className={weather.container}>
        <WeatherTop />
      </div>
      <SocketRoom />
      <Link to="step2" className={button.nextProjButton}>Next Project</Link>
    </div>
  );
};

export default Weather;
