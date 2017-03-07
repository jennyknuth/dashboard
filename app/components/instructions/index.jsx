import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import instructions from 'theme/instructions.scss';
import classes from 'theme/button.scss';

import Content from './instructions';

const Instructions = () => {
  const linkClassNames = classNames (
    classes.button,
    classes.link,
    classes.primary,
  );

  return (
    <div className={instructions.wrapper}>
      <div className={instructions.container}>
      <h2>Instructions</h2>
      <Content />
    </div>
    <Link to="step1" className={linkClassNames}>Get Started!</Link>
    </div>
  );
};

export default Instructions;
