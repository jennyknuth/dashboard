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
  }

  selectedNav = (e) => {
    console.log(e.target.name);
    const selection = this.state.selected === e.target.name ? undefined : e.target.name;
    console.log(selection);
    this.setState({ selected: selection });
  };

  render() {
    console.log(this.state.selected);
    const selectedClasses = (element) => {
      console.log('in classNames', element);
      return classNames(
        this.state.selected === element ? nav.active : nav.item,
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
            <Link className={selectedClasses('industrial')} to="/industrial" name='industrial' onClick={(e) => this.selectedNav(e)}>
              Industrial
            </Link>
            <Link className={selectedClasses('product')} to="/product" name='product' onClick={(e) => this.selectedNav(e)}>
              Product
            </Link>
            <Link className={selectedClasses('agriculture')} to="/agriculture" name='agriculture' onClick={(e) => this.selectedNav(e)}>
              Agriculture
            </Link>
            <Link className={selectedClasses('dashboard')} to="/dashboard" name='dashboard' onClick={(e) => this.selectedNav(e)}>
              Socinio
            </Link>
          </List>
        </nav>
        <div className={layout.app}>
          <h1 className={layout.pageTitle}>{this.props.children.props.route.title}</h1>
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
