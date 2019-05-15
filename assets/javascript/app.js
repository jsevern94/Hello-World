
var config = {
    apiKey: "AIzaSyDuKxBBJIya6DvOXENE1xnfSZ2uImIWd-M",
    authDomain: "hello-world-19f5c.firebaseapp.com",
    databaseURL: "https://hello-world-19f5c.firebaseio.com",
    projectId: "hello-world-19f5c",
    storageBucket: "hello-world-19f5c.appspot.com",
    messagingSenderId: "969652105932"
};

firebase.initializeApp(config);

var database = firebase.database();

var months = [
    {
        name: "January",
        startDate: "2018-01-01",
        endDate: "2018-01-31"
    },
    {
        name: "February",
        startDate: "2018-02-01",
        endDate: "2018-02-28"
    },
    {
        name: "March",
        startDate: "2018-03-01",
        endDate: "2018-03-31"
    },
    {
        name: "April",
        startDate: "2018-04-01",
        endDate: "2018-04-30"
    },
    {
        name: "May",
        startDate: "2018-05-01",
        endDate: "2018-05-31"
    },
    {
        name: "June",
        startDate: "2018-06-01",
        endDate: "2018-06-30"
    },
    {
        name: "July",
        startDate: "2018-07-01",
        endDate: "2018-07-31"
    },
    {
        name: "August",
        startDate: "2018-08-01",
        endDate: "2018-08-31"
    },
    {
        name: "September",
        
        startDate: "2018-09-01",
        endDate: "2018-09-30"
    },
    {
        name: "October",
        startDate: "2018-10-01",
        endDate: "2018-10-31"
    },
    {
        name: "November",
        startDate: "2018-11-01",
        endDate: "2018-11-30"
    },
    {
        name: "December",
        startDate: "2018-12-01",
        endDate: "2018-12-31"
    }
    ]
    var January = months[0];
    var February = months[1];
    var March = months[2];
    var April = months[3];
    var May = months[4];
    var June = months[5];
    var July = months[6];
    var August = months[7];
    var September = months[8];
    var October = months[9];
    var November = months[10];
    var December = months[11];
    
    
    function cityWeather(city, month, startDate, endDate) {
        var apiKey = "305d321add43432d946225042190805"
        var queryURL = "https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=" + apiKey + "&q=" + city + "&format=json&date=" + startDate + "&enddate=" + endDate + "&tp=24"
    
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                var results = response.data.weather;
                console.log(results);
                var avgWeather = 0;
                var total = 0;
                for (var i = 0; i < results.length; i++) {
                    total += parseInt(results[i].maxtempF)
                    avgWeather = total / results.length;
                }
                console.log(city + " " + month + " weather: " + avgWeather);
            });
    }
    
    cityWeather("Budapest, Hungary", January.name, January.startDate, January.endDate);
    cityWeather("Minsk, Belarus", April.name, April.startDate, April.endDate);
    cityWeather("Seattle, USA", August.name, August.startDate, August.endDate);
    
    function findFlights(place) {
        var city = place;
        var apiKey = MvKNAIoHaObHGFQaA6KAZ7Cx2gkkV2h1;
        //check bookmarks for how to do oAuth and use new technology
    }
