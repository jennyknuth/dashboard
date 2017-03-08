import React from 'react';

import instructions from 'theme/instructions.scss';

const InstructionsVideo = () => {
  return (
    <div className={instructions.video}>
      <video controls height='200px'>
        <source src="http://techslides.com/demos/sample-videos/small.webm" type="video/webm" />
        <source src="http://techslides.com/demos/sample-videos/small.ogv" type="video/ogg" />
        <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" />
        <source src="http://techslides.com/demos/sample-videos/small.3gp" type="video/3gp" />
      </video>
    </div>
  );
};

export default InstructionsVideo;
