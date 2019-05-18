
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
        country: "GA United States of America",
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
        country: "United Kingdom",
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
];



var januaryTemps = ["Paris:49", "New York:35.3", "Sydney:81.8", "Barcelona:57.7", "London:47.6", "Rome:57.1", "San Francisco:57.6", "Bangkok:90.1", "Cape Town:78", "Istanbul:49.6", "Melbourne:78.3", "Kathmandu:58.2", "Prague:41.7", "Vancouver:42.7", "Buenos Aires:89.1", "Berlin:41", "Jerusalem:62.1", "Montreal:21.7", "Venice:48", "Amsterdam:45", "Tokyo:48", "Florence:49.7", "Dublin:47", "Krakow:37.5", "Toronto:27.6", "Cairo:64.5", "Budapest:41.2", "Chicago:29.1", "Havana:75.5", "Munich:42.8", "Athens:56.1", "Vienna:41.8", "Ho Chi Minh City:89.9", "Sarajevo:39.7", "Seville:60.3", "Las Vegas:57.1", "Perth:81.8", "Shanghai:46", "Los Angeles:70.3", "Lisbon:59.1", "Stockholm:33.7", "Kuala Lumpur:85.3", "Damascus:54.2", "Luang Prabang:77.4", "Seattle:47", "Phnom Penh:89.5", "St. Petersburg:28", "Cuzco:57.6", "Delhi:71.6", "Dubrovnik:51.5", "Moscow:25.8", "Helsinki:32", "Santiago:77.8", "Fes:57.9", "Auckland:74.6", "Manila:85.2", "Chiang Mai:85.8", "Varanasi:73.1", "Cartagena:88.2", "Innsbruck:30.9", "York:43.6", "Hamburg:41.1", "Galway:47", "Wellington:69.7", "Ljubljana:45.7", "Seoul:29.3", "San Cristobal:76.2", "Tallinn:32.3", "Lhasa:39.5", "Bled:39.1", "Hobart:70.8", "Brussels:46.3", "La Paz:51.1", "Quebec City:17.5", "Valparaiso:70.2", "Naples:57.1", "Memphis:43.4", "Heidelberg:46.2", "Dhaka:77.2", "Amman:55", "Washington:40.7", "Quito:59.4", "Christchurch:74.2", "Glasgow:40.6", "Muscat:74.3", "Dakar:73.6", "Bratislava:42", "San Sebastian:67.9", "Bern:43.8", "San Juan:80.8", "Aleppo:56", "Dubai:72.6", "Riga:32.3", "Asmara:73.1", "Kabul:42", "Copenhagen:38.7", "Sofia:40", "Marseille:55.6", "Zagreb:46", "Manchester:43.4", "Antigua:79.3", "Reykjavik:32.8", "Yogyakarta:81.2", "Carcassonne:49.9", "Tel Aviv-Yafo:61.9", "Mendoza:82.4", "Nairobi:79.5", "Beirut:59.3", "Vilnius:31.2", "Montevideo:82.5", "Yangon:88.7", "Arequipa:59.2", "Bucharest:39.3", "Apia:84.2", "Belgrade:45.4", "Dar es Salaam:87", "Kyiv:31.2", "Malé:81.5", "Caracas:76.4", "Tirana:51", "Suva:86", "Tbilisi:42.2", "Ushuaia:52.6", "Kampala:84", "Bogota:68.3", "Bridgetown:81", "Ulaanbaatar:-3.1", "Abuja:98.3", "Laval:21.5", "Livingstone:91", "Alexandria:63.8", "Savannah:54", "Nuuk:13.4", "Jeddah:79.9", "Johannesburg:84.6", "Kairouan:65.4", "Austin:56.3", "San Salvador:89", "Cardiff:48.8", "Minsk:29.2", "Khartoum:84", "Mecca:81", "Aswan:72.5", "Yerevan:40.3", "Georgetown:84.8", "Maputo:86.3", "Baku:44.9", "Belize City:78", "Essaouira:62.9", "Santo Domingo:82.1", "Lahore:72.6", "Cayenne:81.5", "Almaty:15", "Mombasa:87", "Valletta:60.8", "Antananarivo:75.9", "Miami:71.4", "Bamako:91.8", "Saint-Denis:74.3", "Granada:87.9", "Beira:85"];

var februaryTemps = ["Paris:39.6", "New York:44.9", "Sydney:79.3", "Barcelona:52.1", "London:42.7", "Rome:52", "San Francisco:59.8", "Bangkok:90", "Cape Town:78.3", "Istanbul:51.1", "Melbourne:76.9", "Kathmandu:64.6", "Prague:33.1", "Vancouver:39", "Buenos Aires:87.9", "Berlin:35.1", "Jerusalem:69.3", "Montreal:29.7", "Venice:44.6", "Amsterdam:39", "Tokyo:48.6", "Florence:41.7", "Dublin:43.2", "Krakow:31.1", "Toronto:33.6", "Cairo:72.4", "Budapest:35.7", "Chicago:34", "Havana:84.2", "Munich:31.4", "Athens:57.9", "Vienna:32.7", "Ho Chi Minh City:92", "Sarajevo:33.3", "Seville:60.7", "Las Vegas:55.9", "Perth:80.5", "Shanghai:49.8", "Los Angeles:66.8", "Lisbon:58.2", "Stockholm:29", "Kuala Lumpur:89.5", "Damascus:61.6", "Luang Prabang:82.6", "Seattle:44.3", "Phnom Penh:91.4", "St. Petersburg:21.1", "Cuzco:57.7", "Delhi:79.6", "Dubrovnik:48.4", "Moscow:19.5", "Helsinki:22.7", "Santiago:78.1", "Fes:57.2", "Auckland:72.9", "Manila:87.7", "Chiang Mai:92.2", "Varanasi:83.8", "Cartagena:89.3", "Innsbruck:21.5", "York:41.1", "Hamburg:35.4", "Galway:43.9", "Wellington:68.5", "Ljubljana:34", "Seoul:34.9", "San Cristobal:75.2", "Tallinn:23.4", "Lhasa:37.6", "Bled:31.2", "Hobart:67.8", "Brussels:39.6", "La Paz:51.3", "Quebec City:26.3", "Valparaiso:71.4", "Naples:52", "Memphis:56", "Heidelberg:37.1", "Dhaka:86.3", "Amman:62.8", "Washington:50.7", "Quito:60.7", "Christchurch:70.7", "Glasgow:40.5", "Muscat:78.9", "Dakar:67.8", "Bratislava:34", "San Sebastian:65.3", "Bern:33.2", "San Juan:79.2", "Aleppo:61.4", "Dubai:76.8", "Riga:24.8", "Asmara:79.1", "Kabul:41.3", "Copenhagen:33.5", "Sofia:38.7", "Marseille:47.9", "Zagreb:34.6", "Manchester:40.4", "Antigua:78", "Reykjavik:36.6", "Yogyakarta:81.9", "Carcassonne:42.3", "Tel Aviv-Yafo:67.2", "Mendoza:81.6", "Nairobi:81.9", "Beirut:64.2", "Vilnius:24.8", "Montevideo:80.9", "Yangon:92.7", "Arequipa:58", "Bucharest:39.8", "Apia:84.1", "Belgrade:40.5", "Dar es Salaam:89.7", "Kyiv:28.6", "Malé:82.4", "Caracas:71.5", "Tirana:48.7", "Suva:85.5", "Tbilisi:47.6", "Ushuaia:54.6", "Kampala:85.2", "Bogota:68.9", "Bridgetown:80", "Ulaanbaatar:4.4", "Abuja:101.2", "Laval:29.3", "Livingstone:79.8", "Alexandria:68.5", "Savannah:69.7", "Nuuk:7.2", "Jeddah:83.4", "Johannesburg:79.8", "Kairouan:62", "Austin:62", "San Salvador:91.9", "Cardiff:44", "Minsk:23.2", "Khartoum:96.6", "Mecca:88", "Aswan:84.3", "Yerevan:46.3", "Georgetown:83.3", "Maputo:85.9", "Baku:47.9", "Belize City:80.7", "Essaouira:61.3", "Santo Domingo:81.3", "Lahore:77.9", "Cayenne:80", "Almaty:22", "Mombasa:87.8", "Valletta:59", "Antananarivo:78.1", "Miami:77.4", "Bamako:95.6", "Saint-Denis:75.3", "Granada:88.5", "Beira:84.5"];

