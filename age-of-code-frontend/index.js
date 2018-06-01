let permissions = []
let allButtons = [];
document.addEventListener('DOMContentLoaded', function () {
  // GLOBAL CONSTANTS
  const mainContainer = document.getElementById("main-container");
  const userWindow = document.getElementById("user-window");
  const userName = document.getElementById("user-name");
  const userData = document.getElementById("user-data");
  const actionsContainer = document.getElementById("actions-container");
  const actionsList = document.getElementById("actions-list");
  const compScreen = document.getElementById("compScreen")
  const compSection = document.getElementById("computer")
  const rightContainer = document.getElementById("main-container-right")
  const rightSection = document.querySelector("body > div > div:nth-child(4)")
  const shop = document.createElement("DIV")
  shop.setAttribute("class", "shop")
  shop.innerHTML = "<h2 class='shop'>Buy New Hacks</h2><br>"

  const difficultyContainer = document.createElement("DIV")
  difficultyContainer.setAttribute("class", "difficulty_selector")
  difficultyContainer.innerHTML = "<h2 class='difficultyh2'>Select Your Difficulty</h2><br><div class='difficultydiv'>Easy</div><div class='difficultydiv'>Medium</div><div class='difficultydiv'>Hard</div>"

//reset function   *******
  function aiReset(){
    document.getElementById('computerGoesHere').innerHTML = `<div id="aicomputer">
      <img id="comp" src="computerImg.png" />

      <div>

      </div>
      <div id="compScreen">


      <!-- <div id='user-data'></div> -->
        <h4>Completed Lines of Working Code</h4>
        <div id="aimyProgress" class="myProgress">
          <div id="aimyBar" class="myBar">0 lines of working code!</div>
        </div>
        <p id="aival">0</p>


      </div>
      <div id="computerButtons"></div>
    </div>`
  }
  aiReset()
//******************
  const difficulty = document.createElement('DIV')
  difficulty.setAttribute("class", "difficulty")
  difficulty.innerHTML = "<h2>Choose Your Difficulty</h2><br>"
  let experience = 0

  const difficulty_easy = document.createElement('DIV')
  difficulty_easy.setAttribute("class", "difficulty")
  difficulty_easy.innerHTML = "<h2>Difficulty: Easy</h2>"
  // rightContainer.appendChild(difficulty_easy)

  const difficulty_medium = document.createElement('DIV')
  difficulty_medium.setAttribute("class", "difficulty")
  difficulty_medium.innerHTML = "<h2>Difficulty: Medium</h2>"
  rightContainer.appendChild(difficulty_medium)

  const difficulty_Hard = document.createElement('DIV')
  difficulty_Hard.setAttribute("class", "difficulty")
  difficulty_Hard.innerHTML = "<h2>Difficulty: Hard</h2>"
  // rightContainer.appendChild(difficulty_hard)

  const difficulty_level = document.getElementsByClassName('difficulty')
  //

  //USER GET
  fetch('http://localhost:3000/api/v1/users')
  .then(response => response.json())
  .then(jsondata => jsondata.forEach( userObj => {createUsers(userObj)} ))
  //

  //USER OBJECT PARSER
  function createUsers(userObj){
    permissions.push(userObj.permissions)
    let user = userObj.name
    experience = userObj.experience
    let userName = document.createElement("DIV")
    userName.setAttribute("id", "username")
    userName.innerHTML = `<u>User:</u> ${user}` + "<br />" + `<u>Experience:</u> <p id="experience">${experience}</p>`
    mainContainer.append(userName)
  }

  //

  //ACTION GET
  fetch('http://localhost:3000/api/v1/actions')
  .then(response => response.json())
  .then(jsondata => jsondata.forEach( actionObj => {createActions(actionObj)} ))
  //

  //action or shop button maker
  //makes either action buttons on the user screen or makes buttons
  // on the shop screen
  function createActions(actionObj){
    allButtons.push(actionObj)
    //buttons are being added to the user
    let userPermissions = permissions[0]
    if (userPermissions.charAt(actionObj.id - 1) == 1){
      createButton(actionObj.name, actionObj.id, actionObj.value, actionObj.cooldown)
    }
    else{
      // adds the button to a "button div" to make it prettier
      let shopButton = document.createElement("div")
      shopButton.setAttribute("class", "buttcontainer")
      shopButton.innerHTML = `<p>${actionObj.name}</p>
                              <p class="price">${actionObj.price}</p>`
      shopButton.setAttribute("data-price", actionObj.price)
      shopButton.addEventListener("click", () => {shopHandler(actionObj.name, actionObj.id, actionObj.value, actionObj.cooldown)} )
      // add in
      //<p class="flavor">${actionObj.flavor}</p>
      //<p class="price">${actionObj.price}</p>

      shop.appendChild(shopButton)
    }

  }
  //

  // ADD BUTTONS TO MIDDLE COLUMN
    const middleButtons = document.getElementById("button-container-column")
    let playButton = document.createElement("BUTTON")
    playButton.setAttribute("class", "middleButton")
    playButton.setAttribute("id", "playButton")
    playButton.innerHTML = "P" + "<br />" + "L" + "<br />" + "A" + "<br />" + "Y"
    let shopButton = document.createElement("BUTTON")
    shopButton.setAttribute("class", "middleButton")
    shopButton.setAttribute("id", "shopButton")
    shopButton.innerHTML = "S" + "<br />" + "H" + "<br />" + "O" + "<br />" + "P"

    middleButtons.append(playButton)
    middleButtons.innerHTML += "<br />" + "<br />"
    middleButtons.append(shopButton)
  //

  let val = document.getElementById('val')

  //SHOP BUTTON FUNCTIONALITY

  document.addEventListener("click", e =>{
    if (e.target.id === "shopButton"){
      rightContainer.style.display = "none";
      shop.style.display = "block";
      difficultyContainer.style.display = "none";
      rightSection.appendChild(shop)

    }
  })
  //

  //PLAY BUTTON FUNCTIONALITY
  document.addEventListener("click", e =>{
    if (e.target.id === "playButton"){
      difficultyContainer.style.display = "block";
      shop.style.display="none";
      rightContainer.style.display="none";
      rightSection.appendChild(difficultyContainer)
    }
  })
  //
  //START CODING FUNCTIONALITY
  difficultyContainer.addEventListener("click", e =>{
    if (e.target.innerText === "Easy"){
      displayplay(3)
      rightContainer.appendChild(difficulty_easy)
    }
    if (e.target.innerText === "Medium"){
displayplay(5)
      rightContainer.appendChild(difficulty_medium)
    }
    if (e.target.innerText === "Hard"){
displayplay(7)
      rightContainer.appendChild(difficulty_Hard)
    }
  })

  function displayplay(num){
    let a = [0,0,0,100,0,300,0,500]
    aiReset()
    let aiButtons = document.getElementById('computerButtons')
    let curButtons = allButtons.slice(0,num)
    let aimyBar = document.getElementById('aimyBar')
    aimyBar.setAttribute('data-goal', `${a[num]}`)
    for (actionObj of curButtons){
      aiCreateButton(actionObj.name, actionObj.id, actionObj.value, actionObj.cooldown)
    }


    difficultyContainer.style.display = "none";
    shop.style.display="none";
    rightContainer.style.display="block";
    if (rightContainer.querySelector(".difficulty")){
      rightContainer.querySelector(".difficulty").remove()
    }
  }
  //

  function goalValue(difficulty_level){
    let experience_value = 0
    if (difficulty_level.length = 0){
      experience_value = 0
    }
    else if(difficulty_level.length != 0 && difficulty_level[0].innerText.includes("Easy")){
      experience_value = 100
    }
    else if(difficulty_level.length != 0 && difficulty_level[0].innerText.includes("Medium")){
      experience_value= 200
    }
    else if(difficulty_level.length != 0 && difficulty_level[0].innerText.includes("Hard")){
      experience_value= 300
    }
    return experience_value
  }

  const goalValueNow = goalValue(difficulty_level);
  statusBarElem = document.getElementById("myBar");
  statusBarElem.dataset.goalValue = goalValueNow;

});


