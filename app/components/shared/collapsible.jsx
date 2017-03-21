import React from 'react';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';

import instructions from 'theme/instructions.scss';

class CollapsibleInstructions  extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpened: true
    };

    this.toggleOpen = () => {
      this.setState({ isOpened: !this.state.isOpened });
      this.state.isOpened && document.getElementById('slate').scrollIntoView({block: 'end', behavior: 'smooth'});
    };
  }

  render() {
    const className = classNames(
      instructions.instructions,
      !this.state.isOpened && instructions.collapsed
    );

    const toggleIcon = <FontAwesome name={this.state.isOpened ? 'angle-up' : 'angle-down'} size='2x' />;

    return (
      <div>
        <div className={className}>
          <h2>Instructions</h2>
          {this.props.children}
        </div>
        <button className={instructions.collapseButton} onClick={this.toggleOpen}>{toggleIcon}</button>
      </div>
    );
  }
}

export default CollapsibleInstructions;