var marchTemps = ["Paris:50.6", "New York:43.4", "Sydney:78.2", "Barcelona:59.3", "London:47.8", "Rome:57.7", "San Francisco:59.6", "Bangkok:93.2", "Cape Town:73.4", "Istanbul:56.7", "Melbourne:72.9", "Kathmandu:71.5", "Prague:41.7", "Vancouver:44.7", "Buenos Aires:81.6", "Berlin:40.9", "Jerusalem:76", "Montreal:33.6", "Venice:50.8", "Amsterdam:44", "Tokyo:60.6", "Florence:49.1", "Dublin:44.4", "Krakow:40.3", "Toronto:36.5", "Cairo:80.6", "Budapest:43.8", "Chicago:39.4", "Havana:81.7", "Munich:44", "Athens:65", "Vienna:42.9", "Ho Chi Minh City:94.4", "Sarajevo:42.7", "Seville:61.9", "Las Vegas:61.4", "Perth:83.7", "Shanghai:62.9", "Los Angeles:66.1", "Lisbon:58.6", "Stockholm:32.8", "Kuala Lumpur:90.1", "Damascus:70.3", "Luang Prabang:87.7", "Seattle:52.6", "Phnom Penh:94.2", "St. Petersburg:28.1", "Cuzco:58", "Delhi:92.7", "Dubrovnik:53.3", "Moscow:26.6", "Helsinki:28.6", "Santiago:75.4", "Fes:61", "Auckland:71.9", "Manila:89.2", "Chiang Mai:98.6", "Varanasi:97.1", "Cartagena:89.2", "Innsbruck:31.1", "York:44.8", "Hamburg:41.3", "Galway:45.2", "Wellington:65.9", "Ljubljana:45", "Seoul:53.7", "San Cristobal:77.4", "Tallinn:30.4", "Lhasa:38.1", "Bled:39.7", "Hobart:66.2", "Brussels:47.8", "La Paz:52.3", "Quebec City:31.7", "Valparaiso:70.7", "Naples:57.5", "Memphis:61.3", "Heidelberg:48.3", "Dhaka:94.2", "Amman:70.9", "Washington:48.6", "Quito:61.3", "Christchurch:68.3", "Glasgow:41.6", "Muscat:84.8", "Dakar:71.9", "Bratislava:44.2", "San Sebastian:68.1", "Bern:44.8", "San Juan:80.8", "Aleppo:70.5", "Dubai:82.2", "Riga:32.9", "Asmara:80.2", "Kabul:56.7", "Copenhagen:35.3", "Sofia:47.9", "Marseille:56", "Zagreb:45.8", "Manchester:44.3", "Antigua:78.7", "Reykjavik:36.9", "Yogyakarta:82.9", "Carcassonne:50.9", "Tel Aviv-Yafo:71.4", "Mendoza:77.1", "Nairobi:77.1", "Beirut:68.3", "Vilnius:34.3", "Montevideo:77.5", "Yangon:96.4", "Arequipa:60.5", "Bucharest:45.6", "Apia:83.9", "Belgrade:49", "Dar es Salaam:88.3", "Kyiv:32.9", "Malé:83.8", "Caracas:78.1", "Tirana:54.8", "Suva:84.1", "Tbilisi:55.8", "Ushuaia:48.6", "Kampala:78.1", "Bogota:68.8", "Bridgetown:81.4", "Ulaanbaatar:31.5", "Abuja:103.2", "Laval:33.9", "Livingstone:83.2", "Alexandria:73.1", "Savannah:66.6", "Nuuk:20.9", "Jeddah:86.9", "Johannesburg:78.6", "Kairouan:72.1", "Austin:73", "San Salvador:93", "Cardiff:46", "Minsk:30.7", "Khartoum:98.7", "Mecca:92.8", "Aswan:92.6", "Yerevan:57.7", "Georgetown:86.3", "Maputo:86.9", "Baku:55.3", "Belize City:83.5", "Essaouira:64.6", "Santo Domingo:83", "Lahore:90", "Cayenne:83", "Almaty:40.8", "Mombasa:87.9", "Valletta:61.5", "Antananarivo:76.5", "Miami:75.6", "Bamako:101.8", "Saint-Denis:74", "Granada:91.1", "Beira:84.7"];

