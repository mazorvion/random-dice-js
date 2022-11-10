var diceImages = ["images/dice1.png", "images/dice2.png", "images/dice3.png",
"images/dice4.png", "images/dice5.png", "images/dice6.png"]

var playerOneDice = Math.floor(Math.random() * 6);
var playerTwoDice = Math.floor(Math.random() * 6);

document.querySelector(".img1").setAttribute("src", diceImages[playerOneDice]);
document.querySelector(".img2").setAttribute("src", diceImages[playerTwoDice]);

if (playerOneDice > playerTwoDice){
    document.querySelector(".container h1").textContent = "🚩 Player 1 Wins";
}else if (playerOneDice < playerTwoDice){
    document.querySelector(".container h1").textContent = "Player 2 Wins 🚩";
}else{
   document.querySelector(".container h1").textContent = "it's a draw try again";
}
































