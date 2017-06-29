import React from 'react';
import { Link } from 'react-router';
import List from 'react-nuik/lib/components/list';
import classNames from 'classnames';

import layout from 'theme/layout.scss';
import header from 'theme/header.scss';
import nav from 'theme/nav.scss';

class MainApp extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: undefined,
    };
    this.selectedNav = this.selectedNav.bind(this);
    this.selectedClasses = this.selectedClasses.bind(this);
  }

  selectedNav(e) {
    const selection = this.state.selected === e.target.name ? undefined : e.target.name;
    this.setState({ selected: selection });
  }

  selectedClasses(element) {
    return classNames(
      this.state.selected === element ? nav.active : nav.item,
    );
  }

  render() {
    const { route: { auth } } = this.props;

    return (
    <div>
      <header className={header.header}>
        <Link className={header.link} to="/">
          <img className={header.logo} src='img/niologo_white.png' />
        </Link>
      </header>
      <div className={layout.frame}>
        { auth.loggedIn() && (
          <nav className={nav.bar}>
            <List variant='none'>
              <Link className={this.selectedClasses('industrial')} to="/industrial" name='industrial' onClick={(e) => this.selectedNav(e)}>
                Industrial
              </Link>
              <Link className={this.selectedClasses('product')} to="/product" name='product' onClick={(e) => this.selectedNav(e)}>
                Product
              </Link>
              <Link className={this.selectedClasses('agriculture')} to="/agriculture" name='agriculture' onClick={(e) => this.selectedNav(e)}>
                Agriculture
              </Link>
              <Link className={this.selectedClasses('dashboard')} to="/dashboard" name='dashboard' onClick={(e) => this.selectedNav(e)}>
                Socinio
              </Link>
              <a className={this.selectedClasses('dashboard')} href='' name='logout' onClick={() => auth.logout()}>
                Log Out
              </a>
            </List>
          </nav>
        )}
        <div className={layout.app}>
          { auth.loggedIn() && (
            <h1 className={layout.pageTitle}>{this.props.children.props.route.title}</h1>
          )}
          <div>
            { this.props.children }
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default MainApp;
