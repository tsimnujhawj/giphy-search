$(document).ready(function() { // DOCUMENT READY OPENING

  var tags = ["javascript", "rick and morty", "code", "css", "shia motivation", "ducks", "tigers"];
  var limit = 10;
  
  // Display category buttons
    function render() {
      $("#tags").empty();
      for (var i = 0; i < tags.length; i++) {
        $("#tags").append("<button class='tag-buttons btn'>" + tags[i] + "</button>");
      }
    }
  
  // Submit function to add category
  $(document).on("click", "#addTag", function(event) {
    event.preventDefault();
    var newTag = $("#category").val().trim();
    tags.push(newTag);
    $("#tags").append("<button class='tag-buttons btn'>" + newTag + "</button>");
  });
  
  // Tag button function
  $(document).on("click", ".tag-buttons", function(event) {
    event.preventDefault();
    var type = this.innerText;
    var url = "https://api.giphy.com/v1/gifs/search?q=" + window.encodeURI(type) + "&limit=" + limit + "&api_key=ZqL2rZ2Z072B1Hh0MMCdToU2zWH7OqVT";
  
  // AJAX call for JSON data
    $.ajax({
      url: url,
      method: "GET"
    }).done(function(response) {
      for (var i = 0; i < response.data.length; i++) {
  
  // Append images to DOM
        $("#photo").append('<img class="gif" src="' + response.data[i].images.fixed_height_still.url + '">');
      }  
    });
    $("#photo").empty();
  
  });
  
  // Render the initial buttons
  render();
  
  
  $("body").on("click", ".gif", function() {
      var src = $(this).attr("src");
    if($(this).hasClass("animate")){
       // Pause gif
       $(this).attr('src', src.replace(/\.gif/i, "_s.gif"))
       $(this).removeClass("animate");
    } else {
      // Activate animate
      $(this).addClass("animate");
      $(this).attr('src', src.replace(/\_s.gif/i, ".gif"))
    }
  });
  
  }); // DOCUMENT READY CLOSING