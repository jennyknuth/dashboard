<video controls height='200px' style="float: right; margin-left: 20px" src="http://techslides.com/demos/sample-videos/small.webm" type="video/webm" >
  <source src="http://techslides.com/demos/sample-videos/small.webm" type="video/webm" />
  <source src="http://techslides.com/demos/sample-videos/small.ogv" type="video/ogg" />
  <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" />
  <source src="http://techslides.com/demos/sample-videos/small.3gp" type="video/3gp" />
</video>

In this lab you will be using the red SensorTag to turn the Blink1 LED dongle on and off. A SensorTag is a contained device with a number of sensors for IoT testing and use. The SensorTag is produced by Texas Instruments. When the SensorTag is facing up, the LED will turn on, and when you flip it over so the SensorTag is facing down, the LED will turn off. The LED state will be shown at: [https://nio.school/labtest/sensorTag](https://nio.school/labtest/sensorTag).

### Designer Instructions

  1. Navigate to `designer.n.io/?instanceIp=[your_ip_address]` again in your browser

  1.  Create a new service

  1. Name it `Lab3`

  * Simulate signals to trigger SensorTag reads

      1. Drag a `CounterIntervalSimulator` block onto your canvas

      1.  Name it `SensorTagSim`

      1. Keep all of the default configuration fields

  * Accessing the Texas Instruments sensor

      1. Drag a `SensorTagRead` block onto your canvas

      1. Name it `SensorTag`

      1. Click on the `+` by `Sensor Tag Config`

      1. Fill in the following configuration fields:

          `Device Address: [[SENSORTAG_ADDRESS]]`

      1. Check the following boxes under `Sensors`
            `Accelerometer`

      1. Save block

  * Turning on your LED by signaling a state change
  > StateChange blocks maintain a state and when state changes, a signal is notified that contains the state and prev_state.

      1. Drag a `StateChange` block onto your canvas

      1. Name it `Blink1State`
      1. Fill in the following configuration fields:

          `Initial State: {{ False }}`
          `State: {{ $accelerometer[“z_accel_g”] > 0 }}`

      1. Save block

  * Setting LED color using `DynamicFields` Block

      1. Drag a `DynamicFields` block onto your canvas

      1. Name it `Blink1Colors`
      1. Check the box next to `Exclude existing fields?`
      1. Click the `+` next to `Fields` 3 times
      1. Fill in each field with the following Name/Value pairs:

          `Name: blue `
          `Value: {{ 203 if $state else 0 }}`

          `**Attribute Name**: red `
          `**Attribute Value**: {{ 65 if $state else 0 }}`

          `**Attribute Name**: green `
          `**Attribute Value**: {{ 195 if $state else 0 }}`

          >The attribute values above are necessary in order to toggle the LED on/off. We have set the variable state to `True` if the z_acceleration is > 0 and `False` if it’s < 0. Therefore, the blue attribute will be set to 42 if state is `True`, otherwise, it will be set to 0, meaning the LED should turn off.

      1. Save block

  * Controlling the Blink1 LED

      1. Drag a `Blink1` block onto your canvas

      1. Name it `Blink1`
      1. Fill in the following configuration fields:

          `Blue: {{ $blue }}`

          `Red: {{ $red }}`

          `Green: {{ $green }}`

          >Note: you can change the red/green/blue values from 42, 206, and 32 to set the Blink1 LED to whatever color you’d like. Each of the values ranges from 0-255, so to set the LED to lime green you would have the following values:
          red: 0, green: 255, blue: 0
          Or to set it to purple you would change them to: red: 128, green: 0, blue: 128

      1. Save block

 * Publishing data to a Socket.IO room for web UI integration

      1. Click on the `+` next to `SocketIO` to expand its block list

      1. Drag the `AccelSocket` block onto your canvas
      1. Click `Save Block As`
      1. Name it `Blink1Socket`
      1. Change the `Socket.io Room` configuration field to `blink1`
      1. Save block

### Connect and run your services

Signal flow is defined by clicking on the blue dot at the bottom of a block and dragging the connection to the blue dot at the top of the appropriate block in the service you are creating.

  1. Connect the `SensorTagSim` block to the `SensorTag` block

  1. Connect the `SensorTag` output node sensors to the `Blink1State` block
  1. Connect the `Blink1State` block to the `Blink1Colors` block
  1. Connect the `Blink1Colors` block to the `Blink1` block and to the `Blink1Socket` block
  1. Save the `Lab3` service
  1. Your service should look similar to:
    ![lab 3 service](./img/instructions/sensorTag-service.png)
  1. Start the `Lab3` service
  1. Click the button on the left side of the Texas Instruments SensorTag provided in your kit to connect it to the Bluetooth Dongle plugged into the Raspberry Pi

## Now to turn the LED on/off…

Once the service has successfully started, navigate to https://nio.school/sensorTag in your browser.

Flip the Texas Instruments SensorTag from face up to face down to turn the LED on and off.

You should see data that looks similar to this:

![lab 3 output](./img/instructions/sensorTag-output.png)
