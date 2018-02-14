# Queens Road Peckham Next Train Display

## Why? 

My partner often gets the next train to work from our local train station, and while it's good to check CityMapper, I have created a tool which handily sits on a raspberry pi 3 display. 

It shows enough information to know when to get up and leave to get the next train, I am hoping one day to add a cue for < 5 minutes to notify, like an alarm. 


## Customisation 

The following .getJSON:

```  $.getJSON("https://api.tfl.gov.uk/StopPoint/910GPCKHMQD/arrivals" ```

Can be customised to any TFL station, by changing the `910GPCKHMQD, the code can be found by searching this link 

``` https://tfl.gov.uk/travel-information/stations-stops-and-piers/ ``` 

and snipping the link of the result. For example, Caledonian Road's URL is

```https://tfl.gov.uk/overground/stop/910GCLDNNRB/caledonian-road-barnsbury-rail-station/?Input=Caledonian+Road+%26+Barnsbury+Rail+Station```

Thus it's unique identifier is 910GCLDNNRB. 


Enjoy! 
