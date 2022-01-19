// logique du code
// lance un dé, chiffre aléatoire entre 1 et 6
// stocker le resutat dans une variable
// vérification si le chiffre est 1 la var = 0
// si event listner sur le bouton relancer alors on refait la meme
// event listener sur hold qui va stocker la var en cours dans la var joueur une fois hold passer au joueur 2

// new game remet tout a zéro

// ajouter des états actifs dans le css pour savoir c'est le tour de quel joueur

function roll(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min
    )
}

let scoreCurrentPlayer = 0;
let scoreGlobalPlayer1 = 0;
let scoreGlobalPlayer2 = 0;

let player1 = true;

// event listener sur le bouton roll
document.getElementById("roll").addEventListener("click", () => {

    var scoreCurrent = roll(1, 7);
    scoreCurrentPlayer = scoreCurrentPlayer + scoreCurrent;

    // pour gérer les différents résultats possible
    switch (scoreCurrent) {
        case 1:
            // change image
            document.getElementById("imgContainer").src="./img/one.png";
            scoreCurrentPlayer = 0;
            // set score to 0 and let player 2 play
            if(player1) {
                scoreGlobalPlayer1 = scoreGlobalPlayer1 + scoreCurrentPlayer;
                document.getElementById("globalPlayer1").innerHTML = `${scoreGlobalPlayer1}`;
                scoreCurrentPlayer = 0;
                document.getElementById("currentPlayer1").innerHTML = `${scoreCurrentPlayer}`;
                player1 = false;
                document.getElementById("name1").classList.remove("active");
                document.getElementById("name2").classList.add("active");
            } else {
                scoreGlobalPlayer2 = scoreGlobalPlayer2 + scoreCurrentPlayer;
                document.getElementById("globalPlayer2").innerHTML = `${scoreGlobalPlayer2}`;
                scoreCurrentPlayer = 0;
                document.getElementById("currentPlayer2").innerHTML = `${scoreCurrentPlayer}`;
                player1 = true;
                document.getElementById("name2").classList.remove("active");
                document.getElementById("name1").classList.add("active");
            }
            break;
        
        case 2:
            document.getElementById("imgContainer").src="./img/two.png";
            break;
        
        case 3:
            document.getElementById("imgContainer").src="./img/three.png";
            break;
        
        case 4:
            document.getElementById("imgContainer").src="./img/four.png";
            break;
            
        case 5:
            document.getElementById("imgContainer").src="./img/five.png";
            break;
            
        case 6:
            document.getElementById("imgContainer").src="./img/six.png";
            break;
    }
    if(player1) {
        document.getElementById("currentPlayer1").innerHTML = `${scoreCurrentPlayer}`;
    } else {
        document.getElementById("currentPlayer2").innerHTML = `${scoreCurrentPlayer}`;
    }
    
});

// gerer le bouton hold et le changement de joueur
document.getElementById("hold").addEventListener("click", () => {

    if(player1) {
        scoreGlobalPlayer1 = scoreGlobalPlayer1 + scoreCurrentPlayer;
        document.getElementById("globalPlayer1").innerHTML = `${scoreGlobalPlayer1}`;
        scoreCurrentPlayer = 0;
        document.getElementById("currentPlayer1").innerHTML = `${scoreCurrentPlayer}`;
        player1 = false;
        document.getElementById("name1").classList.remove("active");
        document.getElementById("name2").classList.add("active");
        if(scoreGlobalPlayer1 >= 100) {
            alert('Bien joué, la partie est terminée !');
            scoreGlobalPlayer2 = 0;
            scoreGlobalPlayer1 = 0;
            document.getElementById("globalPlayer2").innerHTML = `${scoreGlobalPlayer2}`;
            document.getElementById("globalPlayer1").innerHTML = `${scoreGlobalPlayer2}`;
        }
    } else {
        scoreGlobalPlayer2 = scoreGlobalPlayer2 + scoreCurrentPlayer;
        document.getElementById("globalPlayer2").innerHTML = `${scoreGlobalPlayer2}`;
        scoreCurrentPlayer = 0;
        document.getElementById("currentPlayer2").innerHTML = `${scoreCurrentPlayer}`;
        player1 = true;
        document.getElementById("name2").classList.remove("active");
        document.getElementById("name1").classList.add("active");
        if(scoreGlobalPlayer2 >= 100) {
            alert('Bien joué, la partie est terminée !');
            scoreGlobalPlayer2 = 0;
            scoreGlobalPlayer1 = 0;
            document.getElementById("globalPlayer2").innerHTML = `${scoreGlobalPlayer2}`;
            document.getElementById("globalPlayer1").innerHTML = `${scoreGlobalPlayer2}`;
        }
    }

});

document.getElementById("newGame").addEventListener("click", () => {
    location.reload();
});