import React from 'react';
import Button from 'react-nuik/lib/components/button';
import WeatherIcons from 'react-weathericons';

import weather from 'theme/weather.scss';

const WeatherTop = () => {
  return (
    <div className={weather.wrapper}>
      <div className={weather.container}>
        <div className={weather.current}>
          <h2>75°</h2>
          <WeatherIcons name="cloud" size="2x" />
        </div>
        <div className={weather.feelslike}>
          <h3>Feels Like 80°</h3>
          <h3>Wind N 8mph</h3>
        </div>
      </div>
    </div>
  );
};

export default WeatherTop;
