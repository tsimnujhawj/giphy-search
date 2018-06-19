$(document).ready(function() { // DOCUMENT READY OPENING


  var tags = ["javascript", "rick and morty", "code", "css", "shia motivation", "ducks", "tigers"];
  var limit = 10;

  // Display the results amount
  $("#amount").html("Result Amount: " + limit);

  // Display category buttons
    function render() {
      $("#tags").empty();
      for (var i = 0; i < tags.length; i++) {
        $("#tags").append("<button class='tag-buttons btn'>" + tags[i] + "</button>");
      }
    }
  
  // Add 5 to results
  $(document).on("click", "#more", function(event) {
    event.preventDefault();
    limit += 5;
    $("#amount").html("Result Amount: " + limit);
    return limit;
  });

  // Subtract 5 from results
  $(document).on("click", "#less", function(event) {
    event.preventDefault();
    limit -= 5;
    $("#amount").html("Result Amount: " + limit);
    return limit;
  });

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
        $("#photo").append("Rating: " + response.data[i].rating);
        $("#photo").append('<div><img class="gif" src="' + response.data[i].images.fixed_height_still.url + '">');
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