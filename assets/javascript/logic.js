$(document).ready(function() { // DOCUMENT READY OPENING

var search;
var limit = 5;

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
            document.getElementById("display").appendChild(img);
                if (typeof window.addEventListener === "function") {
                img.addEventListener("click", function(){
                this.src = animate_image;
                })
        }
    }

}).fail(function(err) {
  throw err;
});
})


// var funcs = [];

// function createfunc(i) {
//     return function() {
//       console.log("My value: " + i);
//     };
// }

// for (var i = 0; i < 3; i++) {
//     funcs[i] = createfunc(i);
// }

// for (var j = 0; j < 3; j++) {
//     funcs[j]();
// }

}); // DOCUMENT READY CLOSING