let homeScore = 0;
let guestScore = 0;
let homeFouls = 0;
let guestFouls = 0;

const homeScoreElement = document.getElementById("home-score");
const guestScoreElement = document.getElementById("guest-score");
const homeFoulsElement = document.getElementById("home-fouls");
const guestFoulsElement = document.getElementById("guest-fouls");

function updateWinner() {
    homeScoreElement.classList.remove("winner");
    guestScoreElement.classList.remove("winner");
    if (homeScore > guestScore) {
        homeScoreElement.classList.add("winner");
    } else if (guestScore > homeScore) {
        guestScoreElement.classList.add("winner");
    }
}

function add(team, score) {
    if (team === "home") {
        homeScore += score;
        homeScoreElement.textContent = homeScore;
    } else {
        guestScore += score;
        guestScoreElement.textContent = guestScore;
    }
    updateWinner();
}

document.getElementById("home-1").addEventListener("click", function () {
    add("home", 1);
});

document.getElementById("home-2").addEventListener("click", function () {
    add("home", 2);
});

document.getElementById("home-3").addEventListener("click", function () {
    add("home", 3);
});

document.getElementById("guest-1").addEventListener("click", function () {
    add("guest", 1);
});

document.getElementById("guest-2").addEventListener("click", function () {
    add("guest", 2);
});

document.getElementById("guest-3").addEventListener("click", function () {
    add("guest", 3);
});

document.getElementById("reset").addEventListener("click", function () {
    homeScore = 0;
    guestScore = 0;
    homeFouls = 0;
    guestFouls = 0;
    homeScoreElement.textContent = homeScore;
    guestScoreElement.textContent = guestScore;
    homeFoulsElement.textContent = homeFouls;
    guestFoulsElement.textContent = guestFouls;
    updateWinner();
});

document.getElementById("home-foul").addEventListener("click", function () {
    homeFouls++;
    homeFoulsElement.textContent = homeFouls;
});

document.getElementById("guest-foul").addEventListener("click", function () {
    guestFouls++;
    guestFoulsElement.textContent = guestFouls;
});
