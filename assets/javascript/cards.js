
 //images
 
 //
 
 var searchTerm = "paris";


// var queryUrl = "https://pixabay.com/api/?key=12446401-bf90607e0ef711dcac16707ef&q=" + searchTerm + "&image_type=photo&safesearch=true";

//     $.ajax({
//         url: queryUrl,
//         method: "GET"
//     })
//         .then(function (response) {
            
//             console.log(response);
//         })


var API_KEY = '12446401-bf90607e0ef711dcac16707ef';
var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(searchTerm);
$.getJSON(URL, function(data){
if (parseInt(data.totalHits) > 0)
    $.each(data.hits, function(i, hit){ 
    $("#picturesHere").append("<img src='" + hit.previewURL + "'>");
    });
else
    console.log('No hits');

    //if no hits then seearch coutry name
});


//wiki blurb





// $.getJSON(BlurbUrl, function(data){
//     if (parseInt(data.query.searchinfo.totalhits) > 0)
//         $.each(data.search, function(i, searchItem){ console.log(searchItem.snippet);
//         $("#picturesHere").append("<img src='" + searchItem.snippet + "'>");
//         });
//     else
//         console.log('No hits');
    
//         //if no hits then seearch coutry name
//     });

//what we want is search.snippet


// var xhr = new XMLHttpRequest();

// var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&limit=1&format=json";

// xhr.open('GET', url, true);

// // Once request has loaded...
// xhr.onload = function() {
//     // Parse the request into JSON
//     var data = JSON.parse(this.response);

//     // Log the data object
//     console.log(data);

//     // Log the page objects
//     console.log(data.query.pages)

//     // Loop through the data object
//     // Pulling out the titles of each page
//     for (var i in data.query.pages) {
//         console.log(data.query.pages[i].title);
//     }
// }
// // Send request to the server
// xhr.send();


//Create a new object to interact with the server
var xhr = new XMLHttpRequest();

var url = "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=" + searchTerm + "&limit=1&format=json";

// Provide 3 arguments (GET/POST, The URL, Async True/False)
xhr.open('GET', url, true);

// Once request has loaded...
xhr.onload = function() {
    // Parse the request into JSON
    var data = JSON.parse(this.response);

    // Log the data object
    console.log(data[2].toString());

}
// Send request to the server asynchronously
xhr.send();