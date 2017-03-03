import React from 'react';
import { CodeBlock, InlineCodeBlock } from 'components/util/code';
import CollapsableInstructions from 'components/instructions/collapsable';

import instructionStyle from 'theme/instructions.scss';

const WeatherInstructions = () => (
    <CollapsableInstructions>

<p>In Lab 1, n.io will get the weather at your current location and send you a text message that contains the gathered weather data. The weather will also be displyed in the Lab 1 user interface. You will first build the n.io service to recognize your location, ping the WeatherUnderground API for weather data, send that data back to you in a text message, and display the results at: nio.school/lab1.</p>

<h3 className={instructionStyle.section_header}>Designer Instructions</h3>
<p>Follow these steps for Lab 1: Weather via SMS Text. </p>

<ol>
  <li>Go to designer.n.io/?prod=labtest to access the Designer.</li>

  <li>Create a new service by clicking Service List tab and clicking the Add Service button
    <ol type="a">
      <li>Name it <InlineCodeBlock>Lab1</InlineCodeBlock> and click “Submit”</li>
      <li>Name it <CodeBlock>{`The weather in {{ $current_observation['display_location']['full'] }} is currently {{ $current_observation['temperature_string'] }} and {{ $current_observation['weather'] }}!`}</CodeBlock> and click 'Submit'</li>
    </ol>
  </li>

  <li>Subscribing to location data
    <ol type="a">
      <li>The Subscriber and Publisher blocks are used to send signals between services. A Publisher block posts signals to a specified Topic, while Subscriber blocks listen for those signals and pass them on to their respective services. In this case, the LocationLookup service is publishing to the Location topic. We will configure the Subscriber block by modifying the Topic field in the block to pick up the signals from the end of the LocationLookup service that has been provided for you.</li>
      <li>Drag a Subscriber block onto your canvas</li>
      <li>Name it MyLocation and click “Submit”</li>
    </ol>
  </li>
</ol>
</CollapsableInstructions>
);

export default WeatherInstructions;
