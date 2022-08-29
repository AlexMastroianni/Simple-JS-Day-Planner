var currentTime = document.querySelector("#currentDay");
var currentHour = moment().hour();

// starts and stops countdown
function clockUpdate() {
  timer = setInterval(function () {
    currentTime.textContent = moment().format("MMMM Do YYYY, h:mm:ss a");
  }, 1000);
}
clockUpdate();

$(".time-block").each(function () {
  var hour = $(this).attr("id");
  var userInput = localStorage.getItem(hour);
  var description = $(this).find(".description");
  description.val(userInput);
  if (hour < currentHour) {
    $(this).find(".description").addClass("past");
  } else if (hour == currentHour) {
    $(this).find(".description").addClass("present");
  } else {
    $(this).find(".description").addClass("future");
  }
});

$(".saveBtn").on("click", function () {
  var localKey = $(this).parent().attr("id");
  var value = $(this).parent().find(".description").val();
  localStorage.setItem(localKey, value);
});
