import React from 'react';
import { Link } from 'react-router';

import layout from 'theme/layout.scss';
import header from 'theme/header.scss';

const MainApp = (props) => {

  return (
  <div>
    <header className={header.header}>
      <Link className={header.link} to="/">
        <img className={header.logo} src='img/niologo_white.png' />
      </Link>
    </header>
    <div className={layout.app}>
      <h1>{props.children.props.route.title}</h1>
      <div className={layout.artboard}>
        { props.children }
      </div>
    </div>
  </div>
  );
};

export default MainApp;
