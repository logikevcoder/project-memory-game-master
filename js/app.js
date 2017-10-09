let $deck = document.getElementsByClassName("deck"),
 	$card = document.getElementsByClassName("card"),
 	openedCards = [],
 	match = 0,
 	moves = 0,
 	$rating = $("i");
	cards = [
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
];

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


function newBoard() {
	let shuffledCards = shuffle(cards);
 	match = 0;
 	moves = 0;

    for (let i = 0; i < cards.length; i++) {
            $($deck).append('<li class="card"><i class="' + cards[i] + '"></i></li>');
    }
    newBoard();
}


$("cards").click(function() {
    if ((count < 2) && ($(this).hasClass("show")) === false) {

        count++;
        showCard();
        matchCard();
        alert(count);
    }

}, function showCard() {
    $(this).addClass("show open");
}, function matchCard() {
    $(this).addClass("match");
});





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