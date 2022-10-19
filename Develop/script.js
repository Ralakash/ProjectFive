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

for(var i = 0; i<timeOfDay.length; i++){
    $(timeOfDay[i]).append('<ul class="row" id=list' + (i+7) + '></ul>');   
    listID[i] = "#list" + (i+7);
    timeID[i] = "#time" + (i+7);
    eventID[i] = "#event" + (i+7);
    saveID[i] = "#save" + (i+7);
    saveButtonID[i] = "#saveButton" + (i+7);
    formID[i] = "#form" + (i+7);
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
// for(var i = 0; i<saveButtonID.length; i++){
// $(saveButtonID[i]).click( () => {
//     saveData[i] = $(formID[i]).val();
//     console.log(saveData[i]);
// });
// }
$(".btn").click(() => {
    debugger;
    var id = $(this).attr("id");
    const a = "saveButton";
    var arrayPoint = id.replace(a, "");
    console.log(arrayPoint);
    arrayPoint = arrayPoint - 7;
    saveData[arrayPoint] = $(formID[arrayPoint]).val;
    console.log(saveData[arrayPoint]);
})
