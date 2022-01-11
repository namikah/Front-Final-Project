
let users = [];
let profilePics = "./assets/image/anonymous.png";
let profilePicsName = "pic selected";

//choose for add profile picture
$(".upload-icon").click(function (e) {
    $(".upload-btn").click();
})

$(".register-button").click(function (e) {
    e.preventDefault();

    if (!checkInputIsTrue()) return;

    let obj = {
        name: $(".register-name").val(),
        surname: $(".register-surname").val(),
        username: $(".register-username").val(),
        password: $(".register-password").val(),
        image: profilePics
    }

    users = readLocalStorage();
    if (!users) users = [];

    if (isUserExist(users, obj)) {
        alert("Username already exist");
        return;
    }

    users.push(obj);

    writeLocalStorage(users);

    window.location.href = "./login.html";
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

//copy base64 to variable: 'profilpics'
$(".upload-btn").change(function (e) {
    const { files } = e.target;

    for (const file of files) {
        let fileReader = new FileReader();
        fileReader.onloadend = function (e) {
            const { result } = e.target;
            profilePics = result;
            profilePicsName = file.name;
            $(".upload-icon .upload-icon-span").text(profilePicsName + " selected");
        };
        fileReader.readAsDataURL(file);
    }
})

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
function checkInputIsTrue() {
    if ($(".register-name").val() === "") {
        $(".register-name").css("border-color", "rgb(255, 0, 0)");
    }
    else $(".register-name").css("border-color", "#ced4da");
    if ($(".register-surname").val() === "") {
        $(".register-surname").css("border-color", "rgb(255, 0, 0)");
    }
    else $(".register-surname").css("border-color", "#ced4da");
    if ($(".register-username").val() === "") {
        $(".register-username").css("border-color", "rgb(255, 0, 0)");
    }
    else $(".register-username").css("border-color", "#ced4da");
    if ($(".register-password").val() === "") {
        $(".register-password").css("border-color", "rgb(255, 0, 0)");
    }
    else $(".register-password").css("border-color", "#ced4da");
    
    if ($(".register-name").css("border-color") === "rgb(255, 0, 0)" ||
        $(".register-surname").css("border-color") === "rgb(255, 0, 0)" ||
        $(".register-username").css("border-color") === "rgb(255, 0, 0)" ||
        $(".register-password").css("border-color") === "rgb(255, 0, 0)")
        return false;
    else return true;
}