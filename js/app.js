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

// if refresh button is clicked at any time
var refresh = $('.restart');
refresh.click(function() {
    location.reload();
});

// initialise all variables
var modal = $('#myModal').hide();
var openList = [];
var matchList = [];
var startTime = 0;
var numberClicks = 0;
var starRating;

// if click happens, then do this
$('.card').click(function() {
    // start timer with 1 sec interval
    var runningTime = setInterval(function() {
        startTime += 1;
    }, 1000);

    // increase click counter, change clicks and star rating on top
    numberClicks++;
    $('.moves').html(numberClicks);
    if (numberClicks <= 22) {
        starRating = 3;
    } else if (numberClicks > 22 && numberClicks <= 28) {
        starRating = 2;
        $('.stars').children().first().remove();
    } else if (numberClicks > 29) {
        starRating = 1;
        $('.stars').children().first().remove();
    }

    // play of cards open, close and match
    var clicked = $(this);
    var cardOpen = clicked.toggleClass('open show').children();
    // push to open list
    openList.push(cardOpen);
    if (openList.length > 1) {
        a = openList[0].attr('class');
        b = openList[1].attr('class');
        if (a === b) {
            // open show class and add to matchlist. empty list again
            $(openList[0]).parent().removeClass('open show').addClass('match');
            $(openList[1]).parent().removeClass('open show').addClass('match');
            matchList.push(openList[0]);
            matchList.push(openList[1]);
            openList = [];
        } else {
            // revert to main class and empty list again, with .5 sec delay
            setTimeout(function() {
                $(openList[1]).parent().removeClass('open show');
                $(openList[0]).parent().removeClass('open show');
                openList = [];
            }, 500);
        }
    }
    if (matchList.length === 16) {
        clearInterval(runningTime);
        myModal.style.display = "block";
        // display time in modal
        var printTime = '<p>You took ' + startTime + ' seconds.</p>';
        $('.modal-content').append(printTime);

        // display star rating
        var printStar = '<p>You get ' + starRating + ' stars as rating.</p>';
        $('.modal-content').append(printStar);

        // start game again on button press
        $('.refreshButton').click(function() {
            location.reload();
        });

    }
});
