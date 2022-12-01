// Global variables
var randomNumber1;
var randomNumber2;

// Player 1
function getRandom1() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    var randomImageSource = 'images/dice' + randomNumber1 + '.png';

    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute('src', randomImageSource);

    return randomNumber1;
}

// Player 2
function getRandom2() {
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomImageSource2 = 'images/dice' + randomNumber2 + '.png';

    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute('src', randomImageSource2);

    return randomNumber2;
}

// Get references to the #btn element
var rollBtn = document.querySelector('#btn');

// Input random
function rollDice() {
    var randomRoll1 = getRandom1();
    var randomRoll2 = getRandom2();

     // Match winning/loosing message
     if (randomRoll1 > randomRoll2) {
        document.querySelector('h1').innerHTML = '🏆Player1 wins!'
    } else if (randomRoll1 < randomRoll2) {
        document.querySelector('h1').innerHTML = ' Player2 wins!🏆'
    } else {
        document.querySelector('h1').innerHTML = "It's a draw!"
    }

    var firstDie = document.querySelectorAll('img')[0];
    var secondDie = document.querySelectorAll('img')[1];

    firstDie.value = randomRoll1;
    secondDie.value = randomRoll2;

}

// Add event listener to shuffle dice
rollBtn.addEventListener('click', rollDice);