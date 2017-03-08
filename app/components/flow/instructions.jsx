import React from 'react';
import CollapsibleInstructions from 'components/instructions/collapsible';

import Content from './flow-instructions.md';

const FlowInstructions = () => (
    <CollapsibleInstructions>
      <Content />
    </CollapsibleInstructions>
);

export default FlowInstructions;
