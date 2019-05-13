
 var searchTerm = "vancouver";

//images
 



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

 


// //google maps here!!!


