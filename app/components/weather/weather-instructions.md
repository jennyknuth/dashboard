In this lab, you will configure n.io to get the weather at your current location and send you a text message that contains the gathered weather data. There is a pre-built n.io service that will determine your location, ping the [WeatherUnderground API](https://www.wunderground.com/weather/api/) for weather data, and display the results in the panel above.

In addition to n.io instances, your lab kit has been set up to include a unique mobile web site that you can access from your smartphone. Once your services are running, this site will be able to discern your location (used to get weather data in your area) and allow your phone to act as a "controller" by being able to detect when you shake it. Your unique mobile site is set up at [{{MOBILE_URL}}]({{MOBILE_URL}}).

In addition, when you enter your name and mobile phone number into the specified block, n.io will send you a text message with the weather information.

### Designer Instructions
1. Go to [https://designer.n.io](https://designer.n.io), to access the system designer
1. Click on **lab** on the left side panel—this is your system, which is comprised of two n.io instances
1. Click on **{{CLOUD_INSTANCE}}** located on the left side of the screen—this is the name of your instance, in this case, the one that is in the 'cloud'
1. Inside the instance you will find 5 pre-existing services: `LocationLookup`, `MobileAccelDataHandler`, `DetectShakes`, `WeatherDataHandler`, and `Lab1`
1. Click on the `Lab1` service—this will open up the service's configuration in the canvas so that you can edit it

#### Send an SMS via the Twilio Service
> The TwilioSMS block sends an SMS to the specified recipient using the Twilio API.

1. Click on the three dots in the upper right-hand corner of the `SendWeatherText` Twilio SMS block to open the configuration panel
1. Click on `+ Recipients` in the **Recipients** attribute
1. Fill in the following configuration fields:

     **Name:** `[your name]`     (for example: `Doug`)

     **Number:** `[your number]`    (for example: `5555555555`)

1. Click `save` at the bottom of the panel

#### Start the `Lab1` and `WeatherDataHandler` services
1. Click on `Lab1` in the left side pane—this will select the Lab1 service for editing and starting
1. Click on the down arrow next to the `Lab1` label at the top of the screen—this is the service control bar
1. Click `start`—this will start the Lab1 service. You can tell that a service has been started successfully by checking that a "play" icon appears next to the service name in the left-hand service list. You can also know by clicking the service name in the top control bar and making sure that the only available action is `stop`. If it says `start`, that means the service is stopped and can be started.
1. Click on the `WeatherDataHandler` in the left side pane
1. Click on the down arrow next to the `WeatherDataHandler` label at the top of the screen
1. Click `start`
1. The `MobileAccelDataHandler` and `LocationLookup` services should already be running for you—if they are stopped, start them
1. The dropdown menu at the top allows you to save your service, start a service if it is stopped, and stop a service (if it is started), among other options, and looks like this

![service menu](./img/instructions/service-menu.png)

## Congratulations you have successfully configured your first n.io block and started your first n.io services!!

### Use your n.io instance
1. With your n.io services successfully started, use your mobile phone browser to go to your unique nio.school mobile address [{{MOBILE_URL}}]({{MOBILE_URL}})
1. Press `OK` to the `Use Your Current Location` prompt
1. You should see accelerometer, gyroscope, and location data points on the screen, similar to this:

  ![mobile screen shot](./img/instructions/mobile.png)

If it all worked as expected, you should receive a text from n.io with the weather at your current location!

Return to the top of this page to see the output of your services. You should see the current weather conditions in the web user interface, a 10-day forecast, and the data being published by n.io.

### Troubleshooting guide

* Be sure that you added yourself as a recipient in the `SendWeatherText` block in the `Lab1` service and clicked save
* Check that the `LocationLookup`, `MobileAccelDataHandler`, `WeatherDataHandler`, and `Lab1` services are all started and running
* The `WeatherDataHandler` service is set up to poll the weather API once and only once per run. If you started the weather service before starting the service that sends the text message `Lab1` then it's possible the weather poll happened but the text wasn't sent because the service was off. To re-poll the weather API restart the `WeatherDataHandler` service (first stop service, then start it) and then make sure your mobile device browser is active on the mobile site.
* Make sure the mobile web site is active and your phone is not asleep. If you see the gyroscope numbers on the site changing as you move your phone, the site is working
* Check that location services are enabled for the web browser on your phone and that you have allowed access to your current location
