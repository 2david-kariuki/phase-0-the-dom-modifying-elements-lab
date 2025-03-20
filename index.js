// index.js


const mainElement = document.querySelector("main#main");
if (mainElement) {
  mainElement.remove();
}


const newHeader = document.createElement("h1");

newHeader.id = "victory";
newHeader.innerHTML = "YourName is the champion"; 
document.body.append(newHeader);

newHeader.style.fontSize = "24px";
newHeader.style.margin = "20px";
