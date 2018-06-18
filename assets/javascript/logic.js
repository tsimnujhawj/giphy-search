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
            var animate_image = image[i].images.original.url;
            var still_image = image[i].images.original_still.url;
            img.src = still_image;
            img.attributes = "still" + i;
            document.getElementById("display").appendChild(img);
                if (typeof window.addEventListener === "function") {
                img.addEventListener("click", function(){
                console.log(this.src)
                this.src = animate_image;
                })
        }
    }

}).fail(function(err) {
  throw err;
});
})

}); // DOCUMENT READY CLOSING