window.onload = function what() {
  $.getJSON("https://api.tfl.gov.uk/StopPoint/910GPCKHMQD/arrivals", function(data) {
    console.log(data);

    var expectedTrains = [];
    for (var i = 0; i < 9; i++) {
      // figuring out timestamp, time expected of train, and then difference, then converting to rounded minutes
      var nextTrain = data[i].destinationName;
      var platform = data[i].platformName;
      var timeStamp = new Date(data[i].timestamp);
      var expected = new Date(data[i].expectedArrival);
      var diff = Math.abs(expected - timeStamp);
      var minDiff = (diff / 60 / 1000).toFixed(0);

      expectedTrains.push({nextTrain, platform, expected, minDiff});
    }
    console.log(expectedTrains);

    // sort in assending order by expected time
    expectedTrains.sort(function(a, b){return a.expected-b.expected});
    console.log(expectedTrains);

    // Platform 1 - Northbound
    var firstOnPlatform1 = expectedTrains.find(function(element) {
      return element.platform == "Platform 1";
    });
    document.getElementById("number1").innerHTML = (firstOnPlatform1.nextTrain) + " in " + (firstOnPlatform1.minDiff) + " minutes " + "on " + (firstOnPlatform1.platform);

    // Platform 2 - Southbound
    var firstOnPlatform2 = expectedTrains.find(function(element) {
      return element.platform == "Platform 2";
    });
    document.getElementById("number2").innerHTML = (firstOnPlatform2.nextTrain) + " in " + (firstOnPlatform2.minDiff) + " minutes " + "on " + (firstOnPlatform2.platform);
  });
};

// Method to look at next time for date formats.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
