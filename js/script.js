let countdown;
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const alertElement = document.getElementById('alert');

function displayTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    timerDisplay.textContent =
        `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function playBeep() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

function showAlert() {
    alertElement.classList.add('show');
    
    // Play 5 beeps
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            playBeep();
        }, i * 600);
    }
    
    // Hide alert after 5 seconds
    setTimeout(() => {
        alertElement.classList.remove('show');
    }, 5000);
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
        displayTime(seconds);
        if (seconds === 0) {
            clearInterval(countdown);
            showAlert();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(countdown);
    displayTime(0);
    alertElement.classList.remove('show');
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

// initialize display
resetTimer();
