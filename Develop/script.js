// makes a timer display at the top of the page
var today ;
var currentDayEL = document.getElementById("currentDay");
var currentTime = setInterval(() => {
    today = moment();
    currentDayEL.textContent = today.format('MMMM Do YYYY, h:mm:ss a');
}, 1000)


// references the time sections in the html and adds them to an array
var sevenAM = document.getElementById("7am");
var eightAM = document.getElementById("8am");
var nineAM = document.getElementById("9am");
var tenAM = document.getElementById("10am");
var elevenAM = document.getElementById("11am");
var twelvePM = document.getElementById("12pm");
var onePM = document.getElementById("1pm");
var twoPM = document.getElementById("2pm");
var threePM = document.getElementById("3pm");
var fourPM = document.getElementById("4pm");
var fivePM = document.getElementById("5pm");
const timeOfDay = [sevenAM,eightAM,nineAM,tenAM,elevenAM,twelvePM,onePM,twoPM,threePM,fourPM,fivePM];

// adds elements and arrays for the class names of each element as they are created.
var listID =[];
var timeID =[];
var eventID =[];
var saveID =[];
var saveButtonID = [];
var formID = [];

var saveData =[];

// creates the elements and appends them into the proper areas it does this for each hour of the day
for(var i = 0; i<timeOfDay.length; i++){
    $(timeOfDay[i]).append('<ul class="row" id=list' + (i+7) + '></ul>');  
    // creates arrays that can be called later if needed. These arrays store the class names of each hour. 
    listID[i] = "#list" + (i+7);
    timeID[i] = "#time" + (i+7);
    eventID[i] = "#event" + (i+7);
    saveID[i] = "#save" + (i+7);
    saveButtonID[i] = "#saveButton" + (i+7);
    formID[i] = "#form" + (i+7);
    // creates an if statement to adjust the loop to print the right time based on if it before or after noon.
    $(listID[i]).append('<li class="col-2 " id=time' + (i+7) + '></li>');
    if((i+7) < 13){
        $(timeID[i]).text((i+7) + " am");
    } else {
        $(timeID[i]).text((i-5) + " pm");
    }
    $(listID[i]).append('<li class="col-8 form-floating mb-3 " id=event' + (i+7) + '></li>');
    $(eventID[i]).append('<input type="text" class="form-control" id=form' + (i+7) + '></input>');
    $(listID[i]).append('<li class="col-2 " id=save' + (i+7) + '></li>');
    $(saveID[i]).append('<button type="submit" class="btn btn-primary" id=saveButton' + (i+7) + '>Save</button>');
}
// creates a button click event that calls the id attribute of the button clicked it then uses that id to reference what form to find the value of and saves that information into local storage. it then calls a looper function to refresh the hour of the day and refresh the placeholder to call local storage.
$(".btn").click(function(event) {
    console.log(event);
    var id = $(event.target).attr("id");
    const a = "saveButton";
    var arrayPoint = id.replace(a, "");
    console.log(arrayPoint);
    arrayPoint = arrayPoint - 7;
    saveData[arrayPoint] = $(formID[arrayPoint]).val();
    console.log(saveData[arrayPoint]);
    localStorage.setItem("array", saveData);
    looper();
});

var currentHour = moment().format("H") - 7;
console.log(currentHour);
const looper = () => {
for (let i = 0; i < timeOfDay.length; i++) {
    // if else statement to change the background color according to the current time.
    if (i > currentHour) {
        // change background color of listID[i] to .future
        $(listID[i]).addClass("future");
    } else if (i === currentHour){
        // change background to .present
        $(listID[i]).addClass("present");
    } else {
        // change background to .past
        $(listID[i]).addClass("past");

    }
    // calls local storage to call the array item in local storage and split it back into an array and set the placeholder for each form to the proper element.
    let placeholder = localStorage.getItem("array");
    let placeholder1 = placeholder.split(",");
    console.log(placeholder1);
    $(formID[i]).val(placeholder1[i]);
}  }
// calls looper to set up the planner when the project first starts.
looper();