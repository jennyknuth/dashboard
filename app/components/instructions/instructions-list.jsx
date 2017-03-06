import React from 'react';
import List from 'react-nuik/lib/components/list';

import Content from './instructions.md';


const InstructionsList = () => {

  return (
    <div>
      <List variant='numbered' mod='instructions-list'>
        <Content />
      </List>
    </div>
  );
};

export default InstructionsList;
