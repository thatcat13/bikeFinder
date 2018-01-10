$(document).ready(function() {
  $('form#search').submit(function(event) {
    event.preventDefault();
    $('.result').empty();
    const gifs = $('#gif-search-input').val();
    $('#gif-search-input').val("");
    $.ajax({
      url: `http://api.giphy.com/v1/gifs/search?q=${gifs}&api_key=BfYSecfMXlpv1i9L4XB4HChFSR8T59jo&limit=50`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(thing) {
        // let giphyArr = returned JSON file
        // giphyArr.splice((Math.floor(Math.random() * 20) + 1), 5)
        let a = Math.floor(Math.random() * 45) + 1;
        let b = a + 5;
        // let c = a - 5;
        // if (a <= 15) {
          for (var i = a; i < b; i++){
            console.log(i + "i");
            $('.result').append(`<img src="${thing.data[i].images.fixed_height.url}">`);
          }
        // } else if (a > 15) {
        //     for (var i = a; i > c; i--) {
        //     console.log(i, a, c)
        //     $('.result').append(`<img src="${thing.data[i].images.fixed_height.url}">`);
        //   };
        // };

    },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.")
      }
    }); //ajax callback
  }); //form submit
}); //doc ready
