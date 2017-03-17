In this lab, n.io will get the weather at your current location and send you a text message that contains the gathered weather data.

The n.io service that determines your location, pings the [WeatherUnderground API](https://www.wunderground.com/weather/api/) for weather data, and displays the results (above, at `nio.school/[your unique lab number]/weather`) has already been built for you.

Once you start the services, n.io will detect your phone's location when you log in to `nio.school/mobiletest`. In addition, when you enter your name and mobile phone number into the specified block, n.io will send you a text message with the weather information.

### Designer Instructions

  1. Go to [designer.n.io](https://designer.n.io) to access the Designer

  1. Click on **int** on the left side panel
  1. Click on **intro-lab-1** located on the left side of the screen
  1. Click on the `Lab1` service

#### Send an SMS via the Twilio Service
> The TwilioSMS block sends an SMS to the specified recipient using the Twilio service.

  1. Click on the three dots in the upper right hand corner of the `SendWeatherText` Twilio SMS block to open the configuration panel

  1. Click on `+` in the **Recipients** attribute
  1. Fill in the following configuration fields:

       **Number:** `{{ [your number] }}`    (for example: `{{ 5555555555 }}`)

       **Name:** `{{ [your name] }}`     (for example: `{{ John }}`)
  1. Click `save` at the bottom of the panel

#### Save the `Lab1` service

  1. Click the down arrow next to the `Lab1` label at the top of the screen

  1. Click `save`

#### Start the `Lab1` and `WeatherDataHandler` services

  1. Click on `Lab1` in the left side pane if it’s not already highlighted

  1. Click on the down arrow next to the `Lab1` label at the top of the screen
  1. Click `start`
  1. Click on the `WeatherDataHandler` in the left side pane
  1. Click on the down arrow next to the `WeatherDataHandler` label at the top of the screen
  1. Click `start`

Congratulations you have successfully configured your first n.io block and started your first n.io services!!

### Use your n.io instance

  1. With your n.io services successfully started, use your mobile phone browser to go to `nio.school/mobiletest`

  1. Press `OK` to the `“https://n.io” Would Like To Use Your Current Location` prompt
  1. Enter a name and email and click `Login`

![mobile screen shot](./img/instructions/mobile.png)

You will soon receive a text from n.io with the weather at your current location.

Scroll to the top of this page (`nio.school/[your unique lab number]/weather`) to see the output of your services. You should see the current weather conditions, a 10-day forecast, and the streaming data being published by n.io.
