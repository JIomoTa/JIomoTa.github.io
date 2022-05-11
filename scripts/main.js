document.querySelector("h1").onclick = function() {
    alert("О черт! Не тыкай в меня!")
}
var myImage = document.querySelector("img");

myImage.onclick = function() {
    var mySrc = myImage.getAttribute("src");
    if(mySrc === "images/REimage.jpg") {
        myImage.setAttribute ("src","images/REimage2.png");   
    } else {
        myImage.setAttribute ("src","images/REimage.jpg");
    }
}

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    var myName = prompt("Пожалуйста введите ваше имя");
    localStorage.setItem("name",myName);
    myHeading.textContent = "ПОМОГИ МНЕ, " + myName;
}
if(!localStorage.getItem("name")){
    setUserName();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "ПОМОГИ МНЕ, " + storedName;
}
myButton.onclick = function() {
    setUserName();
}