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



//these need to be changed out with the values I get from the quiz
var searchTerms = ["London", "Paris", "Barcelona", "Antananarivo", "Amsterdam", "Tokyo", "Berlin"];

//other vaiables
var cityLat;
var cityLng;
var latSelected;
var lngSelected;
var country;
var countryLowerCase;
var countryURL
var countrySelected;

//everything loads on doc ready
$(document).ready(function () {
    createCards();
    createLargeMap();
    getData();
    getBlurb();


});


//gets data from database
function getData() {
    //used fo map
    searchTerms.forEach(function (term, i) {
        database.ref("cities/" + term).once("value").then(function (snapshot) {
            var sv = snapshot.val();
            cityLat = sv.lat;
            latSelected = true;
            //triggers map
            if (latSelected && lngSelected) {
                initialize(term, i);
                initializeLarge(term, i);
                latSelected = false;
                lngSelected = false;
            }
        });
        
        //used for map
        database.ref("cities/" + term).once("value").then(function (snapshot) {
            var sv = snapshot.val();
            cityLng = sv.lng;
            lngSelected = true;
            //triggers map
            if (latSelected && lngSelected) {
                initialize(term, i);
                initializeLarge(term, i);
                latSelected = false;
                lngSelected = false;
            }
        });

        //used for images if country is needed.
        database.ref("cities/" + term).once("value").then(function (snapshot) {
            var sv = snapshot.val();
            country = sv.country;
            countryLowerCase = country.toLowerCase();
            countryURL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(countryLowerCase) + "&safesearch=true";
            countrySelected = true;
           //triggers pictues
            if (countrySelected) {
                getPhotos(term, i, countryURL);
                countrySelected = false;
            }
        });

    })
}

//function to make cards
function createCards() {
    var insert = "";
    searchTerms.forEach(function (term, i) {

        
        // var display;
        // if (i <= 0) {
        //     display = `<div class="col s12 m12 activeCard" id="card${i}" card="${i}">`
        // }
        // else {
        //     display = ``
        // }

    // this created rows for every 2 card
        //create rows on odd cards
        // var createRow;
        // if (i%2 !== 0){
        // createRow = "<div class='row'>"
        // }
        // else{
        //     createRow = "";
        // }

        // //close rows on even cards
        // var closeRow;
        // if (i%2 == 0){
        //     closeRow = "</div>"
        //     }
        // else{
        //     closeRow = "";
        // }

        //this is where everything is inseted into
        insert +=
            `
            <div class="resultsCards col s12 m6 nonactiveCard" id="card${i}" cardNum="${i}" class="section scrollspy">
                    <div class="card hoverable">
                        
                            <div class="card-content">

                                
                                    <span class="card-title activator grey-text text-darken-4" id="resultsCardTitle">${term} <i class="material-icons right">expand_more</i>
                                    
                                    </span>
                                
                                <div class="text row">
                                <div class="map" id="map${i}" style="height: 200px; width: 200px; margin: .5rem;"></div>
                                    <div id ="blurbHere${i}"></div>
                                </div>

                                <div class="allpictures row">
                                    <div id="pictures${i}Here"></div>
                                </div>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">${term}<i class="material-icons right">expand_less</i></span>
                                <div class="row">
                                    <div class="col s12">
                                        <ul class="tabs">
                                            <li class="tab col s2"><a class="active" href="#test1${i}"><i class="material-icons">local_dining</i></a></li>
                                            <li class="tab col s2"><a href="#test2${i}"><i class="material-icons">local_bar</i></a></li>
                                            <li class="tab col s2"><a href="#test3${i}"><i class="material-icons">local_activity</i></a></li>
                                            <li class="tab col s2"><a href="#test4${i}"><i class="material-icons">local_florist</i></a></li>
                                            <li class="tab col s2"><a  href="#test5${i}"><i class="material-icons">palette</i></a></li>
                                        </ul>
                                    </div>
                                        <div id="test1${i}" class="col s12">Food</div>
                                        <div id="test2${i}" class="col s12">Night Life</div>
                                        <div id="test3${i}" class="col s12">Attractions</div>
                                        <div id="test4${i}" class="col s12">Nature</div>
                                        <div id="test5${i}" class="col s12">Culture</div>
                                </div>  
                            </div>
                        </div>
                </div>
          `

    })

    //puts the card where they should go. 
    $("#multipleCards").append(insert);
    



    //js for tabs
    var elem = $('.tabs');
    var options = {};
    instance = M.Tabs.init(elem, options);




}



//images
var API_KEY = '12446401-bf90607e0ef711dcac16707ef';


