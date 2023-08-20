const hourHand = document.getElementById("hourHand");
const minuteHand = document.getElementById("minuteHand");
const secondHand = document.getElementById("secondHand");
const timeDisplay = document.getElementById("timeDisplay");
const showTimeBtn = document.getElementById("showTimeBtn");

function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours * 30) + (0.5 * minutes);
    const minuteDeg = (minutes * 6) + (0.1 * seconds);
    const secondDeg = seconds * 6;

    hourHand.style.transform = `rotate(${hourDeg + 90}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg + 90}deg)`;
    secondHand.style.transform = `rotate(${secondDeg + 90}deg)`;

    timeDisplay.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

showTimeBtn.addEventListener("click", () => {
    updateClock();
    timeDisplay.style.opacity = 1;
    setTimeout(() => {
        timeDisplay.style.opacity = 0;
    }, 2000); // Display time for 2 seconds
});

updateClock();
setInterval(updateClock, 1000); // Update every second
