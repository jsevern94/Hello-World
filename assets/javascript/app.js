// if (topCities.length <= 5) {
//     $(".results").append("<p>The top 5 cities for " + category + "<br>" + topCities + "<p>")

// }
// foodArray[maxIndex] = 0;



    //top argument for indexofMax
    var topFood = [];
    var topNightlife = [];
    var topCulture = [];
    var topNature = [];
    var topAttractions = [];

    var printResults = function (category) {
        database.ref("userInput/").push(category, topFood);
    };


    function indexOfMax(arr, top, category) {
        if (arr.length === 0) {
            return -1;
        }
        var maxIndex = 0;
        var max = arr[0];

        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                maxIndex = i;
                max = arr[i];
            }
        }
        // console.log("City: " + cities[maxIndex].city);
        // console.log("Rating: " + arr[maxIndex]);
        top.push({ "city": cities[maxIndex].city, "rating": arr[maxIndex] })
        if (top.length === 5) {
            console.log(top);
            printResults(category);
        }

        arr[maxIndex] = 0;
        return maxIndex, top;
    }

    var userMonth = "02";
    var userLowTemp = 70;
    var userHighTemp = 80;
    var topCities = [];

    //arr argument for indexofMax
    var foodArray = [];
    var nightlifeArray = [];
    var cultureArray = [];
    var natureArray = [];
    var attractionsArray = [];
    var tempArray = [];


    $(".getTopFive").on("click", function () {

        for (var i = 0; i < 5; i++) {
            var city = cities[i].city;

            database.ref("cities/" + city + "/finalRatings/food").once("value").then(function (snapshot) {
                foodArray.push(snapshot.val());
            });
            // database.ref("cities/" + city + "/finalRatings/nightlife").once("value").then(function (snapshot) {
            //     nightlifeArray.push(snapshot.val());
            // });
            // database.ref("cities/" + city + "/finalRatings/culture").once("value").then(function (snapshot) {
            //     cultureArray.push(snapshot.val());
            // });
            // database.ref("cities/" + city + "/finalRatings/nature").once("value").then(function (snapshot) {
            //     natureArray.push(snapshot.val());
            // });
            // database.ref("cities/" + city + "/finalRatings/attractions").once("value").then(function (snapshot) {
            //     attractionsArray.push(snapshot.val());
            // });

            
            //JONAH'S TEMPERATURE REFERENCE
            database.ref("cities/" + city + "/temps/" + userMonth)).once('value', function (snapshot) {
                var sv = snapshot.val();
                tempArray.push(sv);
                console.log()
            });
        }

        for (var j = 0; j < 5; j++) {
            indexOfMax(foodArray, topFood, "food");
            // indexOfMax(nightlifeArray, topNightlife, "nightlife");
            // indexOfMax(cultureArray, topCulture, "culture");
            // indexOfMax(natureArray, topNature, "nature");
            // indexOfMax(attractionsArray, topAttractions, "attractions");
        }



    });


    // if (calcsComplete === true) {

    //     console.log(cities[0].food)

    // } else {
    //     console.log("calcs not complete yet");
    // }

    // UNCOMMENT FUNCTIONS TO CREATE DATABASE IN FB - BE CAREFUL, WILL DELETE TEMPS
    // findLatLng();
    // dbGenerator();


});








  //top argument for indexofMax
  var topFood = [];
  var topNightlife = [];
  var topCulture = [];
  var topNature = [];
  var topAttractions = [];

  var printResults = function (category) {
      database.ref("userInput/").push(category, topFood);
  };


  function indexOfMax(arr, top, category) {
      if (arr.length === 0) {
          return -1;
      }
      var maxIndex = 0;
      var max = arr[0];

      for (var i = 1; i < arr.length; i++) {
          if (arr[i] > max) {
              maxIndex = i;
              max = arr[i];
          }
      }
      // console.log("City: " + cities[maxIndex].city);
      // console.log("Rating: " + arr[maxIndex]);
      top.push({ "city": cities[maxIndex].city, "rating": arr[maxIndex] })
      if (top.length === 5) {
          console.log(top);
          printResults(category);
      }

      arr[maxIndex] = 0;
      return maxIndex, top;
  }

  var userMonth = "02";
  var userLowTemp = 70;
  var userHighTemp = 80;
  var topCities = [];

  //arr argument for indexofMax
  var foodArray = [];
  var nightlifeArray = [];
  var cultureArray = [];
  var natureArray = [];
  var attractionsArray = [];
  var tempArray = [];
