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
    
    cityWeather("Budapest, Hungary", months[0].name, months[0].startDate, months[0].endDate);
    cityWeather("Minsk, Belarus", months[3].name, months[3].startDate, months[3].endDate);
    cityWeather("Seattle, USA", months[7].name, months[7].startDate, months[7].endDate);
    
    function findFlights(place) {
        var city = place;
        var apiKey = MvKNAIoHaObHGFQaA6KAZ7Cx2gkkV2h1;
    }