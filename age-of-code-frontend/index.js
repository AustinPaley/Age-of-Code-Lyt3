document.addEventListener('DOMContentLoaded', function () {
  const URL = `http://localhost:3000`;

  const mainContainer = document.getElementById("main-container");
  const userWindow = document.getElementById("user-window");
  const userName = document.getElementById("user-name");
  const userData = document.getElementById("user-data");
  const actionsContainer = document.getElementById("actions-container");
  const actionsList = document.getElementById("actions-list");

  

  let val = document.getElementById('val')

  let skill1 = document.getElementById('skill1')
  skill1.addEventListener("click",() => skillLogic(val, skill1, 1, 2000))
  let skill2 = document.getElementById('skill2')
  skill2.addEventListener("click",() => skillLogic(val, skill2, 3, 3000))
  let skill3 = document.getElementById('skill3')
  skill3.addEventListener("click",() => skillLogic(val, skill3, 4, 2000))
  let skill4 = document.getElementById('skill4')
  skill4.addEventListener("click",() => skillLogic(val, skill4, 25, 5000))
  let skill5 = document.getElementById('skill5')
  skill5.addEventListener("click",() => skillLogic(val, skill5, 30, 3000))


  function skillLogic(mathTarget, button, value, cd){
    cooldown(button, cd)
    doMath(mathTarget, value)
  }

  function doMath(target, value){
    target.innerHTML = parseInt(target.innerHTML) + value
  }

  function cooldown(button, cd){
    button.setAttribute("disabled",true)
    setTimeout(function(){
      button.removeAttribute("disabled")
    }, cd)
  }

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
