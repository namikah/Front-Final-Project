$(".menu-icon").click(function (e) {
    e.preventDefault();
    $(".menu-responsive").toggleClass("menu-active");
})

$(".drop-menu").click(function (e) {
    e.preventDefault();
    $(this).next(".sub-menu").toggle();
})

navbarScrollEffect();

function navbarScrollEffect() {
    $(window).scroll(function (e) {
        e.preventDefault();
        if ($(this).scrollTop() < 80) {
            $(".navbar").css("transition", "0.3s all");
            $(".navbar").removeClass("active-scroll");
            $(".navbar").css("transform", "translateY(0)");
            $(".navbar").css("opacity", "1");
        }
        else if ($(this).scrollTop() > 80 && $(this).scrollTop() < 100) {
            $(".navbar").css("transition", "0s");
            $(".navbar").css("transform", "translateY(-100%)");
            $(".navbar").css("opacity", "0");
        }
        else if ($(this).scrollTop() > 100) {
            $(".navbar").css("transition", "1s all");
            $(".navbar").addClass("active-scroll");
            $(".navbar").css("transform", "translateY(0)");
            $(".navbar").css("opacity", "1");
        }
    });
}