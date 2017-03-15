<video controls height='200px' style="float: right; margin-left: 20px" src="http://techslides.com/demos/sample-videos/small.webm" type="video/webm" >
  <source src="http://techslides.com/demos/sample-videos/small.webm" type="video/webm" />
  <source src="http://techslides.com/demos/sample-videos/small.ogv" type="video/ogg" />
  <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" />
  <source src="http://techslides.com/demos/sample-videos/small.3gp" type="video/3gp" />
</video>

In Lab 1, n.io will get the weather at your current location and send you a text message that contains the gathered weather data. The weather will also be displayed in the Lab 1 user interface. The n.io service that determines your location, pings the [WeatherUnderground API](https://www.wunderground.com/weather/api/) for weather data, and displays the results at: `nio.school/labtest/lab1` has already been built for you. You will have to enter your name and mobile phone number into the specified block so n.io can send you a text message.

#### Designer Instructions
##### Follow these steps for Lab 1: Weather via SMS Text
1. Go to `designer.n.io` to access the Designer
1. Click on [insert system name] on the left side panel
1. Click on [insert instance name] located on the left side of the screen
1. Click on the `Lab1` service

##### Sending an SMS via the Twilio Service
>The TwilioSMS block sends an SMS to the specified recipient using the Twilio service.

1. Click on the three dots in the upper right hand corner of the `SendWeatherText` Twilio SMS block to open the configuration panel
1. Click on `+` in the `Recipients` attribute
1. Fill in the following configuration fields:
     - **Number**: `{{ [your number] }}`    Eg: `{{ 5555555555 }}`
     - **Name**: `{{ [your name] }}`     Eg: `{{ John }}`
1. Click `save` at the bottom of the panel

##### Save the `Lab1` service
1. Click the down arrow next to the `Lab1` label at the top of the screen
1. Click `save`

##### Start the `Lab1` and `WeatherDataHandler` services
1. Click on `Lab1` in the left side pane if it’s not already highlighted
1. Click on the down arrow next to the `Lab1` label at the top of the screen
1. Click `start`
1. Click on the `WeatherDataHandler` in the left side pane
1. Click on the down arrow next to the `WeatherDataHandler` label at the top of the screen
1. Click `start`

##### Congratulations you have successfully configured your first n.io service!!

##### Utilizing your n.io instance:
1. With your n.io services successfully started, use your mobile phone browser to go to `nio.school/mobiletest`
1. Press `OK` to the `“https://n.io” Would Like To Use Your Current Location` prompt
1. Enter a name and email and click `Login`

##### You will see a screen that looks like:
[INSERT SCREENSHOT OF MOBILE]

##### You will soon receive a text from n.io with the weather of your current location

##### Navigate to `nio.school/labtest/lab1` in your browser to see the output of this lab in your web user interface

##### You should see data similar to below, but with your current location’s weather data: [INSERT SCREENSHOT OF LAB1 OUTPUT]
