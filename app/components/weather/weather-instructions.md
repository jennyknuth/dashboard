In this lab, n.io will get the weather at your current location and send you a text message that contains the gathered weather data.

The n.io service that determines your location, pings the [WeatherUnderground API](https://www.wunderground.com/weather/api/) for weather data, and displays the results above, has already been built for you.

Once you start the services, n.io will detect your phone's location when you use your phone to log in to your unique nio.school mobile site [{{MOBILE_URL}}]({{MOBILE_URL}}). In addition, when you enter your name and mobile phone number into the specified block, n.io will send you a text message with the weather information.

### Designer Instructions
1. Go to [https://designer.n.io](https://designer.n.io), to access the designer
1. Click on **lab** on the left side panel—this is your system
1. Click on **cloud#** located on the left side of the screen—this is the name of your instance, in this case, one that is in the 'cloud'
1. Inside the instance you will find four pre-configured services: `LocationLookup`, `MobileAccelDataHandler`, `DetectShakes`, and `WeatherDataHandler`
1. Click on the `Lab1` service

#### Send an SMS via the Twilio Service
> The TwilioSMS block sends an SMS to the specified recipient using the Twilio service.

1. Click on the three dots in the upper right-hand corner of the `SendWeatherText` Twilio SMS block to open the configuration panel
1. Click on `+ Recipients` in the **Recipients** attribute
1. Fill in the following configuration fields:

     **Name:** `[your name]`     (for example: `Doug`)
     
     **Number:** `[your number]`    (for example: `5555555555`)

1. Click `save` at the bottom of the panel

#### Start the `Lab1` and `WeatherDataHandler` services
1. Click on `Lab1` in the left side pane if it’s not already highlighted
1. Click on the down arrow next to the `Lab1` label at the top of the screen
1. Click `start`
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
1. Enter a name and email and click `Login`

  ![mobile screen shot](./img/instructions/mobile.png)

You will soon receive a text from n.io with the weather at your current location.

Return to the top of this page to see the output of your services. You should see the current weather conditions in the web user interface, a 10-day forecast, and the data being published by n.io.

### Troubleshooting instructions 

**Check for loose connections**
* Check that all wires are connected
* Verify that the wind flow sensor is seated in the breadboard

**Check power**
* Ensure that the USB cable is connected to the Pi and a computer
* Ensure that the AT&T Unite Express is on for Fan Lab, SensorTag Lab, and the Wind Flow Lab
* Ensure that the 9 volt battery is in place for the Wind Flow Lab

**Check network**
* Ensure that the AT&T Unite Express shows a red 1 indicating that it is connected to the Pi. If not, power both off, connect the USB cable to the Pi, and then restart the AT&T Unite Express.

**Check configuration**
* Review lab instructions to ensure all steps were followed correctly


