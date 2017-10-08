const ulDeck = document.getElementsByClassName("deck");
const liCards = document.getElementsByClassName("card");

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
];

function newBoard() {
    let newDeck = '';

    for (let i = 0; i < cards.length; i++) {
        newDeck += '<li class="card">';
        newDeck += '<i class="' + cards[i] + '"/></i>';
    }
    newDeck += '</li>';
    $(ulDeck).append(newDeck);
}

cards = shuffle(cards);
newBoard();

// Shuffle function
function shuffle(array) {
    let currentIndex = cards.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }

    return array;
}

	let guess1 = "";
	let guess2 = "";
	let count = 0;

	$(liCards).click(function() {
		let openCards = [];

		// if ( (count < 2) && ($(this).hasClass("show")) === false ) {


		// 	count++;
			showCard();
		// }
	
	});

	function showCard() {
		$(this).addClass("show");
	}




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