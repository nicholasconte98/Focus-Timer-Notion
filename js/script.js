let countdown;
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');

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
    const hrs = parseInt(hoursInput.value, 10) || 0;
    const mins = parseInt(minutesInput.value, 10) || 0;
    const secs = parseInt(secondsInput.value, 10) || 0;
    if (hrs < 0 || mins < 0 || secs < 0) return;
    clearInterval(countdown);
    let seconds = hrs * 3600 + mins * 60 + secs;
    if (seconds === 0) return;
    displayTime(seconds);
    countdown = setInterval(() => {
        seconds--;
        if (seconds < 0) {
            clearInterval(countdown);
            return;
        }
        displayTime(seconds);
        if (seconds === 0) {
            alert('Time\'s up! Your focus session is complete.');
        }
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
