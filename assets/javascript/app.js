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
        city: "Los Angeles",
        country: "United States of America",
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
        country: "United States of America",
    },
    {
        city: "Phnom Penh",
        country: "Cambodia",
    },
    {
        city: "St. Petersburg",
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
    {
        city: "Salvador Da Bahia",
        country: "Brazil",
    },
    {
        city: "Beijing",
        country: "China",
    },
    {
        city: "Helsinki",
        country: "Finland",
    },
    {
        city: "Kolkata",
        country: "India",
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
    {
        city: "Puerto Vallarta",
        country: "Mexico",
    },
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
        city: "Zanzibar",
        country: "Tanzania",
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
        city: "Mumbai",
        country:"India",
    },
    {
        city: "Hamburg",
        country: "Germany",
    },
    {
        city: "Oaxaca",
        country: "Mexico",
    },
    {
        city: "Galway",
        country: "Ireland",
    },
    {
        city: "Siena",
        country: "Italy",
    },
    {
        city: "Ifahan",
        country: "Iran",
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
        city: "Taipei",
        country: "Taiwan",
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
        city: "Jaipur",
        country: "India",
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
        city: "Valparaiso",
        country: "Chile",
    },
    {
        city: "Naples",
        country: "Italy",
    },
    {
        city: "Memphis",
        country: "United States of America",
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
        city: "Monaco",
        country: "Monaco",
    },
    {
        city: "Washington DC",
        country: "United States of America",
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
        country: "United Kingdom",
    },
    {
        city: "Muscat",
        country: "Oman",
    },
    {
        city: "Panama City",
        country: "Panama",
    },
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
        city: "Bath",
        country: "United Kingdom", 
    },
    {
        city: "Copenhagen",
        country: "Denmark",
    },
    {
        city: "Macau",
        country: "Macau", 
    },
    {
        city: "Sofia",
        country: "Bulgaria",
    },
    {
        city: "Hoi An",
        country: "Vietnam",
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
        city: "Reykjavik",
        country: "Iceland",
    },
    {
        city: "Yogyakarta",
        country: "Indonesia",
    },
    {
        city: "Carcassone",
        country: "France",
    },
    {
        city: "Lubeck",
        country: "Germany",
    },
    {
        city: "Tel Aviv",
        country: "Israel",
    },
    {
        city: "Hiroshima",
        country: "Japan",
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
        city: "Dar Es Salaam",
        country: "Tanzania",
    },
    {
        city: "Kiev",
        country: "Ukraine",
    },
    {
        city: "Bukhara",
        country: "Uzbekistan",
    },
    {
        city: "Male",
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
        city: "Agadez",
        country: "Niger",
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
        city: "Bogota",
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
        city: "Sanaa",
        country: "Yemen",
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
        city: "Belfast",
        country: "United Kingdom",
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
        country: "United Staes of America",
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
        city: "Thimphu",
        country: "Bhutan",
    },
    {
        city: "Khartoum",
        country: "Sudan",
    },
    {
        city: "Anchorage",
        country: "United States of America",
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
        city: "Luxembourg",
        country: "Luxembourg",
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
        city: "Addis Ababa",
        country: "Ethiopia",
    },
    {
        city: "Pyongyang",
        country: "North Korea",
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
        country: "United States of America",
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
    {
        city: "Madang",
        country: "Papua New Guinea",
    },
    {
        city: "Ashgabat",
        country: "Turkmenistan",
    },

];


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
            console.log(cities.length)
            var userTemp = "F"; 
            if (userTemp === "C") {
                for (var i = 0; i < results.length; i++) {
                    total += parseInt(results[i].maxtempC)
                    avgWeather = total / results.length;
                    userWeather = Math.max(Math.ceil(avgWeather * 10) / 10);
                }
            }
            else if (userTemp === "F") {
                for (var i = 0; i < results.length; i++) {
                    total += parseInt(results[i].maxtempF)
                    avgWeather = total / results.length;
                    userWeather = Math.max(Math.ceil(avgWeather * 10) / 10);
                }
            }
            console.log(city + " " + month + " weather: " + userWeather);
        });
}

// for (var j = 0; j < cities.length; j++) {
//     cityWeather(cities[j].city + ", " + cities[j].country, January.name, January.startDate, January.endDate);
// }

// cityWeather("Antigua, Antigua and Barbuda", February.name, February.startDate, February.endDate);


function findFlights(place) {
    var city = place;
    var apiKey = MvKNAIoHaObHGFQaA6KAZ7Cx2gkkV2h1;
    //check bookmarks for how to do oAuth and use new technology
}