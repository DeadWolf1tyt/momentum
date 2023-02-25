//time
const time = document.querySelector('.time');
const daysMonth = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const body = document.body;
const timeOfDay = getTimeOfDay();
let randomNum = getRandomNum();
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');


//----- Time -----//
function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    setTimeout(showTime, 1000);
    showDate();
    showGreeting();
    
}
showTime();

//----- Date -----//
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
    const currentDate = date.toLocaleDateString('en-En', options)
    daysMonth.textContent = currentDate;
}

//----- Greeting -----//
function showGreeting() {
  const 	greetingText = `Good ${timeOfDay}`;
  greeting.textContent = greetingText;
  
}

//----- Time of day -----//
function getTimeOfDay() {
  const date = new Date();
		const hours = date.getHours();
		if (hours >= 0 && hours < 6) {
		  return 'night';
		} else if (hours >= 6 && hours < 12) {
		  return 'morning';
		} else if (hours >= 12 && hours < 18) {
		  return 'afternoon';
		} else if (hours >= 18 && hours < 24) {
		  return 'evening';
		}
}


//-----  -----//


//----- Background random -----//
function getRandomNum() {
  return Math.ceil(Math.random() * 20);
  
}
console.log(randomNum);
function setBg() {
  let bgNum = String(randomNum).padStart(2, 0);
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/DeadWolf1tyt/momentumBackground/main/${timeOfDay}/${bgNum}.jpg`;
  img.onload = () => {
  		document.body.style.backgroundImage = `url(${img.src})`; 
  }; 
}
setBg();

//----- Slider -----//
function getSlideNext() {
  randomNum = randomNum !== 20 ? randomNum + 1 : 1;
  let bgNum = String(randomNum).padStart(2, 0);
  setBg();
  return randomNum;
}
slideNext.addEventListener('click', getSlideNext);

function getSlidePrev() {
  randomNum = randomNum !== 1 ? randomNum - 1 : 20;
  let bgNum = String(randomNum).padStart(2, 0);
  setBg();
  return randomNum;
}
slidePrev.addEventListener('click', getSlidePrev);
