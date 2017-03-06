In Lab 1, n.io will get the weather at your current location and send you a text message that contains the gathered weather data. The weather will also be displyed in the Lab 1 user interface. You will first build the n.io service to recognize your location, ping the WeatherUnderground API for weather data, send that data back to you in a text message, and display the results at: nio.school/lab1.

## Designer Instructions

1. Go to designer.n.io/?prod=labtest to access the Designer.
2. Create a new service by clicking Service List tab and clicking the Add Service button
  * Name it `Lab1` and click "Submit"
  * Name it ```{`The weather in {{ $current_observation['display_location']['full'] }} is currently {{ $current_observation['temperature_string'] }} and {{ $current_observation['weather'] }}!`}``` and click "Submit"

## Subscribing to location data

1. The Subscriber and Publisher blocks are used to send signals between services. A Publisher block posts signals to a specified Topic, while Subscriber blocks listen for those signals and pass them on to their respective services. In this case, the LocationLookup service is publishing to the Location topic. We will configure the Subscriber block by modifying the Topic field in the block to pick up the signals from the end of the LocationLookup service that has been provided for you.
2. Drag a Subscriber block onto your canvas
3. Name it MyLocation and click “Submit”
