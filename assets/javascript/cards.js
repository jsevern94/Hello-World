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







var searchTerms = ["London", "Paris", "Barcelona", "Antananarivo", "Amsterdam"];
var searchTerm = "Antananarivo";
$("#cardTitle").append(searchTerm);

var cityLat;
var cityLng;
var latSelected;
var lngSelected;
var country;
var countryLowerCase;
var countryURL
var countrySelected;



database.ref("cities/" + searchTerm).once("value").then(function (snapshot) {
    var sv = snapshot.val();
    cityLat = sv.lat;
    console.log(cityLat);
    latSelected = true;
    if (lngSelected) {
        initialize();
    }
});

database.ref("cities/" + searchTerm).once("value").then(function (snapshot) {
    var sv = snapshot.val();
    cityLng = sv.lng;
    console.log(cityLng);
    lngSelected = true;
    if (latSelected) {
        initialize();
    }
});

database.ref("cities/" + searchTerm).once("value").then(function (snapshot) {
    var sv = snapshot.val();
    country = sv.country;
    console.log(country)
    countryLowerCase = country.toLowerCase();
    console.log(countryLowerCase);
    countryURL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(countryLowerCase) + "&safesearch=true";
    countrySelected = true;
    if (countrySelected) {
       getPhotos();
    }
});

//images
var searchTermLowerCase = searchTerm.toLowerCase();


var API_KEY = '12446401-bf90607e0ef711dcac16707ef';
var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(searchTermLowerCase) + "&safesearch=true";

var cityImageResults;

function getPhotos() {
    $.ajax({
        url: URL,
        method: "GET"
    })
        .then(function (data) {
            console.log(data)
            if (parseInt(data.totalHits) > 0) {
                console.log(data.totalHits);
                cityImageResults = data.totalHits;
                console.log(cityImageResults);
                if(data.totalHits < 5){
                for (var i = 0; i < data.totalHits; i++) {
                    $("#picturesHere").append("<img  id='cityImage' src='" + data.hits[i].imageURL + "'>");
                    console.log(data.totalHits + "is less than 5")
                };
                //put loop to go through country photos here
                console.log(countryURL);
                $.ajax({
                    url: countryURL,
                    method: "GET"
                })
                    .then(function (data) {
                        console.log(cityImageResults);
                        for (var i = cityImageResults; i < 5; i++) {
                            $("#picturesHere").append("<img  id='cityImage' src='" + data.hits[i].imageURL + "'>");
                        };
                    })
            }
            else{
                for (var i = 0; i < 5; i++) {
                    $("#picturesHere").append("<img  id='cityImage' src='" + data.hits[i].imageURL + "'>");
                };
            }
            }
            else {
                console.log('No hits');
                //put loop to go through country photos here
                $.ajax({
                    url: countryURL,
                    method: "GET"
                })
                    .then(function (data) {
                        for (var i = 0; i < 5; i++) {
                            $("#picturesHere").append("<img  id='cityImage' src='" + data.hits[i].imageURL + "'>");
                        };
                    })
            }

        })
}



//wiki blurb
//gets page id
var url = "https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=" + searchTerm + "&srlimit=1&format=json";


//gets blurb off of page
var blurbUrl = "https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&exsentences=10&redirects=1&titles=" + searchTerm;

var blurb;

$.ajax({
    url: url,
    method: "GET"
})
    .then(function (response) {
        console.log(response.query.search[0].pageid);
        var pageID = response.query.search[0].pageid;

        $.ajax({
            url: blurbUrl,
            method: "GET"
        })
            .then(function (response) {
                console.log(response);

                blurb = response.query.pages[pageID].extract;

                blurb = blurb.replace('(listen)', '');
                blurb = blurb.replace('( )', '');
                blurb = blurb.replace('()', '');
                blurb = blurb.replace(';', '');

                console.log(blurb);

                $("#blurbHere").append(blurb);

            })

    })


//google maps here!!!
//helpful links
//https://developers.google.com/maps/documentation/javascript/examples/marker-labels
//https://developers.google.com/maps/documentation/javascript/examples/marker-animations


var map;
var marker;
// var labels ='12345';
// var labelIndex = 0;

function initialize() {
    var positionLoaction = new google.maps.LatLng(cityLat, cityLng);

    var mapOptions = {
        center: positionLoaction,
        zoom: 4,
    };

    map = new google.maps.Map(document.getElementById('map'),
        mapOptions);

    marker = new google.maps.Marker({
        position: positionLoaction,
        map: map,
        //this can be used when there are multiple locations to number them
        //label: labels[labelIndex++ % labels.length],
        title: searchTerm
    });

    var infowindow = new google.maps.InfoWindow({
        content: searchTerm
    });


    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });


}







//from materialize : .hide-on-small-only this will be used fo the full size map

//use hoverable for cards

//use breadcrumbs for quiz

//use icons on cards for different prefeeerencees

//use collapsible for details

//make images class materrial box?

//use scrollspy to scroll to different cards from map

//can use tooltips to explain any element that we ceate that might be seen as confusing

//


