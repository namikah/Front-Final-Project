if(localStorage.getItem("login") === "true"){
   $(".user-login-enter").empty();
   $(".user-login-enter").append(`<p>You are already registered</p>`);
}

$(".login-button").click(function (e) {
    e.preventDefault();

    let obj = {
        username: $(".register-username").val(),
        password: $(".register-password").val()
    }

    users = readLocalStorage();
    if (!users) {
        alert("Username not found");
        return;
    }

    if (!isUserExist(users, obj)) {
        alert("Username not found");
        return;
    }

    writeLocalStorage("active-user", obj.username);
    writeLocalStorage("login","true");

    window.location.href = "./index.html";
})

function readLocalStorage() {
    return JSON.parse(localStorage.getItem("Users"));
}
function writeLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function isUserExist(users, obj) {
    let counter = 0;
    users.forEach(element => {
        if (element.username === obj.username) {
            counter++;
        }
    });
    if (counter > 0) return true;
    else return false;
}