var aprilTemps = ["Paris:63.8", "New York:52.9", "Sydney:76.7", "Barcelona:65", "London:58.9", "Rome:69.7", "San Francisco:63.1", "Bangkok:94.4", "Cape Town:71.6", "Istanbul:65.2", "Melbourne:68.2", "Kathmandu:73.4", "Prague:66.9", "Vancouver:49.9", "Buenos Aires:77.4", "Berlin:66", "Jerusalem:77.9", "Montreal:45.8", "Venice:65.4", "Amsterdam:56.5", "Tokyo:70.9", "Florence:65.3", "Dublin:50.5", "Krakow:66.4", "Toronto:43.6", "Cairo:83", "Budapest:70.4", "Chicago:44.6", "Havana:86.7", "Munich:65.3", "Athens:73.7", "Vienna:67.7", "Ho Chi Minh City:95.3", "Sarajevo:63.6", "Seville:69.3", "Las Vegas:75.2", "Perth:74.6", "Shanghai:73.4", "Los Angeles:72.2", "Lisbon:63.3", "Stockholm:50.7", "Kuala Lumpur:91.1", "Damascus:73.9", "Luang Prabang:90", "Seattle:56.7", "Phnom Penh:95.1", "St. Petersburg:46.5", "Cuzco:59", "Delhi:102", "Dubrovnik:65.5", "Moscow:52.8", "Helsinki:43.1", "Santiago:72", "Fes:66.6", "Auckland:66.8", "Manila:92.3", "Chiang Mai:101.1", "Varanasi:103.9", "Cartagena:89.5", "Innsbruck:50.4", "York:54.3", "Hamburg:60.6", "Galway:52.3", "Wellington:61.3", "Ljubljana:66.6", "Seoul:64.2", "San Cristobal:75", "Tallinn:46.6", "Lhasa:45.6", "Bled:60.6", "Hobart:62.3", "Brussels:62.8", "La Paz:52.8", "Quebec City:39.1", "Valparaiso:66.5", "Naples:69.4", "Memphis:63.9", "Heidelberg:68", "Dhaka:95.1", "Amman:74.2", "Washington:62", "Quito:59.8", "Christchurch:61.1", "Glasgow:50", "Muscat:93.4", "Dakar:70.6", "Bratislava:68.5", "San Sebastian:67.5", "Bern:63.5", "San Juan:82.3", "Aleppo:77.6", "Dubai:89.2", "Riga:49.9", "Asmara:81.8", "Kabul:65.5", "Copenhagen:49.8", "Sofia:66.5", "Marseille:66", "Zagreb:69.4", "Manchester:53.8", "Antigua:79.6", "Reykjavik:42.2", "Yogyakarta:83.4", "Carcassonne:62.3", "Tel Aviv-Yafo:73", "Mendoza:70.9", "Nairobi:75.7", "Beirut:70.7", "Vilnius:59.2", "Montevideo:75.3", "Yangon:98.7", "Arequipa:62.4", "Bucharest:72.3", "Apia:83.4", "Belgrade:71.8", "Dar es Salaam:83.2", "Kyiv:64.6", "Malé:84.6", "Caracas:77.7", "Tirana:68.8", "Suva:82.5", "Tbilisi:62.9", "Ushuaia:43.4", "Kampala:75.7", "Bogota:66.5", "Bridgetown:81.6", "Ulaanbaatar:44.6", "Abuja:101.7", "Laval:44.9", "Livingstone:83.7", "Alexandria:75.4", "Savannah:73.3", "Nuuk:30", "Jeddah:87.9", "Johannesburg:74.3", "Kairouan:75.6", "Austin:74.8", "San Salvador:92.4", "Cardiff:53.4", "Minsk:58.6", "Khartoum:100.4", "Mecca:94.5", "Aswan:94.6", "Yerevan:62.6", "Georgetown:85", "Maputo:85", "Baku:59.6", "Belize City:85.8", "Essaouira:66.1", "Santo Domingo:85", "Lahore:99.4", "Cayenne:81.8", "Almaty:47.4", "Mombasa:86.4", "Valletta:63.3", "Antananarivo:75.3", "Miami:80.3", "Bamako:102.9", "Saint-Denis:72.5", "Granada:92.5", "Beira:82.1"];

var mayTemps = ["Paris:70.3", "New York:71.7", "Sydney:68.4", "Barcelona:69.6", "London:68.8", "Rome:73.3", "San Francisco:64.6", "Bangkok:95", "Cape Town:68.2", "Istanbul:71.4", "Melbourne:60.2", "Kathmandu:72.7", "Prague:71.3", "Vancouver:61", "Buenos Aires:66.8", "Berlin:74.1", "Jerusalem:86.8", "Montreal:69.7", "Venice:73.2", "Amsterdam:65.8", "Tokyo:76.5", "Florence:69", "Dublin:57.2", "Krakow:71.3", "Toronto:63.7", "Cairo:91.8", "Budapest:76.8", "Chicago:68.3", "Havana:83.8", "Munich:68.6", "Athens:78.7", "Vienna:71.4", "Ho Chi Minh City:94.3", "Sarajevo:66.8", "Seville:76.5", "Las Vegas:80.7", "Perth:72.2", "Shanghai:80.6", "Los Angeles:70.8", "Lisbon:68.5", "Stockholm:68", "Kuala Lumpur:89.2", "Damascus:82.4", "Luang Prabang:88.6", "Seattle:70.2", "Phnom Penh:93.9", "St. Petersburg:62.2", "Cuzco:59.1", "Delhi:108.1", "Dubrovnik:71.3", "Moscow:69.3", "Helsinki:59.7", "Santiago:64.5", "Fes:71.2", "Auckland:62.9", "Manila:95", "Chiang Mai:96.6", "Varanasi:108.7", "Cartagena:88.1", "Innsbruck:54.9", "York:63.2", "Hamburg:71.8", "Galway:60.5", "Wellington:57.5", "Ljubljana:72.4", "Seoul:73.6", "San Cristobal:74.9", "Tallinn:62.4", "Lhasa:52.2", "Bled:65.7", "Hobart:57.1", "Brussels:70.3", "La Paz:51.3", "Quebec City:63.8", "Valparaiso:65.3", "Naples:73.1", "Memphis:85.4", "Heidelberg:73.6", "Dhaka:92.6", "Amman:82.9", "Washington:81.3", "Quito:60", "Christchurch:56.2", "Glasgow:59.9", "Muscat:98.1", "Dakar:70.5", "Bratislava:72.9", "San Sebastian:69", "Bern:66.1", "San Juan:82.8", "Aleppo:85.4", "Dubai:95.3", "Riga:63", "Asmara:87.3", "Kabul:69.7", "Copenhagen:62.3", "Sofia:69.3", "Marseille:70.1", "Zagreb:74", "Manchester:64.3", "Antigua:80.1", "Reykjavik:44.2", "Yogyakarta:82.8", "Carcassonne:64.8", "Tel Aviv-Yafo:81.4", "Mendoza:60.3", "Nairobi:74.2", "Beirut:78.6", "Vilnius:70.5", "Montevideo:66.4", "Yangon:93.4", "Arequipa:62.9", "Bucharest:78", "Apia:83.6", "Belgrade:77", "Dar es Salaam:82.4", "Kyiv:75.2", "Malé:84.2", "Caracas:78.5", "Tirana:73", "Suva:79.9", "Tbilisi:73.3", "Ushuaia:40.1", "Kampala:76.5", "Bogota:66.9", "Bridgetown:82.5", "Ulaanbaatar:62.1", "Abuja:96", "Laval:68.6", "Livingstone:83.3", "Alexandria:81.6", "Savannah:83.2", "Nuuk:30.8", "Jeddah:94.3", "Johannesburg:69.6", "Kairouan:80.5", "Austin:87.4", "San Salvador:91.3", "Cardiff:59.8", "Minsk:70.2", "Khartoum:106", "Mecca:103", "Aswan:104.6", "Yerevan:71.3", "Georgetown:83.8", "Maputo:82.7", "Baku:75.6", "Belize City:88.3", "Essaouira:67.3", "Santo Domingo:84.8", "Lahore:105.9", "Cayenne:81.6", "Almaty:53", "Mombasa:83.1", "Valletta:67.9", "Antananarivo:73.3", "Miami:81", "Bamako:103.7", "Saint-Denis:69.7", "Granada:90.8", "Beira:80.9"];

