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







var searchTerm = "London";
var cityLat;
var cityLng;
var latSelected;
var lngSelected

database.ref("cities/" + searchTerm).once("value").then(function (snapshot) {
    var sv = snapshot.val();
    cityLat = sv.lat
    console.log(cityLat)
    latSelected = true;
    if(lngSelected){
        initialize();
    }
});

database.ref("cities/" + searchTerm).once("value").then(function (snapshot) {
    var sv = snapshot.val();
    cityLng = sv.lng
    console.log(cityLng)
    lngSelected = true;
    if(latSelected){
        initialize();
    }
});

//  var cityLng = database.ref.getReference("cities/"+ searchTerm + "/lng");
//  console.log(cityLng)


//images

// var queryUrl = "https://pixabay.com/api/?key=12446401-bf90607e0ef711dcac16707ef&q=" + searchTerm + "&image_type=photo&safesearch=true";

//     $.ajax({
//         url: queryUrl,
//         method: "GET"
//     })
//         .then(function (response) {

//             console.log(response);
//         })


var searchTermLowerCase = searchTerm.toLowerCase();

var API_KEY = '12446401-bf90607e0ef711dcac16707ef';
var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(searchTermLowerCase);
$.getJSON(URL, function (data) {
    if (parseInt(data.totalHits) > 0)
        $.each(data.hits, function (i, hit) {
            $("#picturesHere").append("<img src='" + hit.previewURL + "'>");
        });
    else
        console.log('No hits');

    //if no hits then search coutry name
});


//wiki blurb

var url = "https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=" + searchTerm + "&srlimit=1&format=json";


// //use this in an ajax to then call this. 
var blurbUrl = "https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&exsentences=10&redirects=1&titles=" + searchTerm;

// //tinier snippet but has the listen annotations that cannot be clicked. 
// var tiny = "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=" + searchTerm + "&limit=1&format=json";
// $.ajax({
//     url: tiny,
//     method: "GET"
// })
//     .then(function (response) {
//         console.log(response[2].toString());
//     })

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

                var blurb = response.query.pages[pageID].extract;

                blurb = blurb.replace('(listen)', '');
                blurb = blurb.replace('( )', '');

                console.log(blurb);

                $("#picturesHere").append(blurb);

            })

    })


//google maps here!!!
//helpful links
//https://developers.google.com/maps/documentation/javascript/examples/marker-labels
//https://developers.google.com/maps/documentation/javascript/examples/marker-animations
// var map;
// var marker;

//     function initMap() {
//         var myLatLng = {lat: 42.3601, lng: -71.0589};
    
//         map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 10,
//           center: myLatLng
//         });
    
//         marker = new google.maps.Marker({
//           position: myLatLng,
//           map: map,
//           title: 'Hello World!'
//         });
//       }

//       initMap();


    var map;
    var marker;
    console.log(cityLat + cityLng);
   
    function initialize(){
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


