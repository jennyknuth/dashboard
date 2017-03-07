import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import BlankSlate from 'components/util/blank-slate';
import WeatherTop from 'components/weather/weather-top-panel';
import WeatherInstructions from 'components/weather/instructions';
import SocketRoom from 'components/util/socket-room';
import classNames from 'classnames';

import weather from 'theme/weather.scss';
import classes from 'theme/button.scss';

const Weather = (props) => {
  const linkClassNames = classNames (
    classes.button,
    classes.link,
    classes.primary,
  );

  return (
    <div className={weather.wrapper}>
      <BlankSlate visibilityData={props.lastRead} message="This area will populate once the service is built and sending data.">
        <div className={weather.container}>
          <WeatherTop current={props.current} forecast={props.forecast} />
        </div>
        <SocketRoom data={props.lastRead} height="20" />
      </BlankSlate>
      <WeatherInstructions />
      <Link to="step2" className={linkClassNames}>Next Project</Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.weather
  };
};

export default connect(mapStateToProps)(Weather);
