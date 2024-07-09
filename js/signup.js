// var form = document.querySelector("form");
// form.addEventListener("submit", function(e) {
//     e.preventDefault();
// });

// var userName = document.getElementById("name");
// var email = document.getElementById("email");
// var password = document.getElementById("password");
// var btn = document.querySelector(".btn");
// var name_warning = document.querySelector(".name-warning");
// var email_warning = document.querySelector(".email-warning");
// var password_warning = document.querySelector(".password-warning");
// var email_exist=document.querySelector(".email-exist")
// var allUsers = [];

// if (localStorage.getItem("Users") !== null) {
//     allUsers = JSON.parse(localStorage.getItem("Users"));
// }
// console.log(allUsers);
// function addUser() {
//     for(i=0;i<(JSON.parse(localStorage.getItem("Users"))).length;i++){
//         if(email.value===JSON.parse(localStorage.getItem("Users"))[i].email){
//             email_exist.classList.remove("d-none")
//         }
//         else{
//             email_exist.classList.add("d-none")
//             if (validateName() && validateEmail() && validatePassword()) {
//                 var user = {
//                     name: userName.value,
//                     email: email.value,
//                     password: password.value
//                 };
//                 allUsers.push(user);
//                 console.log(allUsers);
//                 localStorage.setItem("Users", JSON.stringify(allUsers));
//             }
//         }
//     }

// }

// btn.addEventListener("click", addUser);

// function validateName() {
//     var name_regex = /^[a-zA-Z]{3,}$/;
//     if (name_regex.test(userName.value)) {
//         name_warning.classList.add("d-none");
//         return true;
//     } else {
//         name_warning.classList.remove("d-none");
//         return false;
//     }
// }

// function validateEmail() {
//     var email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (email_regex.test(email.value)) {
//         email_warning.classList.add("d-none");
//         return true;
//     } else {
//         email_warning.classList.remove("d-none");
//         return false;
//     }
// }

// function validatePassword() {
//     var password_regex = /.{8,}$/;
//     if (password_regex.test(password.value)) {
//         password_warning.classList.add("d-none");
//         return true;
//     } else {
//         password_warning.classList.remove("d-none");
//         return false;
//     }
// }
// userName.addEventListener("input", validateName);
// email.addEventListener("input", validateEmail);
// password.addEventListener("input", validatePassword);

var form = document.querySelector("form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
});

var userName = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var btn = document.querySelector(".btn");
var name_warning = document.querySelector(".name-warning");
var email_warning = document.querySelector(".email-warning");
var password_warning = document.querySelector(".password-warning");
var email_exist = document.querySelector(".email-exist");
var success=document.querySelector(".success")
var allUsers = [];

if (localStorage.getItem("Users") !== null) {
    allUsers = JSON.parse(localStorage.getItem("Users"));
}
console.log(allUsers);

function addUser() {
    if (validateName() && validateEmail() && validatePassword() && !isEmailExist()) {
        var user = {
            name: userName.value,
            email: email.value,
            password: password.value
        };
        allUsers.push(user);
        console.log(allUsers);
        localStorage.setItem("Users", JSON.stringify(allUsers));
        clearForm();
        success.classList.remove("d-none")
        window.location="./../index.html"
    }
}

function isEmailExist() {
    var emailExists = false;
    for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email === email.value) {
            emailExists = true;
            break;
        }
    }
    if (emailExists) {
        email_exist.classList.remove("d-none");
    } else {
        email_exist.classList.add("d-none");
    }
    return emailExists;
}

btn.addEventListener("click", addUser);

function validateName() {
    var name_regex = /^[a-zA-Z ]{3,}$/;
    if (name_regex.test(userName.value)) {
        name_warning.classList.add("d-none");
        return true;
    } else {
        name_warning.classList.remove("d-none");
        return false;
    }
}

function validateEmail() {
    var email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email_regex.test(email.value)) {
        email_warning.classList.add("d-none");
        return true;
    } else {
        email_warning.classList.remove("d-none");
        return false;
    }
}

function validatePassword() {
    var password_regex = /.{8,}$/;
    if (password_regex.test(password.value)) {
        password_warning.classList.add("d-none");
        return true;
    } else {
        password_warning.classList.remove("d-none");
        return false;
    }
}

function clearForm() {
    userName.value = '';
    email.value = '';
    password.value = '';
}

userName.addEventListener("input", validateName);
email.addEventListener("input", function() {
    validateEmail();
    isEmailExist(email.value);
});
password.addEventListener("input", validatePassword);
