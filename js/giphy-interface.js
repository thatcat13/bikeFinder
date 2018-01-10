$(document).ready(function() {
  $('form#search').submit(function(event) {
    event.preventDefault();
    const gifs = $('#gif-search-input').val();
    $('#gif-search-input').val("");
    $.ajax({
      url: `http://api.giphy.com/v1/gifs/search?q=${gifs}&api_key=BfYSecfMXlpv1i9L4XB4HChFSR8T59jo&limit=5`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        for (var i = 0; i < 5; i++){
          $('.result').append(`<img src="${response.data[i].images.fixed_height.url}">`);
        }
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.")
      }
    });
  });
});
