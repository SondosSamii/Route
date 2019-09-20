let navItem = document.getElementsByClassName("nav-item");

$(".navbar-nav li").click(function() {
    $(this).addClass("current");
    $(".navbar-nav li").not($(this)).removeClass("current");
});