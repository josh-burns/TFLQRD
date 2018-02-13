window.onload = function what() {


  $.getJSON("https://api.tfl.gov.uk/StopPoint/910GPCKHMQD/arrivals", function(data) {

    console.log(data);



    //  Defining vars based on nested elements of JSON - This could probably be done more elegantly...

    //figuring out timestamp, time expected of train, and then difference, then converting to rounded minutes
    //0
    var nextTrain0 = data[0].destinationName;
    var platform0 = data[0].platformName;
    var timeStamp0 = new Date(data[0].timestamp);
    var expected0 = new Date(data[0].expectedArrival);
    var diff0 = Math.abs(expected0 - timeStamp0);
    var minDiff0 = (diff0 / 60 / 1000).toFixed(0);

    //  1
    var nextTrain1 = data[1].destinationName;
    var platform1 = data[1].platformName;
    var timeStamp1 = new Date(data[1].timestamp);
    var expected1 = new Date(data[1].expectedArrival);
    var diff1 = Math.abs(expected1 - timeStamp1);
    var minDiff1 = (diff1 / 60 / 1000).toFixed(0);

    //  2
    var nextTrain2 = data[2].destinationName;
    var platform2 = data[2].platformName;
    var timeStamp2 = new Date(data[2].timestamp);
    var expected2 = new Date(data[2].expectedArrival);
    var diff2 = Math.abs(expected2 - timeStamp2);
    var minDiff2 = (diff2 / 60 / 1000).toFixed(0);

    //  3
    var nextTrain3 = data[3].destinationName;
    var platform3 = data[3].platformName;
    var timeStamp3 = new Date(data[3].timestamp);
    var expected3 = new Date(data[3].expectedArrival);
    var diff3 = Math.abs(expected3 - timeStamp3);
    var minDiff3 = (diff3 / 60 / 1000).toFixed(0);

    //  4
    var nextTrain4 = data[4].destinationName;
    var platform4 = data[4].platformName;
    var timeStamp4 = new Date(data[4].timestamp);
    var expected4 = new Date(data[4].expectedArrival);
    var diff4 = Math.abs(expected4 - timeStamp4);
    var minDiff4 = (diff4 / 60 / 1000).toFixed(0);

    //  5
    var nextTrain5 = data[5].destinationName;
    var platform5 = data[5].platformName;
    var timeStamp5 = new Date(data[5].timestamp);
    var expected5 = new Date(data[5].expectedArrival);
    var diff5 = Math.abs(expected5 - timeStamp5);
    var minDiff5 = (diff5 / 60 / 1000).toFixed(0);

    //  6
    var nextTrain6 = data[6].destinationName;
    var platform6 = data[6].platformName;
    var timeStamp6 = new Date(data[6].timestamp);
    var expected6 = new Date(data[6].expectedArrival);
    var diff6 = Math.abs(expected6 - timeStamp6);
    var minDiff6 = (diff6 / 60 / 1000).toFixed(0);

    //  7
    var nextTrain7 = data[7].destinationName;
    var platform7 = data[7].platformName;
    var timeStamp7 = new Date(data[7].timestamp);
    var expected7 = new Date(data[7].expectedArrival);
    var diff7 = Math.abs(expected7 - timeStamp7);
    var minDiff7 = (diff7 / 60 / 1000).toFixed(0);

    // 8
    var nextTrain8 = data[8].destinationName;
    var platform8 = data[8].platformName;
    var timeStamp8 = new Date(data[8].timestamp);
    var expected8 = new Date(data[8].expectedArrival);
    var diff8 = Math.abs(expected8 - timeStamp8);
    var minDiff8 = (diff8 / 60 / 1000).toFixed(0);

    //   // 9 (If defined)
    // while((data[9].destinationName) != undefined || null){
    //   var nextTrain9 = data[9].destinationName;
    //   var platform9 = data[9].platformName;
    //   var timeStamp9 = new Date(data[9].timestamp);
    //   var expected9 = new Date(data[9].expectedArrival);
    //   var diff9 = Math.abs(expected9 - timeStamp9);
    //   var minDiff9 = (diff9 / 60 / 1000).toFixed(0);
    // }


    // var compeition takes times of each train, bubble sorts them to find closest train to display.

    var competition = [expected0, expected1, expected2, expected3, expected4, expected5, expected6, expected7, expected8];


    console.log(competition);

    function bubbleSort(arr) {
      var len = arr.length;
      for (var i = len - 1; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {
          if (arr[j - 1] > arr[j]) {
            var temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
          }
        }
      }
      return arr;
    }

    bubbleSort(competition);
    console.log(competition);

    //  copy dependant on which number is closest train, pulling from var definitions at top.


    //Platform 1 - Northbound

    // 0
    if (((competition[0]) == expected0) && platform0 == "Platform 1") {

      document.getElementById("number1").innerHTML = ((nextTrain0) + " in " + (minDiff0) + " minutes " + "on " + (platform0));
    } else if (((competition[1]) == expected0) && platform0 == "Platform 1") {
      document.getElementById("number1").innerHTML = ((nextTrain0) + " in " + (minDiff0) + " minutes " + "on " + (platform0));
    }

    // 1
    else if (((competition[0]) == expected1) && platform1 == "Platform 1") {
      document.getElementById("number1").innerHTML = ((nextTrain1) + " in " + (minDiff1) + " minutes " + "on " + (platform1));
    } else if (((competition[1]) == expected1) && platform1 == "Platform 1") {
      document.getElementById("number1").innerHTML = ((nextTrain1) + " in " + (minDiff1) + " minutes " + "on " + (platform1));
    }

    // 2
    else if (((competition[0]) == expected2) && platform2 == "Platform 1") {
      document.getElementById("number1").innerHTML = ((nextTrain2) + " in " + (minDiff2) + " minutes " + "on " + (platform2));
    } else if (((competition[1]) == expected2) && platform2 == "Platform 1") {
      document.getElementById("number1").innerHTML = ((nextTrain2) + " in " + (minDiff2) + " minutes " + "on " + (platform2));
    }

    // 3
    else if (((competition[0]) == expected3) && platform3 == "Platform 1") {
      document.getElementById("number1").innerHTML = ((nextTrain3) + " in " + (minDiff3) + " minutes " + "on " + (platform3));
    } else if (((competition[1]) == expected3) && platform3 == "Platform 1") {
      document.getElementById("number1").innerHTML = ((nextTrain3) + " in " + (minDiff3) + " minutes " + "on " + (platform3));
    }

    // 4
    else if (((competition[0]) == expected4) && platform4 == "Platform 1") {
      document.getElementById("number1").innerHTML = ((nextTrain4) + " in " + (minDiff4) + " minutes " + "on " + (platform4));
    } else if (((competition[1]) == expected4) && platform4 == "Platform 1") {
      document.getElementById("number1").innerHTML = ((nextTrain4) + " in " + (minDiff4) + " minutes " + "on " + (platform4));
    }

    // 5
    else if (((competition[0]) == expected5) && platform5 == "Platform 1") {
      document.getElementById("number1").innerHTML = ((nextTrain5) + " in " + (minDiff5) + " minutes " + "on " + (platform5));
    } else if (((competition[1]) == expected5) && platform5 == "Platform 1") {
      document.getElementById("number1").innerHTML = ((nextTrain5) + " in " + (minDiff5) + " minutes " + "on " + (platform5));
    }

    // 6
    else if (((competition[0]) == expected6) && platform6 == "Platform 1") {
      document.getElementById("number1").innerHTML = ((nextTrain6) + " in " + (minDiff6) + " minutes " + "on " + (platform6));
    } else if (((competition[1]) == expected6) && platform6 == "Platform 1") {
      document.getElementById("number1").innerHTML = ((nextTrain6) + " in " + (minDiff6) + " minutes " + "on " + (platform6));
    }

    // 7
    else if (((competition[0]) == expected7) && platform7 == "Platform 1") {
      document.getElementById("number1").innerHTML = ((nextTrain7) + " in " + (minDiff7) + " minutes " + "on " + (platform7));
    } else if (((competition[1]) == expected7) && platform7 == "Platform 1") {
      document.getElementById("number1").innerHTML = ((nextTrain7) + " in " + (minDiff7) + " minutes " + "on " + (platform7));
    }

    // 8
    else if (((competition[0]) == expected8) && platform8 == "Platform 1") {
      document.getElementById("number1").innerHTML = ((nextTrain8) + " in " + (minDiff8) + " minutes " + "on " + (platform8));
    } else if (((competition[1]) == expected8) && platform8 == "Platform 1") {
      document.getElementById("number1").innerHTML = ((nextTrain8) + " in " + (minDiff8) + " minutes " + "on " + (platform8));
    }

    // 9

    // else if(()(competition[0]) == expected9) && platform9 == "Platform 1"){
    //   document.getElementById("number1").innerHTML=((nextTrain9) + " in " +(minDiff9) + " minutes " + "on " + (platform9));
    // }
    // else if(((competition[1]) == expected9) && platform9 == "Platform 1"){
    //     document.getElementById("number1").innerHTML=((nextTrain9) + " in " +(minDiff9) + " minutes " + "on " + (platform9));
    // }


    //Platform 1 - Southbound

    // 0
    if (((competition[0]) == expected0) && platform0 == "Platform 2") {

      document.getElementById("number2").innerHTML = ((nextTrain0) + " in " + (minDiff0) + " minutes " + "on " + (platform0));
    } else if (((competition[1]) == expected0) && platform0 == "Platform 2") {
      document.getElementById("number2").innerHTML = ((nextTrain0) + " in " + (minDiff0) + " minutes " + "on " + (platform0));
    }

    // 1
    else if (((competition[0]) == expected1) && platform1 == "Platform 2") {
      document.getElementById("number2").innerHTML = ((nextTrain1) + " in " + (minDiff1) + " minutes " + "on " + (platform1));
    } else if (((competition[1]) == expected1) && platform1 == "Platform 2") {
      document.getElementById("number2").innerHTML = ((nextTrain1) + " in " + (minDiff1) + " minutes " + "on " + (platform1));
    }

    // 2
    else if (((competition[0]) == expected2) && platform2 == "Platform 2") {
      document.getElementById("number2").innerHTML = ((nextTrain2) + " in " + (minDiff2) + " minutes " + "on " + (platform2));
    } else if (((competition[1]) == expected2) && platform2 == "Platform 2") {
      document.getElementById("number2").innerHTML = ((nextTrain2) + " in " + (minDiff2) + " minutes " + "on " + (platform2));
    }

    // 3
    else if (((competition[0]) == expected3) && platform3 == "Platform 2") {
      document.getElementById("number2").innerHTML = ((nextTrain3) + " in " + (minDiff3) + " minutes " + "on " + (platform3));
    } else if (((competition[1]) == expected3) && platform3 == "Platform 2") {
      document.getElementById("number2").innerHTML = ((nextTrain3) + " in " + (minDiff3) + " minutes " + "on " + (platform3));
    }

    // 4
    else if (((competition[0]) == expected4) && platform4 == "Platform 2") {
      document.getElementById("number2").innerHTML = ((nextTrain4) + " in " + (minDiff4) + " minutes " + "on " + (platform4));
    } else if (((competition[1]) == expected4) && platform4 == "Platform 2") {
      document.getElementById("number2").innerHTML = ((nextTrain4) + " in " + (minDiff4) + " minutes " + "on " + (platform4));
    }

    // 5
    else if (((competition[0]) == expected5) && platform5 == "Platform 2") {
      document.getElementById("number2").innerHTML = ((nextTrain5) + " in " + (minDiff5) + " minutes " + "on " + (platform5));
    } else if (((competition[1]) == expected5) && platform5 == "Platform 2") {
      document.getElementById("number2").innerHTML = ((nextTrain5) + " in " + (minDiff5) + " minutes " + "on " + (platform5));
    }

    // 6
    else if (((competition[0]) == expected6) && platform6 == "Platform 2") {
      document.getElementById("number2").innerHTML = ((nextTrain6) + " in " + (minDiff6) + " minutes " + "on " + (platform6));
    } else if (((competition[1]) == expected6) && platform6 == "Platform 2") {
      document.getElementById("number2").innerHTML = ((nextTrain6) + " in " + (minDiff6) + " minutes " + "on " + (platform6));
    }

    // 7
    else if (((competition[0]) == expected7) && platform7 == "Platform 2") {
      document.getElementById("number2").innerHTML = ((nextTrain7) + " in " + (minDiff7) + " minutes " + "on " + (platform7));
    } else if (((competition[1]) == expected7) && platform7 == "Platform 2") {
      document.getElementById("number2").innerHTML = ((nextTrain7) + " in " + (minDiff7) + " minutes " + "on " + (platform7));
    }

    // 8
    else if (((competition[0]) == expected8) && platform8 == "Platform 2") {
      document.getElementById("number2").innerHTML = ((nextTrain8) + " in " + (minDiff8) + " minutes " + "on " + (platform8));
    } else if (((competition[1]) == expected8) && platform8 == "Platform 2") {
      document.getElementById("number2").innerHTML = ((nextTrain8) + " in " + (minDiff8) + " minutes " + "on " + (platform8));
    }

    // 9

    // else if(()(competition[0]) == expected9) && platform9 == "Platform 2"){
    //   document.getElementById("number2").innerHTML=((nextTrain9) + " in " +(minDiff9) + " minutes " + "on " + (platform9));
    // }
    // else if(((competition[1]) == expected9) && platform9 == "Platform 2"){
    //     document.getElementById("number2").innerHTML=((nextTrain9) + " in " +(minDiff9) + " minutes " + "on " + (platform9));
    // }



    // Scrolling of all platforms..

    // document.getElementById("scroller").innerHTML =
    // (((nextTrain7) +" "+ (minDiff7) + " minutes " + "on " + (platform7))) +
    //   (((nextTrain8) +" "+ (minDiff8) + " minutes " + "on " + (platform8))) ;
    //
    //

  });




};

// Method to look at next time for date formats.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
