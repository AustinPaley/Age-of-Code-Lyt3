alert("hi")

//read stack overflow		1/2	0.5
// build for loop		3/3	1
// build function		4/2	2
// add stylesheet
// buuld classes
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
