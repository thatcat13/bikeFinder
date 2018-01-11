const apiKey = require('./../.env').apiKey;

export class GiphyLand {
  constructor(inputTopic, outputGifs) {
    this.inputTopic = inputTopic;
    this.outputGifs = this.getGiphs();
  }
  getGiphs(callback, inputTopic){
    let newArray = [];

    $.ajax({
      url: `http://api.giphy.com/v1/gifs/search?q=${this.inputTopic}&api_key=${apiKey}&limit=50`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        console.log(`Success`);
      },
      complete: function(response) {
        console.log('complete');
        let it = JSON.parse(response.responseText);
        console.log(it);
        newArray.push(it);
        console.log("newArray " + newArray);
        callback(it);
      },

      error: function(response) {
        console.log('error!');

      }
    });//ajax
  } //getGiphs() method

}//GiphyLand class
