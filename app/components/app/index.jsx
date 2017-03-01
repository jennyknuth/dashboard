import React from 'react';
import Steps from 'components/app/steps';
import Tweet from 'components/app/tweet';

const MainApp = (props) => {
  return (
  <div>
    <h1>{props.children.props.route.title}</h1>
    <div className="container">
      { props.children }
      <div className="right-panel">
        <Steps activeRoute={props.children.props.route.path} />
        <Tweet />
      </div>
    </div>
  </div>
  );
};

export default MainApp;
