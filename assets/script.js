var todayEl =document.getElementById("currentDay")
var m = moment()
var currentDay = m.format("dddd, MMMM Do YYYY")
var currentHR = m.format("hA")
var hours = [9,10,11,12,1,2,3,4,5]
var hourIndex = 0
var userInput = $(".input")
console.log(currentHR)
var timeslots =[$("time-9AM"),$("time-10AM"),$("time-11AM"),$("time-12PM"),$("time-1PM"),$("time-2PM"),$("time-3PM"),$("time-4PM"),$("time-5PM"),
]
var timeslotInd = 0
todayEl.innerText=currentDay
// display saved local storage 
console.log(localStorage)
userInput = localStorage.getItem("event")




//compare var time slots to hours through index looping?
for(var t=0 ; t < timeslots.length ; t++){

// give timeslot time correct time 
// compare hours of each timeslot
// change colo based on past,present,future
// var slotHr =timeslots.hour();
function hourCheck(){
if(slotHr.isBefore(currentHR)){
    $(timeslot).addClass("future")
}
else if (slotHr === currentHR) {
    $(timeslot).addClass("present")
}
else if (slotHr.isAfter(currentHR)){
    $(timeslot).addClass("past")
}}


}

// save input to local storage
$(".saveBtn").on('click', function(event){
    event.stopPropagation();
    event.stopImmediatePropagation();
    var eventInputed = userInput.val()
localStorage.setItem("event",eventInputed )
console.log(localStorage)
})