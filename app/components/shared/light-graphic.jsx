import React from 'react';

import led from 'theme/led.scss';

const LEDlight = (props) => {
  return (
    <div className={led.light} style={{backgroundColor: props.color}} />
  );
};

LEDlight.propTypes = {
  color: React.PropTypes.string
};

export default LEDlight;
