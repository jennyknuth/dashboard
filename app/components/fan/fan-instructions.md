In this lab you will build a service that will allow you to shake your phone to toggle the fan on and off. After the service is built and running, you will be able to see the state of the fan and the shake pattern from the accelerometer in the box above. (`nio.school/[your unique lab number]/fan`)

### Hardware Instructions

1. Press the power button on the AT&T Unite Express. Wait for it to turn on fully before moving on to the next step. You will know it is ready when the screen looks similar to:

     ![wifi](./img/instructions/att-express.png)

1. Plug in the microUSB cable to the correct port on the Raspberry Pi and plug the other end into a USB port on your computer to power on the Pi

    ![Pi connected to computer](./img/instructions/pi.png)

1. Once the Raspberry Pi turns on, the red LED by the microUSB port should remain solid

### Designer Instructions

1. Create a new service by clicking the `+ add new service` button

1. Name it `Lab2`

#### Subscribe to the phone’s shake data
>The Subscriber and Publisher blocks are used to send signals between services. A Publisher block posts signals to a specified `Topic`, while Subscriber blocks listen for those signals and pass them on to their respective services. In this case, the `DetectShake` service is publishing to the `shake` topic. We will configure the Subscriber block by modifying the `Topic` field in the block to pick up the signals from the end of the `DetectShake` service that has been provided for you

  1. Click on the **Sub** category on the right side pane of the designer

  1. Drag the `+ Subscriber` template block onto your canvas
  1. Name it `SubscribeShake` and click `accept`
  >Notice the blue dot in the upper left corner of the block. This means the block has unsaved configuration changes.

  4. Click the three dots in the upper right hand corner of the block to open the configuration panel

  1. To configure your block, fill in the following field:

       **Topic:** `shake`

  1. Click `save` at the bottom of the panel

#### Strip signal of everything but acceleration data
>`DynamicFields` blocks are used to reformat incoming signals that are assigned by the `fields` attribute. If the `Exclude existing fields?` checkbox is checked, previous key:value pairs will be discarded and the block will only pass on the key:value pairs you configure in the configuration panel. If the `Exclude existing fields?` checkbox is not checked, it will combine the key:value pairs you configure with the existing signal.

  1. Click on the **DF** category on the right side pane of the designer

  1. Drag the `+ Dynamic Fields` template block onto your canvas
  1. Name it `GetAccelData` and click `accept`
  1. Click the three dots in the upper right hand corner of the block to open the configuration panel
  1. Check the `Exclude existing fields?` checkbox
  1. Click on the `+` in the `Fields` attribute
  1. Fill in the following configuration fields:

       **Attribute Name:** `accel`

       **Attribute Value:** `{{ $accel }}`
  >Surrounding a value with `{{ }}` will tell n.io to compile the value as Python code. Using a `$` character tells n.io to look at the value matching the specified key from the incoming signal. In this case, the incoming signal has an `accel` key and we want n.io to evaluate the `Attribute Value` field to be the same as the value of the `accel` key.

  8. <p>Click <code>save</code> at the bottom of the panel</p>

#### Publish shake data to fan

  1. Click on the **Pub** category on the right side pane of the designer

  1. Drag the `+ Publisher` template block onto your canvas
  1. Name it `PublishFan` and click `accept`
  1. Click the three dots in the upper right hand corner of the block to open the configuration panel
  1. Fill in the following field:

       **Topic**: `fan`
  6. Click `save` at the bottom of the panel

### Connect and run your services
>Signal flow is defined by clicking on the blue circle at the bottom of a block and dragging the connection to the blue circle at the top of the appropriate block in the service you are creating

1. Connect the `SubscribeShake` block to the `GetAccelData` block

1. Connect the `GetAccelData` block to the `PublishFan` block

#### Save the `Lab2` service

  1. Click the down arrow next to the `Lab2` label at the top of the screen

  1. Click `save`

  3. Your service should look similar to this:

![fan lab service](./img/instructions/fan-service.png)

#### Start the `Lab2` service

1. Click the down arrow next to the `Lab2` label at the top of the screen

1. Click `start`
## Congratulations you have successfully created your first n.io service!!

### Turn the fan on and off

1. Using your mobile phone browser, login to `https://nio.school/mobiletest` again if you have left the page (allowing n.io to again access your location)

1. Shake your phone to trigger movement of the accelerometer
1. Once the signal has been transmitted through the web socket, the fan should turn on
1. Shake your phone again to turn the fan off


Scroll to the top of this page (`nio.school/[your unique lab number]/fan`) to see the output of your service.
