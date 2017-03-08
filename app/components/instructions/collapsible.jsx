import React from 'react';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';

import instructions from 'theme/instructions.scss';

const CollapsibleInstructions = React.createClass({

  getInitialState() {
    return {
      isOpened: true,
    };
  },

  toggleOpen() {
    this.setState({
      isOpened: !this.state.isOpened
    });
  },

  getContentClassName() {
    const classes = {};
    classes[instructions.collapsed] = !this.state.isOpened;
    classes[instructions.instructions] = 'true';
    return classNames(classes);
  },

  getToggleButtonContent() {
    return <FontAwesome name={this.state.isOpened ? 'angle-up' : 'angle-down'} size='2x' />;
  },

  render() {
    return (
      <div>
        <div className={this.getContentClassName()}>
          <h2>Instructions</h2>
          {this.props.children}
        </div>
        <button className={instructions.collapseButton} onClick={this.toggleOpen}>{this.getToggleButtonContent()}</button>
      </div>
    );
  },
});

export default CollapsibleInstructions;
