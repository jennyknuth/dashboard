In this lab you will be using the red SensorTag to turn the Blink1 LED dongle on and off. A SensorTag is a contained device with a number of sensors for IoT testing and use. The SensorTag is produced by Texas Instruments. When the SensorTag is facing up, the LED will turn on, and when you flip it over so the SensorTag is facing down, the LED will turn off.

After the service is built and running, you will be able to see the state of the LED in the box above (**https://nio.school/[your unique lab number]/sensorTag**).

### Designer Instructions
1. In the designer ([https://designer.n.io](https://designer.n.io)), navigate to your `pi` instance and create a new service
1. Name it `Lab3`
1. Click the `Lab3` service located on the left side of the screen

#### Simulate signals to trigger SensorTag reads
1. Click on the **CIS** category on the right side pane of the designer
2. Drag the `+ Counter Interval Simulator` template block onto your canvas
2. Name it `SensorTagSim` and click `accept`
2. Click the three dots in the upper right-hand corner of the block to open the configuration panel
2. Keep the default configuration and click `save` at the bottom of the panel

#### Access the Texas Instruments sensor
1. Click on the **STR** category on the right side pane of the designer
2. Drag the `+ Sensor Tag Read` template block onto your canvas
2. Name it `SensorTag`
2. Click the `+ Sensor Tag Config` in **Sensor Tag Config**
2. Fill in the following configuration fields:

    **Device Address:** `[[SENSORTAG_ADDRESS]]`

2. From the list of **Sensors** select `Accelerometer`
2. Save the block

#### Turn on your LED by signaling a state change
>StateChange blocks maintain a state and when state changes, a signal is emitted that contains the `state` and `prev_state`.

1. Click on the **SC** category on the right side pane of the designer
2. Drag the `+ State Change` template block onto your canvas
2. Name it `Blink1State`
2. Fill in the following configuration fields:

    **Initial State:** `{{ False }}`

    **State:** `{{ $accelerometer[“z_accel_g”] > 0 }}`
  >Here we set the state variable to `True` if the z_acceleration is > 0 and `False` if it’s < 0.

1. Save the block

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

  >Here we check if the state variable we set above is `True` or `False` (if it exists, `$state` is `True`). The blue attribute will be set to 203 if state exists, otherwise, it is `False` and will be set to 0, meaning the LED should turn off.

  >Note: you can change the red/green/blue values from 65, 195, and 203 to set the Blink1 LED to whatever color you’d like. Each of the values ranges from 0-255, so to set the LED to lime green you would set them to `red: 0, green: 255, blue: 0`. Or to set it to purple you would change them to `red: 128, green: 0, blue: 128`.

1. Save the block

#### Control the Blink1 LED
1. Click on the **B1** category on the right side pane of the designer
2. Drag the `+ Blink 1` template block onto your canvas
2. Name it `Blink1`
2. Fill in the following configuration fields:

    **Blue:** `{{ $blue }}`

    **Green:** `{{ $green }}`

    **Red:** `{{ $red }}`

1. Save the block

#### Publish data to a Socket.IO room for web UI integration
1. Click on the **SIO** category on the right side pane of the designer
1. Drag the `+ Socket IO` block onto your canvas
1. Name it `Blink1Socket` and click `accept`
1. Fill in the following configuration fields:

    **Port**: `[[SOCKETIO_PORT]]`

    **Socket.io Room**: `blink1`

    **SocketIo Host**: `[[SOCKETIO_HOST]]`
1. Save the block

### Connect and run your service
1. Connect the `SensorTagSim` block to the `SensorTag` block
1. Connect the `SensorTag` output node **sensors** to the `Blink1State` block
1. Connect the `Blink1State` block to the `Blink1Colors` block
1. Connect the `Blink1Colors` block to the `Blink1` block and to the `Blink1Socket` block

#### Save the `Lab3` service
1. Click the down arrow next to the `Lab3` label at the top of the screen
1. Click `save`

#### Start the `Lab3` service
1. Click the down arrow next to the `Lab3` label at the top of the screen
1. Click `start`

#### Your service should look similar to this:

  ![lab 3 service](./img/instructions/sensorTag-service.png)

### Hardware Instructions
Click the small round power button on the side of the Texas Instruments SensorTag provided in your kit to connect it to the Bluetooth Dongle plugged into the Raspberry Pi. A small green LED on the face of the SensorTag will flash green.

  ![Texas Instruments sensorTag](./img/instructions/sensortag.png)

### Turn the LED on and off
Flip the Texas Instruments SensorTag from face up to face down to turn the LED on and off.

Scroll to the top of this page (**https://nio.school/[your unique lab number]/sensorTag**) to see the output of your service.
