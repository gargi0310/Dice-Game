var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSourse = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSourse);

//for dice 2
var ranmNumer2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "dice" + ranmNumer2 + ".png";
var randomImageSourse2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSourse2);

if(randomNumber1 > ranmNumer2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}

else if(randomNumber1<ranmNumer2){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}

else{
    document.querySelector("h1").innerHTML = "Its a tie";
}