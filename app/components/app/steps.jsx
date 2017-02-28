import React from 'react';
import List from 'react-nuik/lib/components/list';
import Checkbox from 'react-nuik/lib/components/checkbox';
import Link from 'react-nuik/lib/components/link';

const Steps = () => {

  return (
      <List variant='numbered' mod='progress-list'>
        <div className="active">
          <h3>Step 1</h3>
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
        </div>
        <div>
          <h3>Step 2</h3>
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
        </div>
        <div>
          <h3>Step 3</h3>
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
        </div>
        <div>
          <h3>Step 4</h3>
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
        </div>
      </List>
  );
};

export default Steps;
