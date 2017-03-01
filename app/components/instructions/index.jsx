import React from 'react';
import { Link } from 'react-router';

import instructions from 'theme/instructions.scss';
import button from 'theme/button.scss';

const Instructions = () => {
  return (
    <div className={instructions.wrapper}>
      <div className={instructions.container}>
      <h2>Instructions</h2>

<p>You will be working through four separate n.io School Labs (labs) to experience and explore the capabilities of n.io.</p>

<p><ul>
<li>Lab 1: Get Local Weather via SMS Text</li>
<li>Lab 2: Shake Phone to Control Fan</li>
<li>Lab 3: SensorTag controls LED Light</li>
<li>Lab 4: Shake Phone, Start Fan, Measure Windflow, Light LED</li>
</ul></p>

<p>Each running instance of n.io has its own Designer application. You will interact with the Designer application to perform the steps outlined in each lab. Different instances of n.io can be accessed by adding different parameters to the end of the url. For example: /?prod=labtest as can be seen below, or /?instanceIp=[your_ip_address], which we will use in the later labs.</p>

<p>Throughout the four labs in this demo, we will be using two separate instances of n.io. In the first lab we will use an instance of n.io running in the cloud. This means n.io isn’t running on any physical computer or microcontroller sitting next to you. For the following three labs, you will be running n.io on the Raspberry Pi microcontroller that came in the kit. The instances of n.io will have some pre-configured services that we have set up for you to use in conjunction with the services you will make. Each service running in an instance of n.io will transform the data coming from sensors or APIs into useful information that n.io can then use to control other devices or send the user important updates or alerts. Each service is composed of blocks. The majority of these blocks take in incoming signals, transform the data in some way, and then pass the new signal into the next block. You will also be integrating n.io into a web based user interface to demonstrate the simplicity of integrating devices, signals, and human interaction.</p>

<p>We would like to stress the importance of configuring the blocks you will use to make your first services with n.io correctly. Feel free to copy and paste the code snippets from this example into your block configurations to ensure correct syntax. Many times, if data isn’t flowing through services as you expect, it could be because something wasn’t capitalized correctly or there is a spelling error somewhere in your configurations.</p>
    </div>
    <Link to="step1" className={button.nextProjButton}>Get Started!</Link>
    </div>
  );
};

export default Instructions;
