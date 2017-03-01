import React from 'react';
import WeatherIcons from 'react-weathericons';

import weather from 'theme/weather.scss';

const WeatherDay = (data) => {
    switch ('data.title') {
      case 'Monday':
        return 'MON';
      case 'TUESDAY':
        return 'TUE';
      case 'WEDNESDAY':
        return 'WED';
      case 'THURSDAY':
        return 'THU';
      case 'FRIDAY':
        return 'FRI';
      case 'SATURDAY':
        return 'SAT';
      case 'SUNDAY':
        return 'SUN';
    }
}

const HandleHighLow = (data) => {
  var text = '';

  if (data.icon && data.fcttext_metric.indexOf('high') > -1) {
    const i = data.fctext_metric.indexOf('high');
    const nightInt = data.period + 1;
    const nightIndex = data.fctext_metric.indexOf('low');

    const dayText = data.fctext_metric.split(i, i+2);
    const nightText = data['nightPeriod'].fctext_metric.split(nightIndex, nightIndex + 2)

    return dayText + nightText;
  }
}

const WeatherTopForecast = (data) => {
  return (

    <div className={weather.forecast}>
      <h2>10 Day Forecast</h2>
      <ul>
        <li className={data.icon}>
          <WeatherIcons name="cloud" size="5x" />
          <h4>{WeatherDay()}MON</h4>
          <h5>50 / 40</h5>
        </li>
      </ul>
    </div>
  );
};

export default WeatherTopForecast;
