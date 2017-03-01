import React from 'react';
import List from 'react-nuik/lib/components/list';
import { Link } from 'react-router';

import steps from 'theme/steps.scss';

const StepLink = ({ to, activePathCheck, currentPath, ...props }) => {
  const activeness = (activePathCheck == currentPath || !(currentPath)) ? steps.active : steps.inactive;
  return <Link to={to} className={`${activeness} ${steps.step}`}>
    {props.children}
  </Link>;
};

const Steps = ({ activeRoute }) => {
  return (
    <List variant='numbered' mod='progress-list' className={steps.step_list}>
      <StepLink to="step1" activePathCheck="step1" currentPath={activeRoute}>
        <h3>Weather Lab</h3>
        <span>Get the weather and 10 day forecast at your current location and send a text containing the gathered weather data.</span>
      </StepLink>
      <StepLink to="step2" activePathCheck="step2" currentPath={activeRoute}>
        <h3>Fan Lab</h3>
        <span>Shake your mobile phone to turn the desktop fan on and off.</span>
      </StepLink>
      <StepLink to="step3" activePathCheck="step3" currentPath={activeRoute}>
        <h3>SensorTag Lab</h3>
        <span>Flip over a bluetooth connected SensorTag to turn on and off an LED.</span>
      </StepLink>
      <StepLink to="step4" activePathCheck="step4" currentPath={activeRoute}>
        <h3>Wind Flow Lab</h3>
        <span>Shake your mobile phone to turn on the fan. Then detect the wind speed to turn on the LED.</span>
      </StepLink>
    </List>
  );
};

export default Steps;
