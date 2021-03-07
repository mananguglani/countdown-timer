const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const birthday = "14 March 2021";

function countdown() {
    const birthDate = new Date(birthday);
    const currentDate = new Date();

    totalSeconds = (birthDate - currentDate) / 1000; // will get time left in miliseconds (converted to seconds)

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysElement.innerHTML = days;
    hoursElement.innerHTML = formatTime(hours);
    minutesElement.innerHTML = formatTime(minutes);
    secondsElement.innerHTML =  formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown(); // initial call

setInterval(countdown, 1000);