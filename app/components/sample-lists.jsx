import React from 'react';
import List from 'react-nuik/lib/components/list';
import Checkbox from 'react-nuik/lib/components/checkbox';
import Link from 'react-nuik/lib/components/link';

const SampleLists = () => {

  return (
    <div>
      <h2>Lists</h2>
      <h3>Default</h3>
      <List>
        <p>buy some yogurt</p>
        <p>get a haircut</p>
        <p>finish novel</p>
        <p>call Connie</p>
      </List>
      <h3>Numbered</h3>
      <List variant='numbered'>
        <p>buy some yogurt</p>
        <p>get a haircut</p>
        <p>finish novel</p>
        <p>call Connie</p>
      </List>
      <h3>List of Checkboxes</h3>
      <List variant='none'>
        <Checkbox checked={false} label="buy some yogurt"/>
        <Checkbox checked={true} label="get a haircut"/>
        <Checkbox checked={false} label="visit Ben"/>
        <Checkbox checked={false} label="finish blog"/>
      </List>
      <h3>Menu List</h3>
      <List variant='none'>
        <Link href="#" icon="&#x2723;">One</Link>
        <Link href="#" icon="&#x2698;">Two</Link>
        <Link href="#" icon="&#x273F;">Three</Link>
        <Link href="#" icon="&#x2765;">Four</Link>
      </List>
    </div>
  );
};

export default SampleLists;
