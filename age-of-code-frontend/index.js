document.addEventListener('DOMContentLoaded', function () {

  //ACTION GET
  fetch('http://localhost:3000/api/v1/actions')
  .then(response => response.json())
  .then(jsondata => jsondata.forEach( actionObj => {createActions(actionObj)} ))
  //


  //ACTION OBJECT PARSER
  function createActions(actionObj){
    console.log(actionObj)
    let button = document.createElement("BUTTON")
    button.setAttribute("class", "action")
    button.setAttribute("id", `skill${actionObj.id}`)
    button.innerHTML = actionObj.name
    buttons.appendChild(button)

    let skill = document.getElementById(`skill${actionObj.id}`)
    skill.addEventListener("click",() => skillLogic(val, skill, actionObj.value, actionObj.cooldown))
  }
  //

  //USER GET
  fetch('http://localhost:3000/api/v1/users')
  .then(response => response.json())
  .then(jsondata => jsondata.forEach( userObj => {createUsers(userObj)} ))
  //

  //USER OJECT PARSER
  function createUsers(userObj){
    console.log(userObj)
  }
  //

  const mainContainer = document.getElementById("main-container");
  const userWindow = document.getElementById("user-window");
  const userName = document.getElementById("user-name");
  const userData = document.getElementById("user-data");
  const actionsContainer = document.getElementById("actions-container");
  const actionsList = document.getElementById("actions-list");


  let val = document.getElementById('val')

  function skillLogic(mathTarget, button, value, cd){
    cooldown(button, cd)
    doMath(mathTarget, value)
  }

  function doMath(target, value){
    target.innerHTML = parseInt(target.innerHTML) + value
    var elem = document.getElementById("myBar");
    var width = parseInt(elem.innerHTML);
    if (width >= 100) {
      clearInterval(id);
    } else {
      width += value;
      elem.style.width = width + "%";
      elem.innerHTML = width * 1 + " lines of working code";
    }
  }

  function cooldown(button, cd){
    button.setAttribute("disabled",true)
    setTimeout(function(){
      button.removeAttribute("disabled")
    }, cd)
  }

});