function getPhotos(term, i, countryURL) {
    var termLowerCase = term.toLowerCase();

    var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(termLowerCase) + "&safesearch=true";

    $.ajax({
        url: URL,
        method: "GET"
    })
        .then(function (data) {
            
            if (parseInt(data.totalHits) > 0) {
                var cityImageResults;
                cityImageResults = data.totalHits;
                
                //if there are less than 4 images to another ajax call to get more images under th larger term of counties
                if (cityImageResults < 4) {

                    for (var j = 0; j < data.totalHits; j++) {
                        $(`#pictures${i}Here`).append("<img  class='cityImage col s12 m6 image" + i + "' src='" + data.hits[j].imageURL + "'>");
                        
                    };
                    
                    
                    $.ajax({
                        url: countryURL,
                        method: "GET"
                    })
                        .then(function (data) {
                            //start adding country images after last city image
                            for (var j = cityImageResults; j < 4; j++) {
                                $(`#pictures${i}Here`).append("<img  class='cityImage col s12 m6 image" + i + "'  src='" + data.hits[j].imageURL + "'>");
                                
                            };
                        })
                }
                //if there are enough city images display the 1st 4
                else {
                    for (var j = 0; j < 4; j++) {
                        $(`#pictures${i}Here`).append("<img  class='cityImage col s12 m6 image" + i + "'  src='" + data.hits[j].imageURL + "'>");
                        //assignInitialDisplayCard(i);
                    };
                }
            }

            //if there are not hits display country imags for all 4
            else {
                console.log('No hits');
                //put loop to go through country photos here
                $.ajax({
                    url: countryURL,
                    method: "GET"
                })
                    .then(function (data) {
                        for (var j = 0; j < 4; j++) {
                            $(`#pictures${i}Here`).append("<img  class='cityImage col s12 m6 image" + i + "' src='" + data.hits[j].imageURL + "'>");
    
                        };
                    })
            }

        })

}



//wiki blurb
var blurb;


function getBlurb() {
    searchTerms.forEach(function (term, i) {
        //gets page id
        var url = "https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=" + term + "&srlimit=1&format=json";


        //gets blurb off of page
        var blurbUrl = "https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&exsentences=6&redirects=1&titles=" + term;
        
        //gets unique page id
        $.ajax({
            url: url,
            method: "GET"
        })
            .then(function (response) {
                var pageID = response.query.search[0].pageid;

                //uses unique page id to get blub
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

//maps variables
var mapLarge;
var marker;
var positionLocation;
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;

//small individual map
function initialize(i, term) {
    var map = "map-" + term;
    var marker = "marker-" + term;
    
    positionLocation = new google.maps.LatLng(cityLat, cityLng);

    var mapOptions = {
        center: positionLocation,
        zoom: 4,
        disableDefaultUI: true,
    };

    map = new google.maps.Map(document.getElementById("map" + term),
        mapOptions);

    marker = new google.maps.Marker({
        position: positionLocation,
        map: map,
        title: i,
        mapTypeId: 'terrain'
    });

    var smallInfoWindow = new google.maps.InfoWindow({
        content: i
    });

    marker.addListener('click', function () {
        smallInfoWindow.open(map, marker);
    });

}

//large map
function initializeLarge(i, term) {
    var markerLarge = "markerLarge-" + term;

    positionLocation = new google.maps.LatLng(cityLat, cityLng);

    console.log(markerLarge);
    markerLarge = new google.maps.Marker({
        position: positionLocation,
        map: mapLarge,
        //adds diffrent labels to each marker
        label: labels[labelIndex++ % labels.length],
        title: i,
        value: term,


    });
    console.log(markerLarge);
var content= `<a href="#card${term}">${i}</a>`;


    var largeInfoWindow = new google.maps.InfoWindow({
        content: content,
    });



    markerLarge.addListener('click', function () {
        largeInfoWindow.open(mapLarge, markerLarge);

        //when clicking on marker it expands the text below
        $(".activeCard").removeClass("m12");
        $(".activeCard").addClass("m6");
        $(".image" + $(".activeCard").attr("cardNum")).addClass("m6");
        $(".image" + $(".activeCard").attr("cardNum")).removeClass("m3");
        $(".activeCard").removeClass("activeCard");
        
    
        $("#card"+this.value).addClass("activeCard");
        $("#card"+this.value).removeClass("m6");
        $("#card"+this.value).addClass("m12");
        $(".image" + $("#card"+this.value).attr("cardNum")).removeClass("m6");
        $(".image" + $("#card"+this.value).attr("cardNum")).addClass("m3");
    });

}

function createLargeMap() {

    var center = new google.maps.LatLng(20, 0);

    var mapOptionsLarge = {
        center: center,
        zoom: 2,
        disableDefaultUI: true,
        mapTypeId: 'terrain'
    };

    $('.scrollspy').scrollSpy();

    mapLarge = new google.maps.Map(document.getElementById('mapLarge'),
        mapOptionsLarge);
}


$("#multipleCards").on("click", ".nonactiveCard", function () {
    
    $(".activeCard").removeClass("m12");
    $(".activeCard").addClass("m6");
    console.log($(".activeCard").attr("cardNum"));
    $(".image" + $(".activeCard").attr("cardNum")).addClass("m6");
    $(".image" + $(".activeCard").attr("cardNum")).removeClass("m3");
    $(".activeCard").removeClass("activeCard");
    

    $(this).addClass("activeCard");
    $(this).removeClass("m6");
    $(this).addClass("m12");
    console.log($(this).attr("cardNum"));
    $(".image" + $(this).attr("cardNum")).removeClass("m6");
    $(".image" + $(this).attr("cardNum")).addClass("m3");
    

})




// function assignInitialDisplayCard(i) {
//     if (i <= 0) {
//         console.log(`image${i}`)
//         $(`.image${i}`).removeClass("m6")
//         $(`.image${i}`).addClass("m3")
//     }
// };
