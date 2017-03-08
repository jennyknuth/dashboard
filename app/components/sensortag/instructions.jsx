import React from 'react';
import CollapsibleInstructions from 'components/instructions/collapsible';

import Content from './sensortag-instructions.md';

const SensorTagInstructions = () => (
    <CollapsibleInstructions>
      <Content />
    </CollapsibleInstructions>
);

export default SensorTagInstructions;