function createButton(name, id, value, cd){
  let button = document.createElement("BUTTON")
  button.setAttribute("class", "action actionButton")
  button.setAttribute("id", `skill${id}`)
  button.innerHTML = `<div class="actionBar">${name}</div>`
  button.addEventListener("click",() => skillLogic(val, button, value, cd))
  button.addEventListener("click",() => postToScreen(name))
  buttons.appendChild(button)
}

function aiCreateButton(name, id, value, cd){
  let aiButtons = document.getElementById('computerButtons')
  let aiVal = document.getElementById('aival')
  let button = document.createElement("BUTTON")
  button.setAttribute("class", "action actionButton")
  button.setAttribute("id", `skill${id}`)
  button.innerHTML = `<div class="actionBar">${name}</div>`
  button.addEventListener("click",() => skillLogic(aiVal, button, value, cd, true))
  button.addEventListener("click",() => postToScreen(name,true))
  aiButtons.appendChild(button)

}


function skillLogic(mathTarget, button, value, cd, ai=false){
  cooldown(button, cd)
  doMath(mathTarget, value)
  clicky(cd)
  statusBar(value, ai);
}

function doMath(target, value){
  target.innerHTML = parseInt(target.innerHTML) + value
}

function statusBar(value, ai=false) {

  let bar = "myBar"
  if (ai){
    bar = "aimyBar"
  }
  debugger
  var elem = document.getElementById(bar);
  var goalValue = elem.dataset.goal
  var width = parseInt(elem.innerHTML) * 100 / goalValue;
  
  if (width < 100) {
    width += value * 100 / goalValue;
    if (width >= 100) {
      width = 100;
      elem.style.width = `${width}%`;
      elem.innerHTML = `${width * goalValue / 100} lines of working code!`;
      let myEndingScore = 100;
      setTimeout(() => {
        winOrLose(myEndingScore);
      }, 100);
    }
    elem.style.width = `${width}%`;
    elem.innerHTML = `${width * goalValue / 100} lines of working code!`;
  }
  debugger
}

