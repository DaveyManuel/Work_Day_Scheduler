

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

//dynamically add data attr to save buttons
// $("#saveBtn9").attr("data-number", 9);
// $("#saveBtn10").data("number", 10);

//$("#userInput9").val(localStorage.getItem("userInput9"));
// $("#userInput10").val(localStorage.getItem("userInput10"));
// $("#userInput11").val(localStorage.getItem("userInput11"));
// $("#userInput12").val(localStorage.getItem("userInput12"));


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


//Created variables for the data attribute of each textarea. Then I created 'if, then' statements to set class dependent on if the data number was less than, equal, or greater than the current hour of the day.  

//dyanmically grab textarea and put in for if else statements. Loop through using for loop


$(".textInput").each(function() {

    let x = $(this).attr("data-number")
    console.log(x)

    if (x<currentHour) {
        $(this).addClass("past")
    } else if (x===currentHour){
        $(this).addClass("present")
        $(this).removeClass("future")
        $(this).removeClass("past")
    } else {
        $(this).addClass("future")
    }

})













// let userInput9 = $("#userInput9").data("number")

// if (userInput9<currentHour) {
    
//     $("#userInput9").addClass("past")
// } else if (userInput9===currentHour){

//     $("#userInput9").addClass("present")

// } else {

//     $("#userInput9").addClass("future")
// }

// let userInput10 = $("#userInput10").data("number")

// if (userInput10<currentHour) {
    
//     $("#userInput10").addClass("past")
// } else if (userInput10===currentHour){

//     $("#userInput10").addClass("present")

// } else {

//     $("#userInput10").addClass("future")
// }

// let userInput11 = $("#userInput11").data("number")

// if (userInput11<currentHour) {
    
//     $("#userInput11").addClass("past")
// } else if (userInput11===currentHour){

//     $("#userInput11").addClass("present")

// } else {

//     $("#userInput11").addClass("future")
// }

// let userInput12 = $("#userInput12").data("number")

// if (userInput12<currentHour) {
    
//     $("#userInput12").addClass("past")
// } else if (userInput12===currentHour){

//     $("#userInput12").addClass("present")

// } else {

//     $("#userInput12").addClass("future")
// }

// let userInput13 = $("#userInput13").data("number")

// if (userInput13<currentHour) {
    
//     $("#userInput13").addClass("past")
// } else if (userInput13===currentHour){

//     $("#userInput13").addClass("present")

// } else {

//     $("#userInput13").addClass("future")
// }

// let userInput14 = $("#userInput14").data("number")

// if (userInput14<currentHour) {
    
//     $("#userInput14").addClass("past")
// } else if (userInput14===currentHour){

//     $("#userInput14").addClass("present")

// } else {

//     $("#userInput14").addClass("future")
// }

// let userInput15 = $("#userInput15").data("number")

// if (userInput15<currentHour) {
    
//     $("#userInput15").addClass("past")
// } else if (userInput15===currentHour){

//     $("#userInput15").addClass("present")

// } else {

//     $("#userInput15").addClass("future")
// }

// let userInput16 = $("#userInput16").data("number")

// if (userInput16<currentHour) {
    
//     $("#userInput16").addClass("past")
// } else if (userInput16===currentHour){

//     $("#userInput16").addClass("present")

// } else {

//     $("#userInput16").addClass("future")
// }

// let userInput17 = $("#userInput17").data("number")

// if (userInput17<currentHour) {
    
//     $("#userInput17").addClass("past")
// } else if (userInput17===currentHour){

//     $("#userInput17").addClass("present")

// } else {

//     $("#userInput17").addClass("future")
// }





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

    



//add save button
//localStorage functionality for save button

});




