const form = document.getElementById('form-submit')

form.addEventListener('submit', function(event){
  event.preventDefault()
  let input1 = document.getElementById('campoA')
  let input2 = document.getElementById('campoB')

  if(input2.valueAsNumber>input1.valueAsNumber) {
    alert('Seu formulário está correto')
  } else {
    alert('Corrija seu formulário')
  }
})