function playBumpSound() {
  var bump = new Audio("https://flukeout.github.io/simple-sounds/sounds/bump.mp3"); // buffers automatically when created
  bump.play();
}
function playCoinSound() {
  var coin = new Audio("https://flukeout.github.io/simple-sounds/sounds/coin.mp3"); // buffers automatically when created
  coin.play();
}
function playDeadSound () {
  var dead = new Audio("https://flukeout.github.io/simple-sounds/sounds/dead.wav"); // buffers automatically when created
  dead.play();
}
function playJumpSound() {
  var jump = new Audio("https://flukeout.github.io/simple-sounds/sounds/jump.wav"); // buffers automatically when created
  jump.play();
}
function playPingSound() {
  var ping = new Audio("https://flukeout.github.io/simple-sounds/sounds/ping.mp3"); // buffers automatically when created
  ping.play();
}
function playSmashSound() {
  var smash = new Audio("https://flukeout.github.io/simple-sounds/sounds/smash.mp3"); // buffers automatically when created
  smash.play();
}

function winOrLose(myEndingScore, opponentScore=1) {
  if (myEndingScore > opponentScore) {
    var elem = document.getElementById("myBar");
    goalValueNow = parseInt(elem.dataset.goalValue);
    experience = parseInt(experience.innerText) + goalValueNow;
    document.getElementById('experience').innerHTML = `${experience}`
    fetch('http://localhost:3000/api/v1/users/1', {
      method: 'PATCH',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({name: "Default", experience: `${Newexperience}`})
    })
    alert("You win!");
  } else {
  }
}

function clicky(num) {
  var elem = event.currentTarget.querySelector(".actionBar")
  var width = 1;
  var id = setInterval(frame, (num/100));
  elem.setAttribute("style", "opacity:.7;");
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      elem.setAttribute("style", "opacity:1;");
      elem.style.width = '100%';
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}

