document.addEventListener('DOMContentLoaded', function () {

  //ACTION GET
  fetch('http://localhost:3000/api/v1/actions')
  .then(response => response.json())
  .then(jsondata => jsondata.forEach( actionObj => {createActions(actionObj)} ))
  //


  //ACTION OBJECT PARSER
  function createActions(actionObj){
    console.log(actionObj)
    let button = document.createElement("div")
    button.setAttribute("class", "action actionButton")
    button.setAttribute("id", `skill${actionObj.id}`)
    button.innerHTML = `<div class="actionBar">${actionObj.name}</div>`

    buttons.appendChild(button)

    let skill = document.getElementById(`skill${actionObj.id}`)
    skill.addEventListener("click",() => skillLogic(val, skill, actionObj.value, actionObj.cooldown))
    skill.addEventListener("click",() => postToScreen(actionObj.name))
  }
  //

  //USER GET
  fetch('http://localhost:3000/api/v1/users')
  .then(response => response.json())
  .then(jsondata => jsondata.forEach( userObj => {createUsers(userObj)} ))
  //

  //USER OJECT PARSER
  function createUsers(userObj){
    let user = userObj.name
    let experience = userObj.experience
    debugger
  }
  //

  const mainContainer = document.getElementById("main-container");
  const userWindow = document.getElementById("user-window");
  const userName = document.getElementById("user-name");
  const userData = document.getElementById("user-data");
  const actionsContainer = document.getElementById("actions-container");
  const actionsList = document.getElementById("actions-list");
  const compScreen = document.getElementById("compScreen")



  let val = document.getElementById('val')

  function postToScreen(buttonName){
    var objDiv = document.getElementById("compScreen");
    objDiv.scrollTop = objDiv.scrollHeight;
    if (buttonName === "Git Push"){
      compScreen.innerHTML += "> Pushing..." + "<br />" + "> Counting objects: 78, done." + "<br />" + "> remote: Resolving deltas: 100% (1/1), completed with 1 local object." + "<br />" + "> To github.com:BESTCODEREVAR/Age-Of-Code.git" + "<br />"
      objDiv.scrollTop = objDiv.scrollHeight;
    }

    if (buttonName === "Add Stylesheet"){
      compScreen.innerHTML += "> Creating stylesheet.css..." + "<br />"
      objDiv.scrollTop = objDiv.scrollHeight;
    }

    if (buttonName === "Read Stack Overflow"){
      compScreen.innerHTML += "> Navigating to stackoverflow.com..." + "<br />"
      objDiv.scrollTop = objDiv.scrollHeight;
    }

    if (buttonName === "Write Code"){
      compScreen.innerHTML += "> Writing amazing code to index.html..." + "<br />"
      objDiv.scrollTop = objDiv.scrollHeight;
    }

    if (buttonName === "Build Function"){
      compScreen.innerHTML += "> bestFunctionEver(){" + "<br />" + "> console.log('HELLO WORLD')" + "<br />" + "> }" + "<br />"
      objDiv.scrollTop = objDiv.scrollHeight;
    }
  }


  function skillLogic(mathTarget, button, value, cd){
    cooldown(button, cd)
    doMath(mathTarget, value)
    clicky(cd)
  }

  function doMath(target, value){
    target.innerHTML = parseInt(target.innerHTML) + value
  }

  function clicky(num) {
    debugger
    var elem = event.target
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



  //STATUS BAR
  function move() {
    var elem = document.getElementById("myBar");
    var width = 10;
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

});
