let symbols = ['bicycle', 'bicycle', 'leaf', 'leaf', 'cube', 'cube', 'anchor', 'anchor', 'paper-plane-o', 'paper-plane-o', 'bolt', 'bolt', 'bomb', 'bomb', 'diamond', 'diamond'],
    openedCards = [],
    match = 0,
    moves = 0,
    clicks = 0,
    $deck = $('.deck'),
    $scorePanel = $('#score-panel'),
    $moveNum = $('.moves'),
    $ratingStars = $('i'),
    $restart = $('.restart'),
    timer;


const gameTimer = () => {
    let startTime = new Date().getTime();

    timer = setInterval(() => {

        let now = new Date().getTime();

        let elapsed = now - startTime;

        let minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        let currentTime = minutes + ':' + seconds;

        $(".clock").text(currentTime);
    }, 800);

};


// Load the game on to the HTML page
const boardInit = () => {
    let cardImages = shuffle(symbols);

    match = 0;
    moves = 0;
    $moveNum.text('0');

    for (let i = 0; i < cardImages.length; i++) {
        $deck.append($('<li class="card"><i class="fa fa-' + cardImages[i] + '"></i></li>'));
    }

    clickCard();
    $(".clock").text("0:00");

};


// Shuffle function to create random board every time
const shuffle = (array) => {
    let index = array.length,
        temp, randomIndex;
    while (0 !== index) {
        randomIndex = Math.floor(Math.random() * index);
        index -= 1;
        temp = array[index];
        array[index] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
};


// Create the rating function to change star ratings from 1-3
const rating = (moves) => {
    let score = 3;
    if (moves <= 6) {
        $ratingStars.eq(3).removeClass('fa-star').addClass('fa-star-o');
        score = 3;
    } else if (moves > 6 && moves <= 10) {
        $ratingStars.eq(2).removeClass('fa-star').addClass('fa-star-o');
        score = 2;
    } else if (moves > 10) {
        $ratingStars.eq(1).removeClass('fa-star').addClass('fa-star-o');
        score = 1;
    }

    return { score };

};


//  Click event function to search for matched cards and modify them
const clickCard = () => {
    // Search the ul for cards that do not contain match or open classes
    $deck.find('.card:not(".match, .open")').bind('click', function() {
        clicks++;
        clicks == 1 ? gameTimer() : '';
        // only allow 2 cards with the class .show to be visible at once
        if ($(".show").length > 1) { return true; };
        let $this = $(this),
            card = $this.find('i').prop('class');
        // Check if the player has clicked the same card
        if ($this.hasClass('open')) { return false; };
        // Add classes open and show to the clicked card and push to array
        $this.addClass('open show');
        openedCards.push(card);
        if (openedCards.length > 1) {
            if (card === openedCards[0]) {
                // call the found match function to check for matches
                foundMatch();
            } else {
                // call the notMatch function if no match is found
                notMatch();
            }

            openedCards = [];
            moves++;
            rating(moves);
            $moveNum.html(moves);
        }


        if (match === 8) {
            rating(moves);
            let score = rating(moves).score;
            setTimeout(function() {

            });
        }
    });
};


const foundMatch = () => {
    $deck.find('.open').addClass('match');
    setTimeout(function() {
        $deck.find('.match').removeClass('open show');
    }, 800);
    match++;
    if (match === 8) {
        gameOver();
    }
};


const notMatch = () => {
    $deck.find('.open').addClass('notmatch');
    setTimeout(function() {
        $deck.find('.open').removeClass('.animated');
    }, 800);
    setTimeout(function() {
        $deck.find('.open').removeClass('open show notmatch');
    }, 800);
};


const gameOver = () => {
    clearInterval(timer);

    setTimeout(function() {
        $('#winModal').show();
    }, 500);
};


$('#winModal').hide();
// Allow user to close modal by clicking off modal box
$(".modal, .close").click(function() {
    $('#winModal').hide();
});


$('.modal-content').click(function(event) {
    event.stopPropagation();
});


// Function to reset the board
$restart.bind('click', () => {
    clicks = 0;
    clearInterval(timer);
    $('#winModal').hide();
    $deck.empty();
    boardInit();
});

boardInit();