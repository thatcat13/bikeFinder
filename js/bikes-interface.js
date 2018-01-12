import { BikeFinder } from './../js/bikes.js';

$(document).ready(function() {
  $('#bike-color-input').val("red");
  $('#bike-manufacturer-input').val("specialized");
  $('#bike-zipcode-input').val("97220");
  $('#bike-proximity-input').val("10");

  $('form#search').submit(function(event){
    event.preventDefault();
    $('.result').empty();
    const color = $('#bike-color-input').val();
    const make = $('#bike-manufacturer-input').val();
    const zip = $('#bike-zipcode-input').val();
    const prox = $('#bike-proximity-input').val();
    const thisBike = new BikeFinder(color, make, zip, prox);
    console.log(thisBike.getBikeResults());

  });

});//document
