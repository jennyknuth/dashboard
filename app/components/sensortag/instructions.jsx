import React from 'react';
import CollapsableInstructions from 'components/instructions/collapsable';

import Content from './sensortag-instructions.md';

const SensorTagInstructions = () => (
    <CollapsableInstructions>
      <Content />
    </CollapsableInstructions>
);

export default SensorTagInstructions;
