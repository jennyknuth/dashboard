import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import Steps from 'components/app/steps';
import HorizontalStepper from 'components/app/horizontal-stepper';
import Tweet from 'components/app/tweet';

import layout from 'theme/layout.scss';
import header from 'theme/header.scss';
import stepper from 'theme/stepper.scss';

const MainApp = (props) => {
  const horizontalClasses = classNames(
    stepper.horizontalStepper,
    layout.paper,
    props.children.props.route.title === 'Welcome' && layout.hide
  );

  return (
  <div>
    <header className={header.header}>
      <Link className={header.link} to="/">
        <img className={header.logo} src='img/niologo_white.png' />
        <div className={header.name}>school</div>
      </Link>
      <div className={header.info}>Questions? Call XXX-XXX-XXX MF 9–5 MST</div>
    </header>
    <div className={layout.app}>
      <h1>{props.children.props.route.title}</h1>
      <div className={layout.container}>
        <div className={layout.bigPanel}>
          <div className={horizontalClasses}>
            <HorizontalStepper activeRoute={props.children.props.route.path} />
          </div>
          { props.children }
        </div>
        <div className={layout.smallPanel}>
          <Steps activeRoute={props.children.props.route.path} />
          <div className={layout.paper}>
            <Tweet title={props.children.props.route.title}/>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default MainApp;