var currentyCityTemp = 0;

  $(".getTopFive").on("click", function () {

      for (var i = 0; i < cities.length; i++) {
          var city = cities[i].city;
      //     database.ref("cities/" + city + "/temps/" + userMonth).once('value', function (snapshot) {
              
      //         var sv = snapshot.val();
      //         console.log(sv)

      //         // currentyCityTemp = sv;
      //         // return currentyCityTemp;
      //     });
      // }

      //     console.log("test" + i)
      //     if (currentCityTemp > userLowTemp && currentyCityTemp < userHighTemp) {




          
          database.ref("cities/" + city + "/finalRatings/food").once("value").then(function (snapshot) {
              foodArray.push(snapshot.val());
          });
          // database.ref("cities/" + city + "/finalRatings/nightlife").once("value").then(function (snapshot) {
          //     nightlifeArray.push(snapshot.val());
          // });
          // database.ref("cities/" + city + "/finalRatings/culture").once("value").then(function (snapshot) {
          //     cultureArray.push(snapshot.val());
          // });
          // database.ref("cities/" + city + "/finalRatings/nature").once("value").then(function (snapshot) {
          //     natureArray.push(snapshot.val());
          // });
          // database.ref("cities/" + city + "/finalRatings/attractions").once("value").then(function (snapshot) {
          //     attractionsArray.push(snapshot.val());
          // });

          
          //JONAH'S TEMPERATURE REFERENCE
          
      };


      for (var j = 0; j < 5; j++) {
          indexOfMax(foodArray, topFood, "food");
          // indexOfMax(nightlifeArray, topNightlife, "nightlife");
          // indexOfMax(cultureArray, topCulture, "culture");
          // indexOfMax(natureArray, topNature, "nature");
          // indexOfMax(attractionsArray, topAttractions, "attractions");
      }



  });


  // if (calcsComplete === true) {

  //     console.log(cities[0].food)

  // } else {
  //     console.log("calcs not complete yet");
  // }

  // UNCOMMENT FUNCTIONS TO CREATE DATABASE IN FB - BE CAREFUL, WILL DELETE TEMPS
  findLatLng();
  dbGenerator();


});














var topFood = [];
    var topNightlife = [];
    var topCulture = [];
    var topNature = [];
    var topAttractions = [];

    function indexOfMax(arr, top) {
        if (arr.length === 0) {
            return -1;
        }
        var maxIndex = 0;
        var max = arr[0];

        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                maxIndex = i;
                max = arr[i];
            }
        }
        // console.log("City: " + cities[maxIndex].city);
        // console.log("Rating: " + arr[maxIndex]);
        top.push({"city": cities[maxIndex].city, "rating": arr[maxIndex]})
        // $(".results").append("<p>" + top + "<p>")

        if (top.length === 5) {
            $(".results").append("<p>The top 5 cities for Food <br>" + topFood + "<p>")
            console.log(top);
        }

        arr[maxIndex] = 0;
        return maxIndex;
    }

    var foodArray = [];
    var nightlifeArray = [];
    var cultureArray = [];
    var natureArray = [];
    var attractionsArray = [];

    $(".getTopFive").on("click", function () {
        for (var i = 0; i < cities.length; i++) {
            var city = cities[i].city;

            database.ref("cities/" + city + "/finalRatings/food").once("value").then(function (snapshot) {
                foodArray.push(snapshot.val());
            });
            database.ref("cities/" + city + "/finalRatings/nightlife").once("value").then(function (snapshot) {
                nightlifeArray.push(snapshot.val());
            });
            database.ref("cities/" + city + "/finalRatings/culture").once("value").then(function (snapshot) {
                cultureArray.push(snapshot.val());
            });
            database.ref("cities/" + city + "/finalRatings/nature").once("value").then(function (snapshot) {
                natureArray.push(snapshot.val());
            });
            database.ref("cities/" + city + "/finalRatings/attractions").once("value").then(function (snapshot) {
                attractionsArray.push(snapshot.val());
            });
        }

        for (var j = 0; j < 5; j++) {
            indexOfMax(foodArray, topFood);
            indexOfMax(nightlifeArray, topNightlife);
            indexOfMax(cultureArray, topCulture);
            indexOfMax(natureArray, topNature);
            indexOfMax(attractionsArray, topAttractions);
        }


    });



    // if (calcsComplete === true) {

    //     console.log(cities[0].food)

    // } else {
    //     console.log("calcs not complete yet");
    // }
    // findLatLng();
    // dbGenerator();


});