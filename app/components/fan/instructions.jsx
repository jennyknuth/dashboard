import React from 'react';
import CollapsableInstructions from 'components/instructions/collapsable';
import Content from './fan-instructions.md';

const FanInstructions = () => (
    <CollapsableInstructions>
      <Content />
    </CollapsableInstructions>
);

export default FanInstructions;
