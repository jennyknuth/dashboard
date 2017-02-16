import React from 'react';
import WeatherTop from './weather-top-panel';
import Button from 'react-nuik/lib/components/button';

import weather from 'theme/weather.scss';

const Weather = () => {
  return (
    <div>
      <div>
        <WeatherTop />
      </div>
      <Button variant="affirmative" mod="floatRight">Next</Button>
    </div>
  );
};

export default Weather;
