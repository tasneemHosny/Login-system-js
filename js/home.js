var logout=document.querySelector(".btn")
var allUsers=[]
if (localStorage.getItem("Users")!==null){
    allUsers=JSON.parse(localStorage.getItem("Users"))
}
var welcome=document.querySelector(".welcome")
welcome.innerHTML=`Welcome ${JSON.parse(localStorage.getItem("UserName"))}`

logout.addEventListener("click",function(){
    console.log("logout")
    window.location= "./index.html";
})