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

$(document).ready(function() {
    createCards();
    getData();
    getBlurb();

});

function getData(){
    searchTerms.forEach(function (term, i) {
database.ref("cities/" + term).once("value").then(function (snapshot) {
    var sv = snapshot.val();
    cityLat = sv.lat;
    latSelected = true;
    if (latSelected && lngSelected) {
        initialize(term,i);
        latSelected = false;
        lngSelected = false;
    }
});

database.ref("cities/" + term).once("value").then(function (snapshot) {
    var sv = snapshot.val();
    cityLng = sv.lng;
    lngSelected = true;
    if (latSelected && lngSelected) {
        initialize(term, i);
        latSelected = false;
        lngSelected = false;
    }
});

database.ref("cities/" + term).once("value").then(function (snapshot) {
    var sv = snapshot.val();
    country = sv.country;
    countryLowerCase = country.toLowerCase();
    countryURL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(countryLowerCase) + "&safesearch=true";
    countrySelected = true;
    if (countrySelected) {
        getPhotos(term, i);
    }
});

})
}

//function to make cards
function createCards() {
    var insert = "";
    searchTerms.forEach(function (term, i) {
        
        insert +=
            `<div class="card">
                <div class="card-image waves-effect waves-block waves-light"></div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4" id="cardTitle">${term} <i class="material-icons right">more_vert</i><i class="right map" id="map${i}"></i></span>
                    <p id ="blurbHere${i}"></p>
                    <p id="pictures${i}Here"></p>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">${term}<i class="material-icons right">close</i></span>
                    <p></p>
                </div>
          </div>`
    })
    $("#multipleCards").html(insert);
}


//images

var API_KEY = '12446401-bf90607e0ef711dcac16707ef';
var cityImageResults;

function getPhotos(term, i) {
        var termLowerCase = term.toLowerCase();

var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(termLowerCase) + "&safesearch=true";

    $.ajax({
        url: URL,
        method: "GET"
    })
        .then(function (data) {
            //console.log(data)
            if (parseInt(data.totalHits) > 0) {
                //console.log(data.totalHits);
                cityImageResults = data.totalHits;
                console.log(cityImageResults);
                if (data.totalHits < 5) {
                    for (var j = 0; j < data.totalHits; j++) {
                        $(`#pictures${i}Here`).append("<img  class='cityImage' src='" + data.hits[j].imageURL + "'>");
                        //console.log(data.totalHits + "is less than 5")
                    };
                    //put loop to go through country photos here
                    //console.log(countryURL);
                    $.ajax({
                        url: countryURL,
                        method: "GET"
                    })
                        .then(function (data) {
                            //console.log(cityImageResults);
                            for (var j = cityImageResults; j < 5; j++) {
                                $(`#pictures${i}Here`).append("<img  class='cityImage' src='" + data.hits[j].imageURL + "'>");
                            };
                        })
                }
                else {
                    for (var j = 0; j < 5; j++) {
                        $(`#pictures${i}Here`).append("<img  class='cityImage' src='" + data.hits[j].imageURL + "'>");
                    };
                }
            }
            else {
                //console.log('No hits');
                //put loop to go through country photos here
                $.ajax({
                    url: countryURL,
                    method: "GET"
                })
                    .then(function (data) {
                        for (var j = 0; j < 5; j++) {
                            $(`#pictures${i}Here`).append("<img  class='cityImage' src='" + data.hits[j].imageURL + "'>");
                        };
                    })
            }

        })
}



//wiki blurb


var blurb;


function getBlurb(){
    searchTerms.forEach(function (term, i) {
        //gets page id
var url = "https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=" + term + "&srlimit=1&format=json";


//gets blurb off of page
var blurbUrl = "https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&exsentences=10&redirects=1&titles=" + term;
$.ajax({
    url: url,
    method: "GET"
})
    .then(function (response) {
        var pageID = response.query.search[0].pageid;

        $.ajax({
            url: blurbUrl,
            method: "GET"
        })
            .then(function (response) {

                blurb = response.query.pages[pageID].extract;

                blurb = blurb.replace('(listen)', '');
                blurb = blurb.replace('( )', '');
                blurb = blurb.replace('()', '');
                //blurb = blurb.replace(';', '');


                $(`#blurbHere${i}`).append(blurb);

            })

    })
})
}

//google maps here!!!
//helpful links
//https://developers.google.com/maps/documentation/javascript/examples/marker-labels
//https://developers.google.com/maps/documentation/javascript/examples/marker-animations



var mapLarge;
var marker;
// var labels ='12345';
// var labelIndex = 0;

function initialize(i, term) {
    var map = "map-"+ term;
    var marker = "marker-" + term;
    //console.log(map + " " + term)
    //console.log(cityLat+ " " + cityLat)
    //small individual map
    var positionLocation = new google.maps.LatLng(cityLat, cityLng);

    var mapOptions = {
        center: positionLocation,
        zoom: 4,
        disableDefaultUI: true,
    };
    console.log(map);
    map = new google.maps.Map(document.getElementById("map" + term),
        mapOptions);

    marker = new google.maps.Marker({
        position: positionLocation,
        map: map,
        //this can be used when there are multiple locations to number them
        //label: labels[labelIndex++ % labels.length],
        title: term
    });

    var infowindow = new google.maps.InfoWindow({
        content: i
    });


    marker.addListener('click', function () {
        infowindow.open(i, marker);
    });

    //large map
    // var center = new google.maps.LatLng(0, 0);

    // var mapOptionsLarge = {
    //     center: ceenter,
    //     zoom: 1,
    // };

    // mapLarge = new google.maps.Map(document.getElementById('mapLarge'),
    //     mapOptionsLarge);




}



//from materialize : .hide-on-small-only this will be used fo the full size map

//use hoverable for cards

//use breadcrumbs for quiz

//use icons on cards for different prefeeerencees

//use collapsible for details

//make images class materrial box?

//use scrollspy to scroll to different cards from map

//can use tooltips to explain any element that we ceate that might be seen as confusing

//look into flowtext and truncate for the card and how they will change as the page changes




