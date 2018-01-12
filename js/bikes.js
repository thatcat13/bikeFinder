export class BikeFinder {
  constructor(color, make, zip, prox) {
    this.color = color;
    this.make = make;
    this.zip = zip;
    this.prox = prox;
  } //constructor

  getBikeResults(success, error) {
    $.ajax({
      url: `https://bikeindex.org:443/api/v2/bikes_search/stolen?colors=${this.color}&manufacturer=${this.make}&proximity=${this.zip}&proximity_square=${this.prox}`,
      type: `GET`,
      data: {
        format: 'json'
      },
      success: function(response) {
        console.log(this.url);
      console.log(response);

      response.bikes.map(function(bike){

      });
      success(response);
      },

      error: function() {
        error(response);
      }

    }); //ajax
  }//getBikeResults
} //BikeFinder end
