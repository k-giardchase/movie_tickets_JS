//Grey Gardens: -$1
//Rumble in the Bronx: $0.50
//Rocky Horror: $0
//Velvet Goldmine: $0.25

var Ticket = {
  movieTitle: 0,
  showtime: 0,
  age: 0,
  price: 0,
  cost: function() {
  this.price = (5 * this.showtime) - this.age - this.movieTitle;
  }
};

$(document).ready(function() {
  $("form#tickets").submit(function(event) {
      event.preventDefault();

      var inputtedMovieTitle = parseInt($("select#movieTitle").val());
      var inputtedShowtime = parseInt($("select#showtime").val());
      var inputtedAge = parseInt($("select#age").val());

      var newTicket = Object.create(Ticket);

      newTicket.movieTitle = inputtedMovieTitle;
      newTicket.showtime = inputtedShowtime;
      newTicket.age = inputtedAge;

      newTicket.cost();

      $("#result").show();
      $(".finalprice").text(newTicket.price);
    });
});
