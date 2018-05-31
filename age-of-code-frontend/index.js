document.addEventListener('DOMContentLoaded', function () {

  //ACTION GET
  fetch('http://localhost:3000/api/v1/actions')
  .then(response => response.json())
  .then(jsondata => jsondata.forEach( actionObj => {createActions(actionObj)} ))
  //

  var buttonsForAi = [];
  var difficultyForAi = [0,1500,1100,1000,900,700,500,400,300,250,200];
  //ACTION OBJECT PARSER
  function createActions(actionObj){
    let button = document.createElement("BUTTON")
    button.setAttribute("class", "action")

    button.setAttribute("class", "action actionButton")
    button.setAttribute("id", `skill${actionObj.id}`)
    button.innerHTML = `<div class="actionBar">${actionObj.name}<img class="lock" src="lock-icon.png"></div>`


    buttons.appendChild(button)

    let skill = document.getElementById(`skill${actionObj.id}`)
    skill.addEventListener("click",() => skillLogic(val, skill, actionObj.value, actionObj.cooldown))
    skill.addEventListener("click",() => postToScreen(actionObj.name))
    buttonsForAi.push(skill);
  }
  //

  //USER GET
  fetch('http://localhost:3000/api/v1/users')
  .then(response => response.json())
  .then(jsondata => jsondata.forEach( userObj => {createUsers(userObj)} ))
  //

  //USER OJECT PARSER
  function createUsers(userObj){
    // let user = userObj.name
    // let experience = userObj.experience
    // let userName = document.createElement("DIV")
    // userName.setAttribute("id", "username")
    // userName.innerHTML = `<u>User:</u> ${user}` + "<br />" + `<u>Experience:</u> ${experience}`
    // mainContainer.prepend(userName)
  }
  //

  // ADD BUTTONS TO MIDDLE COLUMN
    const middleButtons = document.getElementById("button-container-column")
    let playButton = document.createElement("BUTTON")
    playButton.setAttribute("class", "middleButton")
    playButton.innerHTML = "P" + "<br />" + "L" + "<br />" + "A" + "<br />" + "Y"
    let shopButton = document.createElement("BUTTON")
    shopButton.setAttribute("class", "middleButton")
    shopButton.innerHTML = "S" + "<br />" + "H" + "<br />" + "O" + "<br />" + "P"

    middleButtons.append(playButton)
    middleButtons.innerHTML += "<br />" + "<br />"
    middleButtons.append(shopButton)
  //

  const mainContainer = document.getElementById("main-container");
  const userWindow = document.getElementById("user-window");
  const userName = document.getElementById("user-name");
  const userData = document.getElementById("user-data");
  const actionsContainer = document.getElementById("actions-container");
  const actionsList = document.getElementById("actions-list");
  const compScreen = document.getElementById("compScreen")
  const compSection = document.getElementById("computer")
  const levelsofCode = {1: 100, 2: 200, 3: 300, 4: 400, 5: 500, 6: 600, 7: 700, 8: 800, 9: 900, 10: 1000}

  let val = document.getElementById('val')

  function postToScreen(buttonName){
    var val = document.getElementById("val");
    if (buttonName === "Git Push"){
      val.innerHTML = "> Pushing..." + "<br />" + "> Counting objects: 78, done." + "<br />" + "> remote: Resolving deltas: 100% (1/1), completed with 1 local object." + "<br />" + "> To github.com:BESTCODEREVAR/Age-Of-Code.git" + "<br />"
    }

    if (buttonName === "Add Stylesheet"){
      val.innerHTML = "> Creating stylesheet.css..." + "<br />"
    }

    if (buttonName === "Read Stack Overflow"){
      val.innerHTML = "> Navigating to stackoverflow.com..." + "<br />"
    }

    if (buttonName === "Write Code"){
      val.innerHTML = "> Writing amazing code to index.html..." + "<br />"
    }

    if (buttonName === "Build Function"){
      val.innerHTML = "> bestFunctionEver(){" + "<br />" + "> console.log('HELLO WORLD')" + "<br />" + "> }" + "<br />"
    }
  }

  function skillLogic(mathTarget, button, value, cd){
    cooldown(button, cd)
    doMath(mathTarget, value)
    clicky(cd)
    statusBar(value);
  }

  function doMath(target, value){
    target.innerHTML = parseInt(target.innerHTML) + value
  }

  function statusBar(value, goalValue) {
    goalValue = 100 || goalValue;
    var elem = document.getElementById("myBar");
    var width = parseInt(elem.innerHTML);
    if (width < 100) {
      width += value;
      if (width >= 100) {
        width = 100
      }
      elem.style.width = `${width / goalValue * 100}%`;
      elem.innerHTML = `${width * goalValue / 100 } lines of working code!`;
      width = width / goalValue * 100;
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

<<<<<<< HEAD


  let ai = {interval:null}

  ai['begin'] = () => {
    interval = setInterval(function(){
      rand = buttonsForAi[Math.floor(Math.random() * buttonsForAi.length)]
      rand.click()
    }, difficultyForAi[buttonsForAi.length])
  }
  ai['stop'] = () => {
    clearInterval(interval)
  }


  document.getElementById('ai-test').addEventListener('click', function(){
    ai.begin()
  })

  document.getElementById('ai-stop').addEventListener('click', function(){
    ai.stop()
  })


  //ai Code
  //ai code will take in:
  //array of buttons
  //this will determine difficulty, buttons.length == difficulty

  //STATUS BAR
  function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width * 1 + "%";
      }
    }
  }
  move();

=======
>>>>>>> d07bc73b729b272239c56212dad03ce475da8b19
});
