$(document).ready(function() {
  $('#gif-search-btn').click(function() {
    const gifs = $('#gif-search-input').val();
    $('#gif-search-input').val("");
    $.ajax({
      url: `http://api.giphy.com/v1/gifs/search?q=${gifs}&api_key=BfYSecfMXlpv1i9L4XB4HChFSR8T59jo&limit=5`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.result').append(`${gifs}: <br> ${response.embed_url}`);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.")
      }
    });
  });
});
