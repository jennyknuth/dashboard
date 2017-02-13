import React from 'react';
import Button from 'react-nuik/lib/components/button';

const SampleButtons = () => {
  return (
    <div>
      <h2>Buttons</h2>
      <h3>Standard</h3>
      <div>
        <Button variant="primary">Primary</Button>
        <Button variant="affirmative">Yes</Button>
        <Button variant="alternate">Alternate</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button>Default</Button>
        <Button variant="primary" disabled>Disabled</Button>
      </div>
      <h3>Link</h3>
      <div>
        <Button href="#" variant="primary">Link</Button>
        <Button href="#" variant="affirmative">Link</Button>
        <Button href="http://facebook.com" variant="alternate">Facebook</Button>
        <Button href="#" variant="warning">Warning Link</Button>
        <Button href="#" variant="danger">Danger Link</Button>
        <Button href="#">Default</Button>
        <Button href="#" disabled>Disabled</Button>
      </div>
      <h3>Sizes</h3>
      <div>
        <Button size="huge" variant="primary">Huge</Button>
        <Button size="large" variant="primary">Large</Button>
        <Button variant="primary">Default</Button>
        <Button size="small" variant="primary">Small</Button>
        <Button size="tiny" variant="primary">Tiny</Button>
      </div>
    </div>
  );
};

export default SampleButtons;
