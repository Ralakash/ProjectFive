var today ;
var currentDayEL = document.querySelector("#currentDay");
var currentTime = setInterval(function(){
    today = moment();
    currentDayEL.textContent = today.format('MMMM Do YYYY, h:mm:ss a');
}, 1000)