var juneTemps = ["Paris:74", "New York:77.4", "Sydney:62.2", "Barcelona:78", "London:72.9", "Rome:81.4", "San Francisco:71.2", "Bangkok:92.8", "Cape Town:62.5", "Istanbul:79.5", "Melbourne:54.9", "Kathmandu:77.6", "Prague:73.1", "Vancouver:60.7", "Buenos Aires:57.9", "Berlin:75.5", "Jerusalem:88.2", "Montreal:74.4", "Venice:79.4", "Amsterdam:66.7", "Tokyo:80", "Florence:76.1", "Dublin:62.4", "Krakow:73", "Toronto:70.1", "Cairo:94.5", "Budapest:79.1", "Chicago:75.6", "Havana:88.6", "Munich:71.2", "Athens:84.6", "Vienna:74.5", "Ho Chi Minh City:89.2", "Sarajevo:67.5", "Seville:86", "Las Vegas:94.3", "Perth:64.9", "Shanghai:84.5", "Los Angeles:77", "Lisbon:73.7", "Stockholm:69.5", "Kuala Lumpur:90.2", "Damascus:86.9", "Luang Prabang:83", "Seattle:69.1", "Phnom Penh:90.2", "St. Petersburg:63.1", "Cuzco:54.4", "Delhi:106.9", "Dubrovnik:75.6", "Moscow:70.5", "Helsinki:61.6", "Santiago:58.7", "Fes:80", "Auckland:58.3", "Manila:88.8", "Chiang Mai:90.7", "Varanasi:105.6", "Cartagena:89.3", "Innsbruck:59.2", "York:66.3", "Hamburg:71.1", "Galway:67", "Wellington:54.4", "Ljubljana:78", "Seoul:83", "San Cristobal:74.4", "Tallinn:62.9", "Lhasa:62.3", "Bled:71.5", "Hobart:53.8", "Brussels:71.4", "La Paz:48.2", "Quebec City:68", "Valparaiso:60.5", "Naples:79.9", "Memphis:90.3", "Heidelberg:77.5", "Dhaka:93.5", "Amman:85.7", "Washington:84", "Quito:61.5", "Christchurch:50.9", "Glasgow:65", "Muscat:101.3", "Dakar:73.7", "Bratislava:76", "San Sebastian:72.2", "Bern:71.4", "San Juan:85", "Aleppo:89.3", "Dubai:100.5", "Riga:65.1", "Asmara:87.6", "Kabul:81.8", "Copenhagen:67.4", "Sofia:72.3", "Marseille:77.8", "Zagreb:78.4", "Manchester:68.5", "Antigua:81.6", "Reykjavik:49.5", "Yogyakarta:81.2", "Carcassonne:74.2", "Tel Aviv-Yafo:82.6", "Mendoza:52.8", "Nairobi:72.1", "Beirut:79.6", "Vilnius:70.6", "Montevideo:57.8", "Yangon:86.8", "Arequipa:61.1", "Bucharest:83.5", "Apia:83.2", "Belgrade:78.6", "Dar es Salaam:82.7", "Kyiv:77.6", "Malé:83.2", "Caracas:77.8", "Tirana:76.7", "Suva:79.4", "Tbilisi:82.4", "Ushuaia:34.4", "Kampala:77.2", "Bogota:65.4", "Bridgetown:82.6", "Ulaanbaatar:67.5", "Abuja:90.7", "Laval:72.6", "Livingstone:79.1", "Alexandria:85", "Savannah:91.4", "Nuuk:42.5", "Jeddah:95.1", "Johannesburg:66.3", "Kairouan:90.3", "Austin:92.9", "San Salvador:90.1", "Cardiff:65.6", "Minsk:68.9", "Khartoum:104.1", "Mecca:105.5", "Aswan:106.1", "Yerevan:79.9", "Georgetown:84.7", "Maputo:79.9", "Baku:81.9", "Belize City:85.5", "Essaouira:71.8", "Santo Domingo:86.9", "Lahore:107.9", "Cayenne:83", "Almaty:61.4", "Mombasa:82", "Valletta:74.7", "Antananarivo:70", "Miami:85.7", "Bamako:100.2", "Saint-Denis:67.3", "Granada:87.4", "Beira:78.4"];

