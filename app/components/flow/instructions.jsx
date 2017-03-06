import React from 'react';
import CollapsableInstructions from 'components/instructions/collapsable';

import Content from './flow-instructions.md';

const FlowInstructions = () => (
    <CollapsableInstructions>
      <Content />
    </CollapsableInstructions>
);

export default FlowInstructions;
