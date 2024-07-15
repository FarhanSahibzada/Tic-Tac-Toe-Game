"use strict";
// variables
let ee = document.getElementById("ee");
let mess = document.getElementById("mess");
let game = document.getElementById("game");
let btn = document.querySelectorAll(".game-item");
let play = document.getElementById("p");
let restart = document.querySelector(".restart");
let win = document.getElementById("win");
let count = 0;
let w1 = 0;
let l1 = 0;
let d1 = 0;
let arr = [];
let winn = document.getElementById("jeet")
let losss = document.getElementById("har")
let droww = document.getElementById("barabr")
let flag = false;  // track game ended or not
// array pattern

let pattern = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
];
// Functions

 btn.forEach((e) => {
     e.onclick = () => {
         if (!flag && e.innerHTML == "") {
             e.innerHTML = `<i class="fa-solid fa-xmark" style="color: #B197FC; font-size: 120px;"></i>`;
             e.disabled = true;
             count++;
             if (checkwin()) return; // If a win is detected, stop further actions
             setTimeout(function () {
                 let emotybtn = Array.from(btn).filter(button => button.innerHTML == "");
                 if (emotybtn.length > 0) {
                     count++;
                     let num = Math.floor(Math.random() * emotybtn.length);
                     let move = emotybtn[num];
                     move.disabled = true;
                     move.innerHTML = `<i class="fa-regular fa-circle" style="color: #b3cacb; font-size: 70px"></i>`;
                     checkwin();
                 }
             }, 600);
         }
     };
 });

//gamedrow function
function gamedrow() {
    flag = true;
    win.innerHTML = `<i class="fa-solid fa-scale-balanced" style="color: #FFD43B; font-size:90px"></i>`;
    mess.innerHTML = "Game is Draw !"
    game.style.display = "none";
    restart.style.display = "inline-block";
    d1++;
    sessionStorage.setItem("dddd", d1);
    droww.innerHTML = sessionStorage.getItem("dddd");
}

// winnercheck function
 function checkwin() {
     for (let i of pattern) {
         let [a, b, c] = i;
         let btna = btn[a - 1].innerHTML;
         let btnb = btn[b - 1].innerHTML;
         let btnc = btn[c - 1].innerHTML;
         if (btna !== "" && btnb !== "" && btnc !== "") {
             if (btna == btnb && btnb == btnc) {
                setTimeout(function () {
                    plays(btna);    
                },400)
                 return true; // Return true if a win is detected
             }
         }
     }
     if (count == 9) {
         gamedrow();
         return true; // Return true if the game is a draw
     }
     return false; // Return false if no win or draw is detected
 }



function plays(winner) {
    flag = true;
    if (winner.includes("fa-xmark")) {
        win.innerHTML = winner;
        w1++;
        mess.innerHTML = "Congratluations You Win!!";
        sessionStorage.setItem("winnn", w1);
        winn.innerHTML = sessionStorage.getItem("winnn");
    } else if (winner.includes("fa-circle")) {
        win.innerHTML = winner;
        mess.innerHTML = "Sorry You Lose !!";
        l1++;
        sessionStorage.setItem("losss", l1);
        losss.innerHTML = sessionStorage.getItem("losss");
    }
    game.style.display = "none";
    restart.style.display = "inline-block";
}

play.addEventListener("click", () => {
    restart.style.display = "none";
    game.style.display = "block";
    arr = [];
    flag = false;
    count = 0;
    for (let i of btn) {
        i.innerHTML = "";
        i.disabled = false;
    }
});

