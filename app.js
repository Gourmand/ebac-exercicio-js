const form = document.getElementById('form-submit')
const message = document.getElementById('title')

form.addEventListener('submit', function(event){
  event.preventDefault()
  let input1 = document.getElementById('campoA')
  let input2 = document.getElementById('campoB')

  if(input2.valueAsNumber>input1.valueAsNumber) {
    message.innerHTML = 'Tudo certo!'
    message.setAttribute('class', 'correct');
  } else {
    message.innerHTML = 'Corrija seu formulário'
    message.setAttribute('class', 'error');
  }
})