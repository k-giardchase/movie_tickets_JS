describe("Ticket", function() {
  describe("cost", function() {
    it("return the cost of a ticket to an evening show for an adult", function() {
      var testTicket = Object.create(Ticket);
      testTicket.showtime = 2;
      testTicket.age = 0;
      testTicket.movieTitle = .25;
      testTicket.cost();
      expect(testTicket.price).to.equal(9.75);

    });
  });
});
