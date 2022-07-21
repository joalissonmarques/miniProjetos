import { calcImc } from "./imc.js";

const buttonImc = document.getElementById('buttonImc');
const btnChangeTheme = document.querySelector('#change-theme');

function changeModeTheme() {
  document.body.classList.toggle('dark')
}
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


buttonImc.addEventListener("click", calcImc);
btnChangeTheme.addEventListener("change", changeThemeMode);


/* 
btnChangeTheme.addEventListener("change", changeTheme);
buttonImc.addEventListener("click", calcImc); */
