//time
const time = document.querySelector('.time');
const daysMonth = document.querySelector('.date');

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    setTimeout(showTime, 1000);
    showDate();
}
showTime();

function showDate() {
    const date = new Date();
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        //hour: 'numeric',
        //minute: 'numeric',
        //timeZone: 'UTC'
    };
    const currentDate = date.toLocaleDateString('ru-RU', options)
    daysMonth.textContent = currentDate;
}


