import React from 'react';
import Steps from 'components/app/steps';
import Tweet from 'components/app/tweet';
import layout from 'theme/layout.scss';
import header from 'theme/header.scss';

const MainApp = (props) => {
  return (
  <div>
    <header className={header.header}>
      <a className={header.link} href="/">
        <img className={header.logo} src='img/niologo_white.png' />
        <div className={header.name}>school</div>
      </a>
      <div className={header.info}>Questions? Call XXX-XXX-XXX MF 9–5 MST</div>
    </header>
    <div className={layout.app}>
      <h1>{props.children.props.route.title}</h1>
      <div className={layout.container}>
        <div className={layout.bigPanel}>
          { props.children }
        </div>
        <div className={layout.smallPanel}>
          <Steps activeRoute={props.children.props.route.path} />
          <div className={layout.paper}>
            <Tweet title={props.children.props.route.title}/>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default MainApp;
