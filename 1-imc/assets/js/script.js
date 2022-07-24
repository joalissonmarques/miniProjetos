import { calcImc } from "./imc.js";

const buttonImc = document.getElementById('buttonImc');
const btnChangeTheme = document.querySelector('#change-theme');
const altura = document.getElementById('altura');

altura.addEventListener('keypress', (e) => {
  mascaraAltura(e.target.value)
});
buttonImc.addEventListener("click", calcImc);
btnChangeTheme.addEventListener("change", changeThemeMode);

/* Troca de tema */
function changeModeTheme() {
  document.body.classList.toggle('dark')
}
/* LocalStorage */
/* Pego no local se ele tem o toggle ou não */
function saveTheme(){
  const darkMode = localStorage.getItem('dark');
  if(darkMode){
    changeModeTheme();
  }
};
/* Executo a função do localStorage */
  saveTheme();

/* Evento no "botão" para executar a troca de tema. */
function changeThemeMode(){
  changeModeTheme();
  localStorage.removeItem('dark');

  if(document.body.classList.contains('dark')){
    localStorage.setItem('dark', 1);
  }
}

/* Tratamento para colocar a altura em replace */
const mascaraAltura = (valor) =>{
  valor = valor.replace(/^([0-9]{1})([0-9])/, '$1.$2');
  altura.value = valor //insere o valor
}


