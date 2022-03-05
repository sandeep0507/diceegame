var randomNumber1 =Math.floor(Math.random()*6) + 1; // here takes the value from 1-6

var randomImage="dice" + randomNumber1 + ".png"; // here matches the number with dice1.png - dice6.png

var randomImageSrc= "images/" + randomImage;  // here takes from the src images/dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0];  // here selects the value from html with query

image1.setAttribute("src",randomImageSrc); //here set the attribiute according to the dice image


 /* for player 2 */
var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImageSrc2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSrc2);


/* changing the winner according to the dice */
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="🚩 Player 1 wins";
}
else if(randomNumber2>randomNumber1)
{
  document.querySelector("h1").innerHTML=" Player 2 wins 🚩";

}
else
{
  document.querySelector("h1").innerHTML="😎 Draw";
}
