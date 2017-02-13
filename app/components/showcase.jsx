import React from 'react';
import SampleButtons from 'components/sample-buttons.jsx';
import SampleTextInputs from 'components/sample-text-inputs.jsx';
import SampleCheckboxes from 'components/sample-checkboxes.jsx';
import SampleLinks from 'components/sample-links.jsx';
import SampleLists from 'components/sample-lists.jsx';

const Showcase = () => {
  return (
    <div>
      <SampleButtons />
      <SampleTextInputs />
      <SampleCheckboxes />
      <SampleLinks />
      <SampleLists />
    </div>
  );
};

export default Showcase;