var julyTemps = ["Paris:81.6", "New York:84.8", "Sydney:63.9", "Barcelona:84.8", "London:80.3", "Rome:88.2", "San Francisco:74.5", "Bangkok:90.2", "Cape Town:65.6", "Istanbul:84.2", "Melbourne:54.9", "Kathmandu:74.9", "Prague:78.7", "Vancouver:68.5", "Buenos Aires:55.8", "Berlin:80.9", "Jerusalem:91", "Montreal:83.9", "Venice:82.9", "Amsterdam:75.3", "Tokyo:91.7", "Florence:84.1", "Dublin:65.2", "Krakow:76.4", "Toronto:80.1", "Cairo:96.3", "Budapest:82.3", "Chicago:79.5", "Havana:90.4", "Munich:75.9", "Athens:89.9", "Vienna:79.1", "Ho Chi Minh City:86.8", "Sarajevo:71.1", "Seville:92.6", "Las Vegas:97.4", "Perth:63.4", "Shanghai:91.3", "Los Angeles:86.2", "Lisbon:76.2", "Stockholm:79", "Kuala Lumpur:89.8", "Damascus:92.2", "Luang Prabang:81.5", "Seattle:79.9", "Phnom Penh:89.8", "St. Petersburg:72", "Cuzco:55.4", "Delhi:98.6", "Dubrovnik:79.2", "Moscow:75.1", "Helsinki:70.9", "Santiago:56.2", "Fes:89.9", "Auckland:58", "Manila:86", "Chiang Mai:88.4", "Varanasi:96.8", "Cartagena:89.8", "Innsbruck:63.3", "York:72.7", "Hamburg:79.1", "Galway:65.7", "Wellington:54.6", "Ljubljana:82", "Seoul:90.8", "San Cristobal:77.1", "Tallinn:72.2", "Lhasa:63.6", "Bled:75.1", "Hobart:53.3", "Brussels:80.6", "La Paz:48.3", "Quebec City:77.2", "Valparaiso:58.2", "Naples:85.3", "Memphis:90.2", "Heidelberg:83.8", "Dhaka:92", "Amman:89.7", "Washington:87.7", "Quito:63.1", "Christchurch:54.2", "Glasgow:66.2", "Muscat:99.6", "Dakar:78.1", "Bratislava:80.8", "San Sebastian:75.7", "Bern:78.3", "San Juan:85.4", "Aleppo:95", "Dubai:102.6", "Riga:72.1", "Asmara:83.9", "Kabul:86", "Copenhagen:73.1", "Sofia:74.6", "Marseille:84.9", "Zagreb:81.7", "Manchester:73", "Antigua:81.9", "Reykjavik:53", "Yogyakarta:79.6", "Carcassonne:83.7", "Tel Aviv-Yafo:84.8", "Mendoza:49.8", "Nairobi:71.1", "Beirut:82.5", "Vilnius:73.7", "Montevideo:56", "Yangon:85.7", "Arequipa:61.8", "Bucharest:84.1", "Apia:81.7", "Belgrade:79.8", "Dar es Salaam:82.5", "Kyiv:78.9", "Malé:83.3", "Caracas:77.7", "Tirana:81.2", "Suva:77.9", "Tbilisi:91.6", "Ushuaia:34.5", "Kampala:78.7", "Bogota:65.6", "Bridgetown:83", "Ulaanbaatar:67.3", "Abuja:85.9", "Laval:82", "Livingstone:75.9", "Alexandria:86.7", "Savannah:90.6", "Nuuk:47.4", "Jeddah:96.3", "Johannesburg:63.5", "Kairouan:101.9", "Austin:96.3", "San Salvador:92.7", "Cardiff:70.8", "Minsk:72.9", "Khartoum:101.2", "Mecca:104.7", "Aswan:105", "Yerevan:91.4", "Georgetown:87", "Maputo:76.2", "Baku:89.7", "Belize City:86", "Essaouira:78.2", "Santo Domingo:87.7", "Lahore:102.5", "Cayenne:84", "Almaty:68.1", "Mombasa:81.2", "Valletta:80.5", "Antananarivo:65.8", "Miami:87.6", "Bamako:91.3", "Saint-Denis:64.8", "Granada:88.2", "Beira:74.4"];

var augustTemps = ["Paris:78.4", "New York:85.1", "Sydney:63.5", "Barcelona:83.6", "London:73.7", "Rome:88.7", "San Francisco:72.5", "Bangkok:88.5", "Cape Town:59.6", "Istanbul:84.4", "Melbourne:54.9", "Kathmandu:74.2", "Prague:81.3", "Vancouver:66.7", "Buenos Aires:60.7", "Berlin:81", "Jerusalem:90.5", "Montreal:81.2", "Venice:85.5", "Amsterdam:71.4", "Tokyo:91.3", "Florence:85.7", "Dublin:63.3", "Krakow:79.5", "Toronto:80.7", "Cairo:95.1", "Budapest:86.9", "Chicago:78.7", "Havana:89.9", "Munich:77", "Athens:87.8", "Vienna:83.1", "Ho Chi Minh City:87", "Sarajevo:75.8", "Seville:100.3", "Las Vegas:96", "Perth:62.5", "Shanghai:91", "Los Angeles:85.5", "Lisbon:85.7", "Stockholm:72.3", "Kuala Lumpur:91.3", "Damascus:92.5", "Luang Prabang:81.8", "Seattle:77", "Phnom Penh:89.8", "St. Petersburg:71.3", "Cuzco:55.4", "Delhi:96.7", "Dubrovnik:82.3", "Moscow:76.8", "Helsinki:69.9", "Santiago:62.4", "Fes:96", "Auckland:58.2", "Manila:86.3", "Chiang Mai:88", "Varanasi:92.2", "Cartagena:90.6", "Innsbruck:64.3", "York:69.2", "Hamburg:76.7", "Galway:62.3", "Wellington:54.5", "Ljubljana:82", "Seoul:92", "San Cristobal:78.4", "Tallinn:71", "Lhasa:62.3", "Bled:76", "Hobart:53.1", "Brussels:75.5", "La Paz:48.4", "Quebec City:75.3", "Valparaiso:61.3", "Naples:86.3", "Memphis:87.6", "Heidelberg:82.4", "Dhaka:92.5", "Amman:88.8", "Washington:89.3", "Quito:65.1", "Christchurch:54.9", "Glasgow:60.6", "Muscat:94.6", "Dakar:79.7", "Bratislava:84.8", "San Sebastian:77.4", "Bern:76.8", "San Juan:85.8", "Aleppo:95.4", "Dubai:101.8", "Riga:72.7", "Asmara:84", "Kabul:85.2", "Copenhagen:70", "Sofia:78.6", "Marseille:85", "Zagreb:84", "Manchester:66.3", "Antigua:82.6", "Reykjavik:53", "Yogyakarta:79.7", "Carcassonne:82.5", "Tel Aviv-Yafo:84.9", "Mendoza:58.8", "Nairobi:73.5", "Beirut:82.6", "Vilnius:74.3", "Montevideo:58", "Yangon:84.4", "Arequipa:63.1", "Bucharest:88.9", "Apia:81.6", "Belgrade:85.5", "Dar es Salaam:83.8", "Kyiv:82.1", "Malé:83", "Caracas:79.4", "Tirana:84.9", "Suva:77.4", "Tbilisi:83.1", "Ushuaia:37.9", "Kampala:79.7", "Bogota:85.9", "Bridgetown:68", "Ulaanbaatar:67", "Abuja:82.5", "Laval:79.4", "Livingstone:89.9", "Alexandria:87", "Savannah:90.6", "Nuuk:46.4", "Jeddah:96.2", "Johannesburg:72.9", "Kairouan:92.1", "Austin:95", "San Salvador:92.3", "Cardiff:66", "Minsk:74.6", "Khartoum:99.5", "Mecca:104", "Aswan:105.8", "Yerevan:86.6", "Georgetown:88.6", "Maputo:80.5", "Baku:83.7", "Belize City:84.9", "Essaouira:80.6", "Santo Domingo:87.7", "Lahore:101.8", "Cayenne:87", "Almaty:67.4", "Mombasa:81.4", "Valletta:81.7", "Antananarivo:72", "Miami:86.6", "Bamako:85", "Saint-Denis:66.8", "Granada:88.3", "Beira:81.6"];

