The cloud is fun, but n.io gets way more fun when we get hardware involved! In this lab you will build a service that will allow you to shake your phone to turn the fan on and off. The cloud instance and the pi instance will work together to achieve this! After the service is built and running, you will be able to see the state of the fan and the shake pattern from the accelerometer in the box above.

### Hardware Instructions
1. Plug the black WiFi antenna into the black Panda Wireless dongle on the side of the Raspberry Pi

![WiFi antenna](./img/instructions/panda.jpg)
2. Plug in the microUSB cable to the correct port on the Raspberry Pi and plug the other end into a USB port on your computer to power on the Pi. You can also use a USB cube that goes to the wall if that is more convenient—we only use USB for powering the Pi.


![Pi connected to computer](./img/instructions/pi.jpg)
3. Once the Raspberry Pi turns on, the red LED by the microUSB port on the Pi should remain solid

1. Press the power button on the AT&T Unite Express. You may need to hold it down for a couple of seconds. You can let go of the power button when the AT&T symbol lights up the screen. (If you want to charge your AT&T Unite Express, simply plug it in to your computer with a microUSB cable—you can ignore the prompt to install any drivers.) Wait for it to turn on fully before moving on to the next step. You will know it's connected when there is a notification badge with a `1` next to the wireless icon (shown below):

     ![wifi](./img/instructions/att-express.png)
     <!-- Add up close image of screen -> image of one device connected -->

### Designer Instructions
1. Go to your **lab** system in the designer ([https://designer.n.io](https://designer.n.io))
1. This time, click on the instance named **{{PI_INSTANCE}}** located on the left side of the screen—this instance (installation) of n.io is coming from the Pi computer you just powered on
1. You should see a pre-configured service in the instance, `FanToggler`, that should already be running. If not, start it.
1. Create a new service by clicking the `+ add new service` button
1. Name it `Lab2` and click `accept`
1. Click on the `Lab2` service on the left to activate it, bringing up a blank canvas

#### Listen to the phone’s shake data using Socket.IO

1. On the right-hand side you'll see a bunch of block types. These represent the blocks that are installed on your n.io instance. Scroll down until you see the **SIO** label, which represents the `SocketIO` block type.
1. Click on the **SIO** category
1. Add a new instance of this block to your service by dragging the `+ Socket IO` template block onto your canvas
1. Name it `ShakeSocket` and click `accept`. This block will subscribe to data from the cloud instance and will receive a signal every time you shake your phone.

1. Click the three dots in the upper right-hand corner of the block to open the configuration panel

1. To configure your block, fill in the following fields:

     **Listen to SocketIo Room**: `<checked>`

     **Port:** `80`

     **Socket.io Room:** `shake`

     **SocketIo Host:** `[[SOCKETIO_HOST]]`

  This tells the block to subscribe to socket data from your socket server (this has been pre-stored in a variable called `SOCKETIO_HOST` for you) and listen for data in the `shake` room.

1. Click `save` at the bottom of the panel

#### Strip signal of everything but acceleration data
>`DynamicFields` blocks are used to reformat incoming signals that are assigned by the `fields` attribute. It is one of the most commonly used blocks in all of n.io. If the `Exclude existing fields?` checkbox is checked, previous key:value pairs will be discarded and the block will only pass on the key:value pairs you configure in the configuration panel. If the `Exclude existing fields?` checkbox is not checked, it will add the key:value pairs you configure to the existing signal.

  1. Click on the **DF** category on the right side pane of the designer
  1. Drag the `+ Dynamic Fields` template block onto your canvas
  1. Name it `GetAccelData` and click `accept`
  1. Click the three dots in the upper right-hand corner of the block to open the configuration panel
  1. Check the `Exclude existing fields?` checkbox
  1. Click on the `+ Fields` in the `Fields` attribute
  1. Fill in the following configuration fields:

       **Attribute Name:** `accel`

       **Attribute Value:** `{{ $accel }}`
  >Surrounding a value with `{{ }}` will tell n.io to compile the value as Python code. Using a `$` character tells n.io to look for a matching key from the incoming signal. In this case, the incoming signal has an `accel` key and we want n.io to evaluate the `Attribute Value` field to be the same as the value of the `accel` key.

  8. Click `save` at the bottom of the panel

#### Publish shake data to fan
>The Subscriber and Publisher blocks are used to send signals between services. A Publisher block posts signals to a specified topic, while Subscriber blocks listen for signals on specific topics in order to pass them in to their respective services.

  1. Click on the **Pub** category on the right side pane of the designer
  1. Drag the `+ Publisher` template block onto your canvas
  1. Name it `PublishFan` and click `accept`
  1. Fill in the following field:

       **Topic**: `fan`
  6. Save the block

### Connect and run your services
>Signal flow is defined by clicking on the blue circle at the bottom of a block and dragging the connection to the blue circle at the top of the appropriate block in the service you are creating

1. Connect the `ShakeSocket` block to the `GetAccelData` block
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

1. Using your mobile phone browser, navigate to your nio.school mobile site [{{MOBILE_URL}}]({{MOBILE_URL}}) again if you have left the page (allowing n.io to again access your location)
1. Shake your phone and it's built-in accelerometer data will be transmitted to a web socket—n.io picks up the acceleration data from the web socket and triggers the fan to turn on
1. Shake your phone again to turn the fan off

Return to the top of this page to see the output of your service.

### Troubleshooting guide

**oops! Unable to Connect**
* The system designer is somewhat unique from many web applications in that it connects **directly** to your n.io instances. So if you try to load an instance and you see the unable to connect message it means that your browser is unable to reach the instance. You can retry a connection by closing the instance and reopening it in the designer by clicking on the instance name. If you are unable to connect to your **{{PI_INSTANCE}}** instance, follow the power and networking troubleshooting steps below.

**Saved blocks**
* Make sure that all blocks are saved in your `Lab2` service. You should not see any of the little yellow or blue badges on the top left of the blocks—these indicate that the block has unsaved changes.

**Check for loose connections**
* Check that all wires are connected

**Check power**
* Ensure that the USB cable is connected to the Pi and a computer and that the LED by the microUSB port glows solid red
* Ensure that the AT&T Unite Express is on

**Check network**
* Ensure that the AT&T Unite Express shows a red 1 indicating that it is connected to the Pi. If not, power both off, connect the USB cable to the Pi, and then restart the AT&T Unite Express.

**Check configuration**
* Review lab instructions to ensure all steps were followed correctly
