

$( document ).ready(function() {

const currentDay = moment().format('dddd, MMMM Do, YYYY');
const currentHour = moment().hours();
const saveBtn = $(".col-2")


console.log(currentHour)

$("#currentDay").text(currentDay);

saveBtn.addClass("saveBtn");
//add icon to saveBtn using .text?

$("#9AM").text("9AM").addClass("hour");
$("#10AM").text("10AM").addClass("hour");
$("#11AM").text("11AM").addClass("hour");
$("#12PM").text("12PM").addClass("hour");
$("#1PM").text("1PM").addClass("hour");
$("#2PM").text("2PM").addClass("hour");
$("#3PM").text("3PM").addClass("hour");
$("#4PM").text("4PM").addClass("hour");
$("#5PM").text("5PM").addClass("hour");



let userInput9 = $("#userInput9").data("number")

if (userInput9<currentHour) {
    
    $("#userInput9").addClass("past")
} else if (userInput9=currentHour){

    $("#userInput9").addClass("present")

} else {

    $("#userInput9").addClass("future")
}

let userInput10 = $("#userInput10").data("number")

if (userInput10<currentHour) {
    
    $("#userInput10").addClass("past")
} else if (userInput10=currentHour){

    $("#userInput10").addClass("present")

} else {

    $("#userInput10").addClass("future")
}

let userInput11 = $("#userInput11").data("number")

if (userInput11<currentHour) {
    
    $("#userInput11").addClass("past")
} else if (userInput11=currentHour){

    $("#userInput11").addClass("present")

} else {

    $("#userInput11").addClass("future")
}

let userInput12 = $("#userInput12").data("number")

if (userInput12<currentHour) {
    
    $("#userInput12").addClass("past")
} else if (userInput12=currentHour){

    $("#userInput12").addClass("present")

} else {

    $("#userInput12").addClass("future")
}

let userInput13 = $("#userInput13").data("number")

if (userInput13<currentHour) {
    
    $("#userInput13").addClass("past")
} else if (userInput13=currentHour){

    $("#userInput13").addClass("present")

} else {

    $("#userInput13").addClass("future")
}

let userInput14 = $("#userInput14").data("number")

if (userInput14<currentHour) {
    
    $("#userInput14").addClass("past")
} else if (userInput14=currentHour){

    $("#userInput14").addClass("present")

} else {

    $("#userInput14").addClass("future")
}

let userInput15 = $("#userInput15").data("number")

if (userInput15<currentHour) {
    
    $("#userInput15").addClass("past")
} else if (userInput15=currentHour){

    $("#userInput15").addClass("present")

} else {

    $("#userInput15").addClass("future")
}

let userInput16 = $("#userInput16").data("number")

if (userInput16<currentHour) {
    
    $("#userInput16").addClass("past")
} else if (userInput16=currentHour){

    $("#userInput16").addClass("present")

} else {

    $("#userInput16").addClass("future")
}

let userInput17 = $("#userInput17").data("number")

if (userInput17<currentHour) {
    
    $("#userInput17").addClass("past")
} else if (userInput17=currentHour){

    $("#userInput17").addClass("present")

} else {

    $("#userInput17").addClass("future")
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



 
// let r = timeBlockContainer.append(hour)
//r.after(pastTimeSlotDiv)
// timeBlockContainer.append(pastTimeSlotDiv)
// timeBlockContainer.append(presentTimeSlotDiv)
// timeBlockContainer.append(futureTimeSlotDiv)

    



//get style of divs to change with the hour
//add save button
//localStorage functionality for save button

















});




