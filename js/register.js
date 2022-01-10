
let users = [];

$(".register-button").click(function (e) {
    e.preventDefault();

    let obj = {
        name: $(".register-name").val(),
        surname: $(".register-surname").val(),
        username: $(".register-username").val(),
        password: $(".register-password").val()
    }


    users = readLocalStorage();
    if (!users) users = [];

    if (isUserExist(users, obj)) {
        alert("Username already exist");
        return;
    }

    users.push(obj);

    writeLocalStorage(users);

    window.location.href = "./index.html";
})

$(".user-register-enter .log-in").click(function (e) {
    e.preventDefault();
    window.location.href = "./login.html";
})

function readLocalStorage() {
    return JSON.parse(localStorage.getItem("Users"));
}
function writeLocalStorage(users) {
    localStorage.setItem("Users", JSON.stringify(users));
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