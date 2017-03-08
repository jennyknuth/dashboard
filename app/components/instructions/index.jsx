import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import layout from 'theme/layout.scss';
import classes from 'theme/button.scss';

import Content from './instructions';
import InstructionsVideo from './instructions-video.jsx';

const Instructions = () => {
  const linkClassNames = classNames (
    classes.button,
    classes.link,
    classes.primary,
  );

  return (
    <div className={layout.paper}>
      <div >
        <h2>Instructions</h2>
        <InstructionsVideo />
        <Content />
      </div>
      <div className={layout.rightBlock}>
        <Link to="step1" className={linkClassNames}>Get Started!</Link>
      </div>
    </div>
  );
};

export default Instructions;
