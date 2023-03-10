// This wrapping helps to interact with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// in short this tells engine to load both html & css first.
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button.

  //Assign saveBtn click listener for user input and time stamp??
  $(".saveBtn").on("click", function () {

    //get nearby values.
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log(this);
    // check if user enters nothing on the description and tries to save empty schedule
    if (text === "") {
      alert("Please Enter Work Day Scheduler Description. You can't save empty schedule ")
    }
    else {
      //set items in local storage.
      localStorage.setItem(time, text);
    }
  })

  // TODO: Add code to apply the past, present, or future class to each time

  //  Added code to apply the past, present, or future class to each time
  function hourTracker() {
    //get current number of hour using moment js.
    var current_hour = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
      // parse the displayed hour from string into int values 
      var displayed_hour = parseInt($(this).attr("id").split("hour")[1]);

      // this section changes the negative values into postive values
      displayed_hour = displayed_hour * -1

      console.log(displayed_hour, current_hour)

      //check if we've moved past this time
      if (displayed_hour < current_hour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      }
      else if (displayed_hour === current_hour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })
  }
  // calling the function here
  hourTracker();
  // TODO: Add code to get any user input that was saved in localStorage 

  //load any saved data from LocalStorage - do this for each hour created.
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  // TODO: Add code to display the current date in the header of the page.

  //display current day & time into this format by using moment js
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

  // 
  $("#clearDay").on("click", function () {
    localStorage.clear();
    location.reload();
  })
});



