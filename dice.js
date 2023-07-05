let randomVal1, randomVal2, count = 0, counter1 = 0, counter2 = 0;
let player1, player2;

//getting player names and storing in the session.
if ((sessionStorage.player1 == null) && (sessionStorage.player2 == null)) {
    player1 = window.prompt("Enter Player1 Name : ");
    player2 = window.prompt("Enter Player2 Name : ");
    if (player1 == null && player2 == null) {
        sessionStorage.player1 = "player1";
        sessionStorage.player2 = "player2";
    }
    else {
        sessionStorage.player1 = player1;
        sessionStorage.player2 = player2;
    }
}

//setting player names
document.querySelector("#play1").textContent = sessionStorage.player1;
document.querySelector("#play2").textContent = sessionStorage.player2;

//chaning dice image and heading content.
function changeVal(turnNo) {

    if (turnNo === 0) {
        randomVal1 = Math.floor(Math.random() * 6) + 1;
        document.querySelector(".img1").src = "images/dice" + randomVal1 + ".png";
        document.querySelectorAll(".dice .btn")[0].value = `attempt [${(4-count)}]`;
        document.querySelectorAll(".dice .btn")[0].disabled = true;
        document.querySelectorAll(".dice .btn")[1].disabled = false;
        counter1 += randomVal1;

    }
    else if (turnNo === 1) {
        randomVal2 = Math.floor(Math.random() * 6) + 1;
        document.querySelector(".img2").src = "images/dice" + randomVal2 + ".png";
        document.querySelectorAll(".dice .btn")[1].value = `attempt [${(4-count)}]`;
        document.querySelectorAll(".dice .btn")[1].disabled = true;
        document.querySelectorAll(".dice .btn")[0].disabled = false;
        counter2 += randomVal2;
        count += 1;
        console.log("player1 score ",counter1," and player2 score ",counter2, " in attempt ", count);

    }

    //game winner calculation
    if (randomVal1 !== undefined && randomVal2 !== undefined) {
        let headText = document.querySelector("h1");
        if (randomVal1 > randomVal2) {
            headText.textContent = `🚩 ${sessionStorage.player1} Up! +${Math.abs(randomVal1 - randomVal2)}`;
        }
        else if (randomVal2 > randomVal1) {
            headText.textContent = `${sessionStorage.player2} Up! +${Math.abs(randomVal1 - randomVal2)}🚩`;
        }
        else {
            headText.textContent = "Tie Game!";
        }
        if (count === 5) {
            console.log("Overall score of player1 = ",counter1, " and player2 =", counter2);
            if (counter1 > counter2) {
                headText.textContent = `🚩 ${sessionStorage.player1} is the winner! with ${counter1 - counter2} point lead`;
            }
            else if (counter2 > counter1) {
                headText.textContent = `🚩 ${sessionStorage.player2} is the winner! with ${counter2 - counter1} point lead`;
            }
            else {
                headText.textContent = `🚩 Tie Game`;
            }
            counter1 = 0;
            counter2 = 0;
            count = 0;
        }

        randomVal1 = undefined;
        randomVal2 = undefined;

    }
}


