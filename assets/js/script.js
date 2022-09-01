var currentTime = document.querySelector("#currentDay");
var currentHour = moment().hour();

// Updates seconds on timeclock
function clockUpdate() {
  timer = setInterval(function () {
    currentTime.textContent = moment().format("MMMM Do YYYY, h:mm:ss a");
  }, 1000);
}
clockUpdate();

// targets each timeblock class, var 'hour' targerts with ID being an hour by number, userInput grabs the text field info from local storage based on the ID
$(".time-block").each(function () {
  //grabs the id from the current timeblock
  var hour = $(this).attr("id");
  var userInput = localStorage.getItem(hour);
  var description = $(this).find(".description");
  // updates the text are with the data from local storage
  description.val(userInput);
  // checks what the current time is and adds and removes classes
  if (hour < currentHour) {
    $(this).find(".description").addClass("past");
  } else if (hour == currentHour) {
    $(this).find(".description").addClass("present");
  } else {
    $(this).find(".description").addClass("future");
  }
});

// save button adds the text area data to local storage using the current hour ID as the keyname
$(".saveBtn").on("click", function () {
  // parent being the timeblock class
  var localKey = $(this).parent().attr("id");
  var description = $(this).parent().find(".description").val();
  localStorage.setItem(localKey, description);
});

//
