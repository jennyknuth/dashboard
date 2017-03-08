import React from 'react';
import CollapsibleInstructions from 'components/instructions/collapsible';
import Content from './fan-instructions.md';

const FanInstructions = () => (
    <CollapsibleInstructions>
      <Content />
    </CollapsibleInstructions>
);

export default FanInstructions;
