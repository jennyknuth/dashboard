import React from 'react';
import WeatherTop from 'components/weather/weather-top-panel';
import Button from 'react-nuik/lib/components/button';
import SocketRoom from 'components/util/socket-room';

import weather from 'theme/weather.scss';

const Weather = () => {
  return (
    <div className={weather.wrapper}>
      <div className={weather.container}>
        <WeatherTop />
      </div>
      <SocketRoom />
      <Button href="step2" variant="affirmative" mod="floatRight">Next</Button>
    </div>
  );
};

export default Weather;
