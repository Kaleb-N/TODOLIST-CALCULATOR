var addBtn = document.querySelector('.addBtn')
var container = document.querySelector('.container')
var inputs = document.querySelector('.input')

addBtn.addEventListener('click', adds)
function adds(){
    if(inputs.value!== ''){
        let itemDiv = document.createElement('div')
        itemDiv.classList.add('list-item')


      let input = document.createElement('input')
    	input.value = inputs.value
      input.disabled = true
      input.classList.add('list-item-input')
      input.type = 'text'

     let editBtn = document.createElement('button')
     editBtn.classList.add('editBtn')
     editBtn.innerHTML = 'Edit' 

     let removeBtn = document.createElement('button')
     removeBtn.classList.add('removeBtn')
     removeBtn.innerHTML = 'Remove'
     container.appendChild(itemDiv)

     itemDiv.appendChild(input)
     itemDiv.appendChild(editBtn)
     itemDiv.appendChild(removeBtn)
      inputs.value = ''

      editBtn.addEventListener(
        'click', () =>{
          input.disabled = false
        })

      removeBtn.addEventListener(
        'click', () =>{
          container.removeChild(itemDiv)
        })
    }
}

window.addEventListener('keydown', (e) => {
  if (e.which == 13) {
    adds();
  }
})

var add = function(calculate){
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  document.getElementById("calculate").innerHTML= parseInt(num1) + parseInt(num2);
}
var subtraction = function(calculate){
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  document.getElementById("calculate").innerHTML= parseInt(num1) - parseInt(num2);
}
var multiply = function(calculate){
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  document.getElementById("calculate").innerHTML= parseInt(num1) * parseInt(num2);
}
var divide = function(calculate){
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  document.getElementById("calculate").innerHTML= parseInt(num1) / parseInt(num2);
}

