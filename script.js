 const daysE1 = document.getElementById("days");
const hoursE1 = document.getElementById("hours");
const minsE1 = document.getElementById("mins");
const secondsE1 = document.getElementById("seconds");

const christmas = "25 December 2021";

function countdown() {

    const christDate = new Date(christmas);
    const currDate = new Date();

    const Tseconds = (christDate - currDate) / 1000;
    console.log(Tseconds); 
    
    const days = Math.floor(Tseconds / 3600 / 24);
    const hours = Math.floor(Tseconds / 3600) % 24;
    const mins = Math.floor(Tseconds / 60) % 60;
    const seconds = Math.floor(Tseconds) % 60; 

    
    daysE1.innerHTML =  days;
    hoursE1.innerHTML = formatTime(hours);
    minsE1.innerHTML = formatTime(mins);
    secondsE1.innerHTML = formatTime(seconds);

}

function formatTime(time)
{
    return time < 10 ? `0${time}` : time;
}

//intial calls
countdown();

setInterval(countdown, 1000);

 