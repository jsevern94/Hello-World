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

  /*   $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + name + country + "&key=AIzaSyClcGkba1HB3RADI3Xp3eBrK4zXvLxqTU4"
    }).then(function mySuccess(response) {
        for (var i = 48; i < cities.length; i++) {

            console.log(response.results[i].geometry.location);
            cities[i].lat = response.results[i].geometry.location.lat;
            cities[i].lng = response.results[i].geometry.location.lng;
            console.log(cities[i]);
        }

        database.ref().push({
            "city": cities[i].city,
            "country": cities[i].country,
            "lat0": cities[i].lat,
            "lng0": cities[i].lng,
        });
    }); */

    var location = "47.6062,-122.3321";
    var radius = "500";
    var type = "restaurant";


    var key = "AIzaSyClcGkba1HB3RADI3Xp3eBrK4zXvLxqTU4";
    var inputType = "textquery";
    var queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + type + "&location=" + location + "&radius=" + radius + "&key=" + key + "&inputType=" + inputType;

    //^ fix the CORS thing later
    // url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=groceries&location=42.294,-83.721&rankedBy=distance&key=AIzaSyClcGkba1HB3RADI3Xp3eBrK4zXvLxqTU4"

    var average;
    var ratings = [];
    var reviews = [];

    $.ajax({
        url: queryURL,
    }).then(function mySuccess(response) {
        var total = 0;

        console.log(response.results[3].rating);
        console.log(response.results[3].user_ratings_total);

        for (var i = 0; i < response.results.length; i++) {
            ratings.push(response.results[i].rating);
            reviews.push(response.results[i].user_ratings_total);

            if (reviews[i] < 200) {
                ratings[i] = ratings[i] * 0.8;
            } else if (reviews[i] >= 200 && reviews [i] < 400) {
                ratings[i] = ratings[i] * 0.9;
            } else if (reviews[i] >= 400 && reviews [i] < 600){
                ratings[i] = ratings[i] * 1.0;
            } else if (reviews[i] >= 800 && reviews [i] < 1000) {
                ratings[i] = ratings[i] * 1.1;
            } else if (reviews[i] >= 1000 && reviews [i] < 1400) {
                ratings[i] = ratings[i] * 1.2;
            } else if (reviews[i] >= 1400 && reviews [i] < 2000) {
                ratings[i] = ratings[i] * 1.3;
            } else if (reviews[i] >= 2000 && reviews [i] < 3000) {
                ratings[i] = ratings[i] * 1.4;
            } else {
                ratings[i] = ratings[i] * 1.5;
            }
        };
        console.log(ratings[3], reviews[3]);

       
        console.log("Seattle average star rating: " + total / 20)
    });


    // $.ajax({
    //     url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurant&location=47.606,-122.332&key=AIzaSyClcGkba1HB3RADI3Xp3eBrK4zXvLxqTU4"


});