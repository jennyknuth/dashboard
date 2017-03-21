In this lab you will build a service that will allow you to shake your phone to toggle the fan on and off. After the service is built and running, you will be able to see the state of the fan and the shake pattern from the accelerometer in the box above (**https://nio.school/[your unique lab number]/fan**).

### Hardware Instructions
1. Press the power button on the AT&T Unite Express. You may need to hold it down for a couple of seconds. You can let go of the power button when the AT&T symbol lights up the screen. (If you want to power your AT&T Unite Express, simply plug it in to your computer with a microUSB cable—you can ignore the prompt to install any drivers.) Wait for it to turn on fully before moving on to the next step. You will know it's connected when there is a notification badge with a `1` next to the wireless icon (shown below):

     ![wifi](./img/instructions/att-express.png)
     <!-- Add up close image of screen -> image of one device connected -->

1. Plug in the microUSB cable to the correct port on the Raspberry Pi and plug the other end into a USB port on your computer to power on the Pi

![Pi connected to computer](./img/instructions/pi.png)
1. Once the Raspberry Pi turns on, the red LED by the microUSB port should remain solid

### Designer Instructions
1. Go to your **intro** instance in the designer ([https://designer.n.io](https://designer.n.io))
1. Click on **intro-lab-2** located on the left side of the screen
1. Create a new service by clicking the `+ add new service` button
1. Name it `Lab2` and click `accept`

#### Subscribe to the phone’s shake data
>The Subscriber and Publisher blocks are used to send signals between services. A Publisher block posts signals to a specified `Topic`, while Subscriber blocks listen for signals on specific topics and pass them in to their respective services. In this case, the `DetectShake` service provided for you is publishing signals on the `shake` topic. We will configure a Subscriber block to pick up the signals on this `shake` topic by modifying its `Topic` field.

1. On the right hand side you'll see a bunch of block categories. Scroll down until you see the **Sub** category
1. Click on the **Sub** category
1. Drag the `+ Subscriber` template block onto your canvas
1. Name it `SubscribeShake` and click `accept`
>Notice the yellow dot in the upper left corner of the block. This means the block has unsaved configuration changes.

4. Click the three dots in the upper right hand corner of the block to open the configuration panel
1. To configure your block, fill in the following field:

     **Topic:** `shake`
1. Click `save` at the bottom of the panel

#### Strip signal of everything but acceleration data
>`DynamicFields` blocks are used to reformat incoming signals that are assigned by the `fields` attribute. If the `Exclude existing fields?` checkbox is checked, previous key:value pairs will be discarded and the block will only pass on the key:value pairs you configure in the configuration panel. If the `Exclude existing fields?` checkbox is not checked, it will add the key:value pairs you configure to the existing signal.

  1. Click on the **DF** category on the right side pane of the designer
  1. Drag the `+ Dynamic Fields` template block onto your canvas
  1. Name it `GetAccelData` and click `accept`
  1. Click the three dots in the upper right hand corner of the block to open the configuration panel
  1. Check the `Exclude existing fields?` checkbox
  1. Click on the `+ Fields` in the `Fields` attribute
  1. Fill in the following configuration fields:

       **Attribute Name:** `accel`

       **Attribute Value:** `{{ $accel }}`
  >Surrounding a value with `{{ }}` will tell n.io to compile the value as Python code. Using a `$` character tells n.io to look for a matching key from the incoming signal. In this case, the incoming signal has an `accel` key and we want n.io to evaluate the `Attribute Value` field to be the same as the value of the `accel` key.

  8. Click `save` at the bottom of the panel

#### Publish shake data to fan

  1. Click on the **Pub** category on the right side pane of the designer
  1. Drag the `+ Publisher` template block onto your canvas
  1. Name it `PublishFan` and click `accept`
  1. Fill in the following field:

       **Topic**: `fan`
  6. Save the block

### Connect and run your services
>Signal flow is defined by clicking on the blue circle at the bottom of a block and dragging the connection to the blue circle at the top of the appropriate block in the service you are creating

1. Connect the `SubscribeShake` block to the `GetAccelData` block
1. Connect the `GetAccelData` block to the `PublishFan` block

#### Save the `Lab2` service

1. Click the down arrow next to the `Lab2` label at the top of the screen
1. Click `save`

#### Start the `Lab2` service

1. Click the down arrow next to the `Lab2` label at the top of the screen
1. Click `start`

#### Your service should look similar to this:

![fan lab service](./img/instructions/fan-service.png)

## Congratulations you have successfully created your first n.io service!!

### Turn the fan on and off

1. Using your mobile phone browser, login to [nio.school/mobiletest](https://nio.school/mobiletest) again if you have left the page (allowing n.io to again access your location)
1. Shake your phone to trigger movement of the accelerometer
1. Once the signal has been transmitted through the web socket, the fan should turn on
1. Shake your phone again to turn the fan off


Scroll to the top of this page (**https://nio.school/[your unique lab number]/fan**) to see the output of your service.
