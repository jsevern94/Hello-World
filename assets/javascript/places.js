$(document).ready(function () {
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyDuKxBBJIya6DvOXENE1xnfSZ2uImIWd-M",
        authDomain: "hello-world-19f5c.firebaseapp.com",
        databaseURL: "https://hello-world-19f5c.firebaseio.com",
        projectId: "hello-world-19f5c",
        storageBucket: "hello-world-19f5c.appspot.com",
        messagingSenderId: "969652105932",
        appId: "1:969652105932:web:1a77a8131af3a725"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();

    var cities = [
        {
            city: "Paris",
            country: "France",
        },
        {
            city: "New York",
            country: "NY United States of America",
        },
        {
            city: "Sydney",
            country: "Australia",
        },
        {
            city: "Barcelona",
            country: "Spain",
        },
        {
            city: "London",
            country: "United Kingdom",
        },
        {
            city: "Rome",
            country: "Italy",
        },
        {
            city: "San Francisco",
            country: "CA United States of America",
        },
        {
            city: "Bangkok",
            country: "Thailand",
        },
        {
            city: "Cape Town",
            country: "South Africa",
        },
        {
            city: "Istanbul",
            country: "Turkey",
        },
        {
            city: "Melbourne",
            country: "Australia",
        },
        {
            city: "Kathmandu",
            country: "Nepal",
        },
        {
            city: "Prague",
            country: "Czech Republic",
        },
        {
            city: "Vancouver",
            country: "Canada",
        },
        {
            city: "Buenos Aires",
            country: "Argentina",
        },
        // {
        //     city: "Rio De Janeiro",
        //     country: "Brazil",
        // },
        {
            city: "Berlin",
            country: "Germany",
        },
        {
            city: "Jerusalem",
            country: "Israel",
        },
        {
            city: "Montreal",
            country: "Canada",
        },
        {
            city: "Venice",
            country: "Italy",
        },
        {
            city: "Amsterdam",
            country: "Netherlands",
        },
        {
            city: "Tokyo",
            country: "Japan",
        },
        {
            city: "Florence",
            country: "Italy",
        },
        {
            city: "Dublin",
            country: "Ireland",
        },
        // {
        //     city: "Mexico City",
        //     country: "México",
        // },
        {
            city: "Kraków",
            country: "Poland",
        },
        {
            city: "Toronto",
            country: "Canada",
        },
        {
            city: "Cairo",
            country: "Egypt",
        },
        {
            city: "Budapest",
            country: "Hungary",
        },
        {
            city: "Chicago",
            country: "IL United Sates of America",
        },
        {
            city: "Havana",
            country: "Cuba",
        },
        {
            city: "Munich",
            country: "Germany",
        },
        {
            city: "Athens",
            country: "Greece",
        },
        {
            city: "Vienna",
            country: "Austria",
        },
        {
            city: "Ho Chi Minh City",
            country: "Vietnam",
        },
        {
            city: "Sarajevo",
            country: "Bosnia and Herzegovina",
        },
        {
            city: "Seville",
            country: "Spain",
        },
        {
            city: "Las Vegas",
            country: "NV United States of America",
        },
        {
            city: "Perth",
            country: "Australia",
        },
        {
            city: "Shanghai",
            country: "China",
        },
        {
            city: "Los Angeles",
            country: "CA United States of America",
        },
        {
            city: "Lisbon",
            country: "Portugal",
        },
        {
            city: "Stockholm",
            country: "Sweden",
        },
        {
            city: "Kuala Lumpur",
            country: "Malaysia",
        },
        {
            city: "Damascus",
            country: "Syria",
        },
        {
            city: "Luang Prabang",
            country: "Laos",
        },
        {
            city: "Seattle",
            country: "WA United States of America",
        },
        {
            city: "Phnom Penh",
            country: "Cambodia",
        },
        {
            city: "St Petersburg",
            country: "Russia",
        },
        {
            city: "Cuzco",
            country: "Peru",
        },
        {
            city: "Delhi",
            country: "India",
        },
        {
            city: "Dubrovnik",
            country: "Croatia",
        },
        {
            city: "Moscow",
            country: "Russia"
        },
        // {
        //     city: "Salvador Da Bahia",
        //     country: "Brazil",
        // },
        {
            city: "Helsinki",
            country: "Finland",
        },
        {
            city: "Santiago",
            country: "Chile",
        },
        {
            city: "Fes",
            country: "Morocco",
        },
        {
            city: "Auckland",
            country: "New Zealand",
        },
        {
            city: "Manila",
            country: "Philippines",
        },
        // {
        //     city: "Puerto Vallarta",
        //     country: "Mexico",
        // },
        {
            city: "Chiang Mai",
            country: "Thailand",
        },
        {
            city: "Varanasi",
            country: "India",
        },
        {
            city: "Cartagena",
            country: "Colombia",
        },
        {
            city: "Innsbruck",
            country: "Austria",
        },
        {
            city: "York",
            country: "United Kingdom",
        },
        {
            city: "Hamburg",
            country: "Germany",
        },
        {
            city: "Galway",
            country: "Ireland",
        },
        {
            city: "Wellington",
            country: "New Zealand",
        },
        {
            city: "Ljubljana",
            country: "Slovenia",
        },
        {
            city: "Seoul",
            country: "South Korea",
        },
        {
            city: "San Cristobal",
            country: "Venezuela",
        },
        {
            city: "Tallinn",
            country: "Estonia",
        },
        {
            city: "Lhasa",
            country: "China",
        },
        {
            city: "Bled",
            country: "Slovenia",
        },
        {
            city: "Hobart",
            country: "Australia",
        },
        {
            city: "Brussels",
            country: "Belgium",
        },
        {
            city: "La Paz",
            country: "Bolivia",
        },
        {
            city: "Quebec City",
            country: "Canada",
        },
        {
            city: "Valparaíso",
            country: "Chile",
        },
        {
            city: "Naples",
            country: "Italy",
        },
        {
            city: "Memphis",
            country: "TN United States of America",
        },
        {
            city: "Heidelberg",
            country: "Germany",
        },
        {
            city: "Dhaka",
            country: "Bangladesh",
        },
        {
            city: "Amman",
            country: "Jordan",
        },
        {
            city: "Washington",
            country: "DC United States of America",
        },
        {
            city: "Quito",
            country: "Ecuador",
        },
        {
            city: "Christchurch",
            country: "New Zealand",
        },
        {
            city: "Glasgow",
            country: "Scotland",
        },
        {
            city: "Muscat",
            country: "Oman",
        },
        // {
        //     city: "Panama City",
        //     country: "Panama",
        // },
        {
            city: "Dakar",
            country: "Senegal",
        },
        {
            city: "Bratislava",
            country: "Slovakia",
        },
        {
            city: "San Sebastian",
            country: "Spain",
        },
        {
            city: "Bern",
            country: "Switzerland",
        },
        {
            city: "San Juan",
            country: "Puerto Rico",
        },
        {
            city: "Aleppo",
            country: "Syria",
        },
        {
            city: "Dubai",
            country: "United Arab Emirates",
        },
        {
            city: "Riga",
            country: "Latvia",
        },
        {
            city: "Asmara",
            country: "Eritrea",
        },
        {
            city: "Kabul",
            country: "Afghanistan",
        },
        {
            city: "Copenhagen",
            country: "Denmark",
        },
        {
            city: "Sofia",
            country: "Bulgaria",
        },
        {
            city: "Marseille",
            country: "France",
        },
        {
            city: "Zagreb",
            country: "Croatia",
        },
        {
            city: "Manchester",
            country: "United Kingdom",
        },
        {
            city: "Antigua",
            country: "Antigua and Barbuda",
        },
        {
            city: "Reykjavík",
            country: "Iceland",
        },
        {
            city: "Yogyakarta",
            country: "Indonesia",
        },
        {
            city: "Carcassonne",
            country: "France",
        },
        {
            city: "Tel Aviv-Yafo",
            country: "Israel",
        },
        {
            city: "Mendoza",
            country: "Argentina",
        },
        {
            city: "Nairobi",
            country: "Kenya",
        },
        {
            city: "Beirut",
            country: "Lebanon",
        },
        {
            city: "Vilnius",
            country: "Lithuania",
        },
        {
            city: "Montevideo",
            country: "Uruguay",
        },
        {
            city: "Yangon",
            country: "Myanmar",
        },
        {
            city: "Arequipa",
            country: "Peru",
        },
        {
            city: "Bucharest",
            country: "Romania",
        },
        {
            city: "Apia",
            country: "Samoa",
        },
        {
            city: "Belgrade",
            country: "Serbia",
        },
        {
            city: "Dar es Salaam",
            country: "Tanzania",
        },
        {
            city: "Kyiv",
            country: "Ukraine",
        },
        {
            city: "Malé",
            country: "Maldives",
        },
        {
            city: "Caracas",
            country: "Venezuela",
        },
        {
            city: "Tirana",
            country: "Albania",
        },
        {
            city: "Suva",
            country: "Fiji",
        },
        {
            city: "Tbilisi",
            country: "Georgia",
        },
        {
            city: "Ushuaia",
            country: "Argentina",
        },
        {
            city: "Kampala",
            country: "Uganda",
        },
        {
            city: "Bogotá",
            country: "Colombia",
        },
        {
            city: "Bridgetown",
            country: "Barbados",
        },
        {
            city: "Ulaanbaatar",
            country: "Mongolia",
        },
        {
            city: "Abuja",
            country: "Nigeria",
        },
        {
            city: "Laval",
            country: "Canada",
        },
        {
            city: "Livingstone",
            country: "Zambia",
        },
        {
            city: "Alexandria",
            country: "Egypt",
        },
        {
            city: "Savannah",
            country: "Georgia",
        },
        {
            city: "Nuuk",
            country: "Greenland",
        },
        {
            city: "Jeddah",
            country: "Saudi Arabia",
        },
        {
            city: "Johannesburg",
            country: "South Africa",
        },
        {
            city: "Kairouan",
            country: "Tunisia",
        },
        {
            city: "Austin",
            country: "TX United States of America",
        },
        {
            city: "San Salvador",
            country: "El Salvador",
        },
        {
            city: "Cardiff",
            country: "Wales",
        },
        {
            city: "Minsk",
            country: "Belarus",
        },
        {
            city: "Khartoum",
            country: "Sudan",
        },
        {
            city: "Mecca",
            country: "Saudi Arabia",
        },
        {
            city: "Aswan",
            country: "Egypt",
        },
        {
            city: "Yerevan",
            country: "Armenia",
        },
        {
            city: "Georgetown",
            country: "Guyana",
        },
        {
            city: "Maputo",
            country: "Mozambique",
        },
        {
            city: "Baku",
            country: "Azerbaijan",
        },
        {
            city: "Belize City",
            country: "Belize",
        },
        {
            city: "Essaouira",
            country: "Morocco",
        },
        {
            city: "Santo Domingo",
            country: "Dominican Republic",
        },
        {
            city: "Lahore",
            country: "Pakistan",
        },
        {
            city: "Cayenne",
            country: "French Guiana",
        },
        {
            city: "Almaty",
            country: "Kazakhstan",
        },
        {
            city: "Mombasa",
            country: "Kenya",
        },
        {
            city: "Valletta",
            country: "Malta",
        },
        {
            city: "Antananarivo",
            country: "Madagascar",
        },
        {
            city: "Miami",
            country: "FL United States of America",
        },
        {
            city: "Bamako",
            country: "Mali",
        },
        {
            city: "Saint-Denis",
            country: "Réunion",
        },
        {
            city: "Granada",
            country: "Nicaragua",
        },
        {
            city: "Beira",
            country: "Mozambique",
        },
        // {
        //     city: "Madang",
        //     country: "Papua New Guinea",
        // },
        // {
        //     city: "Jaipur",
        //     country: "India",
        // },
        // {
        //     city: "Monaco",
        //     country: "Monaco",
        // },
        // {
        //     city: "Zanzibar",
        //     country: "Tanzania",
        // },
        // {
        //     city: "Beijing",
        //     country: "China",
        // },
        // {
        //     city: "Kyoto",
        //     country: "Japan",
        // },
        // {
        //     city: "Marrakesh",
        //     country: "Morocco",
        // },
        // {
        //     city: "Kolkata",
        //     country: "India",
        // },
        // {
        //     city: "Mumbai",
        //     country: "India",
        // },
        // {
        //     city: "Oaxaca",
        //     country: "Mexico",
        // },
        // {
        //     city: "Siena",
        //     country: "Italy",
        // },
        // {
        //     city: "Ifahan",
        //     country: "Iran",
        // },
        // {
        //     city: "Taipei",
        //     country: "Taiwan",
        // },
        // {
        //     city: "Madrid",
        //     country: "Spain",
        // },
        // {
        //     city: "Hanoi",
        //     country: "Vietnam",
        // },
        // {
        //     city: "Edinburgh",
        //     country: "United Kingdom",
        // },
        // {
        //     city: "Hong Kong",
        //     country: "Hong Kong",
        // },
        // {
        //     city: "Singapore",
        //     country: "Singapore",
        // },
        // {
        //     city: "New Orleans",
        //     country: "United States of America",
        // },
        // {
        //     city: "Bath",
        //     country: "United Kingdom",
        // },
        // {
        //     city: "Macau",
        //     country: "Macau",
        // },
        // {
        //     city: "Hoi An",
        //     country: "Vietnam",
        // },
        // {
        //     city: "Lubeck",
        //     country: "Germany",
        // },
        // {
        //     city: "Hiroshima",
        //     country: "Japan",
        // },
        // {
        //     city: "Agadez",
        //     country: "Niger",
        // },
        // {
        //     city: "Sanaa",
        //     country: "Yemen",
        // },
        // {
        //     city: "Belfast",
        //     country: "United Kingdom",
        // },
        // {
        //     city: "Thimphu",
        //     country: "Bhutan",
        // },
        // {
        //     city: "Anchorage",
        //     country: "United States of America",
        // },
        // {
        //     city: "Luxembourg",
        //     country: "Luxembourg",
        // },
        // {
        //     city: "Addis Ababa",
        //     country: "Ethiopia",
        // },
        // {
        //     city: "Ashgabat",
        //     country: "Turkmenistan",
        // },
        // {
        //     city: "Bukhara",
        //     country: "Uzbekistan",
        // },
    ];

    var findLatLng = function () {
        var citiesCopy = cities;
        console.log(citiesCopy.length);

        for (var i = 0; i < citiesCopy.length; i++) {
            var city = citiesCopy[i].city;
            var country = citiesCopy[i].country;

            $.ajax({
                url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + city + country + "&key=AIzaSyClcGkba1HB3RADI3Xp3eBrK4zXvLxqTU4"
            }).then(function mySuccess(response) {
                var city = response.results[0].name;
                var lat = response.results[0].geometry.location.lat;
                var lng = response.results[0].geometry.location.lng;
                var location = lat + "," + lng;

                database.ref("cities/" + city).update({
                    "lat": lat,
                    "lng": lng,
                });

                //food, nature, nightlife, culture, attractions
                ratingGenerator(location, "restaurant", "food", city);
                ratingGenerator(location, "bakery", "food", city);
                ratingGenerator(location, "cafe", "food", city);


                ratingGenerator(location, "bar", "nightlife", city);
                ratingGenerator(location, "night_club", "nightlife", city);


                ratingGenerator(location, "campground", "nature", city);
                // ratingGenerator(location, "natural_feature", "nature", city);
                ratingGenerator(location, "park", "nature", city);

                ratingGenerator(location, "museum", "culture", city);
                // ratingGenerator(location, "art_gallery", "culture", city);

                ratingGenerator(location, "aquarium", "attractions", city);
                // ratingGenerator(location, "amusement_park", "attractions", city);
                ratingGenerator(location, "zoo", "attractions", city);
                ratingGenerator(location, "casino", "attractions", city);

                placesComplete = true;
            });

        };

        return;

    };

     // url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=groceries&location=42.294,-83.721&rankedBy=distance&key=AIzaSyClcGkba1HB3RADI3Xp3eBrK4zXvLxqTU4"
     var ratingGenerator = function (location, type, category, city) {
        var queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + type + "&location=" + location + "&radius=8000&key=" + key + "&inputType=textquery";

        var average = 0;
        var ratings = [];
        var reviews = [];

        $.ajax({
            url: queryURL,
        }).then(function mySuccess(response) {
            var total = 0;

            for (var i = 0; i < response.results.length; i++) {
                ratings.push(response.results[i].rating);
                reviews.push(response.results[i].user_ratings_total);

                if (reviews[i] < 200) {
                    ratings[i] = ratings[i] * 0.8;
                } else if (reviews[i] >= 200 && reviews[i] < 400) {
                    ratings[i] = ratings[i] * 0.9;
                } else if (reviews[i] >= 400 && reviews[i] < 600) {
                    ratings[i] = ratings[i] * 1.0;
                } else if (reviews[i] >= 800 && reviews[i] < 1000) {
                    ratings[i] = ratings[i] * 1.1;
                } else if (reviews[i] >= 1000 && reviews[i] < 1400) {
                    ratings[i] = ratings[i] * 1.2;
                } else if (reviews[i] >= 1400 && reviews[i] < 2000) {
                    ratings[i] = ratings[i] * 1.3;
                } else if (reviews[i] >= 2000 && reviews[i] < 3000) {
                    ratings[i] = ratings[i] * 1.4;
                } else {
                    ratings[i] = ratings[i] * 1.5;
                }
                var total = total + ratings[i];
            };

            average = total / ratings.length;

            database.ref("cities/" + city + "/" + category + "/" + type).update({
                "rating": average,
            });


            // database.ref("cities/" + city + "/" + category).update({
            //     "combRating": combRating,
            // });
        });
    };

    var dbGenerator = function () {
        for (var j = 0; j < cities.length; j++) {
            var city = cities[j].city;
            var country = cities[j].country;
            database.ref("cities/" + cities[j].city).set({
                "city": city,
                "country": country,
                "lat": "",
                "lng": "",
                "dateAdded": firebase.database.ServerValue.TIMESTAMP,
            });

        }
    }

    var finalRatingCalc = function () {
        for (var i = 0; i < cities.length; i++) {
            var city = cities[i].city;

            // FOOD
            database.ref("cities/" + city + "/food").once("value").then(function (snapshot) {
                var sv = snapshot.val();
                var average = (sv.restaurant.rating + sv.bakery.rating + sv.cafe.rating) / 3;
                cities[i].food = average;
                database.ref("cities/" + city + "/finalRatings").update({
                    "food": cities[i].food,
                });


            });
            // NIGHTLIFE
            database.ref("cities/" + city + "/nightlife").once("value").then(function (snapshot) {
                var sv = snapshot.val();
                var average = (sv.bar.rating + sv.night_club.rating) / 2;
                cities[i].nightlife = average;
                database.ref("cities/" + city + "/finalRatings").update({
                    "nightlife": cities[i].nightlife,
                });

            });
            // NATURE
            database.ref("cities/" + city + "/nature").once("value").then(function (snapshot) {
                var sv = snapshot.val();
                var average = (sv.campground.rating + sv.park.rating) / 2;
                cities[pos].nature = average;
                database.ref("cities/" + city + "/finalRatings").update({
                    "nature": cities[pos].nature,
                });

            });
            //CULTURE
            database.ref("cities/" + city + "/culture").once("value").then(function (snapshot) {
                var sv = snapshot.val();
                var average = (sv.museum.rating);
                cities[i].culture = average;
                database.ref("cities/" + city + "/finalRatings").update({
                    "culture": cities[i].culture,
                });

            });
            //ATTRACTIONS
            database.ref("cities/" + city + "/attractions").once("value").then(function (snapshot) {
                var sv = snapshot.val();
                var average = (sv.aquarium.rating + sv.casino.rating + sv.zoo.rating) / 3;
                cities[i].attractions = average;
                database.ref("cities/" + city + "/finalRatings").update({
                    "attractions": cities[i].attractions,
                });

            });
        }
        // calcsComplete = true;
    };

    var key = "AIzaSyClcGkba1HB3RADI3Xp3eBrK4zXvLxqTU4";

   

    //arr argument for indexofMax
    var foodArray = [];
    var nightlifeArray = [];
    var cultureArray = [];
    var natureArray = [];
    var attractionsArray = [];

    var userMonth = "02";
    var userLowTemp = 70;
    var userHighTemp = 80;
    var fakeArray = [72, 96, 98, 100, 102, 71, 60, 62, 88, 90, 92, 94, 70, 64, 66, 68, 84, 86, 74, 76, 78, 80, 82];
    var userCities = [];
    var userIndex = [];
    var userTemps = [];


    var findTopFive = function () {
        userTemps = [];
        userIndex = [];
        userCities = [];

        for (var k = 0; k < fakeArray.length; k++) {
            var city = cities[k].city;
            

            if (fakeArray[k] >= userLowTemp && fakeArray[k] <= userHighTemp) {
                userTemps.push(fakeArray[k]);
                userIndex.push(k);
                userCities.push(city);
            };

        };

        // for (var i = 0; i< userCities.length)
        console.log(userCities);
        console.log(userIndex);
    };




    //top argument for indexofMax
    var topFood = [];
    var topNightlife = [];
    var topCulture = [];
    var topNature = [];
    var topAttractions = [];

    // var printResults = function (category) {
    //     database.ref("userInput/").push(category, topFood);
    // };

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
        // $(".results").append("<p>" + top + "<p>")

        if (top.length === 5) {
            // $(".results").append("<p>The top 5 cities for Food <br>" + topFood + "<p>")
            console.log(top);
            console.log(category);
            // printResults(category);
        }


        arr[maxIndex] = 0;
        return maxIndex;
    }

    $("#tempLimit").on("click", function () {
        findTopFive();
    });

    $("#pullTempSet").on("click", function () {
        // if (placesComplete === true) {
        if (userCities[0] !== null || userCities[0] !== undefined) {
        for (var i = 0; i < userCities.length; i++) {
            var city = userCities[i].city;
            console.log(city);
            database.ref("cities/" + city + "/finalRatings/food").once("value").then(function (snapshot) {
                foodArray.push(snapshot.val());
                console.log(snapshot.val());

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


        };
        // } else {
        //     console.log("google places functions not complete yet")
        // };
    }
    });

    $("#getTopFive").on("click", function () {
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
    // findLatLng();
    // dbGenerator();
    // finalRatingCalc();



});