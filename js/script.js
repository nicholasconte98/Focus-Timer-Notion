let countdown;
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const minutesInput = document.getElementById('minutes');

function displayTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    timerDisplay.textContent =
        `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs
            .toString()
            .padStart(2, '0')}`;
}

function startTimer() {
    const mins = parseInt(minutesInput.value, 10);
    if (isNaN(mins) || mins < 0) return;
    clearInterval(countdown);
    let seconds = mins * 60;
    displayTime(seconds);
    countdown = setInterval(() => {
        seconds--;
        if (seconds < 0) {
            clearInterval(countdown);
            return;
        }
        displayTime(seconds);
    }, 1000);
}

function resetTimer() {
    clearInterval(countdown);
    displayTime(0);
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

// initialize display
resetTimer();
