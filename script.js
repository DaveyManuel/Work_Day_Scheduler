$( document ).ready(function() {

//Saved const variables 

const currentDay = moment().format('dddd, MMMM Do, YYYY');
const currentHour = moment().hours();
const currentTime = moment().format('h:mm a');
const saveBtnDiv = $(".col-2")
const saveBtn = $("button").addClass("saveBtn")
const saveBtnIcon = $("<i>").addClass("fas fa-save saveBtn");

//Set current day and current time to header

$("#currentDay").text(currentDay);
$("#currentTime").text(currentTime);

//setInterval(change text every minute)

//Add saveBtn class to Save Button, add icon to button

saveBtnDiv.addClass("saveBtn");
saveBtn.append(saveBtnIcon);

//Dynamically added hours to first column divs and added hour class

$("#9AM").text("9AM").addClass("hour");
$("#10AM").text("10AM").addClass("hour");
$("#11AM").text("11AM").addClass("hour");
$("#12PM").text("12PM").addClass("hour");
$("#1PM").text("1PM").addClass("hour");
$("#2PM").text("2PM").addClass("hour");
$("#3PM").text("3PM").addClass("hour");
$("#4PM").text("4PM").addClass("hour");
$("#5PM").text("5PM").addClass("hour");

//Below I used localStorage.getItem to get the value for each textarea and created a unique key for each hour

$("#userInput9").val(localStorage.getItem('hour9'));
$("#userInput10").val(localStorage.getItem('hour10'));
$("#userInput11").val(localStorage.getItem('hour11'));
$("#userInput12").val(localStorage.getItem('hour12'));
$("#userInput13").val(localStorage.getItem('hour13'));
$("#userInput14").val(localStorage.getItem('hour14'));
$("#userInput15").val(localStorage.getItem('hour15'));
$("#userInput16").val(localStorage.getItem('hour16'));
$("#userInput17").val(localStorage.getItem('hour17'));


//Functionality for Save Button

$(".saveBtn").on("click", function(){
 
    localStorage.setItem('hour9',$("#userInput9").val());
    localStorage.setItem('hour10',$("#userInput10").val());
    localStorage.setItem('hour11',$("#userInput11").val());
    localStorage.setItem('hour12',$("#userInput12").val());
    localStorage.setItem('hour13',$("#userInput13").val());
    localStorage.setItem('hour14',$("#userInput14").val());
    localStorage.setItem('hour15',$("#userInput15").val());
    localStorage.setItem('hour16',$("#userInput16").val());
    localStorage.setItem('hour17',$("#userInput17").val());

})

//Created variable for the data attribute of each textarea. Then I created 'if', 'else' statements to set class based on if the data attribute is less than, equal to, or greater than the currentHour variable.

$(".textInput").each(function() {

    let x = $(this).attr("data-number")

    if (x<currentHour) {
        $(this).addClass("past")
    } else if (x===currentHour){
        $(this).addClass("present")
    } else {
        $(this).addClass("future")
    }

})

});
