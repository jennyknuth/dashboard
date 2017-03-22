import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import stepper from 'theme/stepper.scss';

const StepLink = ({ to, stepId, currentPath, ...props }) => {
  const activeLink = stepId === currentPath;
  const linkClasses = classNames(
    stepper.horizontalStep,
    activeLink && stepper.active
  );

  return (
    <Link to={to} className={linkClasses}>
      {props.children}
    </Link>
  );
};

const HorizontalStepper = ({ activeRoute }) => {
  return (
    <div>
      <div className={stepper.border} />
      <div className={stepper.box} >
        <StepLink to="weather" stepId="weather" currentPath={activeRoute}>
          <h2>Weather Lab</h2>
        </StepLink>
        <StepLink to="fan" stepId="fan" currentPath={activeRoute}>
          <h2>Fan Lab</h2>
        </StepLink>
        <StepLink to="sensorTag" stepId="sensorTag" currentPath={activeRoute}>
          <h2>SensorTag Lab</h2>
        </StepLink>
        <StepLink to="flow" stepId="flow" currentPath={activeRoute}>
          <h2>Wind Flow Lab</h2>
        </StepLink>
      </div>
    </div>
  );
};

HorizontalStepper.propTypes = {
  activeRoute: React.PropTypes.string
};

export default HorizontalStepper;
