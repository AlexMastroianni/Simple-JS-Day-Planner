var currentTime = document.querySelector("#currentDay");
var containertEl = $(".container");
var userInput =
  // starts and stops countdown
  function clockUpadte() {
    timer = setInterval(function () {
      currentTime.textContent = moment().format("MMMM Do YYYY, h:mm:ss a");
    }, 1000);
  };
clockUpadte();

// code to save user input into local store off save button

// code to check current time and add/remove style elements to user
