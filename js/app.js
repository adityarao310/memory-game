// Create a list that holds all of your cards
var card1 = "fa-diamond";
var card2 = "fa-paper-plane-o";
var card3 = "fa-bolt";
var card4 = "fa-cube";
var card5 = "fa-anchor";
var card6 = "fa-leaf";
var card7 = "fa-bicycle";
var card8 = "fa-bomb";
var listCards = [card1, card2, card3, card4, card5, card6, card7, card8,
    card1, card2, card3, card4, card5, card6, card7, card8
];

// Shuffle function to shuffle from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// function to insert 16 shuffled card classes after .deck class so
// <li class="card"> <i class="fa fa-diamond"></i></li>
var shuffleList = shuffle(listCards);
$.each(shuffleList, function(index, value) {
    var print;
    print = '<li class=\"card\"> <i class=\"fa ' + value + '\"></i></li>';
    $(".deck").append(print);
});

/*
 * set up the event listener for a card. If a card is clicked:
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

// click to show a card - method

var openList = [];
var matchList = [];
$(".card").click(function() {
    // reveal the card type and store it into empty list

    var cardOpen = $(this).toggleClass('open show').children();
    var cardType = cardOpen.children();
    openList.push(cardType);
    console.log(openList);




});
