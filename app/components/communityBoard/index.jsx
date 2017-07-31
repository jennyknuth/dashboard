import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import BulletinBoard from 'components/shared/bulletin-board';

import layout from 'theme/layout.scss';

const CommunityBoard = (props) => {
  // const note = {
  //   name: 'KD',
  //   message: 'restaurants should make the food for you',
  // };

  // const note = {
  //   name: 'jo',
  //   message: 'foo bar baz jazz',
  // };

  const data = [
    {
      name: 'TL',
      message: 'when they go low, go high.',
    },
    {
      name: 'KD',
      message: 'restaurants should make the food for you',
    },
    {
      name: 'JK',
      message: 'When you can, recline.',
    },
    {
      name: 'TB',
      message: 'check the license',
    },
    {
      name: 'JH',
      message: 'yeah, for sure',
    },
    {
      name: 'AJ',
      message: 'do what you think is best',
    },
  ];
  return (
    <div className={layout.artboard}>
      <BulletinBoard data={data} />
    </div>
  );
};

CommunityBoard.propTypes = {
  data: React.PropTypes.array,
};

// const mapStateToProps = (state) => {
//   return {
//     ...state.agriculture
//   };
// };

export default CommunityBoard;
// export default connect(mapStateToProps)(CommunityBoard);
