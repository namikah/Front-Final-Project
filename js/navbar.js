if(localStorage.getItem("login") === "true"){
    $(".login-menu").empty();
    $(".login-menu").append(`<li>
    <a class="sign-out">sign out</a>
    <span class="user">${JSON.parse(localStorage.getItem("active-user")).username}</span>
    <img src="./assets/images/anonymous.png" alt="profile-image" class="img-fluid profile-image-top-right">
  </li>`);
  $(".profile-image-top-right").attr("src",JSON.parse(localStorage.getItem("active-user")).image)
 }
 $(".sign-out").click(function(e){
    localStorage.setItem("login","false");
    localStorage.removeItem("active-user");
    window.location.href = "";
 })

//for responsive menu open
$(".menu-icon").click(function (e) {
    e.preventDefault();
    $(".menu-responsive").slideToggle(500);

})

//for sub menu open for responsive menu
$(".drop-menu").click(function (e) {
    e.preventDefault();
    $("ul .sub-menu").not($(this).next()).slideUp(500);
    $(this).next(".sub-menu").slideToggle(500);
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
            $(".navbar").css("box-shadow", "0 0px 0px 0 rgba(0, 0, 0, 0.00)");
            $(".navbar").css("background-color", "transparent");
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
            $(".navbar").css("box-shadow", "0 2px 28px 0 rgba(0, 0, 0, 0.2)");
            $(".navbar").css("background-color", "#fff");
        }
    });
}