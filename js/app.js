let cards = [
        "fa fa-diamond",
        "fa fa-leaf",
        "fa fa-cube",
        "fa fa-bomb",
        "fa fa-bicycle",
        "fa fa-anchor",
        "fa fa-paper-plane-o",
        "fa fa-bolt",
        "fa fa-diamond",
        "fa fa-leaf",
        "fa fa-cube",
        "fa fa-bomb",
        "fa fa-bicycle",
        "fa fa-anchor",
        "fa fa-paper-plane-o",
        "fa fa-bolt"
    ],
    openedCards = [],
    $deck = $(".deck"),
    $card = (".card"),
    $scorePanel = $('#score-panel'),
    $moves = $('.moves'),
    $rating = $("i"),
    delay = 500,
    match = 0,
    moves = 0,
    amountOfCards = cards.length / 2,
    threeStars = amountOfCards + 2,
    twoStars = amountOfCards + 6,
    oneStars = amountOfCards + 10;


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
        $deck.append('<li class="card"><i class="' + cards[i] + '"></i></li>');
    }

};

function setRating(moves) {
    let rating = 3;
    if (moves > threeStars && moves < twoStars) {
        $rating.eq(2).removeClass("fa-star").addClass("fa-star-o");
        rating = 2;
    } else if (move > twoStars && move < oneStars) {
        $rating.eq(1).removeClass("fa-star").addClass("fa-star-o");
        rating = 1;
    } else if (move > oneStars) {
        $rating.eq(0).removeClass("fa-star").addClass("fa-star-o");
        rating = 0;
    }

    return { scrore: rating };
};

let cardClickListener = function() {

    $deck.find('.card:not(".match, .open")').bind('click', function() {
        if ($('.show').length > 1) {
            return true;
        }
        let $this = $(this);
        let card = $this.context.innerHTML;

        $this.addClass('open show');
        openedCards.push(card);

        if (openedCards.length > 1) {
            if (card.length === openedCards[0]) {
                $deck.find('.open').addClass('match animated infinite rubberBand');
                setTimeout(function() {
                    $deck.find('.match').removeClass('open show animated infinite rubberBand');
                }, delay);
                match++;
            } else {
                $deck.find('.open').addClass('notmatch animated infinite wobble');
                setTimeout(function() {
                    $deck.find('.open').removeClass('animated infinite wobble');
                }, delay / 1.5);
            }
            setTImeout(function() {

                $deck.find('.open').removeClass('open show notmatch animated infinite wobble');
            }, delay);

        }

        openedCards = [];
        moves++;
        setRating(moves);
        $moveNum.html(moves);

        if (amountOfCards === match) {
            setRating(moves);
            var score = setRating(moves).score;
            setTimeout(function() {
                endGame(moves, score);
            }, 500);
        }
    });
};

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