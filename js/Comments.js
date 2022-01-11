if (localStorage.getItem("login") === "true") {
    $(".name-email input").css("display", "none");
    $(".name-email").append(`<h2>by, <span>${JSON.parse(localStorage.getItem("active-user")).username}</span></h2>`);
}

let arr = readLocalStorage();
if (!arr) arr = [];

if (arr.length > 0) {
    RefreshCommentList();
}

$(".send-btn a").click(function (e) {
    e.preventDefault();

    if (!checkInputIsTrue()) return;

    let obj = {
        name: $(".name-input").val(),
        email: $(".email-input").val(),
        comment: $("#your-comment").val(),
        date: new Date().toLocaleDateString("en-us", { year: 'numeric', month: 'short', day: 'numeric', time: 'short' }),
        image: "./assets/images/anonymous.png"
    }

    if (!$(".name-input").val()) obj.name = "Unknown";

    if (localStorage.getItem("login") === "true") {
        obj.name = JSON.parse(localStorage.getItem("active-user")).username;
        obj.image = JSON.parse(localStorage.getItem("active-user")).image;
    }

    addCommentToLocal(obj);

    RefreshCommentList();

    resetInputValue();
})
//add comment to local storage
function addCommentToLocal(obj) {
    arr = readLocalStorage();
    if (!arr) arr = [];
    arr.push(obj);
    writeLocalStorage(arr);
}
//refresh all comments
function RefreshCommentList() {
    $(".comments").empty();
    arr = readLocalStorage();
    arr.forEach(element => {
        createNewComment(element);
    });
    $(".comment-count").html("Comments (" + $(".comments").children().length + ")")
}
//create new comment element
function createNewComment(obj) {
    $(".comments").append(`<li class="row">
    <div class="profile-image col-2">
      <img src="${obj.image}" alt="profile image" class="img-fluid comment-profile-pic"/>
    </div>
    <div class="context col-10">
      <h4>${obj.name}</h4>
      <span>${new Date().toLocaleDateString("en-us", { year: 'numeric', month: 'short', day: 'numeric' })}</span>
      <p>${obj.comment}</p>
    </div>
    </li>`);
}
//read local storage and return array
function readLocalStorage() {
    return JSON.parse(localStorage.getItem("comments"));
}
//write new array to local storage
function writeLocalStorage(arr) {
    localStorage.setItem("comments", JSON.stringify(arr));
}
//reset input value
function resetInputValue() {
    $(".name-input").val("");
    $(".email-input").val("");
    $("#your-comment").val("");
}
function checkInputIsTrue() {
    if ($("#your-comment").val() === "") {
        $("#your-comment").css("border-color", "rgb(255, 0, 0)");
        return false;
    }
    else 
    {
        $("#your-comment").css("border-color", "rgb(255, 255, 255)");
        return true;
    }
}