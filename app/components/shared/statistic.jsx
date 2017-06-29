import React from 'react';


const Statistic = ({ label, unit, value }) => {
  console.log('Statistic', value);

  return (
    <div>
      <div>{label}</div>
      <h1>{value}</h1>
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
