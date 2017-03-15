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
        <StepLink to="lab1" stepId="lab1" currentPath={activeRoute}>
          <h2>Weather Lab</h2>
        </StepLink>
        <StepLink to="lab2" stepId="lab2" currentPath={activeRoute}>
          <h2>Fan Lab</h2>
        </StepLink>
        <StepLink to="lab3" stepId="lab3" currentPath={activeRoute}>
          <h2>SensorTag Lab</h2>
        </StepLink>
        <StepLink to="lab4" stepId="lab4" currentPath={activeRoute}>
          <h2>Wind Flow Lab</h2>
        </StepLink>
      </div>
    </div>
  );
};

export default HorizontalStepper;
