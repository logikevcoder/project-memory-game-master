


  // Open start modal on load


  // Close modals when click outside modal
  $('#winModal #close-win, #overlay').click(function() {
    $('#winModal').hide();
  });



  $('.modal').click(function() {
    $('.modal').hide();
  });

  $('.modal-content').click(function(event) {
    event.stopPropagation();
  });



  // Restart game
  $('#restart').click(function() {
    $('#winModal').hide();
    $('#startModal').show();
  });

  const startGame = (cards, level) => {

    // reset game variables
    gameStarted = false;
    moves = 0;
    matches = 0;
    setLevel(level);

    // reset HTML
    $('#game-board').empty();

    $(".clock").text('0:00');
    $("#moves").text('0');
    $('#winModal').hide();

    // Get cards and start the game!
    let cardArray = makeCardArray(cardData, level);

    shuffle(cardArray);
    displayCards(cardArray);
    displayStars(3);
  };

})();
