(() => {
	'use strict';

let click1 = {},
    click2 = {},
    openedCards = [],
    $deck = $(".deck"),
    $card = (".card"),
    $scorePanel = $('#score-panel'),
    $moves = $('.moves'),
    $rating = $("i"),
    $restart = $(".restart"),
    match = 0,
    moves = 0,
    pairs = 8;





class Card {
    constructor(card, num) {
        let cardID = card.id + '-' + num;
        this.id = '#' + card.id + '-' + num;
        this.image = card.image;
        this.name = card.name;
        this.html =
            `<article class="card" id="${cardID}">
        <div class="card-back">
          <img src="images/${this.image}" class="card-image" >
        </div>
        <div class="card-front">
          <img src="images/pokeball.png" class="card-image" >
        </div>
      </article>`;
    }
}



const makeCardArray = (data, level) => {
    let cards = [];
    // Add two of each card to the array
    cards.forEach(function(card) {
        cards.push(new Card(card, 1));
        cards.push(new Card(card, 2));
    });

    return cards;
};

// Shuffle function
const shuffle = (array) => {
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
};

const displayCards = (cardArray) => {
	cardArray.forEach(function(card){
		$("#game-board").append(card.html);

		$(card.id).click(function() {
			checkMatch(card);
		});
	});
};

// Create the function to click cards
const checkCards = () => {
    if (!clicked1.name) {
        click1 = card;
        $(card.id).addClass('show open');
        return;

    } else if (!click2.name && click1.id !== card.id) {
        click2 = card;
        $(card.id).addClass('show open');

        moves++;
        $(".moves").text(moves);

    } else return;

    if (click1.name === click2.name) {
        foundMatch();
    } else {
        hideCards();
    }

};


const matchedCards = () => {
    matches++;

    if (matches === pairs) {
        gameOver();
    }
};


const hideCards = () => {
    setTimeout(function() {
        $(click1.id).removeClass('open show');

        // Reset click objects
        click1 = {};
        click2 = {};
    }, 800);
};

const gameOver = () => {

};

let cardArray = makeCardArray();

displayCards(cardArray);

})();


//   	the array can be an array of objects instead of an array of strings.
// so, to add an element, the syntax would be something like-
// array.push({name:"card-name",position:1})
// then to find if the array has a card with a name, 
// you can use filter or reduce methods or a simple for 
// loop will also work.

// also, i would recommend that you make functions for each operations like- open card, close card, set card as matched,etc.








// /*
//  * set up the event listener for a card. If a card is clicked:
//  *  - display the card's symbol (put this functionality in another function that you call from this one)

//  *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
//  *  - if the list already has another card, check to see if the two cards match
//  *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you 
//  call from this one)
//  *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in 
//  another function that you call from this one)
//  *    + increment the move counter and display it on the page (put this functionality in another function that you call 
//  from this one)
//  *    + if all cards have matched, display a message with the final score (put this functionality in another function that 
//  you call from this one)
//  */