import React from 'react';
import Button from 'react-nuik/lib/components/button';

const Tweet = () => {
  const tweetText = 'I just completed my first experience with @poweredbynio! ' + window.location.href;
  const url = `https://twitter.com/intent/tweet?text=${tweetText}`;

  return (
    <div>
      <h2>TweetTweet</h2>
      <p>We would love to hear from you! Give us a shout out if you are enjoying n.io software.</p>
      <Button href={url} variant="primary">Send Tweet</Button>
    </div>
  );
};

export default Tweet;
