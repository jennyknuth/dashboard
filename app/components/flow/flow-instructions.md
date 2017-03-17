In this lab you will shake your phone to control a fan. When n.io senses enough movement from your phone’s accelerometer, the fan will toggle on and off. Directing the fan at the wind-flow sensor will increase the sensor’s reading. When n.io senses enough wind speed, the LED will light.

To turn the fan off, shake your phone again. The wind speed will drop, n.io will sense this change, and the LED will turn off.

After the service is built and running, you will be able to see the state of the LED in the box above (https://nio.school/[your unique lab number]/flow).

### Hardware Instructions
As long as the fan is still connected to the relay on the breadboard, point it toward the wind-flow sensor (shown below):

![wind flow sensor](./img/instructions/wind-sensor.png)

### Designer Instructions
1. In the designer ([https://designer.n.io](https://designer.n.io)), create a new service
3. Name it `Lab4`
1. Make sure the `Lab2`, `DetectShake`, `MobileAccelDataHandler` and `FanToggler` services are still running
2. If they are not running, start each one

#### Simulate signals to trigger Wind Flow Sensor reads
1. Click on the **CIS** category on the right side pane of the designer
2. Drag the `+ Counter Interval Simulator` template block onto your canvas
2. Name it `WindFlowSim` and click `accept`
2. Click the three dots in the upper right hand corner of the block to open the configuration panel
2. Keep the default configuration and click `save` at the bottom of the panel

#### Read from the wind flow sensor
1. Click on the **GPIO** category on the right side pane of the designer
2. Drag the `+ GPIO Read` template block onto your canvas
>Make sure the header on the top of the pane says `GPIO Read`

2. Name it `ReadWindFlow` and click `accept`
2. Click the three dots in the upper right hand corner of the block to open the configuration panel
2. Fill in the following configuration field:

    **Pin:** `24`

2. Click `save` at the bottom of the panel

#### Turn on your LED by signaling a state change
1. Click on the **SC** category on the right side pane of the designer
1. Drag the `+ State Change` template block onto your campus
1. Name it `WindFlowThreshold` and click `accept`
1. Click the three dots in the upper right hand corner of the block to open the configuration panel
1. Uncheck the `Exclude Existing Fields` box
1. Fill in the following configuration field:

    **State:** `{{ $value > 1 }}`
1. Click `save` at the bottom of the panel

#### Add `wind_flow` attribute to signal
1. Click on the **DF** category on the right side pane of the designer
1. Drag the `+ Dynamic Fields` template block onto your canvas
1. Name it `ColorAndWindFlow` at click `accept`
1. Click the three dots in the upper right hand corner of the block to open the configuration panel
1. Click the `+` inside the `Fields` attribute
1. Fill in the new field with the following name-value pair:

    **Attribute Name:** `wind_flow`

    **Attribute Value:** `{{ $value }}`

1. Click `save` at the bottom of the panel

#### Control the Blink1 LED
1. Click on the **B1** category on the right side pane of the designer
1. Drag the `Blink1` block onto your canvas
>You created and configured this block in the SensorTag service

#### Publish data to a Socket.IO room
1. Click on the **SIO** category on the right side pane of the designer
1. Drag the `+ Socket IO` block onto your canvas
1. Name it `WindFlowSocket` and click `accept`
1. Click the three dots in the upper right hand corner of the block to open the configuration panel
1. Fill in the following configuration fields:

    **SocketIo Host**: `[[ SOCKETIO_HOST ]]`

    **Port**: `[[ SOCKETIO_PORT ]]`

    **Socket.io Room**: `wind_flow`

#### Connect and run your services
>Signal flow is defined by clicking on the blue dot at the bottom of a block and dragging the connection to the blue dot at the top of the appropriate block in the service you are creating.

1. Connect the `WindFlowSim` block to the `ReadWindFlow` block
1. Connect the `ReadWindFlow` block to the `WindFlowThresholdState` block
1. Connect the `WindFlowThresholdState` block to the `ColorAndWindFlow` block
1. Connect the `ColorAndWindFlow` block to the `Blink1` block and also to the `WindFlowSocket` block

#### Save the `Lab4` service
1. Click the down arrow next to the `Lab4` label at the top of the screen
1. Click `save`
1. Your service should look similar to this:

![lab 4 service](./img/instructions/flow-service.png)

#### Start the `Lab4` service

1. Click the down arrow next to the `Lab4` label at the top of the screen

1. Click `start`

### Go checkout the output!

1. Make sure your mobile phone browser is still connected to **https://nio.school/mobiletest**. Shake your phone to turn on the fan, which will increase the wind flow sensor reading and light the LED

1. Shake your phone again to turn the fan off, which will decrease the wind flow sensor reading and turn off the LED

Scroll to the top of this page (**https://nio.school/[your unique lab number]/flow**) to see the output of your service.
