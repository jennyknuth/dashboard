import React from 'react';
import Button from 'react-nuik/lib/components/button';

const Tweet = () => {
  const tweet1 = 'I just completed my first experience with @poweredbynio! ' + window.location.href;
  const tweet2 = 'Fun with an IoT kit from n.io—Accelerometer, GPS, Text, Cloud, LED, Wind Flow Sensor, n.io software—it all works! @poweredbynio';
  const tweetText = [tweet1, tweet2];
  const url = `https://twitter.com/intent/tweet?text=${tweetText[1]}`;

  return (
    <div>
      <h2>TweetTweet</h2>
      <p>We would love to hear from you! Give us a shout out if you are enjoying n.io software.</p>
      <Button href={url} size="large" variant="primary">Send Tweet</Button>
    </div>
  );
};

export default Tweet;
