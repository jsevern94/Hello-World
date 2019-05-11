
 //images
 
 //
 
 var searchTerm = "";


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
    $.each(data.hits, function(i, hit){ console.log(hit.webformatURL);
    $("#picturesHere").append("<img src='" + hit.previewURL + "'>");
    });
else
    console.log('No hits');

    //if no hits then seearch coutry name
});


//wiki blurb



