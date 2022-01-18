const _initTime = Date.now()

function getElapsedTime(){
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

function createColoredBox(e){
  console.log(e.target.classList[1])
  console.log(getElapsedTime())

  //Create a new <div> with a class .displayedsquare 
  const containerSection = document.querySelector(".displayedsquare-wrapper");
  const div = document.createElement("div");
  div.classList.add("displayedsquare");
  containerSection.append(div);

  //and the corresponding clicked color in the div above (.displayedsquare-wrapper)
  const color = e.target.classList[1];
  div.classList.add(color);

}

const actionsquares = document.querySelectorAll('.actionsquare')
for(let actionsquare of actionsquares){
  actionsquare.addEventListener('click', createColoredBox)
  actionsquare.addEventListener("click", clickForListItem);
}


//Create a new <li> in the log below to state when the action was done

const actionLog = document.querySelector("ul");
function clickForListItem(e) {
  let logListItem = document.createElement("li");

  const logColor = e.target.classList[1];
  const logTime = getElapsedTime();

  logListItem.appendChild(
    document.createTextNode(
      "[" + logTime + "] " + "Created a new " + logColor.toLowerCase() + " square"
    )
  );

  actionLog.appendChild(logListItem);
}





//Add an event listener on the document <body>, listening for the keypress event. (hint: have a look at this)
//. When the spacebar is hit randomly change the background color of the whole page
//. Log when the spacebar is used the same way you used for the generated squares.
//. When the l key is pressed the log gets deleted (erases the generated <li>s)
//. When the s key is pressed the squares get deleted (erases the generated squares)
//Create a system so that when a user clicks on a generated square an alert pops-up with the color of that square