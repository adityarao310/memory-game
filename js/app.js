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

// open = add child to array + change class to open show
// 1st click.. open. 2nd click.. open. 3rd click.. open.
// on 3rd click --> check if 1st two are equal
//    If equal --> change class to match, add to match, remove from array
//    if not equal (to first two) --> remove from array, change class to card
// When matchlist reaches 16 = everything unclickable + show new HTML
var openList = [];
var matchList = [];
$(".card").click(function() {
    // reveal the card type and store it into empty list
    var cardOpen = $(this).toggleClass('open show').children();
    openList.push(cardOpen);
    // console.log(openList);
    if (openList.length === 3) {
        if (openList[0] === openList[1]) {
            // change class to match
            $(openList[0]).toggleClass('match');
            $(openList[1]).toggleClass('match');
            // add to matchList array
            matchList.push(openList[0]);
            matchList.push(openList[1]);
            // remove from openList array
            openList.shift();
            openList.shift();
        } else if (openList[0] != openList[1]) {
            $(openList[0]).toggleClass('card');
            $(openList[1]).toggleClass('card');
            openList.shift();
            openList.shift();
        }
    }

    if (matchList.length === 16) {
        alert("Game is done! You win");
    }
});
