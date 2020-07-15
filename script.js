$(document).ready(function () {
  const newDay = document.getElementById("newDay");
  

  $("#currentDay").text(moment().format('llll'));


  $('.saveBtn').on("click", function() {
    const userInput = newDay.value;
    localStorage.setItem("newDay", "userInput");
    renderLastRegister();
    ale
   console.log(userInput);
  });

  function renderLastRegister () {
    var newDay = localStorage.getItem("userInput");

    if (!newDay) {
      return;
    }
    newDay.textContent = newDay;
  }





});