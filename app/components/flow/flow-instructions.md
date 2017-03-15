<video controls height='200px' style="float: right; margin-left: 20px" src="http://techslides.com/demos/sample-videos/small.webm" type="video/webm" >
  <source src="http://techslides.com/demos/sample-videos/small.webm" type="video/webm" />
  <source src="http://techslides.com/demos/sample-videos/small.ogv" type="video/ogg" />
  <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" />
  <source src="http://techslides.com/demos/sample-videos/small.3gp" type="video/3gp" />
</video>

In this lab you will first shake your phone to control a fan. When n.io senses enough data from your phone’s accelerometer, the fan will turn on/off. Directing the fan at the wind flow sensor will increase the sensor’s reading. When n.io senses a high enough wind speed, the LED will light. To turn the fan off, shake your phone again. The wind flow speed will drop, n.io will sense this change, and the LED will turn off. The state of the fan and the LED will be shown with graphs for the accelerometer and wind flow data at: [](https://nio.school/labtest/lab4).

#### Hardware Instructions
As long as the fan is still connected to the relay on the breadboard, point it toward the wind flow sensor (shown below):

![wind flow sensor](./img/instructions/wind-sensor.png)

#### Designer Instructions
##### Follow these steps for Lab 4: Shake Phone, Start Fan, Measure Windflow, Light LED

1. Navigate to `designer.n.io/?instanceIp=[your_ip_address]` again in your browser
2. Create a new service by clicking the `Service` tab and selecting `Add Service`
3. Name it `Lab4`

There are two parts to building this service. First, you will need to detect shakes from your mobile device to turn the fan on and off. Then, you will need n.io to read from the wind flow sensor to determine when to turn on the Blink1 LED.

###### Build Shake Detector
1. Click on the Service tab
Make sure the Lab2 service that you previously built is still running
If it is not, start the service
Read From Wind Flow Sensor
Click on the + next to the CounterIntervalSimulator block to expand its block list
Drag the SensorTagSim block onto your canvas
Click Save Block As
Name it WindFlowSim
Save block
Drag  the GPIORead block onto your canvas
Name it ReadWindFlow
Fill in the following configuration field:
Pin:
Save block
Drag the StateChange block onto your canvas
Name it WindFlowThresholdState
Uncheck the Exclude Existing Fields box
Fill in the following configuration field:
State: {{ $value > 1 }}
Save block
 Click on the + next to the DynamicFields block to expand its block list
Drag in Blink1Colors block
Click Save Block As
Name it ColorAndWindFlow
Click the + next to the Fields attribute
Fill in the new field with the following Name/Value pair:
Attribute Name: wind_flow Attribute Value: {{ $value }}
Save block
 Click on the + next to the Blink1 block to expand its block list
Drag in the Blink1 block
  Click on the + next to the SocketIO block to expand its block list
Drag the AccelSocket block onto your canvas
Click Save Block As
Name it WindFlowSocket
Change the Socket.io Room configuration field to wind_flow
Connecting and running your services
Signal flow is defined by clicking on the blue dot at the bottom of a block and dragging the connection to the blue dot at the top of the appropriate block in the service you are creating.
Connect WindFlowSim to ReadWindFlow
Connect ReadWindFlow to WindFlowThresholdState
Connect WindFlowThresholdState to ColorAndWindFlow
Connect ColorAndWindFlow to Blink1 and WindFlowSocket
Save the Lab4 service
Your service should look similar to: [INSERT SCREENSHOT OF LAB4]
Start the Lab4 service

Go checkout the output!
Once the service has successfully started, use your computer browser to navigate to https://nio.school/lab4 in your browser
Make sure your mobile phone browser is still connected to https://n.io/mobile. Shake your phone to turn on the fan, which will increase the wind flow sensor reading, and will light the LED
Shake your phone again to turn the fan off, which will decrease the wind flow sensor reading, and will turn the LED off
You should see data similar to below: [INSERT SCREENSHOT OF LAB4 OUTPUT]
