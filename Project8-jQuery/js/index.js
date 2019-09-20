//Home >> Open and Close Side Nav
$("#openNav").click(function() {
    $("#sideNav").css("width", "150px");
    $("#main-content").css("marginLeft", "150px");
})

$("#closeNav").click(function() {
    $("#sideNav").css("width", "0px");
    $("#main-content").css("marginLeft", "0px");
})

// -----------------------------------------------

//Details
$("#details h3").click(function() {
    let par = $(this).siblings();
    par.slideToggle(700);
    $("#details p").not(par).slideUp(700);
})

// -----------------------------------------------

//Duration
var daysElement = document.querySelector("#days");
var hoursElement = document.querySelector("#hours");
var minutesElement = document.querySelector("#minutes");
var secondsElement = document.querySelector("#seconds");
var containerElement = document.querySelector(".containerDate");
var endDate = "2019/11/22";
textContent = "";
console.log(endDate);

var myCountDown = new ysCountDown(endDate, function(remaining, finished) {

    if (finished) {
        containerElement.textContent = "Expired";
    }

    daysElement.textContent = remaining.totalDays;
    hoursElement.textContent = remaining.hours;
    minutesElement.textContent = remaining.minutes;
    secondsElement.textContent = remaining.seconds;

});

// -----------------------------------------------

//Contact
$("#textArea").keyup(function() {
    let value = $(this).val();
    if (value.length < 100 && value.length >= 0) {
        $("#remaining").html(100 - value.length);
    } else {
        $("#remaining").html("Your available characters finished");
    }
})