var septemberTemps = ["Paris:72.3", "New York:76.3", "Sydney:66.6", "Barcelona:79.2", "London:67.6", "Rome:81.8", "San Francisco:71.8", "Bangkok:91.2", "Cape Town:62.5", "Istanbul:76.5", "Melbourne:59.2", "Kathmandu:74.6", "Prague:70.4", "Vancouver:58.5", "Buenos Aires:69.2", "Berlin:71.7", "Jerusalem:89.7", "Montreal:72.1", "Venice:77.4", "Amsterdam:65.2", "Tokyo:81.2", "Florence:78.1", "Dublin:59.1", "Krakow:69.5", "Toronto:74.2", "Cairo:91.5", "Budapest:75.6", "Chicago:72.3", "Havana:88.1", "Munich:68.3", "Athens:81.5", "Vienna:72", "Ho Chi Minh City:88.2", "Sarajevo:68.2", "Seville:91.5", "Las Vegas:90.5", "Perth:65", "Shanghai:84.9", "Los Angeles:80.9", "Lisbon:82.6", "Stockholm:63.6", "Kuala Lumpur:89.5", "Damascus:88.8", "Luang Prabang:84.7", "Seattle:68.1", "Phnom Penh:91.1", "St. Petersburg:62.2", "Cuzco:59.7", "Delhi:93.6", "Dubrovnik:76", "Moscow:66.8", "Helsinki:61.4", "Santiago:66.1", "Fes:87.2", "Auckland:58.9", "Manila:88.3", "Chiang Mai:90.2", "Varanasi:91.7", "Cartagena:88.2", "Innsbruck:59", "York:62.7", "Hamburg:68.8", "Galway:58.1", "Wellington:54.6", "Ljubljana:72.7", "Seoul:78.9", "San Cristobal:78.5", "Tallinn:62.6", "Lhasa:60.6", "Bled:67.7", "Hobart:56.1", "Brussels:68.2", "La Paz:52.6", "Quebec City:65.3", "Valparaiso:63", "Naples:80.5", "Memphis:83.2", "Heidelberg:73.7", "Dhaka:92.9", "Amman:87.3", "Washington:81.1", "Quito:63.8", "Christchurch:56.3", "Glasgow:56.2", "Muscat:93.9", "Dakar:81.5", "Bratislava:73.2", "San Sebastian:77.8", "Bern:70.7", "San Juan:85.9", "Aleppo:92.5", "Dubai:101.1", "Riga:64.7", "Asmara:86.2", "Kabul:76.1", "Copenhagen:63.3", "Sofia:70.7", "Marseille:79.1", "Zagreb:73.6", "Manchester:60.8", "Antigua:83.5", "Reykjavik:47.4", "Yogyakarta:82", "Carcassonne:77.5", "Tel Aviv-Yafo:84.4", "Mendoza:68.5", "Nairobi:77.7", "Beirut:82.3", "Vilnius:66.3", "Montevideo:64.6", "Yangon:87.3", "Arequipa:65.2", "Bucharest:79", "Apia:82.2", "Belgrade:77.4", "Dar es Salaam:85", "Kyiv:72.1", "Malé:83.6", "Caracas:79.8", "Tirana:78.9", "Suva:79", "Tbilisi:78.2", "Ushuaia:39.2", "Kampala:80.8", "Bogota:70", "Bridgetown:84.5", "Ulaanbaatar:50.6", "Abuja:85.2", "Laval:70.8", "Livingstone:94.8", "Alexandria:85.2", "Savannah:89", "Nuuk:40.9", "Jeddah:94", "Johannesburg:80", "Kairouan:90.5", "Austin:84.2", "San Salvador:90.7", "Cardiff:62.2", "Minsk:66.1", "Khartoum:103.3", "Mecca:102.8", "Aswan:106", "Yerevan:79.4", "Georgetown:89.6", "Maputo:85.9", "Baku:78.3", "Belize City:86.1", "Essaouira:79.7", "Santo Domingo:87.1", "Lahore:99.6", "Cayenne:88.7", "Almaty:57.2", "Mombasa:82.7", "Valletta:79.5", "Antananarivo:75.7", "Miami:85.9", "Bamako:89.8", "Saint-Denis:66.7", "Granada:88.8", "Beira:85.4"];

var octoberTemps = ["Paris:64.5", "New York:63.7", "Sydney:69.8", "Barcelona:70.4", "London:60.9", "Rome:74.5", "San Francisco:70", "Bangkok:91.1", "Cape Town:74.6", "Istanbul:67.8", "Melbourne:66.5", "Kathmandu:70.6", "Prague:60.7", "Vancouver:53.6", "Buenos Aires:70.9", "Berlin:60.8", "Jerusalem:83.4", "Montreal:51", "Venice:68.6", "Amsterdam:59.8", "Tokyo:74.2", "Florence:67.4", "Dublin:54.7", "Krakow:60", "Toronto:56.8", "Cairo:84.3", "Budapest:66.2", "Chicago:57.6", "Havana:85.8", "Munich:59.3", "Athens:71.4", "Vienna:62.9", "Ho Chi Minh City:89.6", "Sarajevo:60.1", "Seville:76.7", "Las Vegas:70.8", "Perth:69.4", "Shanghai:73.5", "Los Angeles:77.3", "Lisbon:72.8", "Stockholm:52.2", "Kuala Lumpur:88.8", "Damascus:78.6", "Luang Prabang:84.2", "Seattle:60", "Phnom Penh:90.8", "St. Petersburg:49", "Cuzco:59", "Delhi:92.5", "Dubrovnik:69", "Moscow:51", "Helsinki:49.9", "Santiago:66.8", "Fes:73.7", "Auckland:62.1", "Manila:89.7", "Chiang Mai:89", "Varanasi:91.3", "Cartagena:85.8", "Innsbruck:50.6", "York:57.2", "Hamburg:60", "Galway:54", "Wellington:57", "Ljubljana:63.2", "Seoul:64.5", "San Cristobal:78", "Tallinn:50.8", "Lhasa:48.1", "Bled:58.9", "Hobart:61.4", "Brussels:61.8", "La Paz:52.9", "Quebec City:45.9", "Valparaiso:63.7", "Naples:73.2", "Memphis:72.3", "Heidelberg:62.9", "Dhaka:88.4", "Amman:78.2", "Washington:68.2", "Quito:62", "Christchurch:60", "Glasgow:52.2", "Muscat:91.5", "Dakar:82.2", "Bratislava:64.2", "San Sebastian:75.3", "Bern:59.4", "San Juan:84.3", "Aleppo:81.3", "Dubai:93.6", "Riga:53", "Asmara:81.2", "Kabul:61.9", "Copenhagen:55.4", "Sofia:63.2", "Marseille:69.6", "Zagreb:65", "Manchester:55.2", "Antigua:82.7", "Reykjavik:40.5", "Yogyakarta:83.6", "Carcassonne:62.9", "Tel Aviv-Yafo:81", "Mendoza:69.6", "Nairobi:77.7", "Beirut:78.1", "Vilnius:54", "Montevideo:65.5", "Yangon:88.3", "Arequipa:63.3", "Bucharest:68.7", "Apia:82.8", "Belgrade:69.6", "Dar es Salaam:86.2", "Kyiv:59.7", "Malé:83.1", "Caracas:78.5", "Tirana:72.1", "Suva:79.4", "Tbilisi:66.7", "Ushuaia:44.7", "Kampala:78.9", "Bogota:68.1", "Bridgetown:83.9", "Ulaanbaatar:40.1", "Abuja:91.6", "Laval:50", "Livingstone:94.3", "Alexandria:80.7", "Savannah:81", "Nuuk:28.9", "Jeddah:92.6", "Johannesburg:80.1", "Kairouan:79.6", "Austin:74.9", "San Salvador:85.6", "Cardiff:57.5", "Minsk:53.8", "Khartoum:101.2", "Mecca:97", "Aswan:96.8", "Yerevan:67", "Georgetown:90.7", "Maputo:80.1", "Baku:69.5", "Belize City:84.8", "Essaouira:74.5", "Santo Domingo:85.3", "Lahore:93.6", "Cayenne:89.3", "Almaty:45", "Mombasa:83.6", "Valletta:74.1", "Antananarivo:78.5", "Miami:83.8", "Bamako:97.6", "Saint-Denis:67.4", "Granada:84", "Beira:82.1"];

