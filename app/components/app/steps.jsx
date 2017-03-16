import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import stepper from 'theme/stepper.scss';

const StepLink = ({ to, stepId, currentPath, ...props }) => {
  const activeLink = stepId === currentPath;
  const linkClasses = classNames(
    stepper.step,
    activeLink && stepper.active
  );

  return (
    <Link to={to} className={linkClasses}>
      {props.children}
    </Link>
  );
};

const Steps = ({ activeRoute }) => {
  return (
    <div className={stepper.stepper}>
      <StepLink to="weather" stepId="weather" currentPath={activeRoute}>
        <h2>Weather Lab</h2>
        <span >Get the weather and 10 day forecast at your current location and send a text containing the gathered weather data.</span>
      </StepLink>
      <StepLink to="fan" stepId="fan" currentPath={activeRoute}>
        <h2>Fan Lab</h2>
        <span>Shake your mobile phone to turn the desktop fan on and off.</span>
      </StepLink>
      <StepLink to="sensorTag" stepId="sensorTag" currentPath={activeRoute}>
        <h2>SensorTag Lab</h2>
        <span>Flip over a bluetooth connected SensorTag to turn on and off an LED.</span>
      </StepLink>
      <StepLink to="flow" stepId="flow" currentPath={activeRoute}>
        <h2>Wind Flow Lab</h2>
        <span>Shake your mobile phone to turn on the fan. Then detect the wind speed to turn on the LED.</span>
      </StepLink>
    </div>
  );
};

export default Steps;
