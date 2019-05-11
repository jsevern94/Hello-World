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
            country: "United States of America",
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
            country: "United States of America",
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
            city: "Hong Kong",
            country: "Hong Kong",
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
        {
            city: "Rio De Janeiro",
            country: "Brazil",
        },
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
            city: "Edinburgh",
            country: "United Kingdom",
        },
        {
            city: "Venice",
            country: "Italy",
        },
        {
            city: "Hanoi",
            country: "Vietnam",
        },
        {
            city: "Amsterdam",
            country: "Netherlands",
        },
        {
            city: "Singapore",
            country: "Singapore",
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
        {
            city: "Mexico City",
            country: "Mexico",
        },
        {
            city: "Krakow",
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
            country: "United Sates of America",
        },
        {
            city: "Havana",
            country: "Cuba",
        },
        {
            city: "Madrid",
            country: "Spain",
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
            city: "New Orleans",
            country: "United States of America",
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
            city: "Marrakesh",
            country: "Morocco",
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
            city: "Kyoto",
            country: "Japan",
        },
        {
            city: "Las Vegas",
            country: "United States of America",
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
            city: "Lisbon",
            country: "Portugal",
        },
        {
            city: "Los Angeles",
            country: "United States of America",
        }
    ];

    var latlng = [];

    var findLatLng = function () {
        var citiesCopy = cities;


        for (var i = 0; i < cities.length; i++) {
            var city = citiesCopy[i].city;
            var country = citiesCopy[i].country;
            console.log("test: " + country);

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
                ratingGenerator(location, "art_gallery", "culture", city);
                
                ratingGenerator(location, "aquarium", "attractions", city);
                ratingGenerator(location, "amusement_park", "attractions", city);
                ratingGenerator(location, "zoo", "attractions", city);
                ratingGenerator(location, "casino", "attractions", city);










            });

        };

        return;

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
    findLatLng();
    dbGenerator();


    var key = "AIzaSyClcGkba1HB3RADI3Xp3eBrK4zXvLxqTU4";

    //^ fix the CORS thing later
    // url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=groceries&location=42.294,-83.721&rankedBy=distance&key=AIzaSyClcGkba1HB3RADI3Xp3eBrK4zXvLxqTU4"
    var ratingGenerator = function (location, type, category, city) {
        var queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + type + "&location=" + location + "&radius=2500&key=" + key + "&inputType=textquery";

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
                rating: average,
            });
        });
    };



});