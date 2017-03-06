import React from 'react';

import CollapsableInstructions from 'components/instructions/collapsable';
import Content from './weather-instructions.md';


const WeatherInstructions = () => (
  <CollapsableInstructions>
    <Content />
  </CollapsableInstructions>
);

export default WeatherInstructions;