function cooldown(button, cd){
  button.setAttribute("disabled",true)
  setTimeout(function(){
    button.removeAttribute("disabled")
  }, cd)
}

  function shopHandler(name, id, value, cd){
    let money = parseInt(experience.innerHTML)
    let price = event.currentTarget.dataset.price
    if (money >= price){
      experience.innerHTML = money - price
      event.currentTarget.parentNode.removeChild(event.currentTarget)
      createButton(name, id, value, cd)
        let allPermissions = document.getElementsByClassName('action actionButton')
        let permittedActions = [0,0,0,0,0,0,0,0,0,0,0]
        for (i=0; i<allPermissions.length; i++){
          if (allPermissions[i] && parseInt(allPermissions[i].id.slice(5)) > 0){
            permittedActions[parseInt(allPermissions[i].id.slice(5)) - 1] = 1
          }
        }
        let finalActions = permittedActions.join("")
        fetch('http://localhost:3000/api/v1/users/1', {
          method: 'PATCH',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({name: "Default", permissions: `${finalActions}`, experience: `${money - price}`})
        })
      }
    }


function postToScreen(buttonName,ai=false){
  var val = document.getElementById("val");
  if (ai){
    val = document.getElementById("aival");
  }
  if (buttonName === "Git Push"){
    val.innerHTML = "> Pushing..." + "<br />" + "> Counting objects: 78, done." + "<br />" + "> remote: Resolving deltas: 100% (1/1), completed with 1 local object." + "<br />" + "> To github.com:BESTCODEREVAR/Age-Of-Code.git" + "<br />"
  }

  else if (buttonName === "Add Stylesheet"){
    val.innerHTML = "> Creating stylesheet.css..." + "<br />"
  }

  else if (buttonName === "Read Stack Overflow"){
    val.innerHTML = "> Navigating to stackoverflow.com..." + "<br />"
  }

  else if (buttonName === "Write Code"){
    val.innerHTML = "> Writing amazing code to index.html..." + "<br />"
  }

  else if (buttonName === "Build Function"){
    val.innerHTML = "> bestFunctionEver(){" + "<br />" + "> console.log('HELLO WORLD')" + "<br />" + "> }" + "<br />"
  }

  else if (buttonName === "Build API"){
    val.innerHTML = "=> Booting Puma" + "<br />" + "=> Rails 5.2.0 application starting in development " + "<br />" + "=> Run `rails server -h` for more startup options" + "<br />" + "Puma starting in single mode..." + "<br />" + "* Version 3.11.4 (ruby 2.3.3-p222), codename: Honestly, who comes up with the Rails codenames - they're ridiculous."
  }

  else if (buttonName === "Build Recurion"){
    val.innerHTML = "> Is this recursion?" + "<br />" + "> Is this recurision? Is this recursion?" + "<br />" + "> Is this recursion? Is this recursion? Is this recursion?" + "<br />" + "> Is this recursion? Is this recursion? Is this recursion? Is this recursion?" + "<br />" + "> Is this recursion? Is this recursion? Is this recursion? Is this recursion? Is this..."
  }

  else if (buttonName === "Build For Loop"){
    val.innerHTML = "> for (i=0; i<totaltimeplayed; i++){" + "<br />" + "> console.log('[i] loops are so much more sensible than for..in loops, seriously.')" + "}"
  }

  else if (buttonName === "Hire Intern"){
    val.innerHTML = "> Opening Trello board" + "<br />" + "> Assigning all the work you don't want to a underqualified recent college graduate" + "<br />" + "> Not properly tracking intern's hours"
  }

  else if (buttonName === "Refactor Code"){
    val.innerHTML = "> Opening index.html" + "<br />" + "> Scanning for possible refactoring opportunities" + "<br />" + "> Convincing yourself that you'll do this later"
  }

  else if (buttonName === "Touch Typing"){
    val.innerHTML = "> Learning how to type more efficiently..."
  }

  else{
    val.innerHTML = "> Doing super kewl stuff!"
  }
}
