import React from 'react';
import { Link } from 'react-router';

import instructions from 'theme/instructions.scss';
import button from 'theme/button.scss';

import Content from './instructions'

const Instructions = () => {
  return (
    <div className={instructions.wrapper}>
      <div className={instructions.container}>
      <h2>Instructions</h2>
      <Content />
    </div>
    <Link to="step1" className={button.nextProjButton}>Get Started!</Link>
    </div>
  );
};

export default Instructions;
