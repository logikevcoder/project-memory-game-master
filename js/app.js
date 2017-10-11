let cards = [
        "diamond",
        "diamond",
        "leaf",
        "leaf",
        "cube",
        "cube",
        "bomb",
        "bomb",
        "bicycle",
        "bicycle",
        "anchor",
        "anchor",
        "paper-plane-o",
        "paper-plane-o",
        "bolt",
        "bolt"
    ],
    openedCards = [],
    $deck = $(".deck"),
    $card = (".card"),
    $scorePanel = $('#score-panel'),
    $moves = $('.moves'),
    $rating = $("i"),
    $restart = $(".restart"),
    delay = 800,
    match = 0,
    moves = 0,
    amountOfCards = cards.length / 2,
    threeStars = amountOfCards + 2,
    twoStars = amountOfCards + 6,
    oneStar = amountOfCards + 10;


// Shuffle function
function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Create the new Game
function newBoard() {
    let shuffledCards = shuffle(cards);
    $deck.empty();
    match = 0;
    moves = 0;

    for (let i = 0; i < cards.length; i++) {
        $deck.append($('<li class="card"><i class="fa fa-' + cards[i] + '"></i></li>'))
    }
    cardClickListener();
};

// Set the rating and final score
function setRating(moves) {
    let rating = 3;
    if (moves > threeStars && moves < twoStars) {
        $rating.eq(2).removeClass("fa-star").addClass("fa-star-o");
        rating = 2;
    } else if (moves > twoStars && moves < oneStar) {
        $rating.eq(1).removeClass("fa-star").addClass("fa-star-o");
        rating = 1;
    } else if (moves > oneStar) {
        $rating.eq(0).removeClass("fa-star").addClass("fa-star-o");
        rating = 0;
    }

    return { score: rating };
};

// Create the function to click cards
let cardClickListener = function() {
    // click on cards that do not contain the class match or open
    $deck.find('.card:not(".match, .open")').on("click", function() {
        // only allow 2 cards with the class of show
        if ($(".show").length > 1) { return true; }
        let $this = $(this);
        // Store the value of the specific card
        let card = $this.children("i").attr("class");

        $this.addClass("open show");
        openedCards.push(card);

        // Check if the opened card matches card in the array
        if (openedCards.length > 1) {
            if (card === openedCards[0]) {
                $deck.find(".open").addClass("match animated infinite rubberband");
                setTimeout(function() {
                    $deck.find(".match").removeClass("open show animated infinite rubberband");
                }, delay);
                
                // If cards match add 1 to match variable
                match++;

            } else {
                $deck.find(".open").addClass("notmatch animated infinite wobble");
                setTimeout(function() {
                    $deck.find(".open").removeClass("animated infinite wobble");
                }, delay / 1.5);
                setTimeout(function() {
                    $deck.find(".open").removeClass("open show notmatch animated infinite wobble");
                }, delay);

                openedCards = [];
                moves++;
                setRating(moves);
            }

            if (amountOfCards === match) {
                setRating(moves);
                let score = setRating(moves).score;
                setTimeout(function() {

                });
            }
        }

    });

};

function restartGame() {
	$restart.on("click", function(){
		newBoard();
	});
}
restartGame();


newBoard();










/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)

 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you 
 call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in 
 another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call 
 from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that 
 you call from this one)
 */