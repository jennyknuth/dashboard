import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import BlankSlate from 'components/blank-slate';
import WeatherTop from 'components/weather/weather-top-panel';
import WeatherForecast from './weather-forecast';
import WeatherInstructions from 'components/weather/instructions';
import SocketRoom from 'components/socket-room';
import classNames from 'classnames';

import classes from 'theme/button.scss';
import layout from 'theme/layout.scss';
import lab from 'theme/lab.scss';

const Weather = (props) => {
  const linkClassNames = classNames (
    classes.button,
    classes.link,
    classes.primary,
    classes.large,
  );

  return (
    <div>
      <BlankSlate visibilityData={props.lastRead} message="This area will populate once the service is built and sending data.">
        <div className={lab.labData}>
          <div className={lab.header}>
            <WeatherTop current={props.current} forecast={props.forecast} />
          </div>
          <WeatherForecast forecastDays={props.forecast}/>
          <SocketRoom data={props.lastRead} height="20" />
        </div>
      </BlankSlate>
      <div className={layout.paper}>
        <WeatherInstructions />
      </div>
      <div className={layout.rightBlock}>
        <Link to="lab2" className={linkClassNames}>Next Project</Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.weather
  };
};

export default connect(mapStateToProps)(Weather);
