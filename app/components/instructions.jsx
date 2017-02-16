import React from 'react';
import InstructionsIntro from './instructions-intro';
import InstructionsList from './instructions-list';
import Button from 'react-nuik/lib/components/button';

import instructions from 'theme/instructions.scss';

const Instructions = () => {
  return (
    <div className={instructions.wrapper}>
      <div className={instructions.container}>
      <h2>Instructions</h2>
      <InstructionsIntro />
      <InstructionsList />
    </div>
    <Button variant="affirmative" mod="floatRight">Next</Button>
    </div>
  );
};

export default Instructions;
