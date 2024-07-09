var email=document.getElementById("email")
var password=document.getElementById("password")
var btn = document.querySelector(".btn");
var form = document.querySelector("form");
var login_warning=document.querySelector(".login-warning");
form.addEventListener("submit", function(e) {
    e.preventDefault();
});
var allUsers=[]
if (localStorage.getItem("Users")!==null){
    allUsers=JSON.parse(localStorage.getItem("Users"))
}
console.log(allUsers);
function loginCheck(){
    var validateUSer=null
    for(i=0;i<allUsers.length;i++){
        if(email.value===allUsers[i].email && password.value===allUsers[i].password){
            validateUSer=allUsers[i].name
        }
    }
    if(validateUSer){
        localStorage.setItem("UserName",JSON.stringify(validateUSer))
        window.location="./home.html"
    }
    else{
        console.log(false)
        login_warning.classList.remove("d-none")
    }
}
btn.addEventListener("click",loginCheck)