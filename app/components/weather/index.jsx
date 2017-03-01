import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import WeatherTop from 'components/weather/weather-top-panel';
import WeatherInstructions from 'components/weather/instructions';
import SocketRoom from 'components/util/socket-room';

import weather from 'theme/weather.scss';
import button from 'theme/button.scss';

const Weather = (props) => {
  return (
    <div className={weather.wrapper}>
      <div className={weather.container}>
        <WeatherTop />
      </div>
      <SocketRoom data={props.lastRead}/>
      <WeatherInstructions />
      <Link to="step2" className={button.nextProjButton}>Next Project</Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.weather
  };
};

export default connect(mapStateToProps)(Weather);
