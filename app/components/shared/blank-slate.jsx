/*
 * A component that shows a blank slate message until
 * some data value is truthy
 */
import React from 'react';
import layout from 'theme/layout.scss';

const BlankSlate = React.createClass({

  getInitialState() {
    return {
      shown: false,
    };
  },

  componentDidUpdate() {
    // If we haven't shown the component yet and we did this
    // time, update the state to indicate that we've shown it
    if (!this.state.shown && this.props.visibilityData) {
      this.setState({
        shown: true
      });
    }
  },

  render() {
    if (this.state.shown || this.props.visibilityData) {
      return <div id="slate">{this.props.children}</div>;
    }

    return (
      <div className={`${layout.paper} ${layout.noDataBlock}`} id="slate">
        {this.props.message}
      </div>
    );
  },
});

BlankSlate.propTypes = {
  // visibilityData: 
}

export default BlankSlate;
