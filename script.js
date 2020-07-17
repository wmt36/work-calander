$(document).ready(function () {
  
  

  $("#currentDay").text(moment().format('llll'));


  $('.saveBtn').on("click", function(e) {
    e.preventDefault()
    const timeFrame = $(this).attr("id");
    const value = $(this).siblings("textarea").val()
    localStorage.setItem(timeFrame, value);


   console.log(`key: ${timeFrame} value: ${value}`);
  });

  $("#newDay9").val(localStorage.getItem("9"));
  $("#newDay10").val(localStorage.getItem("10"));
  $("#newDay11").val(localStorage.getItem("11"));
  $("#newDay12").val(localStorage.getItem("12"));
  $("#newDay13").val(localStorage.getItem("13"));
  $("#newDay14").val(localStorage.getItem("14"));
  $("#newDay15").val(localStorage.getItem("15"));
  $("#newDay16").val(localStorage.getItem("16"));
  $("#newDay17").val(localStorage.getItem("17"));




});

