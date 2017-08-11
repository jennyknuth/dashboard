import React from 'react';
import { connect } from 'react-redux';

import BulletinBoard from 'components/shared/bulletin-board';

import layout from 'theme/layout.scss';

const CommunityBoard = (props) => {
  return (
    <div className={layout.artboard}>
      <BulletinBoard question={props.question} answers={props.answer} />
    </div>
  );
};

CommunityBoard.propTypes = {
  question: React.PropTypes.object,
  answer: React.PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    ...state.community
  };
};

export default connect(mapStateToProps)(CommunityBoard);
