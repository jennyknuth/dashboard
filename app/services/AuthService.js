/* eslint-disable no-unused-vars */
import qs from 'qs'; // for some reason auth-0 no longer seems to be able to import this.
/* eslint-enable no-unused-vars */
import Auth0Lock from 'auth0-lock';
import { browserHistory } from 'react-router';
import config from 'config';

export class AuthService {
  constructor(clientId, domain) {
    // Configure Auth0
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: `${location.protocol}//${location.host}/login`,
        responseType: 'token',
      },
      theme: {
        logo: '/img/niologo_white.png',
        primaryColor: '#3CAFDA',
        foregroundColor: '#3CAFDA',
      },
      languageDictionary: {
        emailInputPlaceholder: 'your_email@n.io',
        loginSubmitLabel: 'Do It',
      },
      avatar: null,
      allowForgotPassword: false,
      allowSignUp: false,
      allowedConnections: ['google-oauth2'],
    });

    this.config = {
      clientId,
      tokenName: 'id_token',
      profileName: 'user_profile',
      logoutUrl: `https://${config.AUTH0_URL}/v2/logout`,
      returnUrl: `${location.protocol}//${location.host}/login`,
    };

    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', this.doAuthentication.bind(this));
    // binds login functions to keep this context
    this.login = this.login.bind(this);
  }

  doAuthentication(authResult) {
    const thisLogin = this;
    // Saves the user token
    thisLogin.setToken(authResult.idToken);

    thisLogin.lock.getUserInfo(authResult.accessToken, (error, oldProfile) => {
      if (error) {
        browserHistory.replace('/login');
        return;
      }
      const profile = Object.assign({}, oldProfile);
      thisLogin.setUserProfile(profile);
      window.location = '/';
    });
  }

  login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    return !!this.getToken();
  }

  setToken(idToken) {
    // Saves user token to local storage
    localStorage.setItem(this.config.tokenName, idToken);
  }

  getToken() {
    // Retrieves the user token from local storage
    return localStorage.getItem(this.config.tokenName);
  }

  logout() {
    localStorage.removeItem(this.config.tokenName);
    localStorage.removeItem(this.config.profileName);
    location.href = `${this.config.logoutUrl}?returnTo=${this.config.returnUrl}&client_id=${this.config.clientId}`;
  }

  setUserProfile(profileObject) {
    localStorage.setItem(this.config.profileName, JSON.stringify(profileObject));
  }
}
