const selected = document.querySelectorAll(".important");
for( var i = 0 ; i < selected.length ; i ++){ 
    selected[i].setAttribute("title", "this is an important item");
    console.log(selected[i]);
}


const img = document.querySelectorAll("img");
for( var i = 0 ; i < img.length ; i ++){
    if(img[i].className != "important"){
    img[i].style.display="none";
    }
}

const paragraphs = document.querySelectorAll("p");
for (let i=0; i<paragraphs.length; i++) {
    if  (paragraphs[i].hasAttribute("class")) {
        console.log(paragraphs[i].innerHTML + " " + paragraphs[i].className);
    } 
    else {
        console.log(paragraphs[i].innerHTML);               
        var randomColor = Math.floor(Math.random()*16777215).toString(16); 
        paragraphs[i].style.color = "#" + randomColor;
    }
}

