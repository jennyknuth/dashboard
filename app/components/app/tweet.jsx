import React from 'react';
import Button from 'react-nuik/lib/components/button';

const Tweet = () => {
  const tweetText = 'I just completed my first experience with @poweredbynio! ' + window.location.href;
  const tweetText2 = 'Fun with an IoT kit from n.io—Accelerometer, GPS, Text, Cloud, LED, Wind Flow Sensor, n.io software—it all works! @poweredbynio';
  const url = `https://twitter.com/intent/tweet?text=${tweetText2}`;

  return (
    <div>
      <h2>TweetTweet</h2>
      <p>We would love to hear from you! Give us a shout out if you are enjoying n.io software.</p>
      <Button href={url} size="large" variant="primary">Send Tweet</Button>
    </div>
  );
};

export default Tweet;
