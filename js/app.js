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

// on 1st click.. change class and push to open list
// on 2nd click.. change class, push to open list AND
// if openList length = 2, check for match via below >
//          if no match.. hold for 1 sec, change class back and empty openList
//          if match.. change class to match, add to matchlist and empty openList
var openList = [];
var matchList = [];
$('.card').click(function() {
    var clicked = $(this);
    if (openList.length < 2) {
        var cardOpen = clicked.toggleClass('open show').children();
        openList.push(cardOpen);
    } else if (openList.length === 2) {
        // check for match if ($(this).hasClass("lol"))
        a = openList[0].attr('class');
        b = openList[1].attr('class');
        if (a === b) {
            $(openList[0]).parent().toggleClass('match');
            $(openList[1]).parent().toggleClass('match');
            matchList.push(openList[0]);
            matchList.push(openList[1]);
            openList = [];
        } else {
            $(openList[0]).parent().removeClass('open show');
            $(openList[1]).parent().removeClass('open show');
            openList = [];
        }
    }

    if (matchList.length === 16) {
        alert("Game is done! You win");
    }
});




/*
var openList = [];
var matchList = [];
$(".card").click(function() {
    var clicked = $(this);
    if (openList.length < 2) {
        // store child of card class and push to openList
        if (!matchList.includes(clicked)) {
            var cardOpen = clicked.toggleClass('open show').children();
            openList.push(cardOpen);
        }
    } else if (openList.length === 2) {
        // check if the two stored things match
        if (openList[0] === openList[1]) {
            // add to matchList, change class to match, empty openList
            $(openList[0]).toggleClass('match');
            $(openList[1]).toggleClass('match');
            matchList.push(openList[0]);
            matchList.push(openList[1]);
            openList = [];
        } else {
            // remove open show after .5 secs and empty openlist
            setTimeout(function() {
                $(openList[0]).parent().removeClass('open show');
                $(openList[1]).parent().removeClass('open show');
                openList = [];
            }, 300);
        }

    } else if (matchList.length === 16) {
        alert("Game is done! You win");
    }
});
*/

/*
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
*/
