import React from 'react';
import Button from 'react-nuik/lib/components/button';

import twitter from 'theme/twitter.scss';

const Tweet = () => {
  return (
    <div className={twitter.tweet}>
      <h2>Tweet</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <Button variant="primary">Send Tweet</Button>
    </div>
  );
};

export default Tweet;