var novemberTemps = ["Paris:51.1", "New York:48.8", "Sydney:73.8", "Barcelona:61.9", "London:52.5", "Rome:63.5", "San Francisco:64.6", "Bangkok:90.3", "Cape Town:72.9", "Istanbul:58.8", "Melbourne:67.4", "Kathmandu:65.7", "Prague:46.5", "Vancouver:47.6", "Buenos Aires:78.1", "Berlin:47.1", "Jerusalem:73.2", "Montreal:34.3", "Venice:56.8", "Amsterdam:48", "Tokyo:64", "Florence:55.2", "Dublin:51.1", "Krakow:46.7", "Toronto:41.4", "Cairo:76.2", "Budapest:51.2", "Chicago:38", "Havana:83.7", "Munich:46", "Athens:64", "Vienna:47.5", "Ho Chi Minh City:88.8", "Sarajevo:50.1", "Seville:64.4", "Las Vegas:60.1", "Perth:75.1", "Shanghai:64.9", "Los Angeles:73.5", "Lisbon:62.3", "Stockholm:41.5", "Kuala Lumpur:88.2", "Damascus:64.5", "Luang Prabang:81.8", "Seattle:51.8", "Phnom Penh:89.4", "St. Petersburg:39.4", "Cuzco:62.1", "Delhi:84", "Dubrovnik:60.6", "Moscow:33.4", "Helsinki:40.9", "Santiago:73.9", "Fes:63.2", "Auckland:64.8", "Manila:88.1", "Chiang Mai:88.5", "Varanasi:85.3", "Cartagena:87.8", "Innsbruck:39.7", "York:50.2", "Hamburg:46.8", "Galway:50", "Wellington:59.9", "Ljubljana:49.3", "Seoul:53.8", "San Cristobal:77", "Tallinn:41.4", "Lhasa:41.6", "Bled:45.6", "Hobart:61.3", "Brussels:49.7", "La Paz:54.3", "Quebec City:30.9", "Valparaiso:69.5", "Naples:64.1", "Memphis:54.5", "Heidelberg:49.8", "Dhaka:85.7", "Amman:66", "Washington:50.4", "Quito:60.1", "Christchurch:61.9", "Glasgow:47.6", "Muscat:84.2", "Dakar:80.1", "Bratislava:49.3", "San Sebastian:71.4", "Bern:47.8", "San Juan:83.5", "Aleppo:65.5", "Dubai:84.8", "Riga:41.3", "Asmara:77.2", "Kabul:52.8", "Copenhagen:46.1", "Sofia:49.1", "Marseille:60.4", "Zagreb:50.5", "Manchester:49.2", "Antigua:81.7", "Reykjavik:38.7", "Yogyakarta:82.2", "Carcassonne:54.2", "Tel Aviv-Yafo:73.2", "Mendoza:76.8", "Nairobi:77.6", "Beirut:70.3", "Vilnius:38.9", "Montevideo:72.2", "Yangon:88.2", "Arequipa:64", "Bucharest:46.9", "Apia:83.9", "Belgrade:54.3", "Dar es Salaam:88", "Kyiv:37.8", "Malé:83.1", "Caracas:77.1", "Tirana:61.7", "Suva:81.3", "Tbilisi:50.8", "Ushuaia:49.7", "Kampala:79.6", "Bogota:68.2", "Bridgetown:83.1", "Ulaanbaatar:19.4", "Abuja:98.2", "Laval:33.9", "Livingstone:96", "Alexandria:75", "Savannah:67.5", "Nuuk:27", "Jeddah:85.9", "Johannesburg:82.8", "Kairouan:70.7", "Austin:63.1", "San Salvador:89.6", "Cardiff:52.2", "Minsk:36.8", "Khartoum:91.9", "Mecca:86.8", "Aswan:82.6", "Yerevan:51.3", "Georgetown:86.5", "Maputo:83.6", "Baku:56.3", "Belize City:83.3", "Essaouira:67.6", "Santo Domingo:85", "Lahore:83.8", "Cayenne:85.6", "Almaty:28", "Mombasa:86.2", "Valletta:69.3", "Antananarivo:80", "Miami:80.1", "Bamako:97.7", "Saint-Denis:70.4", "Granada:86.5", "Beira:83"];

