var currentTime = document.querySelector("#currentDay");

// starts and stops countdown
function clockUpadte() {
  timer = setInterval(function () {
    currentTime.textContent = moment().format("MMMM Do YYYY, h:mm:ss a");
  }, 1000);
}
clockUpadte();
