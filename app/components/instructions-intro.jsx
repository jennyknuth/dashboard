import React from 'react';
import InstructionsList from './instructions-list';
import InstructionsVideo from './instructions-video';
import instructions from 'theme/instructions.scss';

const InstructionsIntro = () => {
  return (
    <div className={instructions.intro}>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
      <InstructionsVideo />
    </div>
  );
};

export default InstructionsIntro;