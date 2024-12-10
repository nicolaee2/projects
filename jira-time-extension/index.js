const timer = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const logArea = document.getElementById("log-area");

let startTimestamp, currentTimestamp;
let isRunning = false;
let intervalId = null;

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
}

chrome.storage.local.get(["startTimestamp"], (result) => {
    if (result.startTimestamp) {
        startTimestamp = result.startTimestamp;
        startTimer();
    }
});

function saveState() {
    chrome.storage.local.set({ startTimestamp });
}

function startTimer() {
    intervalId = setInterval(() => {
        currentTimestamp = Date.now();
        const seconds = Math.floor((currentTimestamp - startTimestamp) / 1000);
        timer.innerText = formatTime(seconds);
    }, 1000);
}

function stopTimer() {
    clearInterval(intervalId);
    intervalId = null;

    // get resource from tab for example www.website.com/reource
    const url = window.location.href;

    // use URL object to get the resource
    const urlObject = new URL(url);
    const resource = urlObject.pathname;

    const log = document.createElement("div");
    log.innerText = `Worked for ${timer.innerText} on ${resource}`;
    logArea.appendChild(log);
    timer.innerText = formatTime(0);
    startTimestamp = null;
    chrome.storage.local.remove(["startTimestamp"]);
}

startBtn.addEventListener("click", () => {
    if (!isRunning) {
        startTimestamp = Date.now();
        saveState();
        isRunning = true;
        startTimer();
    }
});

stopBtn.addEventListener("click", () => {
    if (isRunning) {
        isRunning = false;
        stopTimer();
    }
});
