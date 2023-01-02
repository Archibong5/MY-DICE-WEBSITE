var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomDiceImageSource1 = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceImageSource1)


// FOR DICE2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png"

var randomDiceImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImageSource2)


if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "PLAYER1 WINS😏"
} else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "PLAYER2 WINS🥰"
} else{
  document.querySelector("h1").innerHTML = "DRAW🙃"
}
