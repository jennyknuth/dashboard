Since n.io deals with both hardware inputs and outputs, it is often a useful platform in desiging control systems. In this lab you will reuse the services from Lab 2 where you shake your phone and control a fan. In addition, the fan will be directed at a wind-flow sensor. When n.io senses enough wind velocity across the sensor the Blink1 LED you used in Lab 3 will turn on. The wind-flow sensor is on the breadboard in front of the fan and looks like this:

![wind-flow sensor](./img/instructions/wind-sensor.png)

Shake your phone again to turn off the fan. The wind speed will drop, the change will be sensed by n.io, and the LED will turn off.

After the service is built and running, you will be able to see the state of the fan, accelerometer, and LED in the box above.

### Hardware Instructions
1. Insert the 9v battery into the 9v battery holder

![battery](./img/instructions/battery.jpg)

### Designer Instructions

#### Stop Lab 3
> Because the Blink1 LED can only receive signals from one service at a time, to run this lab, you need to stop `Lab3`. We won't reuse the `Lab3` service, but we will use the Blink1 block again (see below).

1. In the designer ([https://designer.n.io](https://designer.n.io)), navigate to your `Lab3` service and from the down arrow next to the `Lab3` label at the top, click `stop`

#### Start Lab 2
> We will be reusing the services from Lab 2

1. Make sure that your `Lab2` and `FanToggler` services are still running
1. If they are stopped, start each one

#### Create Lab 4
1. Create a new service
1. Name it `Lab4`
1. Select the `Lab4` service

#### Simulate signals to trigger Wind Flow Sensor reads
1. Click on the **IIS** category on the right side pane of the designer
2. Drag the `+ Identity Interval Simulator` template block onto your canvas
2. Name it `WindFlowSim` and click `accept`
2. Click the three dots in the upper right-hand corner of the block to open the configuration panel
2. Keep the default configuration and click `save` at the bottom of the panel

#### Read from the wind flow sensor
> We will use the `MCP30 0x` block to read values from the wind flow sensor. Just like the `SensorTagRead` block, it works by polling the sensor when it receives incoming signals. You can begin to imagine the modularity that n.io provides now—swapping out a different sensor or hardware type means only having to replace one block in a service!

1. Click on the **MCP3** category on the right side pane of the designer
2. Drag the `+ MCP30 0x` template block onto your canvas
2. Name it `ReadWindFlow`
2. Keep the default configuration fields
2. Save the block

#### Turn on your LED by signaling a state change
> Remember, the `StateChange` block holds onto state. Before our state was whether the SensorTag was facing up or down. This time, the state we want to keep track of is whether wind is flowing through the sensor or not. The characteristics of the sensor hardware define that if the voltage read is between 0 and 2.8 volts, it means wind is flowing past the sensor.

1. Click on the **SC** category on the right side pane of the designer
1. Drag the `+ State Change` template block onto your canvas
1. Name it `WindFlowThreshold`
1. Uncheck the `Exclude Existing Fields` checkbox
1. Uncheck the `Load from Persistence?` checkbox
1. Fill in the following configuration field:

    **State:** `{{ 0 < $volts < 2.8 }}`
1. Save the block

#### Add `wind_flow` attribute to signal
1. Click on the **DF** category on the right side pane of the designer
1. Drag the `+ Dynamic Fields` template block onto your canvas
1. Name it `ColorAndWindFlow` and click `accept`
1. Click the `+` inside the `Fields` attribute *4 times*
1. Fill in the new fields with the following name-value pairs:

      **Attribute Name:** `wind_flow`

      **Attribute Value:** `{{ $volts }}`

      **Attribute Name:** `red`

      **Attribute Value:** `{{ 65 if $state else 0 }}`

      **Attribute Name:** `green`

      **Attribute Value:** `{{ 195 if $state else 0 }}`

      **Attribute Name:** `blue`

      **Attribute Value:** `{{ 203 if $state else 0 }}`

1. Save the block

#### Control the Blink1 LED
>In this step, you will reuse the `Blink1` block you created and configured in the SensorTag service

1. Click on the **B1** category on the right side pane of the designer
1. Instead of using the block _template_ as we have done in the past, drag the pre-existing, pre-configured `Blink1` block onto your canvas and simply reuse it. Another benefit of n.io is the reusability it provides!

#### Publish data to a Socket.IO room
1. Click on the **SIO** category on the right side pane of the designer
1. Drag the `+ Socket IO` template block onto your canvas
1. Name it `WindFlowSocket` and click `accept`
1. Fill in the following configuration fields:

    **Port**: `[[SOCKETIO_PORT]]`

    **Socket.io Room**: `wind_flow`

    **SocketIo Host**: `[[SOCKETIO_HOST]]`

1. Save the block

#### Connect and run your services
1. Connect the `WindFlowSim` block to the `ReadWindFlow` block
1. Connect the `ReadWindFlow` block to the `WindFlowThresholdState` block
1. Connect the `WindFlowThresholdState` block to the `ColorAndWindFlow` block
1. Connect the `ColorAndWindFlow` block to the `Blink1` block and also to the `WindFlowSocket` block

#### Save the `Lab4` service
1. Click the down arrow next to the `Lab4` label at the top of the screen
1. Click `save`

#### Start the `Lab4` service
1. Click the down arrow next to the `Lab4` label at the top of the screen
1. Click `start`
1. Your service should look similar to this:

![lab 4 service](./img/instructions/flow-service.png)

### Check the output!

1. Make sure your mobile phone browser is still connected to your nio.school mobile site [{{MOBILE_URL}}](MOBILE_URL). Shake your phone to turn on the fan. This will increase the wind flow sensor reading and light the LED.

1. Shake your phone again to turn the fan off. This will decrease the wind flow sensor reading and turn off the LED

1. Scroll to the top of this page to see the output of your service.

### Troubleshooting guide

**oops! Unable to Connect**
* The system designer is somewhat unique from many web applications in that it connects **directly** to your n.io instances. So if you try to load an instance and you see the unable to connect message it means that your browser is unable to reach the instance. You can retry a connection by closing the instance and reopening it in the designer by clicking on the instance name. If you are unable to connect to your {{PI_INSTANCE}} instance, follow the power and networking troubleshooting steps below.

**Saved blocks**
* Make sure that all blocks are saved in your `Lab4` service. You should not see any of the little yellow or blue badges on the top left of the blocks—these indicate that the block has unsaved changes.

**Check for loose connections**
* Check that all wires are connected
* Verify that the wind flow sensor is seated in the breadboard

**Check power**
* Ensure that the USB cable is connected to the Pi and a computer
* Ensure that the AT&T Unite Express is on
* Ensure that the 9 volt battery is in place and has charge

**Check network**
* Ensure that the AT&T Unite Express shows a red 1 indicating that it is connected to the Pi. If not, power both off, connect the USB cable to the Pi, and then restart the AT&T Unite Express.

**Check configuration**
* Make sure that your `Lab3` service is stopped
* Make sure that your `Lab2` and `FanToggler` services are still running
* Review lab instructions to ensure all steps were followed correctly

## Congratulations!

### This is the end of this edition of n.io school. You have configured n.io blocks, services, and instances; talked to the cloud and the edge; and connected to hardware, your phone, the weather, and a website. Where else can you go? What do you want to **n.io**?
