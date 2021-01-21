

$( document ).ready(function() {

const currentDay = moment().format('dddd, MMMM Do, YYYY');
const timeBlockContainer = $(".container")
const timeSlotDiv = $("<div>").attr("id", "newDiv")

console.log(timeBlockContainer);

console.log(timeSlotDiv);

console.log(currentDay);

$("#currentDay").text(currentDay)

const timeSlotRow = timeBlockContainer.append(timeSlotDiv)

//timeSlotRow.addClass(".present")

















});




