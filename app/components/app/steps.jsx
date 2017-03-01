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
        <h3>Step 1</h3>
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
      </StepLink>
      <StepLink to="step2" activePathCheck="step2" currentPath={activeRoute}>
        <h3>Step 2</h3>
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
      </StepLink>
      <StepLink to="step3" activePathCheck="step3" currentPath={activeRoute}>
        <h3>Step 3</h3>
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
      </StepLink>
      <StepLink to="step4" activePathCheck="step4" currentPath={activeRoute}>
        <h3>Step 4</h3>
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
      </StepLink>
    </List>
  );
};

export default Steps;
