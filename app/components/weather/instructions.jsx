import React from 'react';
// import { CodeBlock, InlineCodeBlock } from 'components/util/code';
import CollapsableInstructions from 'components/instructions/collapsable';
import Content from './weather-instructions.md';

// import instructionStyle from 'theme/instructions.scss';

const WeatherInstructions = () => (
  <CollapsableInstructions>
  <Content />
  </CollapsableInstructions>
);

export default WeatherInstructions;
