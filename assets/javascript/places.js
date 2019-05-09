$(document).ready(function () {
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

    
    var name = cities[0].city;
    var country = cities[0].country;
    console.log(name, country);

    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + name + country + "&key=AIzaSyClcGkba1HB3RADI3Xp3eBrK4zXvLxqTU4"
    }).then(function mySuccess(response) {
        console.log(response.results[0].geometry.location);
        cities[0].lat = response.results[0].geometry.location.lat;
        cities[0].lng = response.results[0].geometry.location.lng;
        console.log(cities[0]);

    });

    var location = "47.6062,-122.3321";
    var radius = "500";
    var type = "restaurant";


    var key = "AIzaSyClcGkba1HB3RADI3Xp3eBrK4zXvLxqTU4";
    var inputType = "textquery";
    var queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + type + "&location=" + location + "&radius=" + radius + "&key=" + key + "&inputType=" + inputType;

    //^ fix the CORS thing later
    // url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=groceries&location=42.294,-83.721&rankedBy=distance&key=AIzaSyClcGkba1HB3RADI3Xp3eBrK4zXvLxqTU4"

    var average;
    var total;

    $.ajax({
        url: queryURL,
    }).then(function mySuccess(response) {
        console.log(response.results);
        console.log(response.results[0].rating);
        console.log(response.results[1].user_ratings_total);
        console.log(response.results.length)

        // for (var i = 0; i = response.results.length; i++) {
        // };
    });


    // $.ajax({
    //     url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurant&location=47.606,-122.332&key=AIzaSyClcGkba1HB3RADI3Xp3eBrK4zXvLxqTU4"


});