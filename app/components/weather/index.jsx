import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';

import BlankSlate from 'components/shared/blank-slate';
import SocketRoom from 'components/shared/socket-room';
import Instructions from 'components/shared/collapsible';

import WeatherCurrent from 'components/weather/weather-current';
import WeatherForecast from 'components/weather/weather-forecast';
import Content from 'components/weather/weather-instructions';

import classes from 'theme/button.scss';
import layout from 'theme/layout.scss';
import lab from 'theme/lab.scss';

const Weather = (props) => {
  const linkClassNames = classNames (
    classes.button,
    classes.link,
    classes.affirmative,
    classes.large,
  );

  return (
    <div>
      <BlankSlate visibilityData={props.lastRead} message="This area will populate once the service is built and sending data.">
        <div className={lab.labData}>
          <div className={lab.header}>
            <WeatherCurrent current={props.current} forecast={props.forecast} />
          </div>
          <WeatherForecast forecastDays={props.forecast}/>
          <SocketRoom data={props.lastRead} height="20" />
        </div>
      </BlankSlate>
      <div className={layout.paper}>
        <Instructions><Content/></Instructions>
      </div>
      <div className={layout.rightBlock}>
        <Link to="fan" className={linkClassNames}>Next Project</Link>
      </div>
    </div>
  );
};

Weather.propTypes = {
  lastRead: React.PropTypes.object,
  current: React.PropTypes.object,
  forecast: React.PropTypes.array
};

const mapStateToProps = (state) => {
  return {
    ...state.weather
  };
};

export default connect(mapStateToProps)(Weather);
