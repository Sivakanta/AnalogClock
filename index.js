const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const dateEl = document.getElementById("date");
const weekdayEl = document.getElementById("weekday");

function updateClock(){
    const currentDate = new Date();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    const hourDeg = (hour/12) * 360;
    hourEl.style.transform= `rotate(${hourDeg}deg)`;
    const minuteDeg = (minute / 60) * 360 ;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
    const secondDeg = (second / 60) * 360;
    secondEl.style.transform = `rotate(${secondDeg}deg)`;

    

    const date = currentDate.getDate();
    
    dateEl.innerText=date;

    const weekday = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    let day=weekday[currentDate.getDay()];
    weekdayEl.innerText=day;

   

}
setInterval(updateClock,1000);