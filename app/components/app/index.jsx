import React from 'react';
import Steps from 'components/app/steps';
import Tweet from 'components/app/tweet';
import layout from 'theme/layout.scss';

const MainApp = (props) => {
  return (
  <div className={layout.app}>
    <h1>{props.children.props.route.title}</h1>
    <div className={layout.container}>
      <div className={layout.bigPanel}>
        { props.children }
      </div>
      <div className={layout.smallPanel}>
        <Steps activeRoute={props.children.props.route.path} />
        <div className={layout.paper}>
          <Tweet />
        </div>
      </div>
    </div>
  </div>
  );
};

export default MainApp;
