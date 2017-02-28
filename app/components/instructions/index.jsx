import React from 'react';
import { Link } from 'react-router';
import InstructionsIntro from './instructions-intro';
import InstructionsList from './instructions-list';
import Button from 'react-nuik/lib/components/button';
var nio = require('niojs')

import instructions from 'theme/instructions.scss';
import button from 'theme/button.scss';

const Instructions = () => {
  return (
    <div className={instructions.wrapper}>
      <div className={instructions.container}>
      <h2>Instructions</h2>
      <InstructionsIntro />
      <InstructionsList />
    </div>
    <Link to="step1" className={button.nextProjButton}>Next Project</Link>
    </div>
  );
};

export default Instructions;
