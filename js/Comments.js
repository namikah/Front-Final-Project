if(localStorage.getItem("login") === "true"){
    $(".name-email input").css("display","none");
    $(".name-email").append(`<h2>by, <span>${localStorage.getItem("active-user")}</span></h2>`);
 }

let arr = readLocalStorage();
if (!arr) arr = [];

if (arr.length > 0) {
    RefreshCommentList();
}

$(".send-btn a").click(function (e) {
    e.preventDefault(); 

    let obj = {
        name: $(".name-input").val(),
        email: $(".email-input").val(),
        comment: $("#your-comment").val(),
        date: new Date().toLocaleDateString("en-us", { year: 'numeric', month: 'short', day: 'numeric', time:'short' })
    }
    
    if(!$(".name-input").val()) obj.name ="Unknown";
    
    if(localStorage.getItem("login") === "true")
    {
        obj.name = localStorage.getItem("active-user");
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
}
//create new comment element
function createNewComment(obj){
    $(".comments").append(`<li class="d-flex justify-content-md-start align-items-start gap-3">
    <div class="profile-image">
      <img src="./assets/images/anonymous.png" alt="profile image" class="img-fluid"/>
    </div>
    <div class="context">
      <h4>${obj.name}</h4>
      <span>${new Date().toLocaleDateString("en-us", { year: 'numeric', month: 'short', day: 'numeric' })}</span>
      <p>${obj.comment}</p>
    </div>
    </li>`);
}
//read local storage and return array
function readLocalStorage() {
    return JSON.parse(localStorage.getItem(localStorage.getItem("comments")));
}
//write new array to local storage
function writeLocalStorage(arr) {
    localStorage.setItem(localStorage.getItem("comments"), JSON.stringify(arr));
}
//reset input value
function resetInputValue(){
    $(".name-input").val("");
    $(".email-input").val("");
    $("#your-comment").val("");
}