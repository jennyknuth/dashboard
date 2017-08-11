import React from 'react';

import { Link, withRouter, browserHistory } from 'react-router';
import List from 'react-nuik/lib/components/list';
import classNames from 'classnames';

import layout from 'theme/layout.scss';
import header from 'theme/header.scss';
import nav from 'theme/nav.scss';

class MainApp extends React.Component {
  constructor() {
    super();
    this.state = {
      navOpen: false,
    };
  }

  render() {
    const {props} = this;

    const toggleNav = () => this.setState({ navOpen: !this.state.navOpen });

    const selectedNav = (e) => {
      browserHistory.push(`/${e.target.name}`);
    };

    const selectedClasses = (element) => {
      return classNames(
        props.location.pathname === `/${element}` ? nav.active : nav.item,
      );
    };

    const headerClasses = classNames(
      this.props.location.pathname === '/community' ? header.hidden : header.header
    );

    const titleClasses = classNames(
      this.props.location.pathname === '/community' ? layout.boardTitle : layout.pageTitle
    );

    const appClasses = classNames(
      this.props.location.pathname === '/community' ? layout.backgroundLayer : layout.app
    );

    const iconClasses = classNames(
      'fa fa-bars fa-2x fa-fw',
      header.icon,
      this.state.navOpen ? header.rotate : '',
    );

    const navClasses = classNames(
      this.state.navOpen ? nav.bar : nav.hidden
    );

    const backgroundClasses = classNames(
      this.props.location.pathname === '/community' ? layout.community : layout.frame
    );

    return (
      <div >
        <header className={headerClasses}>
          <i className={iconClasses} onClick={toggleNav}/>
          <Link className={header.link} to="/">
            <img className={header.logo} src='img/niologo_white.png' />
          </Link>
        </header>
        <div className={backgroundClasses}>
          { props.route.auth.loggedIn() && (
          <nav className={navClasses}>
            { this.state.navOpen ?
              <List variant='none' className={nav.content}>
                <Link className={selectedClasses('dashboard')} to="/dashboard" name='dashboard' onClick={(e) => selectedNav(e)}>
                  Operations
                </Link>
                <Link className={selectedClasses('product')} to="/product" name='product' onClick={(e) => selectedNav(e)}>
                  Product
                </Link>
                <Link className={selectedClasses('industrial')} to="/industrial" name='industrial' onClick={(e) => selectedNav(e)}>
                  Industrial
                </Link>
                <Link className={selectedClasses('agriculture')} to="/agriculture" name='agriculture' onClick={(e) => selectedNav(e)}>
                  Agriculture
                </Link>
                <a className={selectedClasses('logout')} href='' name='logout' onClick={() => props.route.auth.logout()}>
                  Log Out
                </a>
              </List> :
              null
            }
          </nav>
          )}
          <div className={appClasses}>
            { props.route.auth.loggedIn() && (
            <h1 className={titleClasses}>{props.children.props.route.title}</h1>
            )}
            <div>
              { props.children }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MainApp);
