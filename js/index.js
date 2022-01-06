$(".menu-icon").click(function (e) {
    e.preventDefault();
    $(".menu-responsive").toggleClass("menu-active");
})

$(".drop-menu").click(function (e) {
    e.preventDefault();
    $(this).next(".sub-menu").toggle("menu-active");
})