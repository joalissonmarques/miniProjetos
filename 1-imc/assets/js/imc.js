const buttonImc = document.querySelector('#buttonImc');
const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');
const hiddens = document.querySelectorAll('.hidden-calc');

function calcImc() {
  let alt = altura.value;
  let pes = peso.value;
  

}

buttonImc.addEventListener('click', calcImc);