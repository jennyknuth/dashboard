import React from 'react';

import CollapsibleInstructions from 'components/instructions/collapsible';
import Content from './weather-instructions.md';


const WeatherInstructions = () => (
  <CollapsibleInstructions>
    <Content />
  </CollapsibleInstructions>
);

export default WeatherInstructions;
