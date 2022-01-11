if(localStorage.getItem("login") === "true"){
    $(".login-menu").empty();
    $(".login-menu").append(`<li>
    <a class="sign-out">sign out</a>
    <span class="user">${JSON.parse(localStorage.getItem("active-user")).username}</span>
    <img src="./assets/images/anonymous.png" alt="profile-image" class="img-fluid profile-image-top-right">
  </li>
  <li class="nav-item nav-item-last" data-id="0">
  <a
    class="nav-link active"
    aria-current="page"
    href="./basket.html"
  >
    <i class="fas fa-shopping-cart"></i>
  </a>
  <ul class="my-cart-list"></ul>
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
let baskets;
let username;
try{username = JSON.parse(localStorage.getItem("active-user")).username;}catch{}
try{baskets = JSON.parse(localStorage.getItem(username));}catch{baskets = []}
if (!baskets) baskets = [];

RefreshList();

$(".pricing-btn").click(function (e) {
    e.preventDefault();

    try{username = JSON.parse(localStorage.getItem("active-user")).username;}catch{}
    try{baskets = JSON.parse(localStorage.getItem(username));}catch{baskets = []}
    if (!baskets) baskets = [];

    let obj = {
        plan: $(this).prev().prev().prev().prev().text(),
        info: $(this).prev().text(),
        price: $(this).prev().prev().text()
    }

    baskets.push(obj);
    localStorage.setItem(username, JSON.stringify(baskets));

    RefreshList();
    
})

//refresh all comments
function RefreshList() {
    $(".my-cart-list").empty();
    baskets.forEach(element => {
        createNewItem(element);
    });
    $(".nav-item-last::after").html($(".my-cart-list").children().length)
}

function createNewItem(obj) {
    $(".my-cart-list").append(` <li>
    <h4>${obj.plan}</h4>
    <h6>${obj.info}</h6>
    <h2>${obj.price}</h2>
    <span class="close-x"></span>
  </li>`)
}

// let buyItems = document.querySelector("#buy-items");
// let navbar = document.querySelector("#navbar-header");
// let myShoppingCartList = document.querySelector(".my-cart-list");
// let addcartButton = document.querySelectorAll(".add-cart-button");

// let cards = readLocalStorage();
// if (!cards) cards = [];
// readAllItemCount();
// addNewElement();

// $(".pricing-btn").click(function (e) {
//     e.preventDefault();

//     let newCard = {
//         plan: "",
//         info: "",
//         price: ""
//     }
//     addNewElement();

// })

// function readLocalStorage() {
//     if (localStorage.getItem("login") === "false")
//         return JSON.parse(sessionStorage.getItem("Basket"));
//     else
//         return JSON.parse(localStorage.getItem(localStorage.getItem("login")));
// }
// function writeLocalStorage() {
//     if (localStorage.getItem("login") === "false")
//         sessionStorage.setItem("Basket", JSON.stringify(cards));
//     else
//         localStorage.setItem(localStorage.getItem("login"), JSON.stringify(cards));
// }

// function addNewElement() {
   
// }

// function readAllItemCount() {
//     cards = readLocalStorage();
//     if (cards !== null) $(".nav-item-last").attr("data-id", cards.length);
//     else { $(".nav-item-last").attr("data-id", "0") }
// }