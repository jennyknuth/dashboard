import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import layout from 'theme/layout.scss';
import instructions from 'theme/instructions.scss';
import classes from 'theme/button.scss';

import Content from 'components/intro/intro';

const Instructions = () => {
  const linkClassNames = classNames(
    classes.button,
    classes.link,
    classes.primary,
  );

  const introClassNames = classNames(
    layout.paper,
    layout.intro
  );

  return (
    <div className={introClassNames}>
      <div className={instructions.instructions}>
        <h2>Instructions</h2>
        <Content />
      </div>
      <div className={layout.rightBlock}>
        <Link to="lab1" className={linkClassNames}>Get Started!</Link>
      </div>
    </div>
  );
};

export default Instructions;
