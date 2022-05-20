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
    if (myName === null){
        myName = "";
    }
    localStorage.setItem("name",myName);
    myHeading.textContent = "ПОМОГИ МНЕ " + myName;
}
if(!localStorage.getItem("name")){
    setUserName();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "ПОМОГИ МНЕ " + storedName;
}
myButton.onclick = function() {
    setUserName();
}

const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'Это динамический список. Кликните в любем месте данной страницы чтобы создать новый пункт.';

document.body.appendChild(info);
document.body.appendChild(list);

list.onclick = function() {
  const listItem = document.createElement('li');
  const listContent = prompt('Что вы хотите добавить в данный список?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt('Введите содержимое списка.');
    this.textContent = listContent;
  }//На потом!!!
}