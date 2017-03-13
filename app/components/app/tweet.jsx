import React from 'react';
import Button from 'react-nuik/lib/components/button';

const Tweet = (props) => {
  const labId = {
    'Weather Lab': 'lab1',
    'Fan Lab': 'lab2',
    'SensorTag Lab': 'lab3',
    'Wind Flow Lab': 'lab4',
  };
  const url = `https://twitter.com/intent/tweet?text=https://nio.school/labtest/${labId[props.title]}`;

  return (
    <div>
      <h2>Tweet</h2>
      <p>n.io school's {props.title} page</p>
      <Button href={url} variant="primary">Send Tweet!</Button>
    </div>
  );
};

export default Tweet;
