// Linked html
$(document).ready(function () {
    
// Display current day
    const currentDay = $("#currentDay");
  
    const rightNow = dayjs().format("dddd, MMMM DD");
    currentDay.text(rightNow);

});