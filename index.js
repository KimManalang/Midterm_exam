// alert('Hello world!');
//it will ramdom number i use *3 get  0 to 2 then  + 1 outside 3 to change the 0 and became 1 to 3
var randomPlayer1 = Math.floor(Math.random() * 3) + 1;
var randomPlayer2 = Math.floor(Math.random() * 3) + 1;
console.log(randomPlayer1)
console.log(randomPlayer2)

//random image code source of the image destination
var randomPicture1 = `images/rsp${randomPlayer1}.jpg`;
var randomPicture2 = `images/rsp${randomPlayer2}.jpg`;


// image location using dom get element by class
var picture1 = document.querySelectorAll('img')[0];
var picture2 = document.querySelectorAll('img')[1];

//dom for image injection to the random img source
picture1.setAttribute('src', randomPicture1);
picture2.setAttribute('src', randomPicture2);

//Adding image var names
var r = 'images/rsp1.jpg'; // r is rock
var s = 'images/rsp2.jpg'; // s is scissor
var p = 'images/rsp3.jpg'; // p is paper

//conditional statement for the winner
// PLAYER 1 WIN ROCK
if (randomPicture1 === r && randomPicture2 === s) {
    document.querySelector('h1').textContent = "ROCK WINS!";
    document.querySelector('.p1').textContent = "🥇 PLAYER 1 WINS!";
    document.querySelector('.p2').textContent = "🙅🏼‍♀️ PLAYER 2";
    // PLAYER 2 WIN ROCK
} else if (randomPicture1 === s && randomPicture2 === r) {
    document.querySelector('h1').textContent = "ROCK WINS!";
    document.querySelector('.p1').textContent = "🙅🏼‍♀️ PLAYER 1";
    document.querySelector('.p2').textContent = "🥇 PLAYER 2  WINS!";
    // SAME ROCK TRY AGAIN
} else if (randomPicture1 === r && randomPicture2 === r) {
    document.querySelector('h1').textContent = "TRY AGAIN!";


    // PLAYER 1 WIN SCISSOR
} else if (randomPicture1 === s && randomPicture2 === p) {
    document.querySelector('h1').textContent = "SCISSOR WINS!";
    document.querySelector('.p1').textContent = "🥇 PLAYER 1 WINS!";
    document.querySelector('.p2').textContent = "🙅🏼‍♀️ PLAYER 2";
    // PLAYER 2 WIN SCISSOR
} else if (randomPicture1 === p && randomPicture2 === s) {
    document.querySelector('h1').textContent = "SCISSOR WINS!";
    document.querySelector('.p1').textContent = "🙅🏼‍♀️ PLAYER 1";
    document.querySelector('.p2').textContent = "🥇 PLAYER 2  WINS!";
    // SAME SCISSOR TRY AGAIN
} else if (randomPicture1 === s && randomPicture2 === s) {
    document.querySelector('h1').textContent = "TRY AGAIN!";


    // PLAYER 1 WIN PAPER
} else if (randomPicture1 === p && randomPicture2 === r) {
    document.querySelector('h1').textContent = "PAPER WINS!";
    document.querySelector('.p1').textContent = "🥇 PLAYER 1 WINS!";
    document.querySelector('.p2').textContent = "🙅🏼‍♀️ PLAYER 2";
    // PLAYER 2 WIN PAPER
} else if (randomPicture1 === r && randomPicture2 === p) {
    document.querySelector('h1').textContent = "PAPER WINS!";
    document.querySelector('.p1').textContent = "🙅🏼‍♀️ PLAYER 1";
    document.querySelector('.p2').textContent = "🥇 PLAYER 2  WINS!";
    // SAME PAPER TRY AGAIN
} else if (randomPicture1 === p && randomPicture2 === p) {
    document.querySelector('h1').textContent = "TRY AGAIN!";
}