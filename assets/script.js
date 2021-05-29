var todayEl =document.getElementById("currentDay")
var m = moment()
var currentDay = m.format("dddd, MMMM Do YYYY")
var currentHR = m.format("h")
var userInput = $(".input")
console.log(currentHR)
var timeslots =[$("#time-9AM"), $("#time-10AM"), $("#time-11AM"), $("#time-12PM"), $("#time-1PM"),$("#time-2PM"),$("#time-3PM"),$("#time-4PM"),$("#time-5PM"),
]
todayEl.innerText=currentDay
// display saved local storage 
// console.log(localStorage)
// var storedEvent = localStorage.getItem("event")
// console.log(storedEvent)
// userInput.val(storedEvent) 




//compare var time slots to hours through index looping?
for(var t=0 ; t < timeslots.length ; t++){ 
    var slotHr = timeslots[t].attr("data-hour")
    hourCheck(slotHr,timeslots[t])
    
}
// give timeslot time correct time 
// compare hours of each timeslot
// change colo based on past,present,future
// var slotHr =timeslots.hour();

function hourCheck(slotHr,timeslot){
    console.log(slotHr, timeslot)

    if(parseInt(slotHr) > parseInt(currentHR)){
        timeslot.addClass("future")
}
else if (parseInt(slotHr) === parseInt(currentHR)) {
    timeslot.addClass("present")
}
else if (parseInt(slotHr) < parseInt(currentHR)){
    timeslot.addClass("past")
}
}



// save input to local storage
$(function(){
$(".saveBtn").on('click', function(){
var timeslot = $(this).attr("data-hour")
var inputArea =$("textarea[data-hour="+timeslot+"]")
console.log(inputArea)
var inputText = inputArea.val();
var inputTime = inputArea.attr("data-hour");
localStorage.setItem("time-"+ inputTime, inputText);

console.log(localStorage)
})
for (var i=9; i< 17; i++){
  var inputText = localStorage.getItem("time-"+ i)
  var inputArea = $("textarea[data-hour="+i+"]")
  inputArea.val(inputText)

}
})