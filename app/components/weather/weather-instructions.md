<video controls height='200px' style="float: right; margin-left: 20px" src="http://techslides.com/demos/sample-videos/small.webm" type="video/webm" >
  <source src="http://techslides.com/demos/sample-videos/small.webm" type="video/webm" />
  <source src="http://techslides.com/demos/sample-videos/small.ogv" type="video/ogg" />
  <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" />
  <source src="http://techslides.com/demos/sample-videos/small.3gp" type="video/3gp" />
</video>

In Lab 1, n.io will get the weather at your current location and send you a text message that contains the gathered weather data. The weather will also be displayed in the Lab 1 user interface. You will first build the n.io service to recognize your location, ping the WeatherUnderground API for weather data, send that data back to you in a text message, and display the results at: `nio.school/labtest/lab1`.

#### Designer Instructions
##### Follow these steps for Lab 1: Weather via SMS Text

1. Go to `designer.n.io` to access the Designer
1. Create a new service by clicking clicking the `+ add new service` at the bottom of the left side panel
  1. Name it `Lab1` and click `accept`

##### Subscribing to location data

> The Subscriber and Publisher blocks are used to send signals between services. A Publisher block posts signals to a specified `Topic`, while Subscriber blocks listen for those signals and pass them on to their respective services. In this case, the `LocationLookup` service is publishing to the `Location` topic. We will configure the Subscriber block by modifying the `Topic` field in the block to pick up the signals from the end of the `LocationLookup` service that has been provided for you

1. Click on the **Sub** category on the right side pane of the Designer
1. Drag the `+ Subscriber` template block onto your canvas
1. Name it `MyLocation` and click `accept`
> Notice the blue dot in the upper left corner of the block. This means the block has unsaved configuration changes

1. Click on the three dots in the upper right hand corner of the block to open the configuration panel
1. Fill in the following configuration fields:
	- **Topic**: `Location`
1. Click `save` at the bottom of the panel

##### Finding your address
1. Click on the **RG** category on the right side pane of the Designer
1. Drag the `+ ReverseGeocode` template block onto your canvas
1. Name it `FindMyAddress` and click `accept`
1. Click on the three dots in the upper right hand corner of the block to open the configuration panel
1. Fill in the following configuration fields:
	- **Latitude**: `{{ $latitude }}`
	- **Longitude**: `{{ $longitude }}`
1. Click `save` at the bottom of the panel
>Surrounding a value with `{{ }}` will tell n.io to compile the value as Python code. Using a `$` character tells n.io to look at the value matching the specified key from the incoming signal. In this case, the incoming signal has the keys *longitude* and *latitude*, and we want n.io to evaluate the **Attribute Value** field to be the value of the keys

##### Send location data only once
>The MergeState block will emit a signal every time the specified state changes from true to false or visa versa. This block’s state will only change on the first incoming signal since we set the State attribute to initially be False and then change it to True after one signal is processed

1. Click on the **MS** category on the right side pane of the Designer
1. Drag the `+ MergeState` template block onto your canvas
1. Name it `SendLocationData` and click `accept`
1. Click on the three dots in the upper right hand corner of the block to open the configuration panel
1. Fill in the following configuration fields:
	- **Initial State**: `{{ False }}`
	- **State**: `{{ True }}`
	- **State Name**: `signal_seen`
1. Click `save` at the bottom of the panel

##### Filtering signals
>The Filter block will filter signal objects based on a list of plaintext conditions, evaluated as Python code.

1. Click on the **Fil** category on the right side pane of the Designer
1. Drag in the `+ Filter` template block onto your canvas
1. Name it `NotSignalSeen` and click `accept`
1. Click on the three dots in the upper right hand corner of the block to open the configuration panel
1. Click on the `+` in the `Filter Conditions` attribute
1. Fill in the following configuration fields:
	- **Condition**: `{{ not $signal_seen }}`
1. Click `save` at the bottom of the panel

##### Accessing current conditions data from WeatherUnderground
>The WeatherUndergroundConditions block will ping the WeatherUnderground API’s conditions endpoint to gather location specific weather data. The emitted signal will include all data polled from the API.

1. Click on the **WUC** category on the right side pane of the Designer
1. Drag in the `+ Weather Underground Conditions` template block onto your canvas
1. Name it `WeatherConditions` and click `accept`
1. Click on the three dots in the upper right hand corner of the block to open the configuration panel
1. Fill in the following configuration fields:
	- **City**: `{{ $city }}`
	- **State**: `{{ $state }}`
