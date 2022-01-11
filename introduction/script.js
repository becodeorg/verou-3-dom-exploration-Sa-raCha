//Display the document title in the console
console.log(document.title);
//Change the document title to Modifying the DOM
document.title = "Modifying the DOM";
console.log(document.title);
//Change the background color of the body to hot pink (#FF69B4). If that worked, try with a random color as an extra challenge.
document.body.style.backgroundColor = "#FF69B4";

function randomBackgroundColor() {
    return `rgb(
        ${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)})`;
}
document.body.style.backgroundColor = randomBackgroundColor();
//Using the children method and a for ... of loop, display every children elements of the second child element of your document (display all children elements of the <body>)
const Children = document.body.children;
for(let item of Children){
console.log(item)}