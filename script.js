

$( document ).ready(function() {

const currentDay = moment().format('dddd, MMMM Do, YYYY');
const currentHour = moment().hours();


console.log(currentHour)

const timeBlockContainer = $(".container");

$("#9AM").text("9AM").addClass("hour");
$("#10AM").text("10AM").addClass("hour");
$("#11AM").text("11AM").addClass("hour");
$("#12PM").text("12PM").addClass("hour");
$("#1PM").text("1PM").addClass("hour");
$("#2PM").text("2PM").addClass("hour");
$("#3PM").text("3PM").addClass("hour");
$("#4PM").text("4PM").addClass("hour");
$("#5PM").text("5PM").addClass("hour");



let x = $("#userInput9").data("number")

console.log(x);

if (x<currentHour) {
    
    $("#userInput9").addClass("past")
} else if (x=currentHour){

    $("#userInput9").addClass("present")

} else {

    $("#userInput9").addClass("future")
}



// $(".timeBlock").each(function(){

//     let dataHour = $(this).data("-number");

//     console.log(dataHour);

//     console.log($(".timeBlock"));
   
// });


// const pastTimeSlotDiv = $("<textarea>").addClass("past row");
// const presentTimeSlotDiv = $("<textarea>").addClass("present row");
// const futureTimeSlotDiv = $("<textarea>").addClass("future row");

// console.log(timeBlockContainer);

// console.log(timeSlotDiv);

// console.log(currentDay);

$("#currentDay").text(currentDay)

 
// let r = timeBlockContainer.append(hour)
//r.after(pastTimeSlotDiv)
// timeBlockContainer.append(pastTimeSlotDiv)
// timeBlockContainer.append(presentTimeSlotDiv)
// timeBlockContainer.append(futureTimeSlotDiv)

    



//get style of divs to change with the hour
//add save button
//localStorage functionality for save button

















});




