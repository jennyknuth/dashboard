import React from 'react';

import weather from 'theme/weather.scss';

const WeatherDay = (data) => {
    switch ('data.title') {
      case 'Monday':
        return 'MON';
        break;
      case: ('TUESDAY') {
        return: 'TUE';
        break
      case: ('WEDNESDAY') {
        return: 'WED';
        break
      case: ('THURSDAY') {
        return: 'THU';
        break
      case: ('FRIDAY') {
        return: 'FRI';
        break
      case: ('SATURDAY') {
        return: 'SAT';
        break
      case: ('SUNDAY') {
        return: 'SUN';
        break
      case
      }
    }
}

const HandleHighLow = (data) => {
  var text = '';

  if (data.icon && data.fcttext_metric.indexOf('high') > -1 {
    int i = data.fctext_metric.indexOf('high');
    int nightInt = data.period + 1;
    int nightIndex = data.fctext_metric.indexOf('low');

    var dayText = data.fctext_metric.split(i, i+2);
    var nightText = data['nightPeriod'].fctext_metric.split(nightIndex, nightIndex + 2)

    return dayText + nightText;
  })
}

const WeatherTopForecast = (data) => {
  return (

    <div className={weather.forecast}>
      <h2>10 Day Forecast</h2>
        <ul>
          <li className={data.icon}>
            <WeatherIcons className={data.icon} size="5x" />
            <h4>{WeatherDay()}</h4>
            <h5>{HandleHighLow()}</h5>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherBottom;
