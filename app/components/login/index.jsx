import React, { Component } from 'react';

class Login extends Component {

  componentDidMount() {
    setTimeout(() => {
      if (!this.props.routes[0].auth.loggedIn()) {
        this.props.routes[0].auth.login();
      }
    }, 1000);
  }

  render() {
    return (
      <div id="loginContainer" className='loginContainer' />
    );
  }
}

export default Login;
