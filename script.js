$(document).ready(function () {
  
  

  $("#currentDay").text(moment().format('llll'));


  $('.saveBtn').on("click", function(e) {
    e.preventDefault()
    const timeFrame = this.id
    const userInput = document.getElementById("newDay" + timeFrame).value  
    var savedDay = JSON.parse(localStorage.getItem("newDay"));
    if (savedDay){
      savedDay [`${timeFrame}slot`] = userInput
      }else{
        savedDay = {          
        }
        savedDay [`${timeFrame}slot`] = userInput
        console.log(savedDay)
      }
      localStorage.setItem("newDay", JSON.stringify(savedDay));
    //renderLastRegister();

   console.log(userInput);
  });

  function renderLastRegister () {
    var savedDay = localStorage.getItem('newDay');
    $(".hour").val(savedDay)
    console.log(savedDay)
  }
  renderLastRegister();
  //Date().getHours()




});