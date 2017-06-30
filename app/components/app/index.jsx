import React from 'react';

import { Link, withRouter, browserHistory } from 'react-router';
import List from 'react-nuik/lib/components/list';
import classNames from 'classnames';

import layout from 'theme/layout.scss';
import header from 'theme/header.scss';
import nav from 'theme/nav.scss';

const MainApp = (props) => {
  const selectedNav = (e) => {
    browserHistory.push(`/${e.target.name}`);
  };

  const selectedClasses = (element) => {
    return classNames(
      props.location.pathname === `/${element}` ? nav.active : nav.item,
    );
  };

  return (
    <div>
      <header className={header.header}>
        <Link className={header.link} to="/">
          <img className={header.logo} src='img/niologo_white.png' />
        </Link>
      </header>
      <div className={layout.frame}>
        <nav className={nav.bar}>
          <List variant='none'>
            <Link className={selectedClasses('industrial')} to="/industrial" name='industrial' onClick={(e) => selectedNav(e)}>
              Industrial
            </Link>
            <Link className={selectedClasses('product')} to="/product" name='product' onClick={(e) => selectedNav(e)}>
              Product
            </Link>
            <Link className={selectedClasses('agriculture')} to="/agriculture" name='agriculture' onClick={(e) => selectedNav(e)}>
              Agriculture
            </Link>
            <Link className={selectedClasses('dashboard')} to="/dashboard" name='dashboard' onClick={(e) => selectedNav(e)}>
              Socinio
            </Link>
          </List>
        </nav>
        <div className={layout.app}>
          <h1 className={layout.pageTitle}>{props.children.props.route.title}</h1>
          <div>
            { props.children }
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MainApp);
