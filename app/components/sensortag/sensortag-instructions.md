In this lab you will be using the red SensorTag to turn the Blink1 LED dongle on and off. A SensorTag is a contained device with a number of sensors for IoT testing and use. The SensorTag is produced by Texas Instruments. When the SensorTag is facing up, the LED will turn on, and when you flip it over so the SensorTag is facing down, the LED will turn off.

After the service is built and running, you will be able to see the state of the LED in the box above (https://nio.school/[your unique lab number]/sensorTag).

### Designer Instructions
1. In the [designer](https://designer.n.io), create a new service
1. Name it `Lab3`

#### Simulate signals to trigger SensorTag reads
1. Drag a `CounterIntervalSimulator` block onto your canvas
1. Name it `SensorTagSim`
1. Keep all of the default configuration fields

#### Access the Texas Instruments sensor
1. Drag a `SensorTagRead` block onto your canvas
1. Name it `SensorTag`
1. Click the three dots in the upper right hand corner of the block to open the configuration panel
1. Click the `+` in **Sensor Tag Config**
1. Fill in the following configuration fields:

    **Device Address:** `[[SENSORTAG_ADDRESS]]`

1. From the list of **Sensors** select `Accelerometer`
1. Save block

#### Turn on your LED by signaling a state change
>StateChange blocks maintain a state and when state changes, a signal is notified that contains the state and prev_state.

1. Drag a `StateChange` block onto your canvas
1. Name it `Blink1State`
1. Fill in the following configuration fields:

    **Initial State:** `{{ False }}`

    **State:** `{{ $accelerometer[“z_accel_g”] > 0 }}`
  >Here we set the state variable to `True` if the z_acceleration is > 0 and `False` if it’s < 0.

1. Save block

#### Set the LED color using `DynamicFields` Block
1. Drag a `DynamicFields` block onto your canvas
1. Name it `Blink1Colors`
1. Begin your block configuration by checking the box next to `Exclude existing fields?`
1. Click the `+` inside **Fields** 3 times
1. Fill in each field with the following Name/Value pairs:

    **Attribute Name:** `red`
    **Attribute Value:** `{{ 65 if $state else 0 }}`

    **Attribute Name:** `green`
    **Attribute Value:** `{{ 195 if $state else 0 }}`

    **Attribute Name:** `blue`
    **Attribute Value:** `{{ 203 if $state else 0 }}`

  >Here we check if the state variable we set above is `True` or `False` (if it exists, it is `True`). The blue attribute will be set to 203 if state exists, otherwise, it is `False` and will be set to 0, meaning the LED should turn off.

  >Note: you can change the red/green/blue values from 65, 195, and 203 to set the Blink1 LED to whatever color you’d like. Each of the values ranges from 0-255, so to set the LED to lime green you would set them to `red: 0, green: 255, blue: 0`. Or to set it to purple you would change them to `red: 128, green: 0, blue: 128`.

1. Save block

#### Control the Blink1 LED
1. Drag a `Blink1` block onto your canvas
1. Name it `Blink1`
1. Fill in the following configuration fields:

    **Blue:** `{{ $blue }}`

    **Red:** `{{ $red }}`

    **Green:** `{{ $green }}`


1. Save block

#### Publish data to a Socket.IO room for web UI integration
1. Click on the **SIO** block category to reveal its block list
1. Drag a `Blink1Socket` block onto your canvas
1. Use the configuration that is already set up
1. Save block

### Connect and run your service
>Signal flow is defined by clicking on the blue dot at the bottom of a block and dragging the connection to the blue dot at the top of the appropriate block in the service you are creating.

1. Connect the `SensorTagSim` block to the `SensorTag` block
1. Connect the `SensorTag` output node sensors to the `Blink1State` block
1. Connect the `Blink1State` block to the `Blink1Colors` block
1. Connect the `Blink1Colors` block to the `Blink1` block and to the `Blink1Socket` block
1. Save the `Lab3` service
1. Your service should look similar to:

![lab 3 service](./img/instructions/sensorTag-service.png)
1. Start the `Lab3` service

### Hardware Instructions
Click the small round power button on the side of the Texas Instruments SensorTag provided in your kit to connect it to the Bluetooth Dongle plugged into the Raspberry Pi. A small green LED on the bottom of the SensorTag will flash green.

### Turn the LED on and off

Flip the Texas Instruments SensorTag from face up to face down to turn the LED on and off.

Scroll to the top of this page (**https://nio.school/[your unique lab number]/sensorTag**) to see the output of your service.