var decemberTemps = ["Paris:47.7", "New York:43.5", "Sydney:79.8", "Barcelona:58.7", "London:49.4", "Rome:56.4", "San Francisco:56.6", "Bangkok:90.6", "Cape Town:74.3", "Istanbul:49.6", "Melbourne:75.9", "Kathmandu:59.3", "Prague:40.5", "Vancouver:42.4", "Buenos Aires:81.3", "Berlin:42.5", "Jerusalem:64.8", "Montreal:28", "Venice:46.1", "Amsterdam:45.9", "Tokyo:54.5", "Florence:48.4", "Dublin:50", "Krakow:38.3", "Toronto:38.3", "Cairo:66", "Budapest:37.7", "Chicago:36.4", "Havana:80.8", "Munich:40.5", "Athens:54.7", "Vienna:38.8", "Ho Chi Minh City:89.7", "Sarajevo:36.2", "Seville:64.3", "Las Vegas:51.5", "Perth:79", "Shanghai:53", "Los Angeles:66.2", "Lisbon:61.6", "Stockholm:35.2", "Kuala Lumpur:88.2", "Damascus:56.7", "Luang Prabang:78.7", "Seattle:46.2", "Phnom Penh:89.8", "St. Petersburg:27.4", "Cuzco:61.1", "Delhi:72.4", "Dubrovnik:51", "Moscow:22.1", "Helsinki:33.1", "Santiago:76.1", "Fes:65.6", "Auckland:69.1", "Manila:86.1", "Chiang Mai:86.3", "Varanasi:75.5", "Cartagena:89", "Innsbruck:29.6", "York:46", "Hamburg:43.7", "Galway:49.6", "Wellington:64.2", "Ljubljana:43.1", "Seoul:36.4", "San Cristobal:77", "Tallinn:32.9", "Lhasa:30", "Bled:38.7", "Hobart:68.2", "Brussels:46.4", "La Paz:54.3", "Quebec City:24", "Valparaiso:69.3", "Naples:57.2", "Memphis:51.1", "Heidelberg:44.3", "Dhaka:78.4", "Amman:57", "Washington:46.9", "Quito:61.1", "Christchurch:66", "Glasgow:44.2", "Muscat:78.3", "Dakar:79.8", "Bratislava:39.1", "San Sebastian:72", "Bern:42", "San Juan:81.7", "Aleppo:57", "Dubai:77.9", "Riga:33.9", "Asmara:74.8", "Kabul:45.4", "Copenhagen:42", "Sofia:37", "Marseille:55", "Zagreb:41.6", "Manchester:46.3", "Antigua:80.1", "Reykjavik:38.3", "Yogyakarta:80.7", "Carcassonne:50.9", "Tel Aviv-Yafo:65.1", "Mendoza:80.7", "Nairobi:77", "Beirut:62.7", "Vilnius:30.9", "Montevideo:75.1", "Yangon:89", "Arequipa:64.7", "Bucharest:36.7", "Apia:84.5", "Belgrade:40.3", "Dar es Salaam:88.3", "Kyiv:29.6", "Malé:82.9", "Caracas:76.3", "Tirana:50.3", "Suva:82.5", "Tbilisi:44.3", "Ushuaia:53", "Kampala:80.1", "Bogota:67.7", "Bridgetown:81.3", "Ulaanbaatar:-0.2", "Abuja:98.6", "Laval:27.6", "Livingstone:93.4", "Alexandria:66", "Savannah:63.2", "Nuuk:27.9", "Jeddah:82", "Johannesburg:86.2", "Kairouan:65.1", "Austin:59.5", "San Salvador:88.9", "Cardiff:51.4", "Minsk:29.4", "Khartoum:86.2", "Mecca:82.7", "Aswan:72.7", "Yerevan:43.5", "Georgetown:83.8", "Maputo:89.4", "Baku:50.4", "Belize City:81.7", "Essaouira:69.2", "Santo Domingo:83.6", "Lahore:72.1", "Cayenne:81.7", "Almaty:23.5", "Mombasa:87.3", "Valletta:62.8", "Antananarivo:81.1", "Miami:76.2", "Bamako:93", "Saint-Denis:73.9", "Granada:86.8", "Beira:86.6"];



var januaryTempsC = [];

var februaryTempsC = [];

var marchTempsC = [];

var aprilTempsC = [];

var mayTempsC = [];

var juneTempsC = [];

var julyTempsC = [];

var augustTempsC = [];

var septemberTempsC = [];

var octoberTempsC = [];

var novemberTempsC = [];

var decemberTempsC = [];

function cityWeather(city, month, startDate, endDate, pos) {
    var apiKey = "305d321add43432d946225042190805"
    var queryURL = "https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=" + apiKey + "&q=" + city + "&format=json&date=" + startDate + "&enddate=" + endDate + "&tp=24"

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
            var currentCity = response.data.request[0].query;
            var justCity = currentCity.split(",");
            var results = response.data.weather;
            console.log(justCity[0]);
            var avgWeather = 0;
            var total = 0;
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
            decemberTemps[pos] = '"' + justCity + ":" + userWeather + '"' + ", "
            $("#p").html(decemberTemps);
        })
};

// for (var j = 0; j < cities.length; j++) {
//     cityWeather(cities[j].city + ", " + cities[j].country, December.name, December.startDate, December.endDate, j);
// }
// console.log(januaryTemps.length);
// console.log(februaryTemps.length);
// console.log(marchTemps.length);
// console.log(aprilTemps.length);
// console.log(mayTemps.length);
// console.log(juneTemps.length);
// console.log(julyTemps.length);
// console.log(augustTemps.length);
// console.log(septemberTemps.length);
// console.log(octoberTemps.length);
// console.log(novemberTemps.length);
// console.log(decemberTemps.length);

for (var m = 0; m < januaryTemps.length; m++) {
var tempF = parseFloat(januaryTemps[m].split(":")[1])
var tempC = (tempF-32) * (5/9);
console.log(tempC)
}


function renderChart(cityIndex) {

    console.log(januaryTemps[cityIndex].split(":")[1])
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: cities[cityIndex].city + " Temperature By Month"
        },
        axisY: {
            title: "Temp (F)"
        },
        data: [{
            color: "#01579b",
            type: "column",
            legendText: "Month",
            dataPoints: [
                { y: parseFloat(januaryTemps[cityIndex].split(":")[1]), label: "January" },
                { y: parseFloat(februaryTemps[cityIndex].split(":")[1]), label: "February" },
                { y: parseFloat(marchTemps[cityIndex].split(":")[1]), label: "March" },
                { y: parseFloat(aprilTemps[cityIndex].split(":")[1]), label: "April" },
                { y: parseFloat(mayTemps[cityIndex].split(":")[1]), label: "May" },
                { y: parseFloat(juneTemps[cityIndex].split(":")[1]), label: "June" },
                { y: parseFloat(julyTemps[cityIndex].split(":")[1]), label: "July" },
                { y: parseFloat(augustTemps[cityIndex].split(":")[1]), label: "August" },
                { y: parseFloat(septemberTemps[cityIndex].split(":")[1]), label: "September" },
                { y: parseFloat(octoberTemps[cityIndex].split(":")[1]), label: "October" },
                { y: parseFloat(novemberTemps[cityIndex].split(":")[1]), label: "November" },
                { y: parseFloat(decemberTemps[cityIndex].split(":")[1]), label: "December" }
            ]
        }]
    });
    chart.render();

}

renderChart(154)


function findFlights(place) {
    var city = place;
    var apiKey = MvKNAIoHaObHGFQaA6KAZ7Cx2gkkV2h1;
    //check bookmarks for how to do oAuth and use new technology
}