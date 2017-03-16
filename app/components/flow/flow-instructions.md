<video controls height='200px' style="float: right; margin-left: 20px" src="http://techslides.com/demos/sample-videos/small.webm" type="video/webm" >
  <source src="http://techslides.com/demos/sample-videos/small.webm" type="video/webm" />
  <source src="http://techslides.com/demos/sample-videos/small.ogv" type="video/ogg" />
  <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" />
  <source src="http://techslides.com/demos/sample-videos/small.3gp" type="video/3gp" />
</video>

In this lab you will shake your phone to control a fan. When n.io senses enough movement from your phone’s accelerometer, the fan will toggle on or off. Directing the fan at the wind-flow sensor will increase the sensor’s reading. When n.io senses enough wind speed, the LED will light. To turn the fan off, shake your phone again. The wind speed will drop, n.io will sense this change, and the LED will turn off. You will be able to view the state of the fan and LED along with the wind speed and accelerometer data here: [https://nio.school/labtest/flow](https://nio.school/labtest/flow).

### Hardware Instructions
As long as the fan is still connected to the relay on the breadboard, point it toward the wind-flow sensor (shown below):

![wind flow sensor](./img/instructions/wind-sensor.png)

### Designer Instructions

1. Navigate to `designer.n.io/?instanceIp=[your_ip_address]` again in your browser

2. Create a new service by clicking the `Service` tab and selecting `Add Service`
3. Name it `Lab4`

There are two parts to building this service. First, you will need to detect shakes from your mobile device to turn the fan on and off. Then, you will need n.io to read from the wind-flow sensor to determine when to turn on the Blink1 LED.

* Build Shake Detector

    1. Click on the `Service` tab

    2. Make sure the `Lab2` service that you previously built is still running
    3. If it is not running, start the service

* Read From Wind Flow Sensor

    1. click on the `+` next to the `CounterIntervalSimulator` block to expand its block list

    2. Drag the `SensorTagSim` block onto your canvas
    3. Click `Save Block As`
    4. Name it `WindFlowSim`
    5. Save block
    6. Drag the `GPIORead` block onto your canvas
    7. Name it `ReadWindFlow`
    8. Fill in the following configuration field:
    `Pin:`
    9. Save block
    10. Drag the `StateChange` block onto your canvas
    11. Name it `WindFlowThresholdState`
    12. Uncheck the `Exclude Existing Fields` box
    13. Fill in the following configuration field:

        `State: {{ $value > 1 }}`
    14. Save block
    15. Click on the `+` next to the `DynamicFields` block to expand its block list
    16. Drag in `Blink1Colors` block
    17. Click `Save Block As`
    18. Name it `ColorAndWindFlow`
    19. Click the `+` next to the `Fields` attribute
    20. Fill in the new field with the following name-value pair:

        `Attribute Name: wind_flow`

        `Attribute Value: {{ $value }}`

    21. Save block
    22. Click on the `+` next to the `Blink1` block to expand its block list
    23. Drag in the `Blink1` block
    24. Click on the `+` next to the `SocketIO` block to expand its block list
    25. Drag the `AccelSocket` block onto your canvas
    26. Click `Save Block As`
    27. Name it `WindFlowSocket`
    2. Change the `Socket.io Room` configuration field to `wind_flow`

### Connect and run your services

Signal flow is defined by clicking on the blue dot at the bottom of a block and dragging the connection to the blue dot at the top of the appropriate block in the service you are creating.

  1. Connect `WindFlowSim` to `ReadWindFlow`

  1. Connect `ReadWindFlow` to `WindFlowThresholdState`
  1. Connect `WindFlowThresholdState` to `ColorAndWindFlow`
  1. Connect `ColorAndWindFlow` to `Blink1` and `WindFlowSocket`
  1. Save the `Lab4` service
  1. Your service should look similar to this:

      ![lab 4 service](./img/instructions/flow-service.png)

  1. Start the `Lab4` service

### Go checkout the output!

Once the service has successfully started, navigate to [https://nio.school/flow](https://nio.school/flow) in your browser.

Make sure your mobile phone browser is still connected to [https://n.io/mobile](https://n.io/mobile). Shake your phone to turn on the fan, which will increase the wind flow and light the LED.

Shake your phone again to turn the fan off, which will decrease the wind flow sensor reading and turn off the LED.

You should see data that looks similar to this:

![lab 4 output](./img/instructions/flow-output.png)
