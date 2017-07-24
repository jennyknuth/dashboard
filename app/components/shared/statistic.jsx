import React from 'react';

import statistic from 'theme/statistic';

const Statistic = ({ label, unit, value }) => {

  return (
    <div>
      <div>{label}</div>
      <div className={statistic.value}>{value}</div>
      <div>{unit}</div>
    </div>
  );
};

Statistic.propTypes = {
  label: React.PropTypes.string,
  unit: React.PropTypes.string,
  value: React.PropTypes.any,
};

export default Statistic;