1. Click `save` at the bottom of the panel

##### Accessing 10 day forecast from WeatherUnderground
> The WeatherUndergroundForecast10Day block will request location specific forecast data from WeatherUnderground’s 10 day forecast API endpoint. The emitted signal will include all data polled from the API.

1. Click on the **WUF1** category on the right side pane of the Designer
1. Drag in the `+ Weather Underground Forecast 10 Day` template block onto your canvas
1. Name it `WeatherForecast` and click `accept`
1. Click on the three dots in the upper right hand corner of the block to open the configuration panel
1. Fill in the following configuration fields:
	- **City**: `{{ $city }}`
	- **State**: `{{ $state }}`
1. Click `save` at the bottom of the panel

##### Sending an SMS via the Twilio Service
>The TwilioSMS block sends an SMS to the specified recipient using the Twilio service.

1. Click on the **TSMS** category on the right side pane of the Designer
1. Drag a `+ Twilio SMS` template block onto your canvas
1. Name it `SendWeatherText` and click `accept`
1. Click on the three dots in the upper right hand corner of the block to open the configuration panel
1. Click on `+` in the `Recipients` attribute
1. Fill in the following configuration fields:
	- **Number**: `{{ [your number] }}`    Eg: `{{ 5555555555 }}`
	- **Name**: `{{ [your name] }}`        Eg: `{{ Kylie }}`
	- **Message**: `The weather in {{ $current_observation["display_location"]["full"] }} is currently {{ $current_observation["temperature_string"] }} and {{ $current_observation["weather"] }}!`
1. Click `save` at the bottom of the panel

##### Publish the weather data to Socket.IO room
>SocketIO blocks communicate with a Socket.IO server to send data to a Socket.IO room and to read data from a Socket.IO room. Every input signal will be sent to the Socket.IO server room and everything sent to that room will be notified as an output signal. The [[ ]] syntax classifies the value as an environmental variable. The environmental variables are read from the nio.env file. For example, the socket.io host and port in the file would be formatted as follows: <br> **SOCKETIO_HOST**: `127.0.0.1` <br> **SOCKETIO_PORT**: `443`

1. Click on the **SIO** category on the right side pane of the Designer
1. Drag a `+ Socket IO` block onto your canvas
1. Name it `WeatherSocket`
1. Fill in the following configuration fields:
	- **SocketIoHost**: `[[SOCKETIO_HOST]]`
	- **Port**: `[[SOCKETIO_PORT]]`
	- **Socket.io Room**: `weather`
1. Click `save` at the bottom of the panel

##### Connecting and running your services
>Signal flow is defined by clicking on the blue circle at the bottom of a block and dragging the connection to the blue circle at the top of the appropriate block in the service you are creating.

1. Connect the `MyLocation` block to the `FindMyAddress` block
1. Connect the `FindMyAddress` block to the `getter` input node of the `SendLocationData` block
1. Connect the `SendLocationData` block to the `NotSignalSeen` block and the `setter` input of the same `SendLocationData` block
>This will set the `signal_seen` attribute to `True` until the service is restarted, which means the service will only query the WeatherUnderground API once for every start of the service

4. Connect the `True` output node of the `NotSignalSeen` block to the `WeatherConditions` block and also to the `WeatherForecast` block
5. Connect the `WeatherConditions` block to the `SendWeatherText` block and also to the `WeatherSocket` block
6. Connect the `WeatherForecast` block to the `WeatherSocket` block

##### Save the `Lab1` service
1. Click the down arrow next to the `Lab1` label at the top of the screen
1. Click `save`

###### Your service should look similar to:
[INSERT SCREENSHOT OF LAB1 SERVICE]

##### Start the `Lab1` service
1. Click on the down arrow next to the `Lab1` label at the top of the screen
1. Click `start`

#### Congratulations you have successfully created your first n.io service!!

##### Utilizing your n.io instance:
1. With your n.io service successfully started, use your mobile phone browser to go to `nio.school/mobiletest`
1. Press `OK` to the `“https://n.io” Would Like To Use Your Current Location` prompt
1. Enter a name and email and click `Login`

###### You will see a screen that looks like:
[INSERT SCREENSHOT OF MOBILE]

###### You will soon receive a text from n.io with the weather of your current location
###### Navigate to `nio.school/labtest/lab1` in your browser to see the output of this lab in your web user interface

###### You should see data similar to below, but with your current location’s weather data:
[INSERT SCREENSHOT OF LAB1 OUTPUT]
