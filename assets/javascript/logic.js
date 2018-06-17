$(document).ready(function() { // DOCUMENT READY OPENING

var search;
var limit = 5;

// Create Elements

// Submit Button
document.getElementById("submit-btn").addEventListener("click", function(){
search = document.getElementById("input-text").value;
var url = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=ZqL2rZ2Z072B1Hh0MMCdToU2zWH7OqVT" + "&limit=" + limit;




$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {

  $("#display").empty();
    var image = result.data;
    for (var i = 0; i < image.length; i++) {
        var img = document.createElement("img");
        img.className = "render";
        img.src = image[i].images.original_still.url;
        img.attributes = "still" + i;
        document.getElementById("display").appendChild(img);
        img.addEventListener("click", function(){
            console.log(img.attributes);
        })
    }

}).fail(function(err) {
  throw err;
});
})

}); // DOCUMENT READY CLOSING